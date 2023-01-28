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
        res.render('login.ejs')
    },
    productCart(req,res){
        res.render('productCart.ejs')
    },
    productDetail(req,res){
        res.render('productDetail.ejs')
    },
    products(req,res){
        res.render('products.ejs')
    },
    register(req,res){
        res.render('register.ejs')
    }
}
// exportacion de controllers
module.exports = controller;
