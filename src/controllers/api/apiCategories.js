
const Categories = require('../../database/models').Categories;
const Products = require('../../database/models').Products;
const apiCategories = {
    getAllCategories:async  (req,res)=>{
        try {
            const categories = await Categories.findAll({
                include:[{
                    model:Products,
                    as:'products',
                    include:[
                        { association: "categories" },
                        { association: "sub_categories" },
                        { association: "brands" },
                        { association: "rams" },
                        { association: "images" },
                        { association: "camera" },
                        { association: "colors" },
                    ]
                }],
                raw:false
            });
            console.log(categories);
            // console.log(await Products.findAll({raw:false}));
            return res.status(200).json({
                meta:{
                    status:200,
                    url:req.originalUrl
                },
                categories:categories
            })
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                meta:{
                    status:400,
                    url:req.originalUrl
                },
                errores:{
                    message:'not found'
                }
            })
        }
    },
    getCategory:async(req,res)=>{
        try {
            const category = await Categories.findByPk(req.params.categoryId);
            return res.status(200).json({
                meta:{
                    status:200,
                    url:req.originalUrl
                },
                category
            })
        } catch (error) {
            return res.status(400).json({
                meta:{
                    status:400,
                    url:req.originalUrl
                },
                errores:{
                    message:'not found'
                }
            })
        }
    }
}
module.exports = apiCategories