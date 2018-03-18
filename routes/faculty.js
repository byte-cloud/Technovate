var express = require('express'),
    router  = express.Router(),
    mongoose    = require('mongoose'),
    User    = require('../models/user.js'),
    nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: '',
        pass: ''
    }
});

// show faculty dashboard
router.get('/', function (req, res) {
    res.render('faculty');
});

// show add organisers dialog to faculty
router.get('/add', function(req, res){
    res.render('faculty/organisers');
});

// logic behind creating organisers
router.post('/add', function(req, res){
    async.waterfall([
        function(callback){
            var user = new User(req.body);
            user.college = currentUser.college;
            user.designation = "Head Coordinator";
            
            user.save(function (err, newUser) {
                if (err) {
                    console.log(err);
                    callback(err, null);
                }
                callback(null, newUser);
            })
        },
        function(user, callback){
            const mailOptions = {
                to: user.username, // list of receivers
                subject: 'Sign Up for technovate', // Subject line
                html: '<a href="http://localhost:3000/auth/signup/' + user.username + '>www.technovate.com/auth/signup</a>'// plain text body
            };         
        }
    ],
    function(err, result){
        if(err){
            console.log(err);
            
        }
    });
}); 


module.exports = router;