module.exports = (sequelize, dataTypes)=>{

    const alias = 'Camera'
    const cols = {

        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        resolution:{
            type: dataTypes.STRING(50),
            allowNull: false
        }
    }
    const config = {
        tableName: 'camera',
        timestamps: false
    }

    const Camera = sequelize.define(alias, cols, config)
    Camera.associate = (models)=>{
        Camera.hasMany(models.Products,{
            as: 'products',
            foreignKey: 'camera_id'
        })
    }
    return Camera

}