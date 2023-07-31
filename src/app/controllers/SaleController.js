class saleController {
  // [GET] /news
  index(req, res) {
    const datas = req.session.data;
    if (datas) {
      var data = datas.account;
      res.render('sale', {
        data,
        isAdmin: req.session.ua ? true : false,
        isAuthenticated: req.session.isAuthenticated,
      });
    } else {
      res.render('sale');
    }
  }

  show(req, res) {
    res.send('NEWS DETAIL!');
  }
}

module.exports = new saleController();
