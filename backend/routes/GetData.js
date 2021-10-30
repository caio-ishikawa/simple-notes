const router            = require('express').Router();
const User              = require('../models/User');
const Notebook          = require('../models/Notebook');
const Note              = require('../models/Note');
const verifyToken       = require('../middleware/verifyToken');

// RETURNS USER'S NOTEBOOKS + NOTES //
router.post('/get_data', verifyToken, async (req, res) => {
    const email = req.body.email;
    console.log(email)

    const notebooks = await Notebook.find({ user_email: email });
    const notes = await Note.find({ user_email: email });

    res.send({ notebooks, notes });
});

// RETURNS SPECIFIC NOTEBOOK'S CONTENT //
router.post('/notebook_notes', verifyToken, async (req, res) => {
    const email = req.body.email;
    const title = req.body.title;
    const notebook = req.body.notebook;

    const notebooks = await Notebook.find({ user_email: email, title: title });

    if (notebooks) {
        console.log(notebooks);
        const titles = notebooks[0].note_title;
        res.send(titles);
    } else {
        res.send({"message": "No notebooks found with that title."})
    }
});

// RETURNS SPECIFIC NOTE //
router.post('/get_content', verifyToken, async (req, res) => {
    const email = req.body.email;
    const title = req.body.title;

    const noteContent = await Note.findOne({ user_email: email, note_title: title });
    
    if (noteContent) {
        const note = noteContent.note;
        res.send(note);
    } else {
        res.send("No note found.");
    }
});

// RETURNS USER'S NOTEBOOK TITLES //
router.post('/get_notebook_title', async (req, res) => {
    const email = req.body.email;

    const notebooks = await Notebook.find({ user_email: email });
    let data = [];

    if (notebooks){
        for (var i = 0; i < notebooks.length; i++) {
            data.push(notebooks[i].title);
        }
        res.send(data);
    } else {
        res.send("No notebooks found. Please ensure you are signed in.");
    }
});


module.exports = router;