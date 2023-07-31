const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');
router.get('/order', siteController.order);
router.get('/:slug', siteController.detail);
router.get('/', siteController.show);

module.exports = router;
