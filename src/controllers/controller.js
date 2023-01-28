const controller = {
    aboutUs(req,res){
        res.render('aboutUs.ejs')

    },
    contact(req,res){
        res.render('contactUs.ejs')
    },
    favorite(req,res){
        res.render('fav.ejs')
    },
    index(req,res){
        res.render('index.ejs')
    },
    login(req,res){
        res.render('./users/login.ejs')
    },
    productCart(req,res){
        res.render('./products/productCart.ejs')
    },
    productDetail(req,res){
        res.render('./products/productDetail.ejs')
    },
    products(req,res){
        res.render('./products/products.ejs')
    },
    register(req,res){
        res.render('./users/register.ejs')
    },
    productCreate(req,res){
        res.render('./products/productCreate.ejs')
    },
}
// exportacion de controllers
module.exports = controller;
