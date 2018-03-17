var express = require('express')
router  = express.Router(),
mongoose    = require('mongoose'),
passport    = require('passport'),
User        = require('../models/user'),
Fest = require('../models/fest.js');

//get user details
router.get('/:username', function(req, res){
    User.findOne({username: req.params.username}, function(err, user){
        if (err) {
            console.log(err);
            return res.status(502).end(); //bad request
        }
        res.status(200);
        console.log("GET: User Details");
        res.json(user).end();
    });
});

//edit profile
router.post('/:username', function(req, res){
    User.findOneAndUpdate({username: req.params.username},req.body, function(err, updatedUser){
        if(err){
            console.log(err);
            return res.status(502).end(); //bad request
        }
        console.log("Updated User Details for");
        return res.status(200).end(); //ok
    });
});

module.exports = router;