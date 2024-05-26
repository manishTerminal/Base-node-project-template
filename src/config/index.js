const dotenv = require('dotenv').config()

module.exports = {
    PORT : process.env.PORT,
    logger : require("./winston-log")
}

 