const mongoose = require('mongoose');
const Img = require('../models/Img');
const Pricing = require('../models/Pricing');
const multer = require('multer');

exports.getIndex = async (req, res, next) => {
  res.render('index', { hero: req });
};

exports.getPricing = async (req, res, next) => {
  const pricing = await Pricing.findOne({}).select('-_id -created -__v');
  if (!pricing) {
    res.render('pricing', { hero: '', pricing: {} });
    return;
  }
  res.render('pricing', { hero: '', pricing });
};

exports.postPricing = async (req, res, next) => {
  const pricing = await new Pricing({
    offer: [
      {
        mainHeader: 'Regular',
        header: '',
        paragraph: '',
        subHeader: '',
        offer: [
          {
            title: 'Standard 1 hour',
            desc: '',
            auto: {
              price: 30,
              priceDesc: ''
            },
            manual: {
              price: 28,
              priceDesc: ''
            }
          },
          {
            title: '3 hour motorway driving',
            desc: '',
            auto: {
              price: 90,
              priceDesc: ''
            },
            manual: {
              price: 84,
              priceDesc: ''
            }
          }
        ]
      },
      {
        mainHeader: 'Special Offers',
        header: 'First 2 hour driving session only 40 £',
        paragraph: '',
        subHeader: '',
        offer: [
          {
            title: 'Student Discount',
            desc: '',
            auto: {
              price: 27,
              priceDesc: ''
            },
            manual: {
              price: 25,
              priceDesc: ''
            }
          }
        ]
      },
      {
        mainHeader: 'Intensive Courses',
        header: 'Special summer offer',
        paragraph: '',
        subHeader: '***Prices valid until end of July 2019',
        offer: [
          {
            title: 'Block Bookings 10h',
            desc: '(pre paid 5 x 2hour block bookings)',
            auto: {
              price: 280,
              priceDesc: 'you save 20'
            },
            manual: {
              price: 260,
              priceDesc: ''
            }
          },
          {
            title: 'Block Bookings 20h',
            desc: '(pre paid 10 x 2hour block bookings)',
            auto: {
              price: 540,
              priceDesc: 'you save 20'
            },
            manual: {
              price: 480,
              priceDesc: ''
            }
          },
          {
            title: 'Block Bookings 30h',
            desc: '(pre paid 15 x 2hour block bookings)',
            auto: {
              price: 790,
              priceDesc: 'you save 50'
            },
            manual: {
              price: 730,
              priceDesc: ''
            }
          }
        ]
      },
      {
        mainHeader: 'Recommend A Friend For a FREE LESSON',
        header: 'Recommend A Friend offer is for existing pupils',
        paragraph:
          'Pass on their name to us or if they contact us, get them to mention your name',
        subHeader:
          '***Eligible for a free lesson When your friend completes six hours of driving lessons with us.',
        offer: [
          {
            title: '',
            desc: '',
            auto: {
              price: 0,
              priceDesc: ''
            },
            manual: {
              price: 0,
              priceDesc: ''
            }
          }
        ]
      }
    ]
  });

  await pricing.save();
  res.redirect('/');
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
