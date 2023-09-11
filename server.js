import express from 'express';
import { connect } from 'mongoose';
import userRoute from './routes/userRoute.js'
import { config } from 'dotenv';
config();
const app = express();
const port = 3000;

connect(process.env.MONGO).then(()=>{
    console.log('connected to mongodb')
}).catch((error)=>{
    console.log(error)
});

app.listen(port, ()=>{
    console.log(`Server Listening on Port ${port}`)
});
app.get('/', (req, res) => {
    res.json({
        message: 'API mounted'
    })
});
app.use(express.json())
app.use('/api/user', userRoute)