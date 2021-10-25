const router            = require('express').Router();
const User              = require('../models/User');
const Notebook          = require('../models/Notebook');
const Note              = require('../models/Note');

router.post('/get_data', async (req, res) => {
    const email = req.body.email;
    console.log(email)

    const notebooks = await Notebook.find({ user_email: email });
    const notes = await Note.find({ user_email: email });

    res.send({ notebooks, notes });
});

module.exports = router;