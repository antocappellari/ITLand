module.exports = (sequelize, dataTypes)=>{

    const alias = 'Colors'
    const cols = {

        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        color:{
            type: dataTypes.STRING(10),
            allowNull: false
        }
    }
    const config = {
        tableName: 'colors',
        timestamps: false
    }

    const Colors = sequelize.define(alias, cols, config)
    Colors.associate = (models)=>{
        Colors.hasMany(models.Products,{
            as: 'products',
            foreignKey: 'products_id',
        })
    }
    return Colors

}