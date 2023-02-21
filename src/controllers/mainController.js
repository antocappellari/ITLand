
const fs = require('fs'),
    path = require('path'),
    productPath = path.join(__dirname , '../data/products.json');

let products = JSON.parse(fs.readFileSync(productPath, 'utf-8'));

const mainController = {
    index(req,res){
        res.render('index.ejs' ,{
            products : products
        })
    },
}
// exportacion de controllers
module.exports = mainController;