const Delivery = require('../models/Delivery');
const { mutipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class OrderController {
   order(req, res){
    const datas = req.session.data;
    if (datas) {
    Delivery.find({})
    .then(value => {
        var data = datas.account;
        res.render('admin_order', {
          data,
          isAdmin: req.session.ua ? true : false,
          isAuthenticated: req.session.isAuthenticated,
          value: mutipleMongooseToObject(value)
        });
    })
    } else {
      res.render('404');
    }
  }

  edit(req, res, next) {
    const datas = req.session.data;
    var data = datas.account;
    Delivery.findById(req.params.id)
      .then((products) =>
        res.render('order_edit', {
          data,
          isAdmin: req.session.ua ? true : false,
          isAuthenticated: req.session.isAuthenticated,
          product: mongooseToObject(products),
        }),
      )
      .catch(next);
  }

  update(req, res, next) {
    Delivery.updateOne(
      { _id: req.params.id },
      {
        Status: req.body.Status,
      },
    )
      .then(() => res.redirect('/admin/order'))
      .catch(next);
  }

  delete(req, res, next) {
    Delivery.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }
}

module.exports = new OrderController();
