var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    User = require('../models/user.js'),
    Events = require('../models/event.js')
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
    res.render('organizers/view');
});

// show add organisers dialog to faculty
router.get('/add', function (req, res) {
    res.render('organizers/designation');
});

// logic behind creating organisers
router.post('/add', function (req, res) {
    // async.waterfall([
    //     function (callback) {
    //         var user = new User(req.body);
    //         user.college = currentUser.college;
    //         user.designation = "Head Coordinator";

    //         user.save(function (err, newUser) {
    //             if (err) {
    //                 console.log(err);
    //                 callback(err, null);
    //             }
    //             callback(null, newUser);
    //         })
    //     },
    //     function (user, callback) {
    //         const mailOptions = {
    //             to: user.username, // list of receivers
    //             subject: 'Sign Up for technovate', // Subject line
    //             html: '<a href="http://localhost:3000/auth/signup/' + user.username + '>www.technovate.com/auth/signup</a>'// plain text body
    //         };
    //     }
    // ],
    //     function (err, result) {
    //         if (err) {
    //             console.log(err);
    //         }
    //     });
});

// router.get('/events/',function(req, res){
//     Events.find({festname:req.app.locals.currentUser.fest})
//     if(err){
//         console.log(err);
//         res.redirect('/');
//     }
//     res.render('organizers/event', {'events':})
// });

// router.post('/events/', function(req, res){
//     var event = new Events(req.body);
//     event.save(function(err, newEvent){
//         if(err){
//             console.log(err);
//         }
//         res.redirect('events');
//     });
// });


router.get('/profile', function (req, res) {
    // User.findOne({ username: req.app.locals.currentUser.username }, function (err, user) {
    //     if (err) {
    //         console.log(err);
    //         res.redirect('/faculty');
    //     }
    //     console.log("\n \n \nUser is :" + user + "\n \n \n \n");
    //     res.render('faculty/profile', { 'user': user });
    // });
    res.render('organizers/profile')
});

module.exports = router;