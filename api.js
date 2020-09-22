const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/curso_react',
    {
        useUnifiedTopology:true,
        useNewUrlParser: true
    }
);
var Users = require('./src/model/user');

const userRouter = require('./src/routes/user-route');

const express = require('express');
const app = express();
app.use(bodyParser.json());
app.use('/user',userRouter);
app.listen(4000,function(){
    console.log('Hello Express listen on Port 4000');
});