const adminRouter = require('./admin');
const loginRouter = require('./login');
const registerRouter = require('./register');
const saleRouter = require('./sale');
const siteRouter = require('./site');
const logoutRouter = require('./logout');
const cartRouter = require('./cart');
const productRouter = require('./product');

const express = require('express');

function route(app) {
  app.use(express.urlencoded({ extend: false }));
  app.use('/login', loginRouter);
  app.use('/logout', logoutRouter);
  app.use('/register', registerRouter);
  app.use('/admin', adminRouter);
  app.use('/sale', saleRouter);
  app.use('/cart', cartRouter);
  app.use('/list', productRouter);
  app.use('/', siteRouter);
  app.use((req, res) => {
    const datas = req.session.data;
    if (datas) {
      var data = datas.account;
      res.status(404).render('404', {
        data,
        isAdmin: req.session.ua ? true : false,
        isAuthenticated: req.session.isAuthenticated,
      });
    } else {
      res.status(404).render('404', {
        data,
        isAdmin: req.session.ua ? true : false,
        isAuthenticated: req.session.isAuthenticated,
      });
    }
  });
}

module.exports = route;
