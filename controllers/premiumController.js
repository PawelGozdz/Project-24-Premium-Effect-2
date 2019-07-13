const mongoose = require('mongoose');
const Img = require('../models/Img');
const multer = require('multer');

exports.getIndex = async (req, res, next) => {
  res.render('index', { hero: req });
};

exports.getPricing = async (req, res, next) => {
  const pricing = {
    regular: {
      option1: { manual: 28, automatic: 30 },
      option2: { manual: 84, automatic: 90 }
    },
    special: {
      option1: { manual: 25, automatic: 27 }
    },
    intensive: {
      option1: { manual: 260, automatic: 280 },
      option2: { manual: 480, automatic: 540 },
      option3: { manual: 730, automatic: 790 }
    }
  };
  res.render('pricing', { hero: '', pricing });
};

exports.getLinks = (req, res, next) => {
  res.render('links', { hero: '' });
};

exports.getTerms = (req, res, next) => {
  res.render('terms', { hero: '' });
};

exports.getContact = (req, res, next) => {
  res.render('contact', { hero: '' });
};
