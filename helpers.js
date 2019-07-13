/*
  This is a file of data and helper functions that we can expose and use in our templating function
*/

// FS is a built in module to node that let's us read files from the system we're running on
const fs = require('fs');

// moment.js is a handy library for displaying dates. We need this in our templates to display things like "Posted 5 minutes ago"
exports.moment = require('moment');

// Dump is a handy debugging function we can use to sort of "console.log" our data
exports.dump = obj => JSON.stringify(obj, null, 2);

// Making a static map is really long - this is a handy helper function to make one
exports.staticMap = ([lng, lat]) =>
  `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=800x150&key=${
    process.env.MAP_KEY
  }&markers=${lat},${lng}&scale=2`;

// inserting an SVG
exports.icon = name => fs.readFileSync(`./public/images/icons/${name}.svg`);

// Some details about the site
exports.siteName = `Premium Effect Driving School!`;

// Get random number
const getRandomNumber = scope => Math.floor(Math.random() * scope);

// Print number  + stringNumber
exports.printNumbersToCompare = () => {
  const number = getRandomNumber(100);
  let charNumber = '';

  switch (getRandomNumber(10)) {
    case 0:
      charNumber = 'zero';
      break;
    case 1:
      charNumber = 'one';
      break;
    case 2:
      charNumber = 'two';
      break;
    case 3:
      charNumber = 'three';
      break;
    case 4:
      charNumber = 'four';
      break;
    case 5:
      charNumber = 'five';
      break;
    case 6:
      charNumber = 'six';
      break;
    case 7:
      charNumber = 'seven';
      break;
    case 8:
      charNumber = 'eight';
      break;
    case 9:
      charNumber = 'nine';
      break;
    default:
      'This is not a number!';
  }

  return `${number} + ${charNumber}`;
};

// convert string to number and return sum for further validation
exports.getSumFromNumberAndString = stringNumber => {
  const splitString = stringNumber.split('+').map(el => el.trim());
  let charNumber;
  const number = +splitString[0];

  switch (splitString[1]) {
    case 'zero':
      charNumber = 0;
      break;
    case 'one':
      charNumber = 1;
      break;
    case 'two':
      charNumber = 2;
      break;
    case 'three':
      charNumber = 3;
      break;
    case 'four':
      charNumber = 4;
      break;
    case 'five':
      charNumber = 5;
      break;
    case 'six':
      charNumber = 6;
      break;
    case 'seven':
      charNumber = 7;
      break;
    case 'eight':
      charNumber = 8;
      break;
    case 'nine':
      charNumber = 9;
      break;
    default:
      'This is not a number!';
  }

  return number + (charNumber || undefined);
};

exports.menu = [
  { slug: '/', title: 'Home', icon: 'home' },
  { slug: '/prices', title: 'Prices', icon: 'price' },
  { slug: '/useful-links', title: 'Useful Links', icon: 'links' },
  { slug: '/terms', title: 'Terms', icon: 'terms' },
  { slug: '/contact', title: 'Contact', icon: 'contact' },
  {
    slug: 'https://www.facebook.com/premiumeffectdrivingschool',
    title: 'f',
    icon: 'facebook',
    class: 'facebook'
  }
];

exports.hero = [
  {
    slug: '/',
    title: 'Premium Effect Driving School',
    subTitle: 'Manual & Automatic Driving Lessons for Teens and Adults',
    btn1: '/#car',
    btn1Text: 'Read More',
    btn2: '/contact',
    btn2Text: 'Contact'
  },
  {
    slug: '/prices',
    title: 'Pricing',
    subTitle: 'Choose What Suits You Best',
    btn1: '',
    btn2: ''
  },
  {
    slug: '/useful-links',
    title: 'Useful Links',
    subTitle: '',
    btn1: '',
    btn2: ''
  },
  {
    slug: '/terms',
    title: 'Terms & Conditions',
    subTitle: 'Everything You Need to Know',
    btn1: '',
    btn2: ''
  },
  {
    slug: '/contact',
    title: 'Contuct Us',
    subTitle: '',
    btn1: '/contact#contact',
    btn1Text: 'Contact'
  },
  { slug: '/account', title: 'Your Account', subTitle: '', btn1: '', btn2: '' },
  {
    slug: 'https://www.facebook.com/premiumeffectdrivingschool',
    title: 'f',
    subTitle: '',
    btn1: '',
    btn2: '',
    class: 'facebook'
  }
];

exports.accountForms = [
  {
    action: '/',
    title: 'Succesful Students',
    type: 'checkbox',
    id: 'passedTest',
    name: 'passedTest',
    value: 1,
    class: 'toggleSection'
  }
];

exports.instructors = [
  { name: 'Marzena Kostoń', id: 'a1', slug: 'marzena-kostoń' },
  { name: 'Bonifacy Kapusta', id: 'a2', slug: 'bonifacy-kapusta' },
  { name: 'Jan Kowalski', id: 'a3', slug: 'jan-kowalski' }
];

exports.testimonials = [
  {
    name: 'Olga Pasa',
    star: '5.0',
    text:
      'Had the best instructor ever! Marzena helped me a lot sharing her knowledge with me! A great woman! Passed my test from the first attempt! Wish you good students!'
  },
  {
    name: 'Sarah Williams',
    star: '5.0',
    text:
      "Marge was the nicest instructor, she is so down to earth and puts you at such ease she is so patient and friendly I couldn't asked for a nicer person to help me on my journey towards driving. I am so happy to of had the pleasure of meeting her and would recommend her to anyone wanting to learning to drive she truly is a fantastic person :)"
  },
  {
    name: 'James Garlo',
    star: '4.9',
    text:
      "Marge was the best driving instructor I have had in 18 years!! I used to hate driving but Marge helped me enjoy controlling the car and before long I couldn't wait to get back in the driving seat!! She is patient, calm and helps put you at ease. She is extremely knowledgeable on all aspects of drivig and helped me with my understanding of driving safely, manouveures and enjoying driving! I would recommend Marge to anybody who wants to learn safely, efficiently and in a calm environment! She is amazing and the best in the business!! Thanks Marge and Resto Driving School for making me a very happy driver!!"
  },
  {
    name: '11BOOWHO',
    star: '5.0',
    text:
      'Fantastic driving instructor Marge. She was able to put up with all my stresses and mistakes that were made along the way! But she corrected me!.. she was always calm and she has a great sense of humour she gave me the confidence to be able to pass my test. I would Highly recommend her as an instructor and I would highly recommend retro driving school to anyone looking for automatic driving :)'
  },
  {
    name: 'Eliza M',
    star: '5.0',
    text: 'Great Instructor & company, helped me pass my test short notice.'
  },
  {
    name: 'Maxine Franks',
    star: '5.0',
    text:
      'Fantastic driving instructor Marg. She put up with my stresses always calm and a great sense of humour she gave me the confidence to pass my test whoop whoop.'
  },
  {
    name: 'Iwona Nowakowska',
    star: '5.0',
    text:
      'Marzena is a great instructor - patient, kind encouraging! Learning with her was a pleasure! I wish everyone such a wonderful time behind the wheel when just learning how to do it. I feel confident on the road thanks to lessons with Marzena and I would highly recommend her to enyone who thinks about becoming a driver and is looking for great teacher!'
  },
  {
    name: 'Danielle Fuller',
    star: '5.0',
    text:
      'Marzena is a fantastic driving instructor. She was so patient and caring towards me. She genuinely cares about her pupils and wants the best for them. thank you :)'
  }
];
