var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
    name: String,
    fest: String,
    description: String,
    members: [{type: String}]
});

module.exports = mongoose.model('Event', eventSchema);