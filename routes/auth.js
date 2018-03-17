var express = require('express')
router  = express.Router();



router.get('/signup/:email', function(req, res){
    res.render('signup');
});

router.get('/login', function(req, res){
    res.render('login');
});

module.exports = router;