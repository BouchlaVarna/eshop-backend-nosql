const express = require('express');
const router = express.Router();
const cartCtrl = require('../controllers/cart');

//POST
router.post('/', cartCtrl.postCart);
router.post('/delete', cartCtrl.deleteItem)
router.post('/ordered', cartCtrl.clearCart)

module.exports = router;