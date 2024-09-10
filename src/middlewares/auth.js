const jwt = require('jsonwebtoken');
const {User} = require('../models/userModel');

exports.isAuthenticate = async(req,res,next)=>{
    const {token} = req.cookies;  
    console.log('token >>',token);

    if(!token){
        return res.status(404).json({ success:false, message:'Login First'});
    }
    const decoded =  jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    req.user = await User.findById(decoded._id);

    next();
};