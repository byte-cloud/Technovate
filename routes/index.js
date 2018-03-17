var express = require('express')
    router  = express.Router();
    
router.get('/', function(req,res){
    res.render('hero');
});

router.get('/get-started', function(req, res){
    res.render('get-started');
});

module.exports = router;