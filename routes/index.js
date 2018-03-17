var express = require('express'),
    mongoose = require('mongoose'),
    Fest = require('../models/fest.js'),
    router  = express.Router();
    
router.get('/', function(req,res){
    res.render('hero');
});

router.get('/get-started', function(req, res){
    res.render('get-started');
});

router.post('/get-started', function(req, res){
    var newFest = new Fest({name: req.body.name});
    newFest.save(function(err, fest){
        if(err){
            console.log(err);
            res.redirect('/get-started');
        }
        if(fest.owner == null){
            res.redirect('/signup');
        }
        else
            res.redirect('/login');
    });
});

router.get('/signup/:email', function(req, res){
    res.render('signup');
});

router.get('/signup', function(req, res){
    res.render('signup');
});

router.get('/login', function(req, res){
    res.render('login');
});

module.exports = router;