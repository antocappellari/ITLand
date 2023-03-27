module.exports = (sequelize, dataTypes)=>{

    const alias = 'Users_rol'
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
        tableName: 'users_rol',
        timestamps: false
    }

    const Users_rol = sequelize.define(alias, cols, config)
    return Users_rol

}