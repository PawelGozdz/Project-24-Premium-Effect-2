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

// Indexowanie pól ze Schemy
// indexowanie pozwla na znacznie szybsze wyszukiwanie w DB. Jest to mówienie BD co jest w jakimś określonym property, np "store name", czy "description" czyli tam gdzie trzeba przeszukiwać jakieś pola żeby wyszukać jakąś część
// Jeżeli zindexujemy dwa pola, pozwoli to DB wyszukiwać np. frazę w dwóch polach jednocześnie (name i description)
studentSchema.index({
  name: 'text',
  description: 'text'
});

// Geo-special data - mówimy, żeby indexować jako 2dsphere
// storeSchema.index({ location: '2dsphere' });

studentSchema.pre('save', async function(next) {
  if (!this.isModified('name')) {
    next();
    return;
  }
  this.slug = slug(this.name);
  // Check if Student with this slug exists. i case insensitive
  const slugRegEx = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`, 'i');
  const studentWithSlug = await this.constructor.find({ slug: slugRegEx });
  if (studentWithSlug.length) {
    this.slug = `${this.slug}-${studentWithSlug.length + 1}`;
  }
  next();

  // TODO make more resilient so slugs are unique
});

// unwind - 
// { $unwind: '$tags' } - wstawiajac $ przed tags, mowiy, e chcemy aby uzyc properties tags


studentSchema.statics.getTagsList = function() {
  return this.aggregate([
    { $unwind: '$tags' },
    // grupujemy wszyskto po tag field,  a potem kreujemy count dla kazdej z tych grup. Za kazdym dodajemy po jednym ($sam + 1)
    { $group: { _id: '$tags', count: { $sum: 1 } } },
    // sort po najwieszej to -1, malejco to 1
    { $sort: { count: - 1 } }
  ]);
};

module.exports = mongoose.model('Student', studentSchema);

