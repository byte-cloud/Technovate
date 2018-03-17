var express         = require('express'),
    app             = express(),
    bodyParser      = require('body-parser'),
    passport        = require('passport'),
    localStrategy   = require('passport-local'),
    methodOverride  = require('method-override'),
    mongoose        = require('mongoose');

// setting the basic functionalities
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));

//connecting to mongoose
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://bytecloud:bytecloud@ds012168.mlab.com:12168/technovate");

//requiring model
var User = require('./models/user');

app.use(require('express-session')({
    secret:"Its a secret",
    resave: false,
    saveUninitialized: false
}));

// Passport configuration
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new localStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// Static data for all views
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});

// including the routes
var indexRoutes = require('./routes/index');

app.use('/', indexRoutes);

app.listen('3000', function(){
    console.log("Technovate listening on port 3000");
})