const express = require('express');
const otpLessController = require('../controllers/otpLess.controller');


const router = express.Router();

router.route('/').get( otpLessController.getSignupUrl);
router.route('/').post( otpLessController.getUserDetails);


module.exports = router;
