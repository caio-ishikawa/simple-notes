const router        = require('express').Router();
const User          = require('../models/User');

router.post('/register', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    // USERNAME & EMAIL CHECK //
    const emailExists = await User.findOne({ email: email });
    const usernameExists = await User.findOne({ username: username });

    if (emailExists || usernameExists) {
        res.json({"message":"Username/Email already exists."})
    } else {
        // INSTANTIATE NEW USER //
        const newUser = new User({
            username: username,
            password: password,
            email: email
        });

        // SAVE NEW USER //
        try {
            const savedUser = await newUser.save();
            res.send(savedUser);
        } catch (err) {
            console.log(err);
        }

    }
});

module.exports = router;
