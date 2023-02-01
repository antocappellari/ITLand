const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3004
const publicPath = path.resolve(__dirname, '../public');
const router = require('./router/router.js')

app.use(express.static(publicPath));
app.set('view ingine', 'ejs')
app.set('views' ,path.join(__dirname ,'views'))

app.use(router)

app.listen(PORT,()=>{console.log(`Servidor corriendo en el puerto ${PORT}`)});