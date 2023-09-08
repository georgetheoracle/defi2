const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv= require('dotenv')
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connected to mongodb')
}).catch((error)=>{
    console.log(error)
})




const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server Listening on Port ${port}`)
});