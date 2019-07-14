const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const siteSettings = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  },
  name: {
    type: String,
    trim: true,
    default: 'Premium Effect Driving School'
  },
  address: {
    street: { type: String, trim: true },
    houseNumber: { type: String, trim: true },
    postCode: { type: String, trim: true },
    city: { type: String, trim: true },
    county: { type: String, trim: true },
    country: { type: String, trim: true },
    lng: { type: String, trim: true },
    lat: { type: String, trim: true }
  },
  phone: [String],
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('SiteSettings', siteSettings);
