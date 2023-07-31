const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const addController = require('../app/controllers/AddController');
const listController = require('../app/controllers/ListController');
const adminController = require('../app/controllers/AdminController');
const OrderController = require('../app/controllers/OrderController');

router.use(bodyParser.urlencoded({ extended: false }));

const requireAuth = (req, res, next) => {
  if (req.session.isAuthenticated) {
    next();
  } else {
    res.redirect('/login');
  }
};

const isAdmin = (req, res, next) => {
  const datas = req.session.data;
  if (datas) {
    var data = datas.account;
    if (req.session.ua) {
      // Người dùng có vai trò admin, tiếp tục
      next();
    } else {
      // Người dùng không có vai trò admin, chuyển hướng đến trang không được phép
      res.render('404', {
        data,
        isAdmin: req.session.ua ? true : false,
        isAuthenticated: req.session.isAuthenticated,
      });
    }
  } else {
    res.render('404');
  }
};

router.get('/list', isAdmin, requireAuth, listController.show);
// router.get('/search', isAdmin, requireAuth, listController.search);
router.get('/list/:id/edit', isAdmin, requireAuth, listController.edit);
router.get('/order', isAdmin, requireAuth, OrderController.order);
router.get('/order/:id/edit', isAdmin, requireAuth, OrderController.edit);
router.put('/order/:id', isAdmin, OrderController.update);
router.delete('/order/:id', isAdmin, OrderController.delete);
router.put('/list/:id', isAdmin, listController.update);
router.get('/add', isAdmin, requireAuth, addController.show);
router.delete('/list/:id', isAdmin, listController.delete);
router.post('/add', isAdmin, addController.up);
router.get('/', isAdmin, requireAuth, adminController.show);

module.exports = router;
