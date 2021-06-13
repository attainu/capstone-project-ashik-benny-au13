const express = require('express');
const router = express.Router();

const { isAutherisedUser, userRoles } = require('../middlewares/verifiedUser')

const { registerNewUser, loginUser, logoutUser, forgotPassword, resetPassword, userProfile, updateUserPassword,
    updateUserProfile, getAllUsers, getSingleUserDetails, updateUserDetails, deleteUser } = require('../controllers/userController');


router.route('/register').post(registerNewUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logoutUser);

router.route('/password/forgot').post(forgotPassword);
router.route('/password/reset/:token').put(resetPassword);

router.route('/profile').get(isAutherisedUser,userProfile);
router.route('/profile/update').put(isAutherisedUser,updateUserProfile);
router.route('/password/update').put(isAutherisedUser,updateUserPassword);

router.route('/admin/users').get(isAutherisedUser, userRoles('admin'), getAllUsers);
router.route('/admin/user/:id').get(isAutherisedUser, userRoles('admin'), getSingleUserDetails);
router.route('/admin/user/:id').put(isAutherisedUser, userRoles('admin'), updateUserDetails);
router.route('/admin/user/:id').delete(isAutherisedUser, userRoles('admin'), deleteUser);



module.exports = router;