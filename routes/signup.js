const express = require('express');
const {User} = require('../models/user');
var router = express.Router();

router.post('/',async (req,res)=>{
    let user = new User({
        "fname": req.body.fname,
        "lname": req.body.lname,
        "email": req.body.email,
        "password": req.body.password,
        "roll": req.body.roll,
        "dob": req.body.dob
    });
    await user.save().then(()=>{
        return res.status(200).send(user);
    }).catch((err)=>{
        return res.status(400).send(err);
    })
})
module.exports = router;