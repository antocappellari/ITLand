const fs = require('fs'),
    path = require('path'),
    productPath = path.join(__dirname , '../data/products.json');

let products = JSON.parse(fs.readFileSync(productPath, 'utf-8'));
let db = require("../database/models")

//controllers
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const productsController = {
    favorite(req,res){
        res.render('fav.ejs')
    },
    cart(req,res){
        res.render('products/cart.ejs')
    },
    detail(req,res){
        // let id =req.params.id;
        // let product = products.find(product => product.id == id)     
        db.Products.findByPk(req.params.id,include=[{association:"categories"},{association:"images"},{association:"memories"},{association:"camera"}]).then(function(product){
            res.render('products/detail.ejs',{product:product})
        })
    },
    products(req,res){
        // res.render('products/products.ejs', {products})
        // let brands = [];
        // products.forEach(product=>{
        //     if(product.brand=="Samsung"){

        //     }
        // })
        db.Products.findAll().then(function(products){
            res.render('products/products.ejs', {products:products})
        })
     },
    search(req,res){
        let body = req.body;
    },
    create(req,res){
        res.render('products/create.ejs')
    },
    creation(req,res){
        let body = req.body;
        let images = req.files;
        let bodyImages = []

        images.forEach(image =>{

            bodyImages.push(image.filename)
        });
    
        let product={
            id : Date.now(),
            ...body,
            images : bodyImages

        }
        products.push(product);
        fs.writeFileSync(productPath,JSON.stringify(products,null," "))
        res.redirect("/");
    },

    /* -------- Sprint 4 11.02.2023 ------- Anto, Jose, Romi */

    edit (req, res) {
        res.render('products/edit.ejs',{
            id: req.params.id
        });
    },
    edition (req, res) {
        let id = req.params.id
        let body = req.body;
        let images = req.files;
        console.log(images);
        let bodyImages = []

        images.forEach(image =>{

            bodyImages.push(image.filename)
        });
        console.log(bodyImages);
        products.forEach((product, index) => {
            if(product.id == id){
                product.name =body.name;
                product.description=body.description;
                product.brand = body.brand;
                product.category = body.category;
                product.subcategory = body.subcategory;
                product.price = body.price;
                product.discount = body.discount;
                product.color = body.color;
                product.memory = body.memory;
                product.height = body.height;
                product.length = body.length;
                product.width = body.width;
                product.images[0] = bodyImages[0];
                product.images[1] = bodyImages[1];
                product.images[2] = bodyImages[2];
                product.images[3] = bodyImages[3];
                product.images[4] = bodyImages[4];
                products[index] = product;
            }
        })
        
        fs.writeFileSync(productPath,JSON.stringify(products,null," "))
        res.redirect('/products');
    },
    delete (req, res) {
        let id = req.params.id;
        products = products.filter(product => product.id != id )

        fs.writeFileSync(productPath,JSON.stringify(products , null , " "))
        return res.redirect('/products');
    }
}
// exportacion de controllers
module.exports = productsController;
