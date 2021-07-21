const User = require('../models/usermodel')
const bcrypt = require('bcryptjs')
const jwt =require('jsonwebtoken')


const register = (req,res,next)=>{
    console.log("req recieved");
    console.log(req.body);
    if(req.body.password!=={})
    bcrypt.hash(req.body.password,10,function(err,hashedPass){
        if(err){
            res.json({
                error : err
            })
        }
        let user =new User({
            name : req.body.name,
            password : hashedPass,
        })
        user.save()
        .then(user=>{
                    res.json({
                    message : "User added",
                            })
                     })
        .catch(err=>{
                        res.json({
                        message :'error in saving',
                                })
                     })

                    })
        }
// const login=(req,res,next)=>{
//     var username=req.body.name;
//     var password= req.body.password;
//     User.findOne({$or:[{name:username}]});

// }

module.exports={
    register
}