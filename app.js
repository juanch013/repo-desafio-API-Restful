const Product = require('./objects/product.class');
const Contenedor = require('./objects/Contenedor.class');

const express = require('express');
const app = express();
app.use(express.json());
let cont = new Contenedor("products.json");
let productRoutes = require('./routes/productRoutes')

app.use('/productos',productRoutes);

app.listen(3000,()=>{
    console.log("server corriendo pa");
})












