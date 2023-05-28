const ProductServices = require("../services/ProductServices");

const Images = require("../database/models").Images;
const imagesController = {
  createFiles: async (req, res) => {
    try {
      const { productId } = req.params;
      const product = await ProductServices.getProduct(productId);
      const files = req.files.map((file) => ({
        name: file.filename,
      }));
      const filesCreated = await Images.bulkCreate(files);
      await product.addImages(filesCreated);
      return res.redirect(`/products/${productId}/edit`);
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const { id, productId } = req.params;
      const file = req.file;
      if(!file){
      return res.redirect(`/products/${productId}/edit`);
      }
      const fileCreated = await Images.update(
        { name: file.filename },
        {
          where: {
            id: id,
          },
        }
      );
      return res.redirect(`/products/${productId}/edit`);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
        const { id, productId } = req.params;
      const deleteFile = await Images.destroy({
        where: {
          id: id,
        },
      });
      return res.redirect(`/products/${productId}/edit`);
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = imagesController;
