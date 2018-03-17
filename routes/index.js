var express = require('expresss')
    router  = express.Router();
    
router.get('/', function(req,res){
    res.render('hero');
});

router.get('/get-started', function(req, res){
    res.render('get-started');
});

router.get('/signup', function(req, res){
    res.render('signup');
})

router.get('/login', function(req, res){
    res.render('login');
})

module.exports = router;