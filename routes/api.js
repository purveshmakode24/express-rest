var express = require('express');

var router = express.Router();

var Post = require('../models/posts');


// Get all Posts
router.get('/', (req, res) => {
    Post.find({})
        .then(posts => {
            res.send(posts);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving data."
            });
        });
});

// Get Post
router.get('/:id', (req, res) => {
    Post.find({_id: req.params.id})
        .then(post => {
            res.send(post);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving data."
            });
        });
});


// Insert Post
router.post('/add', (req, res) => {
    console.log(req.body);
    let newPost = new Post({
        name: req.body.i_name,
        salary: req.body.i_salary
    });

    newPost.save()
        .then(post => {
            res.send(post);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while inserting data."
            });
        });
});


// Update Post
router.put('/update/:id', (req, res) => {
    // res.send(.json);
    Post.findByIdAndUpdate(req.params.id, {name: req.body.toupdate_name, salary: req.body.toupdate_salary}, {new: true})
        .then(toupdatepost => {
            if (!toupdatepost) {
                return res.status(404).send({
                    message: "Post not found with id " + req.params.id
                });
            }
            res.send(toupdatepost);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while updating data."
            });
        });
});


// Delete Post
router.delete('/delete/:id', (req, res) => {
    Post.findByIdAndRemove(req.params.id)
        .then(todeletepost => {
            if (!todeletepost) {
                return res.status(404).send({
                    message: "Post not found with id " + req.params.id
                });
            }
            res.send({message: "Note deleted successfully!"});
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while Deleting data."
            });
        });
});


module.exports = router;