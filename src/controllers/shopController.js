const fs = require ("fs")
const funkoShop = JSON.parse(fs.readFileSync("./data/funko.json","utf-8"))

const shopController = 
{
    ShopView:(req,res)=>{
        res.render("./shop/shop",{title:"Shop | FunkoShop",funkoShop:funkoShop,})
    },
    itemId:(req,res)=>{
        const id = req.params.id;
        funkoShop.forEach(coleccion => {
        coleccion.collection.forEach(item => {
            if (item.id == id) {
                res.render('./shop/shopItem', {title: "Item | Funkoshop",id,funkoShop,item});
            }
        });
        });
    },
    shopCart:(req,res)=>res.render("./shop/shopCarrito",{title:"Cart | FunkoShop",funkoShop:funkoShop})
            
    // itemAdd:(req,res)=>res.send("Route for add the current item to the shop cart"),
    // ,
    // shopCheckout:(req,res)=>res.send("Route for  cart check out")

}
module.exports = shopController;