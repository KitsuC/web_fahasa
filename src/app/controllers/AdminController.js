const Product = require('../models/Product');


class AdminController {
  show(req, res, next) {
    const datas = req.session.data;
    var data = datas.account;
    // res.json(data)
    res.render('admin', {
      data,
      isAdmin: req.session.ua ? true : false,
      isAuthenticated: req.session.isAuthenticated,
    });
  }
}

module.exports = new AdminController();
