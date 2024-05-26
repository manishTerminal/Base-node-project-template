const express = require("express")
const { v1route } = require("./v1")

const mainroute = express.Router()

mainroute.use("/v1", v1route)

module.exports = {
    mainroute
}