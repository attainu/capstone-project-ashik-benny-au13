const express = require('express');
const router = express.Router();

const {getAllProducts,newProduct,getOneProduct,updateOneProduct,deleteOneProduct} = require('../controllers/productController');


// INDIVUDUAL ROUTES

router.route('/products').get(getAllProducts);
router.route('/product/:id').get(getOneProduct);
router.route('/admin/product/new').post(newProduct);
router.route('/admin/product/:id').put(updateOneProduct);
router.route('/admin/product/:id').delete(deleteOneProduct);


module.exports = router;
