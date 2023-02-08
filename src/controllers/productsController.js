const productsController = {
    favorite(req,res){
        res.render('fav.ejs')
    },
    index(req,res){
        res.render('index.ejs')
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
    
    productCreate(req,res){
        res.render('./products/productCreate.ejs')
    },
}
// exportacion de controllers
module.exports = productsController;
