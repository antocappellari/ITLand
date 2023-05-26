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
        Memories.hasMany(models.Products,{
            as:'products',
            foreignKey:'memory_id'
        })
    }
    return Memories

}