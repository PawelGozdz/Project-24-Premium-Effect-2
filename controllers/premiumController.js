const mongoose = require('mongoose');
const Img = require('../models/Img');
const multer = require('multer');

exports.getIndex = async (req, res, next) => {
  
  res.render('index', { hero: req });
};
