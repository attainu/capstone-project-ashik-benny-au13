const express = require('express');
const router = express.Router();

const { isAutherisedUser, userRoles } = require('../middlewares/verifiedUser');

const { createNewOrder, getOrderDetails, myOrderDetails,
    getAllOrderDetails, updateOrder, deleteOrder  } = require('../controllers/orderController');


router.route('/order/new').post(isAutherisedUser, createNewOrder);
router.route('/order/:id').get(isAutherisedUser, getOrderDetails);
router.route('/orders/myOrders').get(isAutherisedUser, myOrderDetails);

router.route('/admin/allOrders').get(isAutherisedUser, userRoles('admin') , getAllOrderDetails);
router.route('/admin/order/:id').put(isAutherisedUser, userRoles('admin') , updateOrder);
router.route('/admin/order/:id').delete(isAutherisedUser, userRoles('admin') , deleteOrder);



module.exports = router;