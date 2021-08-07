const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        trim: true
    },
    fname: {
        type:String,
        required:true
    },
    lname: {
        type:String,
        required:true
    },
    roll: {
        type:String,
        required:true
    },
    dob: {
        type:String,
        required:true
    },
  });

const User = mongoose.model('users', userSchema, 'users');
module.exports.User = User;