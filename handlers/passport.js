const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

// createStrategy() jest dostępne, gdyż używamy tego w User.js

  // userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

passport.use(User.createStrategy());

// Mówimy passport.js o tym, jakie informacje ma pasport przekazywać do requestów
passport.serializeUser(User.serializeUser());
// a to to coś w rodzaju potwierdzenia, że ktoś się zlaogował '???'
passport.deserializeUser(User.deserializeUser());
