const { JSONCookie } = require("cookie-parser");
const Products = require("../database/models/Products");
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
};
module.exports = ProductServices;
