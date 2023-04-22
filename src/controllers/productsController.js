const ProductServices = require("../services/ProductServices");
let db = require("../database/models");
const Images = require("../database/models/").Images

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
      // console.log(products);
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

      return res.render("products/create.ejs", {
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
    if(req.files.length == 0){
      const categories = await db.Categories.findAll();
      const brands = await db.Brands.findAll();
      const memories = await db.Memories.findAll();
      const cameras = await db.Camera.findAll();
      const colors = await db.Colors.findAll();
      const sub_categories = await db.Sub_categories.findAll();

      return res.render("products/create.ejs", {
        categories,
        brands,
        memories,
        cameras,
        colors,
        sub_categories,
      });
      
    }
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
