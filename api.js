const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var USERS = [
    {'id': 1, 'username':'bruno','password': '123456'},
    {'id': 2, 'username':'paulo','password': '123456'}
];

var HELLO = {
    'msg':'Hello Express'
};

function getHello(){
    return HELLO;
}

function getUsers(){
    return USERS;
}

app.use(bodyParser.json());

app.get('/',function(req,res){
    res.send(getHello());
});

app.get('/users',function(req,res){
    res.send(getUsers());
});

app.listen(4000,function(){
    console.log('Hello Express listen on Port 4000');
});