import express from 'express';
import mongoose from 'mongoose';
import basicAuth from 'basic-auth';
import 'express-csv';
const config = require('../site.config');
const router = express.Router(); // eslint-disable-line new-cap
const Enquiry = mongoose.model('enquiry');

const auth = (req, res, next) => {
  const user = basicAuth(req);
  function unauthorized() {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.sendStatus(401);
  }

  if (!user || !user.name || !user.pass) {
    return unauthorized(res);
  }

  if (user.name === config.csvUsername && user.pass === config.csvPassword) {
    return next();
  }
  return unauthorized(res);
};

router.get('/csv', auth, (req, res) => {
  Enquiry.find()
    .then((enquiries) => {
      const csv = enquiries.map((enquiry) => ({
        firstName: enquiry.firstName,
        lastName: enquiry.lastName,
        email: enquiry.email,
        postcode: enquiry.postcode,
        receiveUpdates: enquiry.receiveUpdates,
        comment: enquiry.comment,
        ipAddress: enquiry.ipAddress,
        datetime: enquiry.datetime
      }));
      csv.unshift({
        firstName: 'First Name',
        lastName: 'Surname',
        email: 'Email',
        postcode: 'Postcode',
        receiveUpdates: 'Optin',
        comment: 'Comment',
        ipAddress: 'IP Address',
        datetime: 'Submission Time'
      });
      return res.csv(csv);
    });
});
router.post('/', (req, res) => {
  const payload = req.body;
  const promise = new Enquiry({
    firstName: payload.firstName,
    lastName: payload.lastName,
    email: payload.email,
    postcode: payload.postcode,
    receiveUpdates: payload.receiveUpdates,
    ipAddress: req.ip,
    comment: payload.comment
  }).save();
  promise.then(enquiry => {
    res.json(enquiry);
  }).catch((err) => {
    res.status(502).json({ error: err });
  });
});

module.exports = router;
