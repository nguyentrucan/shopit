const express = require('express');
const router = express.Router();

const { registerUser, loginUser, logout, forgotPassword, resetPassword, getUserProfile, updatePassword, updateProfile, getAllUser, getUserDetails, updateUser, deleteUser } = require('../controllers/authController');

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth')

//User Routes

router.route('/register').post(registerUser); //register
router.route('/login').post(loginUser); //login

router.route('/logout').get(logout); //logout

router.route('/password/forgot').post(forgotPassword); //forgotPasword
router.route('/password/reset/:token').put(resetPassword); //resetPassword
router.route('/password/update').put(isAuthenticatedUser, updatePassword); //updatePassword

router.route('/me').get(isAuthenticatedUser, getUserProfile); //getProfile
router.route('/me/update').put(isAuthenticatedUser, updateProfile); //updateProfile


//Admin Routes

router.route('/admin/users').get(isAuthenticatedUser, authorizeRoles('admin'), getAllUser); //getAllUser
router.route('/admin/user/:id')
    .get(isAuthenticatedUser, authorizeRoles('admin'), getUserDetails) //getUserDetails
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateUser) //updateUser
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteUser); 
module.exports = router;