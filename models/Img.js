const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const slug = require('slugs');

const imgSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Image name needed.'
  },
  slug: String,
  alt: {
    type: String,
    trim: true,
    required: 'Image alt description needed'
  },
  tags: [String],
  created: {
    type: Date,
    default: Date.now
  },
  breakpoint: String
});

imgSchema.pre('save', function(next) {
  if (!this.isModified('name')) {
    next();
    return;
  }
  this.slug = slug(this.name);
  next();

  // TODO make more resilient so slugs are unique
});

module.exports = mongoose.model('Img', imgSchema);

