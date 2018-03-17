var express         = require('express'),
    app             = express(),
    bodyParser      = require('body-parser'),
    passport        = require('passport'),
    methodOverride  = require('method-override'),
    mongoose        = require('mongoose');



// setting the basic functionalities
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));

//connecting to mongoose
mongoose.Promise = global.Promise;

// mongoose.connect("mongodb://localhost/kisaan_sewa");
mongoose.connect("mongodb://bytecloud:bytecloud@ds012168.mlab.com:12168/technovate");



// including the routes
var indexRoutes = require('./routes/index');

app.use('/', indexRoutes);

app.listen('3000', function(){
    console.log("Technovate listening on port 3000");
})