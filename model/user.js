const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    //This ensure that we have created at and updated at fields
    timestamps: true
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
