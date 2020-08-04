const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')

const User = require('../../models/UserModel')

// @route   GET api/auth
// @desc    Test route 
// @access  Public
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.log(err.message);
        res.status().send('Server error');
    }
});

module.exports = router;