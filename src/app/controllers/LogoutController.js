class LogoutController {
  out(req, res) {
    req.session.isAuthenticated = false;
    req.session.isLoggedIn = false;
    req.session.destroy();
    res.redirect('/');
  }
}

module.exports = new LogoutController();
