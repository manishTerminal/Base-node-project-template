const express = require("express")
const { bag } = require("../../controllers/shop-controller")

const v1route = express.Router()

v1route.get("/shop", bag)

v1route.get("/shop/car", (req,res)=>{
    res.send("<h1>Car list : </h1>")
})

module.exports = {
    v1route
}