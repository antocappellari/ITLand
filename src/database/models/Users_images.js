module.exports = (sequelize, dataTypes)=>{

    const alias = 'Users_images'
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
        tableName: 'users_images',
        timestamps: false
    }

    const Users_images = sequelize.define(alias, cols, config)
    return Users_images

}