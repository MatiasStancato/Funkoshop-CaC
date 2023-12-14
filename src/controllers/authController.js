
const authController = 
{
    login: (req,res)=>{
        res.render("./auth/login",{title:"Login | FunkoShop"})
    },

    register: (req,res)=>{
        res.render("./auth/register",{title:"Register | FunkoShop"})
    },
}
module.exports = authController;