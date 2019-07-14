const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const pricing = new mongoose.Schema({
  offer: [
    {
      mainHeader: String,
      header: String,
      paragraph: String,
      subHeader: String,
      offer: [
        {
          title: String,
          desc: String,
          auto: {
            price: Number,
            priceDesc: String
          },
          manual: {
            price: Number,
            priceDesc: String
          }
        }
      ]
    },
    {
      mainHeader: String,
      header: String,
      paragraph: String,
      subHeader: String,
      offer: [
        {
          title: String,
          desc: String,
          auto: {
            price: Number,
            priceDesc: String
          },
          manual: {
            price: Number,
            priceDesc: String
          }
        }
      ]
    },
    {
      mainHeader: String,
      header: String,
      paragraph: String,
      subHeader: String,
      offer: [
        {
          title: String,
          desc: String,
          auto: {
            price: Number,
            priceDesc: String
          },
          manual: {
            price: Number,
            priceDesc: String
          }
        }
      ]
    },
    {
      mainHeader: String,
      header: String,
      paragraph: String,
      subHeader: String,
      offer: [
        {
          title: String,
          desc: String,
          auto: {
            price: Number,
            priceDesc: String
          },
          manual: {
            price: Number,
            priceDesc: String
          }
        }
      ]
    }
  ],
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Pricing', pricing);
