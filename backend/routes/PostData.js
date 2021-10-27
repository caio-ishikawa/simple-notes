const Note = require('../models/Note');
const Notebook = require('../models/Notebook');

const router        = require('express').Router();

router.post('/add_note', async (req, res) => {
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
    if (!notebook) {
        res.send("No notebook found.");
    }
    if (!notebook.note_title.includes(noteTitle)) {
        let savedNote = newNote.save();
        notebook.note_title.push(noteTitle);
        let saved = await notebook.save();
        res.send(notebook);
    } else {
        res.send("Note already in notebook.");
    }
});

module.exports = router;