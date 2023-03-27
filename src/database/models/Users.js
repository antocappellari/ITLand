module.exports = (sequelize, dataTypes)=>{

    const alias = "Users";
    const cols = {

        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        first_name: {
            type: dataTypes.STRING(50),
            allowNull: false,
        },
        last_name: {
            type: dataTypes.STRING(50),
            allowNull: false,
        },
        email: {
            type: dataTypes.STRING(250),
            allowNull: false,
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        image_id:dataTypes.INTEGER,
        rol_id:dataTypes.INTEGER,
        
    }
    const config = {
        tableName: 'users',
        timestamps: true,
        created_at: 'created_at',
        updated_at: 'updated_at',
        deleted_at: 'deleted_at'
    }
    

    const Users = sequelize.define(alias, cols, config)
    return Users
}