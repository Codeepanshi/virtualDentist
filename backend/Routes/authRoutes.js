const express = require('express');
const router = express.Router();
const authController = require('../Controller/authController');
const authMiddleware = require('../middleware/auth');

router.post('/login', authController.loginOwner);
router.get('/submissions', authMiddleware, authController.getSubmissions);

module.exports = router;
