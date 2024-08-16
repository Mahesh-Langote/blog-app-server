const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getAllUsers, getUserProfile, getUserDetails } = require('../controllers/userController');

router.get('/', getAllUsers);
router.get('/profile', auth, getUserProfile);
router.get('/:id', getUserDetails);

module.exports = router;