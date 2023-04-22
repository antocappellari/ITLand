module.exports = (sequelize, dataTypes) => {
  const alias = "Images";
  const cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: dataTypes.STRING(200),
      allowNull: false,
    },
  };
  const config = {
    tableName: "images",
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
    paranoid: true,
  };

  const Images = sequelize.define(alias, cols, config);
  Images.associate = (models) => {
    Images.belongsToMany(models.Products, {
      as: "products",
      through: "products_images",
      foreignKey: "image_id",
      otherKey: "products_id",
      timestamps: false,
    });
  };
  return Images;
};
