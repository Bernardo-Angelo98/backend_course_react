'use strict'

const repository = require('../repository/user-repository');
/*
var USERS = [
    {'id': 1, 'username':'bruno','password': '123456'},
    {'id': 2, 'username':'paulo','password': '123456'}
];

function getUsers(){
    return USERS;
}


exports.get = async(req,res,next) =>{
    console.log('Entry in user controller');
    res.send(getUsers());
}*/

exports.getAllUsers = async(req,res,next) =>{
    try {
        let dbReturn = await repository.getAll();
        res.status(200).send(dbReturn);
    } catch (e) {
        res.status(500).send(
            {
                status: 500,
                message: 'Ops! Something went wrong',
                error: e
            }
        );
    }
};

exports.addUser = async(req,res,next) =>{
    console.log('Create User');
    try {

        let dbReturnUser = await repository.create(req.body);
        res.status(200).send(dbReturnUser);
        console.log('Created!!');
    } catch (e) {
    
        res.status(500).send(
            
            {
                status: 500,
                message: 'Ops! Something went wrong',
                error: e
            }
        );
    }
};