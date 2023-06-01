const express = require("express")
const { orderModel } = require("../models/order.model")

const orderRouter = express.Router()

orderRouter.post("/api/orders",async(req,res)=>{
    const order = req.body
    try{
        const data = new orderModel(order)
        await data.save()
        res.status(200).send({
            "msg":"order created",
            data
        })
    }
    catch(err){
        console.log(err)
    }
})

orderRouter.get("/api/orders/:id",async(req,res)=>{
    const {id} = req.params
    try{
        const data = await orderModel.findById(id)
        res.status(200).send({
            "msg":"order below",
            data
        })
    }
    catch(err){
        console.log(err)
    }
})

orderRouter.put("/api/orders/:id",async(req,res)=>{
    const order = req.body
    const {id} = req.params
    try{
        const data = await orderModel.findById(id)
        if(data){
            const newdat = await orderModel.findByIdAndUpdate(id,order)
            res.status(200).send({
                "msg":"order updated",
                order
            })
        }
        else{
            res.send({
                "msg":"order not found"
            })
        }
    }
    catch(err){
        console.log(err)
    }
})

module.exports={
    orderRouter
}