const ProductServices = require("../services/ProductServices");
let db = require("../database/models");
const { validationResult } = require("express-validator");
const Images = require("../database/models/").Images;

//controllers
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const productsController = {
  favorite(req, res) {
    res.render("fav.ejs");
  },
  cart(req, res) {
    res.render("products/cart.ejs");
  },
  about(req, res) {
    res.render("aboutUS.ejs");
  },
  detail: async (req, res) => {
    try {
      let id = req.params.id;
      const prods = await ProductServices.getAllProducts()
      console.log(prods.length);
      const products = prods.filter(product => product.id != id)
      console.log(products.length);
      const product = await ProductServices.getProduct(id);
      return res.render("./products/detail.ejs", { product, products });
    } catch (error) {
      console.log(error);
    }
  },
  products: async (req, res) => {
    try {
      const categories = await db.Categories.findAll();
      const brands = await db.Brands.findAll();
      const sub_categories = await db.Sub_categories.findAll();
      const products = await ProductServices.getAllProducts();
      return res.render("./products/products.ejs", {
        categories,
        brands,
       products,
       sub_categories,
      });
    } catch (error) {
      console.log(error);
    }

  },

  create: async (req, res) => {
    try {
      const categories = await db.Categories.findAll();
      const brands = await db.Brands.findAll();
      const memories = await db.Memories.findAll();
      const cameras = await db.Camera.findAll();
      const colors = await db.Colors.findAll();
      const sub_categories = await db.Sub_categories.findAll();
      const rams = await db.Rams.findAll();

      return res.render("products/create.ejs", {
        categories,
        brands,
        memories,
        cameras,
        rams,
        colors,
        sub_categories,
      });
    } catch (error) {}
  },
  creation: async (req, res) => {
    try {
      let {
        name,
        price,
        discount,
        description,
        camera_id,
        color_id,
        brand_id,
        memory_id,
        ram_id,
        category_id,
        sub_category_id,
        stock
      } = req.body;
      const errors = validationResult(req);
      if(!errors.isEmpty()) {
        const categories = await db.Categories.findAll();
        const brands = await db.Brands.findAll();
        const memories = await db.Memories.findAll();
        const rams = await db.Rams.findAll();
        const cameras = await db.Camera.findAll();
        const colors = await db.Colors.findAll();
        const sub_categories = await db.Sub_categories.findAll();
  
        return res.render("products/create.ejs",{
        errors:errors.mapped(),
        oldBody: body,
        categories,
        brands,
        memories,
        cameras,
        rams,
        colors,
        sub_categories,
      })}
      let data = {
        name: name,
        price: price ? price : 0,
        discount: discount ? discount: 0,
        camera_id:camera_id,
        colors_id: color_id,
        brands_id: brand_id,
        memory_id: memory_id,
        rams_id: ram_id,
        category_id: category_id,
        sub_category_id: sub_category_id,
        description: description,
        stock: stock,
      };
      const product = await db.Products.create(data);
      const files = req.files.map(file => ({
        name: file.filename
      }));
      const filesCreated = await Images.bulkCreate(files);
        await product.addImages(filesCreated);        
      res.redirect("/products");
    } catch (error) {
      console.log(error);
    }
  },
  edit:async(req, res)=>{
    try {
      const {id}= req.params
      const product =  await ProductServices.getProduct(id);
      const categories = await db.Categories.findAll();
      const brands = await db.Brands.findAll();
      const cameras = await db.Camera.findAll();
      const colors = await db.Colors.findAll();
      const sub_categories = await db.Sub_categories.findAll();
      res.render("products/edit.ejs", {
        product,
        categories,
        brands,
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
        camera_id: body.camera_id,
        colors_id: body.color_id,
        brands_id: body.brand_id,
        category_id: body.category_id,
        sub_category_id: body.sub_category_id,
        description: body.description,
        stock: body.stock,
      };
      await ProductServices.productEdit(id, data);
      res.redirect("/products");
    } catch (error) {
      console.log(error);
    }
  },
  delete: async(req, res)=> {
    try {
      await ProductServices.deleteProduct(req.params.id);
      return res.redirect("/products");
    } catch (error) {
      console.log(error);
    }

  },
};
// exportacion de controllers
module.exports = productsController;
