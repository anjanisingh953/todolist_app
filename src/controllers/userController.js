const {User} = require('../models/userModel')
const {ErrorHandler} = require('../middlewares/error');

const bcrypt = require('bcryptjs');
const sendCookie = require('../utils/features')


const login = async (req,res,next)=>{
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    if(!user){
        return next(new ErrorHandler("Invalid email or password",400)); 
    }

    console.log(password, '>>>>',  user.password)
    const isMatch = await bcrypt.compare(password, user.password);
    
    if(!isMatch){
        return next(new ErrorHandler("Invalid email or password",400)); 
    }

    sendCookie(user,res,`Welcome, ${user.name}`,200);
}
 

const register = async(req,res)=>{
    const { name, email, password } = req.body;
    let user = await User.findOne({email});
    if(user){
        return next(new ErrorHandler("User Already exist",400)); 
    }

    const hashedPassword = await bcrypt.hash(password,10);
    user = await User.create({ name, email, password: hashedPassword });
    sendCookie( user, res, "Registered successfully", 201 );
}

 const getMyProfile = (req,res)=>{

    res.status(200).json({ success:true, user:req.user });
}

const logout = (req,res)=>{
    res.status(200).cookie("token","",{expiresIn: new Date(Date.now()) })
    .json({ success: true,  user:req.user });
}

module.exports = {
    login,
    register,
    getMyProfile,
    logout 
}
