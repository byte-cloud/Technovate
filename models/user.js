var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
    mobileNo: String,
    college: String,
    fest: String,
    designation: String,
});

userSchema.plugin(passportLocalMongoose);
module.exports =  mongoose.model("User", userSchema);