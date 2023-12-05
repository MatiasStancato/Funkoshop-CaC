const express = require ("express");
const app = express();
const mainRoutes = require ("./src/router/mainRoutes")
const shopRoutes = require ("./src/router/shopRoutes")
const adminRoutes = require ("./src/router/adminRoutes")
const authRoutes = require ("./src/router/authRoutes")

app.use(express.static("public"));

app.use("/",mainRoutes);
app.use("/shop",shopRoutes);
app.use("/admin",adminRoutes);
app.use("/auth",authRoutes);


app.listen(4000,()=>
console.log("servidor conrriendo en http://localhost:4000"));