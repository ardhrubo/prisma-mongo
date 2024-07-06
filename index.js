const express = require('express');
const cookieParser = require('cookie-parser');
const userRouter  = require('./routes/user.route.js');


const app = express();
require('dotenv').config({
    path: '/.env'
});

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// cookie middleware

app.use(cookieParser());



app.use('/api',userRouter)



app.listen(3000,()=>{
    console.log("Server is running perfectly")
})




