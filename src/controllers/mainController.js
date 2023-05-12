const ProductServices = require('../services/ProductServices');
const mainController = {
    index :async (req,res) => {
        try {
            res.render('index.ejs',{
                products: await ProductServices.getAllProducts()
            })
        } catch (error) {
            console.log(error);
        }
    },
}
// exportacion de controllers
module.exports = mainController;