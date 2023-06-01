const express = require("express")
const { restaurantModel } = require("../models/restaurant.model")

const restaurantRouter = express.Router()

restaurantRouter.get("/api/restaurants",async(req,res)=>{
    try{
        const data = await restaurantModel.find()
        res.status(200).send({
            "msg":"all the restaurants down below",
            data
        })
    }
    catch(err){
        console.log(err)
    }
})

restaurantRouter.post("/api/restaurants",async(req,res)=>{
    const rest = req.body
    try{
        const data = new restaurantModel(rest)
        await data.save()
        res.status(200).send({
            "msg":"restaurant added",
            data
        })
    }
    catch(err){
        console.log(err)
    }
})

restaurantRouter.get("/api/restaurants/:id",async(req,res)=>{
    const {id} = req.params
    try{
        const data = await restaurantModel.findById(id)
        if(data){
            res.status(200).send({
                "msg":"one restaurant down below",
                data
            })
        }
        else{
            res.send({
                "msg":"restaurant not found"
            })
        }
        
    }
    catch(err){
        console.log(err)
    }
})

restaurantRouter.get("/api/restaurants/:id/menu",async(req,res)=>{
    const {id} = req.params
    try{
        const data = await restaurantModel.findById(id)
        if(data){
            res.status(200).send({
                "msg":"menu down below",
                "menu":data.menu
            })
        }
        else{
            res.send({
                "msg":"restaurant not found"
            })
        }
        
    }
    catch(err){
        console.log(err)
    }
})

// restaurantRouter.post("/api/restaurants/:id/menu",async(req,res)=>{
//     const {id} = req.params
//     try{
//         const data = await restaurantModel.findById(id)
//         if(data){
//             res.status(200).send({
//                 "msg":"menu updated",
//                 "menu":data.menu
//             })
//         }
//         else{
//             res.send({
//                 "msg":"restaurant not found"
//             })
//         }
        
//     }
//     catch(err){
//         console.log(err)
//     }
// })

restaurantRouter.put("/api/restaurants/:id/menu",async(req,res)=>{
    const {id} = req.params
    const menu = req.body
    try{
        const data = await restaurantModel.findById(id)
        if(data){
            data.menu.push(menu)
            await restaurantModel.findByIdAndUpdate(id,data)
            res.status(200).send({
                "msg":"menu down below",
                "menu":data.menu
            })
        }
        else{
            res.send({
                "msg":"restaurant not found"
            })
        }
        
    }
    catch(err){
        console.log(err)
    }
})

restaurantRouter.delete("/api/restaurants/:Rid/menu/:Mid",async(req,res)=>{
    const Rid = req.params.Rid
    const Mid = req.params.Mid
    try{
        const data = await restaurantModel.findById(Rid)
        if(data){
            let arr=[]
            for(let i=0;i<data.menu.length;i++){
                if(data.menu[i]._id!=Mid){
                    arr.push(data.menu[i])
                }
            }
            data.menu=arr
            // data.menu.push(menu)
            await restaurantModel.findByIdAndUpdate(Rid,data)
            res.status(200).send({
                "msg":"menu deleted",
                "menu":data.menu
            })
        }
        else{
            res.send({
                "msg":"restaurant not found"
            })
        }

    }
    catch(err){
        console.log(err)
    }
})

module.exports={
    restaurantRouter
}