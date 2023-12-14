const fs = require ("fs")
const funkoShop = JSON.parse(fs.readFileSync("./data/funko.json","utf-8"))


const mainController = 
{
    home:(req,res)=>{
        res.render("home",{title: "Home | Funkshop",funkoShop:funkoShop})
    },
    contact:(req,res)=>{
        res.render("./home/contact",{title: "Contact | Funkshop"})
    },
    about:(req,res)=>{
        res.render("./home/about",{title: "About | Funkshop"})
    },
    faqs:(req,res)=>{
        res.render("./home/faqs",{title: "Faqs | Funkshop"})
    }
}

module.exports = mainController