const mongoose = require("mongoose");

const leaveSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    leaveType: {
        type: String,
        required: true,
    },
    tripStart: {
        type: String,
        required: true,
    },
    tripEnd: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "pending"
    }

});


module.exports = leaveSchema;
