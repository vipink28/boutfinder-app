const mongoose = require('mongoose');

const clubSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  clubPostcode: {
    type: String,
    required: true,
  },
  clubAddressLine1: {
    type: String,
    required: true,
  },
  clubAddressLine2: {
    type: String,
  },
  clubTownOrCity: {
    type: String,
    required: true,
  },
  clubState: {
    type: String,
    required: true,
  },
  mainClubContactName: {
    type: String,
    required: true,
  },
  clubPhone: {
    type: String,
    required: true,
  },
  clubWelfareOfficer: {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
  },
  clubMatchmaker: {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
  },
  logo: {
    type: String, // You can store the logo's URL or file path here
  },
});

module.exports = mongoose.model('Club', clubSchema);