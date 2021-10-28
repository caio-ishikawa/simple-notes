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

router.post('/notebook_notes', async (req, res) => {
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

router.post('/get_content', async (req, res) => {
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



module.exports = router;