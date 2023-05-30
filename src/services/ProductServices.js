const { Sequelize } = require("../database/models");

const Products = require("../database/models").Products;
const Op = Sequelize.Op;
const ProductServices = {
  getAllProducts: async () => {
    try {
      const products = await Products.findAll({
        include: [
          { association: "categories" },
          { association: "sub_categories" },
          { association: "brands" },
          { association: "rams" },
          { association: "images" },
          { association: "camera" },
          { association: "colors" },
        ],
      });
      console.log(products[0].categories);
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
          { association: "rams" },
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
  productEdit: async (id, data) => {
    try {
      const productUpdated = await Products.update(data, {
        where: {
          id: id,
        },
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
        where: {
          id: id,
        },
      });
      return product;
    } catch (error) {
      console.log(error);
    }
  },
  productlist: async (page, countProducts) => {
    try {
      console.log(countProducts);
      const products = await Products.findAll({
        limit: parseInt(countProducts),
        offset: parseInt(page),
      });
      return products;
    } catch (error) {
      console.log(error);
    }
  },
  productSerch: async (title) => {
    try {
      const products = await Products.findAll({
        include: {
          association: "images",
        },
        where: {
          name: {
            [Op.like]: "%" + title + "%",
          },
        },
      });
      return products;
    } catch (error) {
      console.log(error);
    }
  },
  productFiltered: async (brand, type, category) => {
    try {
      console.log(brand, type);
      let products = await ProductServices.getAllProducts();
      if (brand) {
        products = await Products.findAll({
          include: [
            {
              association: "brands",
              where: {
                name: brand,
              },
            },
            {
              association: "images",
            },
          ],
        });
      }
      if (type) {
        products = await Products.findAll({
          include: [
            {
              association: "categories",
              where: {
                name: type,
              },
            },
            {
              association: "images",
            },
          ],
        });
      }
      if (category) {
        products = await Products.findAll({
          include: [
            {
              association: "sub_categories",
              where: {
                name: category,
              },
            },
            {
              association: "images",
            },
          ],
        });
      }
      if (brand && type) {
        products = await Products.findAll({
          include: [
            {
              association: "categories",
              where: {
                name: type,
              },
            },
            {
              association: "images",
            },
            {
              association: "brands",
              where: {
                name: brand,
              },
            },
          ],
        });
      }
      if (brand && category) {
        products = await Products.findAll({
          include: [
            {
              association: "sub_categories",
              where: {
                name: category,
              },
            },
            {
              association: "images",
            },
            {
              association: "brands",
              where: {
                name: brand,
              },
            },
          ],
        });
      }
      if (type && category) {
        products = await Products.findAll({
          include: [
            {
              association: "sub_categories",
              where: {
                name: category,
              },
            },
            {
              association: "images",
            },
            {
              association: "categories",
              where: {
                name: type,
              },
            },
          ],
        });
      }
      if (brand && type && category) {
        products = await Products.findAll({
          include: [
            {
              association: "categories",
              where: {
                name: type,
              },
            },
            {
              association: "images",
            },
            {
              association: "brands",
              where: {
                name: brand,
              },
            },
            {
              association: "sub_categories",
              where: {
                name: category,
              },
            },
          ],
        });
      }

      return products;
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = ProductServices;
