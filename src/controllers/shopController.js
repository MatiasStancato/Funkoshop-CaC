

const shopController = {
    home: (req,res)=>res.send("Route for Shop View"),
    shopId:(req,res)=>res.send(`Route for find and retrieve a producto from ${req.params.id} View`),
    shopAdd:(req,res)=>res.send("Route for add the current item to the shop cart"),
    shopCart:(req,res)=>res.send("Route for shop cart View"),
    shopCheckout:(req,res)=>res.send("Route for  cart check out")

}


module.exports = shopController;