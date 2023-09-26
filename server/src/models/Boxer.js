const mongoose = require('mongoose');

const boxerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
    validate: {
      validator: function (date) {
        const today = new Date();
        const age = today.getFullYear() - date.getFullYear();
        return age >= 10 && age <= 40;
      },
      message: 'Boxer must be between 10 and 40 years old.',
    },
  },
  weight: {
    type: Number,
  },
  bouts: {
    won: {
      type: Number,
      default: 0,
    },
    lost: {
      type: Number,
      default: 0,
    },
    draw: {
      type: Number,
      default: 0,
    },
  },
  availability: {
    type: Boolean,
    default: true,
  },
  additionalInformation: {
    type: String,
  },
  club: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Club',
    required: true,
  },
});

module.exports = mongoose.model('Boxer', boxerSchema);