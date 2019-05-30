const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const promisify = require('es6-promisify');
const multer = require('multer');
const h = require('../helpers');

exports.isLoggedIn = (req, res, next) => {
  // Sprawdzanie, czy user jest authentykowany
  if (req.isAuthenticated()) {
    next();
    return;
  }
  req.flash('error', 'Musisz być zalogowany żeby to zrobić!');
  res.redirect('/login');
};

exports.validateRegister = (req, res, next) => {
  req.sanitizeBody('email').normalizeEmail({
    remove_dots: false,
    remove_extension: false,
    gmail_remove_subaddress: false
  });
  req.checkBody('email', 'That Email is not valid!')
    .isEmail();
  
  req.sanitizeBody('name');
  req.checkBody('name', 'Name field cannot be empty').notEmpty();
  req.checkBody('name', 'Name field - only Alphanumeric (0-9, a-z, A-Z) characters allowed').isAlphanumeric();
  req.checkBody('name', 'Name length must be at least 3 characters').isLength({ min: 3 });

  req.sanitizeBody('password');
  req.checkBody('password', "Password Cannot be Blank!").notEmpty();
  req.checkBody('password', 'Password must be at least 5 char long').isLength({ min: 5 });
  req.checkBody('password', 'Password - only Alphanumeric (0-9, a-z, A-Z) characters allowed').isAlphanumeric();
  
  req.checkBody('confirm-password', 'Confirmed Password cannot be blank!').notEmpty();
  req.checkBody('confirm-password', 'Confirmed Password must be the same!').equals(req.body.password);

  const getSum = h.getSumFromNumberAndString(req.body.question).toString();
  req.checkBody('answer', 'Add numbers and prove that you are not a robot :)')
    .notEmpty();
  req.checkBody('answer', 'Numbers don\'t add up!. Try again')
    .equals(getSum);

  const errors = req.validationErrors();
  if (errors) {
    req.flash('error', errors.map(err => err.msg));
    res.render('register', { title: 'Register', body: req.body, userInputErrors: errors, flashes: req.flash() });
    return;
  }
  next(); // no errors
};

exports.validateLogin = (req, res, next) => {
  req.sanitizeBody('email').normalizeEmail({
    remove_dots: false,
    remove_extension: false,
    gmail_remove_subaddress: false
  });
  req.checkBody('email', 'That Email is not valid!')
    .isEmail();

  req.sanitizeBody('password');
  req.checkBody('password', "Password Cannot be Blank!").notEmpty();
  req.checkBody('password', 'Password must be at least 5 char long').isLength({ min: 5 });
  req.checkBody('password', 'Password - only Alphanumeric (0-9, a-z, A-Z) characters allowed').isAlphanumeric();

  const getSum = h.getSumFromNumberAndString(req.body.question).toString();
  req.checkBody('answer', 'Add numbers and prove that you are not a robot :)')
    .notEmpty();
  req.checkBody('answer', 'Numbers don\'t add up!. Try again')
    .equals(getSum);

  const errors = req.validationErrors();
  if (errors) {
    req.flash('error', errors.map(err => err.msg));
    res.render('login', { title: 'Login', body: req.body, userInputErrors: errors, flashes: req.flash() });
    return;
  }
  next(); // no errors
};

exports.getRegister = (req, res) => {
  res.render('register', { title: 'Register', check: '' });
};

exports.postRegister = async (req, res, next) => {
  const user = new User({ email: req.body.email, name: req.body.name });
  // To tworzy promisa metodę registeR(). Pierwszy arg. to nazwa metody, a druga o obiekt, w którym się ona znajduje
  const register = promisify(User.register, User);
  // zapisuje hasło i je hashuje
  await register(user, req.body.password);
  
  next(); // przekazywanie do auth controller login
};

exports.getLogin = (req, res, next) => {
  res.render('login', { hero: 'req' });
};

exports.login = passport.authenticate('local', {
  failureRedirect: '/login',
  failureFlash: 'Failed Login!',
  successRedirect: '/account',
  successFlash: 'You are now logged in!'
});

exports.getAccount = (req, res) => {
  res.render('account', { title: 'Your Account' });
};

exports.isLoggedIn = (req, res, next) => {
  // Sprawdzanie, czy user jest authentykowany
  if (req.isAuthenticated()) {
    next();
    return;
  }
  req.flash('error', 'You need to be logged!');
  res.redirect('/login');
};

exports.getLogout = (req, res) => {
  req.logout();
  req.flash('success', 'You\'ve been logged out!');
  res.redirect('/');
};
