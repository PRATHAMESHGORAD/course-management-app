const express = require('express');
const router = require('./router/courserouter')
const {connectDB} = require('./db')
const cors = require('cors');

const app = express()
connectDB()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/course",router)

app.listen(2000,()=>{
    console.log("running");
    
})
//used to app backend controellregit