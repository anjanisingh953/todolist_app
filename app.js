const express = require('express');
const app = express();

const userRouter = require('./src/routes/userRoutes')
const taskRouter = require('./src/routes/taskRoutes');
const cookieParser = require('cookie-parser');
const {errorMiddleware} = require('./src/middlewares/error');
const {handleUnknownReq} = require('./src/utils/unknown_routes')
const cors = require('cors');

//using middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:process.env.FRONTEND_URL,
    methods:['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials:true     //Make sure to use {withCredentials:true} in axios in reactjs app to work cookies functionality properly
}))

//using routes
app.use('/api/v1/users',userRouter);
app.use('/api/v1/task',taskRouter);
app.use('/*',handleUnknownReq)

app.use(errorMiddleware);

module.exports = app
