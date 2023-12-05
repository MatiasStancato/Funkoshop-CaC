
const adminController ={
    home:(req,res)=>(res.send("Route for Admin home view")),
    create:(req,res)=>(res.send("Route for Create view")),
    edit:(req,res)=>(res.send(`Route for Edit ${req.params.id} item view`)),
    delete:(req,res)=>(res.send(`Route for delete ${req.params.id} item view`)),
}

module.exports = adminController;