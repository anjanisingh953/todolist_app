const mongoose = require('mongoose');

const userSchema =  new mongoose.Schema({

    name:{
        type: String,
        required: [true, 'name is required']
    },
    email:{
        type:String,
        required:[true,'email is required'],
        unique:true
    },
    password:{
        type:String,
        select:false,
        required:[true, 'password is requied']
    },
    createdAt:{
        type:Date,
        default:Date.now
    }


    
});

const User =  mongoose.model('User',userSchema);

module.exports = {
    User
}

