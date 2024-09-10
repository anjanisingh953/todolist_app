const {ErrorHandler} = require('../middlewares/error');
const {Task} = require('../models/taskModel');

const newTask = async(req,res)=>{
 
    const { title, description } = req.body;

    await Task.create({ title, description, user:req.user });

    res.status(201).json({ success:true, message: "Task added successfully" });

}

const getMyTask = async(req,res)=>{
    const userid = req.user.id;
    const tasks = await Task.find({ user: userid });

    res.status(200).json({ success:true, tasks });
}
    


const updateTask = async(req,res,next)=>{

    const task = await Task.findById(req.params.id);
    if(!task){
        return next(new ErrorHandler("This is new err message",501)); 
    }

    task.isCompleted = !task.isCompleted;

    await task.save();
    res.status(200).json({ success:true, message:"Task updated" });
}

const deleteTask = async(req,res,next)=>{

    const task = await Task.findOne({email:req.params.id});

    if(!task){

            return next(new ErrorHandler("This is new err message",501)); 
    }
    await task.deleteOne();


    res.status(200).json({ success:true, message: "Task deleted"  });
}

module.exports = {
    newTask,
    getMyTask,
    updateTask,
    deleteTask
}