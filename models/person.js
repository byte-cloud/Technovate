var mongoose = require('mongoose');

var personSchema = new mongoose.Schema({
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

module.exports =  mongoose.model("Person", personSchema);