const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello');
});

router.post('/api/signup', (req, res) => {
    const { name, emailId, password } = req.body;
    if (!name || !emailId || !password) {
        res.status(422).json({
            message: 'SignUp Failed',
            error: 'Please add all the fields'
        });
    } else {
        res.json({
            message: 'Sign Up Successful',
        });
    }
})

module.exports = router;