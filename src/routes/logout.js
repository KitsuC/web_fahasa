const express = require('express');
const router = express.Router();

const logoutController = require('../app/controllers/LogoutController');

router.get('/', logoutController.out);

module.exports = router;
