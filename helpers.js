/*
  This is a file of data and helper functions that we can expose and use in our templating function
*/

// FS is a built in module to node that let's us read files from the system we're running on
const fs = require('fs');

// moment.js is a handy library for displaying dates. We need this in our templates to display things like "Posted 5 minutes ago"
exports.moment = require('moment');

// Dump is a handy debugging function we can use to sort of "console.log" our data
exports.dump = (obj) => JSON.stringify(obj, null, 2);

// Making a static map is really long - this is a handy helper function to make one
exports.staticMap = ([lng, lat]) => `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=800x150&key=${process.env.MAP_KEY}&markers=${lat},${lng}&scale=2`;

// inserting an SVG
exports.icon = (name) => fs.readFileSync(`./public/images/icons/${name}.svg`);

// Some details about the site
exports.siteName = `Premium Effect Driving School!`;

exports.menu = [
  { slug: '/', title: 'Home', icon: 'home', },
  { slug: '/prices', title: 'Prices', icon: 'price', },
  { slug: '/useful-links', title: 'Useful Links', icon: 'links', },
  { slug: '/terms', title: 'Terms', icon: 'terms', },
  { slug: '/contact', title: 'Contact', icon: 'contact', },
  { slug: 'https://www.facebook.com/premiumeffectdrivingschool', title: 'f', icon: 'facebook', class: 'facebook'},
];

exports.hero = [
  { slug: '/', title: 'Premium Effect Driving School', subTitle: 'Manual & Automatic Driving Lessons for Teens and Adults', btn1: '/#car', btn1Text: 'Read More', btn2: '/contact', btn2Text: 'Contact' },
  { slug: '/prices', title: 'Pricing', subTitle: 'Choose What Suits You Best', btn1: '', btn2: '' },
  { slug: '/useful-links', title: 'Useful Links', subTitle: '', btn1: '', btn2: '' },
  { slug: '/terms', title: 'Terms & Conditions', subTitle: 'Everything You Need to Know', btn1: '', btn2: '' },
  { slug: '/contact', title: 'Contuct Us', subTitle: '', btn1: '/contact#contact', btn2: '' },
  { slug: 'https://www.facebook.com/premiumeffectdrivingschool', title: 'f', subTitle: '', btn1: '', btn2: '', class: 'facebook'},
];
