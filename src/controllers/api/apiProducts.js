const ProductServices = require("../../services/ProductServices");
// const { product } = require('../productsController');

const apiProduct = {
  getAllProducts: async (req, res) => {
    try {
      const products = await ProductServices.getAllProducts();
      console.log(products);
      return res.status(200).json({
        meta: {
          status: 200,
          success: true,
          url: req.originalUrl,
          count: products.length,
        },
        data: products,
      });
    } catch (error) {
      return res.status(500).json({
        error: {
          status: 500,
          success: false,
          message: "Server Internal Error",
          details: error.message,
        },
      });
    }
  },
  getProduct: async (req, res) => {
    try {
      const { productId } = req.params;
      console.log(productId);
      const product = await ProductServices.getProduct(productId);
      if (product == null) {
        return res.status(404).json({
          meta: {
            status: 404,
            success: false,
            url: req.originalUrl,
          },
          error: {
            message: "Product not found",
          },
        });
      }
      return res.status(200).json({
        meta: {
          status: 200,
          success: true,
          url: req.originalUrl,
        },
        data: product,
      });
    } catch (error) {
      return res.status(500).json({
        error: {
          status: 500,
          success: false,
          message: "Server Internal Error",
          details: error.message,
        },
      });
    }
  },
  createProduct: async (req, res) => {
    try {
      const body = req.body;
      const data = {
        name: body.name,
        price: body.price ? body.price : 0,
        discount: body.discount ? body.discount : 0,
        camera_id: body.camera_id,
        colors_id: body.color_id,
        brands_id: body.brand_id,
        category_id: body.category_id,
        sub_category_id: body.sub_category_id,
        description: body.description,
        stock: body.stock,
      };
      const newProduct = await ProductServices.productCreate(data);
      return res.status(200).json({
        meta: {
          status: 200,
          success: true,
          url: req.originalUrl,
        },
        data: newProduct,
      });
    } catch (error) {
      return res.status(500).json({
        error: {
          status: 500,
          success: false,
          message: "Server Internal Error",
          details: error.message,
        },
      });
    }
  },
  update: async (req, res) => {
    try {
      const { productId } = req.params;
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
      await ProductServices.productEdit(productId, data);
      return res.status(200).json({
        meta: {
          status: 200,
          success: true,
          url: req.originalUrl,
        },
        message: "Product updated succesfully",
      });
    } catch (error) {
      return res.status(500).json({
        error: {
          status: 500,
          success: false,
          message: "Server Internal Error",
          details: error.message,
        },
      });
    }
  },
  delete: async (req, res) => {
    try {
      await ProductServices.deleteProduct(req.params.id);
      return res.status(200).json({
        meta: {
          status: 200,
          success: true,
          url: req.originalUrl,
        },
        message: "Product deleted succesfully",
      });
    } catch (error) {
      return res.status(500).json({
        error: {
          status: 500,
          success: false,
          message: "Server Internal Error",
          details: error.message,
        },
      });
    }
  },
  productlist: async (req, res) => {
    try {
      const { page, countProducts } = req.query;
      const products = await ProductServices.productlist(page, countProducts);
      return res.status(200).json({
        meta: {
          status: 200,
          success: true,
          url: req.originalUrl,
          length: products.length,
        },
        data: products,
      });
    } catch (error) {
      console.log(error);
    }
  },
  search: async (req, res) => {
    try {
      const { title } = req.query;
      const products = await ProductServices.productSerch(title);
      return res.status(200).json({
        meta: {
          status: 200,
          success: true,
          url: req.originalUrl,
          length: products.length,
        },
        data: products,
      });
    } catch (error) {
      console.log(error);
    }
  },
  filtered: async (req, res) => {
    try {
      const { brand, type, category } = req.query;
      let products;
      if (brand) {
        products = await ProductServices.productFiltered(brand, null,null);
      }
      if (type) {
        products = await ProductServices.productFiltered(null, type,null);
      }
      if (category) {
        products = await ProductServices.productFiltered(null, null, category);
      }
      if (brand && type) {
        products = await ProductServices.productFiltered(brand, type,null);
      }
      if (category && type) {
        products = await ProductServices.productFiltered(null, type,category);
      }
      if (brand && category) {
        products = await ProductServices.productFiltered(brand, null,category);
      }
      if (brand && type && category) {
        products = await ProductServices.productFiltered(brand, type, category);
      }
      console.log(products);
      return res.status(200).json({
        meta: {
          status: 200,
          success: true,
          url: req.originalUrl,
          length: products?.length,
        },
        data: products,
      });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = apiProduct;
