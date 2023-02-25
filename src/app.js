const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001
const publicPath = path.resolve(__dirname, '../public');
const usersRoutes = require('./router/usersRoutes.js');
const productsRoutes = require('./router/productsRoutes.js');
const mainRoutes = require('./router/mainRoutes.js');
const methodOverride = require("method-override");


app.use(express.static(publicPath));
app.set('view ingine', 'ejs');
app.set('views' ,path.join(__dirname ,'views'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));

app.use('/',mainRoutes);
app.use('/users',usersRoutes);
app.use('/products',productsRoutes);


app.listen(PORT,()=>{console.log(`Servidor corriendo en el puerto ${PORT}`)});