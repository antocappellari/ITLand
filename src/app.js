const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001
const publicPath = path.resolve(__dirname, '../public');
const usersRoutes = require('./router/usersRoutes.js');
const productsRoutes = require('./router/productsRoutes.js');
const mainRoutes = require('./router/mainRoutes.js');
const imageRouter = require('./router/imageRouter.js');
const apiProductRouter = require('./router/api/apiProductRouter.js')
const apiUserRouter = require('./router/api/apiUserRouter.js')
const apiCategoriesRouter = require('./router/api/apiCategories.js')
const methodOverride = require("method-override");
const session = require('express-session');
const userToLoggedMiddleware = require('./middlewares/userLoggedMiddleware.js');
const cookie = require('cookie-parser')
const cors = require('cors');
const { error } = require('console');

app.use(cors({origin:'*'}))

app.use(session({
    secret: "is secret",
    resave: false,
    saveUninitialized: false
}))
app.use(cookie("es mi clave secreta"))

app.use(userToLoggedMiddleware)

app.use(express.static(publicPath));
app.set('view ingine', 'ejs');
app.set('views' ,path.join(__dirname ,'views'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));

app.use('/',mainRoutes);
app.use('/images',imageRouter);
app.use('/users',usersRoutes);
app.use('/products',productsRoutes);


app.use('/api/products/',apiProductRouter);
app.use('/api/users/',apiUserRouter);
app.use('/api/categories',apiCategoriesRouter);
// app.use((req, res, next)=>{
//     res.status(404).render("not-found")
//         })


app.listen(PORT,()=>{console.log(`Servidor corriendo en el puerto ${PORT}`)});
