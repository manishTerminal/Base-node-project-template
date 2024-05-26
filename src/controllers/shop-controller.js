
const bag = (req,res)=>{
    return res.json({
        success: true,
        message: "Bag is available",
        data : {}
    })
}


module.exports = {
    bag
}