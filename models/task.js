var mongoose =require('mongoose');

var taskSchema = new mongoose.Schema({
    name: String,
    description: [{type:String}],
    deadline: String,
    members: [{type:String}],
    status: boolean,
    feedback: [{type:String}],
    feedbackDescription: [{type:String}]
});

module.exports =  mongoose.model("Task", taskSchema);