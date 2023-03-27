module.exports = (sequelize, dataTypes)=>{

    const alias = 'Images'
    const cols = {

        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name:{
            type: dataTypes.STRING(200),
            allowNull: false
        }
    }
    const config = {
        tableName: 'images',
        timestamps: false
    }

    const Images = sequelize.define(alias, cols, config)
    return Images

}