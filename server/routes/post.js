const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Post = mongoose.model('Post');

router.post('/createPost',requireLogin, (req, res) => {
    const { title, body } = req.body;
    if (!title || !body) {
        res.status(422).json({ error: 'Please add all the fields' });
        return;
    }
    req.user.password = undefined;
    req.user.__v = undefined;
    const post = new Post({
        title,
        body,
        postedBy: req.user
    });
    post.save().then(response => {
        res.json({ post: response });
    }).catch(err => {
        console.log(err);
    })
});

router.get('/allPosts', (req, res) => {
    Post.find()
        .populate('postedBy', '_id name emailId')
        .then(posts => {
            res.json({ posts });
        })
        .catch(err => {
        console.log(err);
        })
});

router.get('/myPosts', requireLogin, (req, res) => {
    Post.find({ postedBy: req.user._id })
        .populate('postedBy', '_id name emailId')
        .then(posts => {
            res.json({ posts });
        })
        .catch(err => console.log(err));
})

module.exports = router;