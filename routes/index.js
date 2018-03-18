var express = require('express')
    router  = express.Router(),
    mongoose    = require('mongoose'),
    passport    = require('passport'),
    User        = require('../models/user'),
    Fest = require('../models/fest.js');
    
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
    res.render('auth/signup', {'username' : req.params.email});
});

//for faculty
router.get('/signup', function(req, res){
    res.render('auth/signup-faculty');
});

router.get('/login', function(req, res){
    res.render('auth/login');
});

//for faculty
router.post('/signup', function(req, res){
  var newUser = new User({ username: req.body.username, password: req.body.password, 
    name: req.body.name, mobileNo: req.body.mobileNo, college: req.body.college});
    console.log(newUser);
  newUser.save(function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log('user: ' + newUser.username + " saved.");
      req.login(newUser, function(err) {
        if (err) {
          console.log(err);
        }
        return res.redirect('/');
      });
    }
  });
});

// logic for signup
router.post('/signup/:email', function(req, res){
    var newUser = new User({username: req.params.email});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.redirect('/signup/'+req.params.email);
        }
        User.findOneAndUpdate({username: req.params.email},req.body, function(err, updatedUser)
        {
            if(err)                {
                 console.log(err);
                return;
            }
            req.login(updatedUser, function(err){
                if(err)
                    console.lof(err);
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
    res.render('faculty/task');
});

module.exports = router;