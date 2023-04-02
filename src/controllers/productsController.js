const fs = require("fs"),
  path = require("path"),
  productPath = path.join(__dirname, "../data/products.json");

// let products = JSON.parse(fs.readFileSync(productPath, 'utf-8'));
let db = require("../database/models");

//controllers
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const productsController = {
  favorite(req, res) {
    res.render("fav.ejs");
  },
  cart(req, res) {
    res.render("products/cart.ejs");
  },
  detail: async (req, res) => {
    try {
      let id = req.params.id;
      let product = await db.Products.findByPk(id, {
        include: [
          { association: "categories" },
          { association: "images" },
          { association: "memories" },
          { association: "camera" },
          { association: "colors" },
        ],
      });
      console.log(product, "---------------------------");
      res.render("products/detail.ejs", { product: product });
    } catch (error) {
      console.log(error);
    }
  },
  products(req, res) {
    // res.render('products/products.ejs', {products})
    // let brands = [];
    // products.forEach(product=>{
    //     if(product.brand=="Samsung"){

    //     }
    // })
    db.Products.findAll().then(function (products) {
      res.render("products/products.ejs", { products: products });
    });
  },
  search(req, res) {
    let body = req.body;
  },
  create: async (req, res) => {
    try {
      const categories = await db.Categories.findAll();
      const brands = await db.Brands.findAll();
      const memories = await db.Memories.findAll();
      const camera = await db.Camera.findAll();
      const colors = await db.Colors.findAll();
      const sub_categories = await db.Sub_categories.findAll();

      res.render("products/create.ejs", {
        categories,
        brands,
        memories,
        camera,
        colors,
        sub_categories
      });
    } catch (error) {}
  },
  creation: async (req, res) => {
    try {
      let body = req.body;
      console.log(body);
      let images = req.files;
    //   const product = await db.Products.create({
    //     ...body
    //   });
    //   console.log(product);
      // db.Images.create({
      //     id : "IM"+Date.now(),
      //     // name:images.imagename como hago para que el nombre de la imagen sea del archivo que sube?
      // })
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  },

  /* -------- Sprint 4 11.02.2023 ------- Anto, Jose, Romi */

  edit(req, res) {
    res.render("products/edit.ejs", {
      id: req.params.id,
    });
  },
  edition(req, res) {
    let id = req.params.id;
    let body = req.body;
    let images = req.files;
    console.log(images);
    let bodyImages = [];

    images.forEach((image) => {
      bodyImages.push(image.filename);
    });
    console.log(bodyImages);
    products.forEach((product, index) => {
      if (product.id == id) {
        product.name = body.name;
        product.description = body.description;
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
    });

    fs.writeFileSync(productPath, JSON.stringify(products, null, " "));
    res.redirect("/products");
  },
  delete(req, res) {
    let id = req.params.id;
    products = products.filter((product) => product.id != id);

    fs.writeFileSync(productPath, JSON.stringify(products, null, " "));
    return res.redirect("/products");
  },
};
// exportacion de controllers
module.exports = productsController;
