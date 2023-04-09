const ProductServices = require("../services/ProductServices");

const fs = require("fs"),
  path = require("path"),
  productPath = path.join(__dirname, "../data/products.json");

let db = require("../database/models");
const Products = require("../database/models/Products");

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
      const product = await ProductServices.getProduct(id);
      return res.render("./products/detail.ejs", { product });
    } catch (error) {
      console.log(error);
    }
  },
  products: async (req, res) => {
    try {
      const products = await ProductServices.getAllProducts();
      return res.render("./products/products.ejs", { products });
    } catch (error) {
      console.log(error);
    }
  },
  search(req, res) {
    let body = req.body;
  },
  create: async (req, res) => {
    try {
      const categories = await db.Categories.findAll();
      const brands = await db.Brands.findAll();
      const memories = await db.Memories.findAll();
      const cameras = await db.Camera.findAll();
      const colors = await db.Colors.findAll();
      const sub_categories = await db.Sub_categories.findAll();

      res.render("products/create.ejs", {
        categories,
        brands,
        memories,
        cameras,
        colors,
        sub_categories,
      });
    } catch (error) {}
  },
  creation: async (req, res) => {
    try {
      let body = req.body;
      console.log(body);
      let data = {
        name: body.name,
        price: body.price,
        discount: body.discount,
        width: body.width,
        height: body.height,
        length: body.length,
        camera_id: body.camera_id,
        colors_id: body.color_id,
        brands_id: body.brand_id,
        category_id: body.category_id,
        sub_category_id: body.sub_category_id,
        description: body.description,
        stock: body.stock,
      };
        const product = await db.Products.create(data)
        
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  },

  /* -------- Sprint 4 11.02.2023 ------- Anto, Jose, Romi */

  edit:async(req, res)=>{
    try {

      const categories = await db.Categories.findAll();
      const brands = await db.Brands.findAll();
      const memories = await db.Memories.findAll();
      const cameras = await db.Camera.findAll();
      const colors = await db.Colors.findAll();
      const sub_categories = await db.Sub_categories.findAll();

      res.render("products/edit.ejs", {
        id:req.params.id,
        categories,
        brands,
        memories,
        cameras,
        colors,
        sub_categories,
      });
    } catch (error) {}
   
  },
  edition: async(req, res) =>{
    try {
      let id = req.params.id;
      let body = req.body;
      let data = {
        name: body.name,
        price: body.price,
        discount: body.discount,
        width: body.width,
        height: body.height,
        length: body.length,
        camera_id: body.camera_id,
        colors_id: body.color_id,
        brands_id: body.brand_id,
        category_id: body.category_id,
        sub_category_id: body.sub_category_id,
        description: body.description,
        stock: body.stock,
      };

      const x = await ProductServices.productEdit(id, data);
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  },
  delete: async(req, res)=> {
    try {
      console.log('hlla');
      let x  = await ProductServices.deleteProduct(req.params.id);
      console.log(x);
      return res.redirect("/products");
    } catch (error) {
      console.log(error);
    }

  },
};
// exportacion de controllers
module.exports = productsController;
