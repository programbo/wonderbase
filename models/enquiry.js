const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Enquiry = new Schema({
  firstName: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  postcode: {
    type: Number,
    required: true
  },
  datetime: {
    type: Date,
    default: Date.now
  },
  ipAddress: {
    type: String,
    required: true
  },
  feedbackRequested: {
    type: Boolean,
    default: false
  },
  comment: String
});

module.exports = Enquiry;
