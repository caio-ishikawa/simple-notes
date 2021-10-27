const mongoose          = require('mongoose');

const noteSchema = new mongoose.Schema({
    note_title: {
        type: String,
        required: true
    },
    date_added: {
        type: String,
        createdAt: Date.now()
    },
    note: {
        type: String,
        required: true
    },
    user_email: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Note', noteSchema);