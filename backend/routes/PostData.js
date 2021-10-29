const Note = require('../models/Note');
const Notebook = require('../models/Notebook');
const verifyToken = require('../middleware/verifyToken');

const router        = require('express').Router();

// SAVES NOTE //
router.post('/save_note', async (req, res) => {
    const email = req.body.email;
    const notebookTitle = req.body.notebook;
    const noteTitle = req.body.note_title;
    const note = req.body.note;

    const newNote = new Note({
        note_title: noteTitle,
        note: note,
        user_email: email
    });

    const notebook = await Notebook.findOne({ user_email: email, title: notebookTitle });
    const noteExists = await Note.findOne({ user_email: email, note_title: noteTitle});

    // If the note already exists, update the note //
    if (noteExists) {
        const update = await Note.updateOne({note_title: noteTitle}, {note: note});
        const updatedNote = await Note.findOne({  note_title: noteTitle });
        res.send(updatedNote);
    } else {
        // If notebook does not exist, alert user //
        res.send("Error: no note selected");
    }
});

//  CREATES NOTEBOOK //
router.post('/new_notebook', verifyToken, async (req, res) => {
    const email = req.body.email;
    const title = req.body.title;

    const notebookExists = await Notebook.findOne({ user_email: email, title: title});
    
    if (notebookExists) {
        res.send("Notebook exists");
    };

    const newNotebook = new Notebook({
        title: title,
        user_email: email
    });

    try {
        const savedNotebook = await newNotebook.save();
        res.send(savedNotebook);
    } catch {
        res.send("Error creating notebook.");
    }
});


module.exports = router;