const bcrypt = require('bcrypt');
const Account = require('../models/Account');
class RegisterController {
  show(req, res, next) {
    res.render('register');
  }
  async get(req, res, next) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);

      //Create new user
      const newAccount = await new Account({
        username: req.body.username,
        email: req.body.email,
        password: hashed,
      });

      //Save to DB
      const account = await newAccount.save();
      req.flash('successMessage', 'Đăng kí thành công!');
      res.redirect('/login');
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = new RegisterController();
