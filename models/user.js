var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    mobileNo: String,
    college: String,
    fest: String,
    department: String,
    designation: String,
    year: String,
    branch: String
});

userSchema.plugin(passportLocalMongoose);
module.exports =  mongoose.model("User", userSchema);