const Products = require("../database/models").Products;
const ProductServices = {
  getAllProducts: async () => {
    try {
      const products = await Products.findAll({
        include:{
          association:'images'
        }
      });
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
          { association: "sub_categories" },
          { association: "brands" },
          { association: "images" },
          { association: "camera" },
          { association: "colors" },
        ],
      });
      console.log(product);
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
      const productUpdated =  await Products.update(data,{
          where:{
            id:id       
          }
      });
      console.log(productUpdated);
      return productUpdated;
    } catch (error) {
      console.log(error);
    }
  },
  deleteProduct: async (id) => {
    try {
      const product = await Products.destroy({
        where:{
          id:id
        }
      });
      return product
    } catch (error) {
      console.log(error);
    }
  }
};
module.exports = ProductServices;
