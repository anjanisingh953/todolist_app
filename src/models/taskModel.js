const mongoose = require('mongoose');

const taskSchema =  new mongoose.Schema({

    title:{
        type: String,
        required: [true, 'name is required']
    },
    description:{
        type:String,
        required:[true,'email is required']
    },
    isCompleted:{
        type:Boolean,
        default:false 
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:[true,'User ObjectId is required']
    },
    createdAt:{
        type:Date,
        default:Date.now
    }


    
});

const Task =  mongoose.model('Task',taskSchema);

module.exports = {
    Task
}

