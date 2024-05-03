require('dotenv').config();
const express = require('express')
const cors = require('cors')
const app = express()
const AuthRoute = require('./router/AuthRoute')
const mongoose = require('mongoose')

mongoose.connect(process.env.URL).then(()=>console.log('Connected to mongoDB')).catch(err=>console.log(err))

app.use(express.json())
app.use(cors());
app.use('/auth',AuthRoute);

app.listen(process.env.PORT, ()=>{
    console.log('listening');
})