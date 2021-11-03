const mongoose          = require('mongoose');

const noteSchema = new mongoose.Schema({
    note_title: {
        type: String,
        required: true
    },
    date_added: {
        type: Date,
        default: () => Date.now() + 7*24*60*60*1000
    },
    note: {
        type: String,
        required: true
    },
    user_email: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        enum: ['#D00000', "#FFBA08", "#145C9E", "#CC59D2", "#00AF54", "#808080"],
        required: false
    },
});

module.exports = mongoose.model('Note', noteSchema);