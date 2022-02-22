const mongoose = require("mongoose");

const announcementSchema = mongoose.Schema({
    name: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },

    date: {
        type: String,
    },
    text: {
        type: String,
    },
});

module.exports = announcementSchema;
