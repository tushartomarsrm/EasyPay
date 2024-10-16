const express=require('express');
const router=express.Router();
const isAuthenticatedUser=require('../Middleware/authMiddleware');
const { makeTransaction, getUserTransactions } = require('../controllers/transaction-controller');


router.route('/makePayment').post(isAuthenticatedUser,makeTransaction);
router.route('/transactions').get(isAuthenticatedUser,getUserTransactions);

module.exports = router