require('dotenv').config();
require('./src/db/conn')
const app = require('./app');
const port_number  = process.env.PORT;


app.listen(port_number,(err)=>{
    if(err) console.log(err)
    console.log(`Your app is listening at PORT ${port_number}`);
});