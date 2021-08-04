const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types
const postSchema = new mongoose.Schema({
    caption: {
        type: String,
        required: true
    },
    photoUrl: {
        type: String,
        required: true
    },
    postedBy: {
        type: ObjectId,
        ref: 'User'
    },
    timeStamp: {
        type: Date,
        default: new Date()
    },
    comments: [{
        text: String,
        commentedBy: {
            type: ObjectId,
            ref: 'User'
        }
    }],
    likedBy: [{
        type: ObjectId,
        ref: 'User'
    }]
});
mongoose.model('Post', postSchema);