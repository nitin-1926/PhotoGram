const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Post = mongoose.model('Post');

router.post('/createPost', requireLogin, (req, res) => {
    const { caption, imageUrl } = req.body;
    if (!caption || !imageUrl) {
        res.status(422).json({ error: 'Please add all the fields' });
        return;
    }
    req.user.password = undefined;
    req.user.__v = undefined;
    const post = new Post({
        caption,
        photoUrl: imageUrl,
        postedBy: req.user
    });
    post.save().then(response => {
        res.json({ message: 'successful', post: response });
    }).catch(err => {
        console.log(err);
        res.json({ message: err });
    })
});

router.get('/allPosts', requireLogin, (req, res) => {
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
});

router.put('/likePost', requireLogin, (req, res) => {
    Post.findByIdAndUpdate(req.body.postId, {
        $push: { likedBy: req.user._id }
    }, {
        new: true
    }).exec((err, result) => {
        if (err) return res.status(422).json({ message: err })
        console.log('Here?', result);
        res.json(result);
    });
});

router.put('/unlikePost', requireLogin, (req, res) => {
    Post.findByIdAndUpdate(req.body.postId, {
        $pull: { likedBy: req.user._id }
    }, {
        new: true
    }).exec((err, result) => {
        if (err) return res.status(422).json({ message: err })
        res.json(result);
    });
});

module.exports = router;