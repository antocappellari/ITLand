module.exports = (sequelize, dataTypes)=>{

    const alias = "Cart";
    const cols = {

        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        quantity: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: dataTypes.DECIMAL(10,0),
            allowNull: false,
        },
        cupon_code: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        total: {
            type: dataTypes.DECIMAL(10,0),
            allowNull: false,
        },
        product_id:dataTypes.INTEGER,
       
    }
    const config = {
        tableName: 'cart',
        timestamps: false,

    }
    

    const Cart = sequelize.define(alias, cols, config)
    Cart.associate = (models)=>{
        Cart.hasMany(models.Products,{
            as: 'products',
            foreignKey: 'cart_id'

        })
        Cart.belongsToMany(models.Users,{
            as: 'users',
            through: 'carts_users',
            foreignKey: 'cart_id',
            otherKey: 'user_id',
            timestamps: false,
            foreignKeyConstraint: true
        })
    }

    return Cart


}