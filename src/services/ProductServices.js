const Products = require("../database/models").Products;
const ProductServices = {
  getAllProducts: async () => {
    try {
      const products = await Products.findAll();
      return products;
    } catch (error) {
      console.log(error);
    }
  },
  getProduct: async (id) => {
    try {
      const product = await Products.findByPk(id, {
        include: [
          { association: "categories" },
          { association: "images" },
          { association: "memories" },
          { association: "camera" },
          { association: "colors" },
        ],
      });
      return product;
    } catch (error) {
      console.log(error);
    }
  },
  productCreate: async (data) => {
    try {
      const newProduct = await Products.create(data);
      return newProduct;
    } catch (error) {
      console.log(error);
    }
  },
  productEdit:async(id,data)=>{
    try {
      console.log(id);
      console.log(data);
      const d = await Products.findAll();
      console.log(d);
      const productUpdated =  await Products.update(
        {
          ...data
        }
        ,{
          where:{
            id:id       
          }
      });
      console.log(productUpdated,'----...lñlñ...........');
      return productUpdated;
    } catch (error) {
      console.log(error);
    }
  },
  deleteProduct: async (id) => {
    try {
      const product = await Products.destroy(id);
      console.log(product);
      return res.send("success!!!");
    } catch (error) {
      console.log(error);
    }
  }
};
module.exports = ProductServices;
