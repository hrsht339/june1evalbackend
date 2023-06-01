const express = require("express")
const {connection} = require("./config/db")
const { userRouter } = require("./routes/user.route")
const { restaurantRouter } = require("./routes/restaurant.route")
const { orderRouter } = require("./routes/order.route")
const { authentication } = require("./middleware/authentication.middleware")
const app = express()

app.use(express.json())
app.use("/",(req,res)=>{
    res.send("Welcome to Food Delivery App")
})
app.use("/",userRouter)
app.use(authentication)
app.use("/",restaurantRouter)
app.use("/",orderRouter)

app.listen(4500,async()=>{
    try{
        await connection 
        console.log("db connected")
    }
    catch(err){
        console.log(err)
    }
    console.log("server connected")
})