const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {type: String, required: true},
    location: {type: String, required: true},
    image: {type: String, required: true},
    likes: {type: String, required: true},
    comment: {type: String, required: true},
});

const postdb= mongoose.model('postdb',PostSchema);

module.exports =postdb;