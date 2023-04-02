module.exports = (sequelize, dataTypes) => {
  const alias = "Sub_categories";
  const cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
  };
  const config = {
    tableName: "sub_categories",
    timestamps: false,
  };

  const Sub_categories = sequelize.define(alias, cols, config);
  Sub_categories.associate = (models) => {
    Sub_categories.hasMany(models.Products, {
      as: "products",
      foreignKey: "sub_category_id",
    });
  };
  return Sub_categories;
};
