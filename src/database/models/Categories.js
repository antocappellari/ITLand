module.exports = (sequelize, dataTypes)=>{

    const alias = 'Categories'
    const cols = {

        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name:{
            type: dataTypes.STRING(100),
            allowNull: false
        }
    }
    const config = {
        tableName: 'categories',
        timestamps: false
    }

    const Categories = sequelize.define(alias, cols, config)
    Categories.associate = (models)=>{
        Categories.hasMany(models.Products,{
            as: 'products',
            foreignKey: 'category_id'
        })
    }
    return Categories

}