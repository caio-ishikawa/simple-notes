const mongoose          = require('mongoose');

const notebookSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    user_email: {
        type: String, 
        required: true
    },
    date: {
        type: String,
        createdAt: Date.now()
    },
    note_title: [{
        type: String,
    }]
});

module.exports = mongoose.model('Notebook', notebookSchema);