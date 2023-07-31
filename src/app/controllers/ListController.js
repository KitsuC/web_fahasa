const Product = require('../models/Product');
const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require('../../util/mongoose');
const { response } = require('express');

class ListController {
  show(req, res, next) {
    const datas = req.session.data;
    var data = datas.account;
    Product.find({})
      .then((products) =>
        res.render('list', {
          data,
          isAdmin: req.session.ua ? true : false,
          isAuthenticated: req.session.isAuthenticated,
          isAuthenticated: req.session.isAuthenticated,
          product: mutipleMongooseToObject(products),
        }),
      )
      .catch(next);
    
  }

  search(req, res, next) {
    const keyword = req.query.keyword;
    Product.find({ Name: { $regex: new RegExp(keyword, 'i') } })
      .then((products) => {
        res.render('searchResult', { product: products });
      })
      .catch(next);  
  }
  edit(req, res, next) {
    const datas = req.session.data;
    var data = datas.account;
    Product.findById(req.params.id)
      .then((products) =>
        res.render('edit', {
          data,
          isAdmin: req.session.ua ? true : false,
          isAuthenticated: req.session.isAuthenticated,
          product: mongooseToObject(products),
        }),
      )
      .catch(next);
  }

  //[PUT] /admin/list/:id
  update(req, res, next) {
    Product.updateOne(
      { _id: req.params.id },
      {
        Name: req.body.txtName,
        Image: req.body.txtImg
          ? `/public/upload/${req.body.txtImg}`
          : req.body.txtImg2,
        PriceN: req.body.txtPriceN,
        PriceO: req.body.txtPriceO,
        Author: req.body.txtAuthor,
        Company: req.body.txtCpn,
        Supplier: req.body.txtSupplier,
        Cover: req.body.txtCv,
        Type: req.body.txtType,
      },
    )
      .then(() => res.redirect('/admin/list'))
      .catch(next);
  }

  //[Delete] /admin/list/:id
  delete(req, res, next) {
    Product.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }
}

module.exports = new ListController();
