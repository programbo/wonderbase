import mongoose from 'mongoose';
import enquiry from './models/enquiry';

module.exports = (connectionString) => {
  mongoose.model('enquiry', enquiry);
  mongoose.connect(connectionString);
};
