var express = require('express');
var router = express.Router();

var Post = require('../models/posts');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express RESTful APIs'});
});

router.post('/', (req, res) => {

    let success = [];
    console.log(req.body.i_name);
    const newPost = new Post({
        name: req.body.i_name,
        salary: req.body.i_salary
    });

    newPost.save((err, newpost) => {
        if (err) {
            console.log(err);
        } else {

            if (newpost) {
                success.push({message: 'Data Inserted!'});
                console.log(req.body);
                console.log("Data Inserted!!!!");
                res.render('index', {title: 'Express RESTful APIs', 'success': success});
            }

        }
    });

});


module.exports = router;
