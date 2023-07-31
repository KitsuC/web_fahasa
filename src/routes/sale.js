const express = require('express');
const router = express.Router();

const saleController = require('../app/controllers/SaleController');

router.get('/', saleController.index);

module.exports = router;
