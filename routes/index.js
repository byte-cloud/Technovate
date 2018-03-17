var express = require('express')
    router  = express.Router(),
    mongoose    = require('mongoose'),
    passport    = require('passport'),
    User        = require('../models/user'),
    Fest = require('../models/fest.js');
    
router.get('/', function(req,res){
    res.render('hero');
});

router.get('/dashboard',function(req,res){
    res.render('faculty');
})
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
            res.render('signup-faculty');
        }
        else
            res.redirect('/login');
    });
});

router.get('/signup/:email', function(req, res){
    res.render('signup', {'username' : 'email'});
});

router.get('/login', function(req, res){
    res.render('login');
});

// logic for signup
router.post('/signup/:email', function(req, res){
    var newUser = new User({username: req.params.email});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.redirect('/signup/:email');
        }
        passport.authenticate('local')(req, res, function(){
            User.findOneAndUpdate({username:req.body.username},req.body.user, function(err, updatedUser)
            {
                if(err)
                {
                    console.log(err);
                    return;
                }
                res.redirect('/');
            });
        });
    });
});

// logic for login
router.post('/login',passport.authenticate('local',{
    successRedirect : "/",
    failureRedirect: "/login"
}), function(req, res) {   
});

router.get('/task', function(req, res){
    res.render('task');
});

module.exports = router;