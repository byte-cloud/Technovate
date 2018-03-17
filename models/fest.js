var mongoose = require('mongoose');

var festSchema =  new mongoose.Schema({
    name: String,
    owner: String
});

module.exports = mongoose.model("Fest", festSchema);
