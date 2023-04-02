module.exports = (sequelize, dataTypes)=>{

    const alias = 'Memories'
    const cols = {

        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        memory:{
            type: dataTypes.STRING(10),
            allowNull: false
        },
        type:{
            type: dataTypes.STRING(10),
            allowNull: false
        }
    }
    const config = {
        tableName: 'memories',
        timestamps: false
    }

    const Memories = sequelize.define(alias, cols, config)
    Memories.associate = (models)=>{
        Memories.belongsToMany(models.Products,{
            as: 'products',
            through:'products_memories',
            foreignKey: 'memories_id',
            otherKey:'products_id',
            timestamps:false,
        })
    }
    return Memories

}