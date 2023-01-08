const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.resolve(__dirname, './public');
const PORT = 3000

app.use(express.static(publicPath));
app.get('/', (req, res)=> res.sendFile(path.resolve(__dirname, './views/index.html')))
app.get('/productDetail', (req, res) => res.sendFile(path.resolve('./views/productDetail.html')))
app.get('/index', (req, res) => res.sendFile(path.resolve('./views/index.html')))





app.listen(PORT,()=>{console.log(`Servidor corriendo en el puerto ${PORT}`)});












