var mongoose = require('mongoose');

var departmentSchema = new mongoose.Schema({
    name: String,
    festName: String
});

module.exports = mongoose.model("Department", departmentSchema);