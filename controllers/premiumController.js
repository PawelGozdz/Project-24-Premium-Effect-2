const mongoose = require('mongoose');
const Links = require('../models/Links');
const multer = require('multer');

exports.getIndex = (req, res, next) => {
  res.render('index', { hero: req });

};
