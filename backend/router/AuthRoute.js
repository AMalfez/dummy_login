const AuthRoute = require('express').Router();
const User = require('../schema/UserSchema')
const bcrypt = require('bcrypt')

AuthRoute.post('/login',async(req,res)=>{
    const {username,password} = req.body;
    try{
        const user = await User.findOne({username});
        if(!user) res.json({message: "User Doesn't exist", status: false});
        else{
            const match = await bcrypt.compare(password, user.password);
            if(match) res.json({message:"Login success.", status:true, user});
            else res.json({message: "Password is incorrect.", status: false})
        }
    }catch(err){
        console.log(err)
        res.json({message: "Some error occured on server side. Please contact team.", status: false});
    }
})

AuthRoute.post('/signup', async(req,res)=>{
    const {username,password, email} = req.body;
    try{
        const user = await User.findOne({username});
        if(user) res.json({message: "User already exist", status: false});
        else{
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            const user = await User.create({username, password:hash, email});
            res.json({message:"User successfully created", status:true, user});
        }
    }catch(err){
        console.log(err)
        res.json({message: "Some error occured on server side. Please contact team.", status: false});
    }
})

module.exports = AuthRoute