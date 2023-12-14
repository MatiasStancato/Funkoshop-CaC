const express = require ("express");
const path = require ("path");


const port = 4000;

const app = express();

//Archivos de rutas

const mainRoutes = require ("./src/routes/mainRoutes")
const shopRoutes = require ("./src/routes/shopRoutes")
const adminRoutes = require ("./src/routes/adminRoutes")
const authRoutes = require ("./src/routes/authRoutes")



//configuracion del motor de vista y directorio de vistas
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"./src/views"))


//configuracion de archivos estaticos 
app.use(express.static(path.join(__dirname,"public")));



// configuracion de rutas
app.use("/",mainRoutes);
app.use("/shop",shopRoutes);
app.use("/admin",adminRoutes);
app.use("/auth",authRoutes);


// levanto servidor
app.listen(port,()=>console.log(`servidor para Funkoshop corriendo  en http://localhost:${port}`));