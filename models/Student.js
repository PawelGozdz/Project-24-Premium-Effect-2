const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const slug = require('slugs');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Student name required!'
  },
  slug: String,
  header: String,
  description: {
    type: String,
    trim: true
  },
  exam: Date,
  created: {
    type: Date,
    default: Date.now
  },
  photos: [String],
  instructor: {
    type: mongoose.Schema.ObjectId,
    // author będzie się odwoływał do 'User'
    ref: 'User',
    required: 'Instuctor name required',
    hours: Number,
    rate: {
      type: Number,
      default: 5
    }
  },
  socialMedia: {
    facebook: String,
    instagram: String,
    youtube: String
  },
  displayStatus: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Student', studentSchema);
