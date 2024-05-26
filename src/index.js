const express = require("express");

const app = express();

const {PORT, logger} = require("./config");
const { mainroute } = require("./routes");

app.use("/api",mainroute)
 
app.get("/", (req,res)=>{
    res.send({msg: "hello server!"})
})

app.listen(PORT, ()=>{
    console.log(`server is listening at ${PORT}`)
    logger.logger.info('info', "127.0.0.1 - there's no place like home");
logger.logger.info("127.0.0.1 - there's no place like home");
      
})