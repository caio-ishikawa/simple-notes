const router        = require('express').Router();
const User          = require('../models/User');
const Notebook      = require('../models/Notebook');
const bcrypt        = require('bcryptjs');
const jwt           = require('jsonwebtoken');

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

        // PASSWORD HASHING //
        const hash = bcrypt.hashSync(password, 10);        
        console.log(hash);

        // INSTANTIATE NEW USER //
        const newUser = new User({
            username: username,
            password: hash,
            email: email
        });

        const newNotebook = new Notebook({
            title: username + "'s Notebook",
            user_email: email
        })

        // SAVE NEW USER //
        try {
            const savedUser = await newUser.save();
            const savedNotebook = await newNotebook.save();
            res.send({savedUser, savedNotebook});
        } catch (err) {
            console.log(err);
        }

    }
});

router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({ username: username });
    if (!user){
        res.send("User does not exist.");
    }

    const validPassword = bcrypt.compareSync(password, user.password)
    if (!validPassword) {
        res.send("Invalid credentials.");
    }

    const token = jwt.sign({_id: user._id}, 'testKey');
    res.cookie('jwtCookie', token, {
        httpOnly: true
    });

    res.send(user);

});

module.exports = router;
