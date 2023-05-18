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
            unique: true
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        address:dataTypes.STRING(150),
        cell:{
            type:dataTypes.INTEGER,
            default: 0
        },
        image:dataTypes.STRING(100),
        rol_id:dataTypes.INTEGER,
        
    }
    const config = {
        tableName: 'users',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
        
    }
    

    const Users = sequelize.define(alias, cols, config)
    Users.associate = (models)=>{
        Users.belongsTo(models.Users_rol, {
            as: "users_rol",
            foreignKey: "rol_id",
          });
    }
    return Users
}