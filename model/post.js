const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
    },
    description: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }

}, {
    //This ensure that we have created at and updated at fields
    timestamps: true
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;