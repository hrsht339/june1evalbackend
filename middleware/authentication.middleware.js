const jwt = require("jsonwebtoken")

const authentication = (req,res,next)=>{
    const token = req.headers.authorization
    if(token){
        const decoded = jwt.verify(token,"masai")
        if(decoded){
            req.body.user=decoded.id
            next()
        }
        else{
            res.send("please login first")
        }
    }
    else{
        res.send("please login first")
    }
}

module.exports={
    authentication
}