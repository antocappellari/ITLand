module.exports = (sequelize,dataTypes)=>{
    const alias = 'Rams'
    const cols = {
        id:{
            type: dataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        ram:dataTypes.STRING(100),
        type:dataTypes.STRING(45)
        }
    const config = {
        tableName:'rams',
        timestamps:false
    }
    const Rams  = sequelize.define(alias,cols,config)
    Rams.associate = (models)=>{
        Rams.hasMany(models.Products,{
            as:'products',
            foreignKey:'rams_id'
        })
    }
    return Rams
}