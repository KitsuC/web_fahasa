
const Account = require('../models/Account');
const bcrypt = require('bcrypt');

class LoginController {
  show(req, res) {
    res.render('login');
  }

  async get(req, res, next) {
    try {
      const account = await Account.findOne({ username: req.body.username });
      const validPassword = await bcrypt.compare(
        req.body.password,
        account.password,
      );
      if (!validPassword) {
        // res.send('sai cmnt')
        req.session.isAuthenticated = false;
        req.flash('errorMessage', 'Sai mật khẩu! Vui lòng thử lại');
        res.redirect('/login')
      }
      if (account && validPassword) {
        if (account.admin) {
          req.flash('successMessage', 'Đăng nhập admin thành công!');
          req.session.isAuthenticated = true;
          req.session.data = {
            account,
          };
          req.session.ua = account.admin;
          // res.send(req.session.ua)
          res.redirect('/admin');
        } else {
          req.session.ua = account.admin;
          req.flash('successMessage', 'Đăng nhập thành công!');
          req.session.isAuthenticated = true;
          req.session.data = {
            account,
          };
          req.session.isLoggedIn = true;
          res.redirect('/');
        }
      }
    } catch (err) {
      req.session.isAuthenticated = false;
      req.flash('errorMessage', 'Sai tài khoản! Vui lòng thử lại');
      res.redirect('/login')
    }
  }

  
}

module.exports = new LoginController();
