const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3004
const publicPath = path.resolve(__dirname, '../public');
const usersRoutes = require('./router/usersRoutes.js');
const productsRoutes = require('./router/productsRoutes.js');
const mainRoutes = require('./router/mainRoutes.js');


app.use(express.static(publicPath));
app.set('view ingine', 'ejs')
app.set('views' ,path.join(__dirname ,'views'))

app.use(usersRoutes)
app.use(productsRoutes)
app.use(mainRoutes)

app.listen(PORT,()=>{console.log(`Servidor corriendo en el puerto ${PORT}`)});