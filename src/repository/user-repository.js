// function used to access DB

'use strict'

const mongoose = require('mongoose');
const User = mongoose.model('user');
const projection = '_id name email creationDate';

exports.getAll = async() =>{
    return await User.find({status:true});
}

exports.create = async(data) =>{
    let user = new User(data);

    return await user.save();
}

exports.update = async(id,data) =>{
    console.log(data);
    //let userUpdate =
    return await User.findByIdAndUpdate(id,{
        $set:{
            name:data.name,
            email:data.email,
            password:data.password,
            status:data.status
        }
    
    });
}

exports.delete = async(id) =>{
    return await User.findByIdAndDelete({_id:id});
}

exports.deleteLogic = async(id,data) =>{
    return await User.findByIdAndUpdate(id,{
        $set: {
            status:false
        }
    });
}
