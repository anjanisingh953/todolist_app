const mongoose = require('mongoose');


const databaseConnect = async()=>{
    try {
        await mongoose.connect(process.env.ATLAS_MONGO_URL);
        console.log('Database connected');
    } catch (error) {
        console.log('Database err >>>',error);
    }
}
databaseConnect();