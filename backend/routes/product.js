const express = require('express');
const router = express.Router();

const {getAllProducts,newProduct,getOneProduct,updateOneProduct,deleteOneProduct,
    makeProductReview, getProductReviews, deleteProductReview} = require('../controllers/productController');

const { isAutherisedUser,userRoles } = require('../middlewares/verifiedUser')



router.route('/products').get(getAllProducts);
router.route('/product/:id').get(getOneProduct);

router.route('/admin/product/new').post(isAutherisedUser, userRoles('admin'), newProduct);
router.route('/admin/product/:id').put(isAutherisedUser, userRoles('admin'), updateOneProduct);
router.route('/admin/product/:id').delete(isAutherisedUser, userRoles('admin'), deleteOneProduct);

router.route('/review').put(isAutherisedUser, makeProductReview);
router.route('/reviews').get(isAutherisedUser, getProductReviews);
router.route('/reviews').delete(isAutherisedUser, deleteProductReview);


module.exports = router;
