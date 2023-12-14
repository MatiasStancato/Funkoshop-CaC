const fs = require ("fs")
const funkoShop = JSON.parse(fs.readFileSync("./data/funko.json","utf-8"))

const adminController =
{
    home:(req,res)=>{
        res.render("./admin/admin",{title: "Admin | Funkshop",funkoShop:funkoShop,})
        },
    create:(req,res)=>{
        let categoryArray =[]
        let licenceArray=[]
        funkoShop.forEach((collection_id) => {
            collection_id.collection.forEach((category) => {
                if (!categoryArray.includes(category.category_name)) {
                    categoryArray.push(category.category_name)
                }
            })
            collection_id.collection.forEach((licence) => {
                if (!licenceArray.includes(licence.licence_name)) {
                    licenceArray.push(licence.licence_name)
                }
            })
        })
        res.render("./admin/admincreate", { title: "Create | Funkshop", categoryArray, licenceArray })
    },
    edit:(req,res)=>{
        const id = req.params.id;
        let categoryArray =[];
        let licenceArray=[]
        funkoShop.forEach(coleccion => {
        coleccion.collection.forEach(item => {
            if (item.id == id) {
        res.render("./admin/adminedit", {title: "Edit | funkoshop",id,funkoShop,item});
        }  
    });
    });
    },    
    delete:(req,res)=>(res.send(`Route for delete ${req.params.id} item view`)),
}

module.exports = adminController;