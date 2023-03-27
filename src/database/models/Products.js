module.exports = (sequelize, dataTypes)=>{

    const alias = "Products";
    const cols = {

        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(120),
            allowNull: false,
        },
        price: {
            type: dataTypes.DECIMAL(10,0),
            allowNull: false,
        },
        discount: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        width: {
            type: dataTypes.DECIMAL(10,0),
            allowNull: false,
        },
        height: {
            type: dataTypes.DECIMAL(10,0),
            allowNull: false,
        },
        length: {
            type: dataTypes.DECIMAL(10,0),
            allowNull: false,
        },
        camera_id:dataTypes.INTEGER,
        memory_id:dataTypes.INTEGER,
        category_id:dataTypes.INTEGER,
        description:{
            type:dataTypes.STRING(500),
            allowNull: false
        },
        stock:{
            type: dataTypes.INTEGER,
            allowNull: false
        }
    }
    const config = {
        tableName: 'products',
        timestamps: true,
        created_at: 'created_at',
        updated_at: 'updated_at',
        deleted_at: 'deleted_at'
    }
    

    const Products = sequelize.define(alias, cols, config)

    return Products


}