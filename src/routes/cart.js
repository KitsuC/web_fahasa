const express = require('express');
const router = express.Router();

const cartController = require('../app/controllers/CartController');



router.get('/', cartController.show);
router.post('/', cartController.ins);
router.post('/add', cartController.add);
router.get('/delivery', cartController.delivery);
router.post('/delivery', cartController.deliveryAdd);
router.post('/:id/increase-quantity', cartController.ins);
router.post('/:id/prew-quantity', cartController.prew);
router.delete('/:id', cartController.delete);

module.exports = router;
