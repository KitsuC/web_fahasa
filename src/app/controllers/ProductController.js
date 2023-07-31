const Product = require('../models/Product');
const {
  mutipleMongooseToObject,
} = require('../../util/mongoose');

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

class ProductController {
  show(req, res, next) {
    Product.find()
    .then((product) => {
      res.render('listproduct', {
        product:shuffleArray(mutipleMongooseToObject(product)) ,
      });
    });
  }
}

module.exports = new ProductController();
