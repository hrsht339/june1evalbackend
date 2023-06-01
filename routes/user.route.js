const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { userModel } = require("../models/user.model")
const userRouter = express.Router()

userRouter.post("/api/register",async (req,res)=>{
    const {name,email,password,address} = req.body
    try{
        bcrypt.hash(password,3,async (err,hashed)=>{
            const user = new userModel({
                name,email,password:hashed,address
            })
            await user.save()
            res.status(201).send({
                "msg":"user registered",
                user
            })
        })
    }
    catch(err){
        console.log(err)
    }
})

userRouter.post("/api/login",async (req,res)=>{
    const {email,password} = req.body
    try{
        const user = await userModel.findOne({email})
        if(user){
            bcrypt.compare(password,user.password,async (err,result)=>{
               if(result){
                const token = jwt.sign({id:user._id},"masai")
                res.status(201).send({
                    "msg":"user logged in",
                    token
                })

               }
               else{
                res.send({
                    "msg":"wrong password"
                })
               }
                
            })

        }
        else{
            res.send({
                "msg":"user not found"
            })
           }
    }
    catch(err){
        console.log(err)
    }
})

userRouter.put("/api/user/:id/reset",async(req,res)=>{
    const {id} = req.params
    const {email,password,newPassword} = req.body
    try{
        const user = await userModel.findById(id)
        if(user){
            bcrypt.compare(password,user.password,async (err,result)=>{
                if(result){
                    bcrypt.hash(newPassword,3,async(err,hashed)=>{
                        user.password=hashed
                        await userModel.findByIdAndUpdate(id,user)
                        res.status(204).send({
                            "msg":"password changed",
                            user
                        })
                    })
                }
                else{
                    res.send({
                        "msg":"wrong password"
                    })
                }
            })
        }
        else{
            res.send({
                "msg":"user not found"
            })
        }
    }
    catch(err){
        console.log(err)
    }
})


module.exports={
    userRouter
}