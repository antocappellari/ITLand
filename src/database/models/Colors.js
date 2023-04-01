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
        Colors.belongsToMany(models.Products,{
            as: 'products',
            through:'products_colors',
            foreignKey: 'colors_id',
            otherKey:'products_id',
            timestamps:false,
        })
    }
    return Colors

}