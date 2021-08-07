const express = require('express');
const mongoose = require('mongoose');
const {User} = require('../models/user');
var router = express.Router();

router.post('/',async (req,res)=>{
    User.findOne({
        "email":req.body.email,
        "password": req.body.password
    }).then(async(data)=>{
        return res.status(200).send(data);
    }).catch(()=>{
        return res.status(400).send('User Not Found');
    })
})
module.exports = router;