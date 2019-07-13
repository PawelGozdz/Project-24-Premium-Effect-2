const passport = require('passport');
const mongoose = require('mongoose');
const Student = mongoose.model('Student');
const promisify = require('es6-promisify');
const multer = require('multer');
const h = require('../helpers');

exports.postNewStudent = async (req, res, next) => {
  console.log(req.body);
  // Dodać w student.displayStatus = checked=false
  // Po stronie frontu zmieniać w JS na checked=true
  // To się będzie zapisywać i odsyłać jako JSON
  res.json(req.body );
};
