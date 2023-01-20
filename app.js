const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.resolve(__dirname, './public');
const PORT = process.env.PORT||3000

app.use(express.static(publicPath));
app.get('/', (req, res)=> res.sendFile(path.resolve('./views/index.html')))
app.get('/login',(req,res)=> res.sendFile(path.resolve('./views/login.html')))
app.get('/productCart', (req, res) => res.sendFile(path.resolve('./views/productCart.html')))
app.get('/productDetail', (req, res) => res.sendFile(path.resolve('./views/productDetail.html')))
app.get('/register',(req,res)=> res.sendFile(path.resolve('./views/register.html')))
app.get('/aboutUs',(req,res)=> res.sendFile(path.resolve('./views/aboutUs.html')))
app.get('/products',(req,res)=> res.sendFile(path.resolve('./views/products.html')))
app.get('/contactUs',(req,res)=> res.sendFile(path.resolve('./views/contactUs.html')))
app.get('/fav',(req,res)=> res.sendFile(path.resolve('./views/fav.html')))




app.listen(PORT,()=>{console.log(`Servidor corriendo en el puerto ${PORT}`)});












