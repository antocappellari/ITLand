const fs = require('fs'),
    path = require('path'),
    productPath = path.join(__dirname , '../data/products.json');

let products = JSON.parse(fs.readFileSync(productPath, 'utf-8'));
let productEdited = [];
console.log(productEdited);

//controllers
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
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
        let id =req.params.id;
        let product = products.find(product => product.id == id)     
        res.render('products/detail.ejs',{
            product,
        })
    },
    products(req,res){
        res.render('products/products.ejs', {products})
        let brands = [];
        products.forEach(product=>{
            if(product.brand=="Samsung"){

            }
        })
    
     },
    search(req,res){
        let body = req.body;
    },
    productCreate(req,res){
        res.render('products/create.ejs')
    },
    productCreation(req,res){
        let body = req.body;
        console.log(body);
        let product={
            id : Date.now(),
            ...body
        }
        products.push(product);
        fs.writeFileSync(productPath,JSON.stringify(products,null," "))
        res.redirect("/products");
    },

    /* -------- Sprint 4 11.02.2023 ------- Anto, Jose, Romi */

    productEdit (req, res) {
        res.render('products/edit.ejs', {productEdited});
        console.log(productEdited);
    },
    productEdition (req, res) {
        let body = req.body;
        let id = req.params.id;
        let product = products.forEach((product, index) => {
            if(product.id==id){
                product.name =body.name;
                product.description=body.description;
                product.brand = body.brand;
                product.category = body.category;
                product.subcategory = body.subcategory;
                product.price = body.price;
                product.discount = body.discount;
                product.color = body.color;
                product.size = body.size;
                product.image[0] = body.image[0];
                product.image[1] = body.image[1];
                product.image[2] = body.image[2];
                product.image[3] = body.image[3];
                product.image[4] = body.image[4];
                product[index]=product;
            }
        })
        console.log(product)
        productEdited.push(product);
        fs.writeFileSync(productPath,JSON.stringify(product,null," "))
        res.redirect("/products/detail/");
    },
    productDelete (req, res) {
        /* PENDIENTE FUNCION */
    }
}
// exportacion de controllers
module.exports = productsController;
