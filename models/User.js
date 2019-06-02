const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const validator = require('validator');
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    // pierwsze jak ma być validowane, a drugie error msg
    validate: [validator.isEmail, 'Invalid Email Address'],
    required: 'Please Supply an email address'
  },
  name: {
    type: String,
    required: 'Please supply a name',
    trim: true
  },
  options: {
    access: {
      type: Number,
      default: 10
    },
    sections: [
      {
        name: {
          type: String,
          trim: true,
          lowercase: true
        },
        page: {
          type: String,
        },
        status: {
          type: Boolean,
          default: false
        }
      }
    ]
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date
});

// Uzuj userSchema i dodaj wszystkich fields potrzebnych zeby dodać autentykację do naszej Schema. Użyj 'email' jako loginu.
userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

// Zamienia standardowy 'brzydki' error jaki wyrzuca mongoose gdy np. user nie jest unique na krótką wiadomość.
userSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('User', userSchema);
