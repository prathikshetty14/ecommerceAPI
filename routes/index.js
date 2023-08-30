const express = require('express');
const router = express.Router();
const productController = require('../controllers/api/v1/product');

console.log('Router loaded')

router.post('/products/create', productController.create);
router.get('/products', productController.display);
router.delete('/products/:id', productController.delete);
router.post('/products/:id/update_quantity', productController.update);

module.exports = router;