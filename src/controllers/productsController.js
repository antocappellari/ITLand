const fs = require('fs'),
    path = require('path'),
    productPath = path.join(__dirname , '../data/products.json');

let products = JSON.parse(fs.readFileSync(productPath, 'utf-8'));

//controllers
const productsController = {
    favorite(req,res){
        res.render('fav.ejs')
    },
    index(req,res){
        res.render('index.ejs')
    },
    productCart(req,res){
        res.render('products/cart.ejs')
    },
    productDetail(req,res){
        res.render('products/detail.ejs')
    },
    products(req,res){
        res.render('products/products.ejs')
    },
    
    productCreate(req,res){
        res.render('products/create.ejs')
    },

    /* -------- Sprint 4 11.02.2023 ------- Anto, Jose, Romi */

    productEdit (req, res) {
        res.send() 
        /* PENDIENTE FUNCION */
    },
    productDelete (req, res) {
        res.send()
        /* PENDIENTE FUNCION */
    }
}
// exportacion de controllers
module.exports = productsController;
