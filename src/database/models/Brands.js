module.exports = (sequelize, dataTypes)=>{

    const alias = 'Brands'
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
        },
        image:dataTypes.STRING(100)
    }
    const config = {
        tableName: 'brands',
        timestamps: false
    }

    const Brands = sequelize.define(alias, cols, config)
    Brands.associate = (models)=>{
        Brands.hasMany(models.Products,{
            as: 'products',
            foreignKey: 'brands_id'
        })
    }
    return Brands

}