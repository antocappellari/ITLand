module.exports = (sequelize, dataTypes) => {
  const alias = "Products";
  const cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: dataTypes.STRING(120),
      allowNull: false,
    },
    price: {
      type: dataTypes.DECIMAL(10, 0),
      allowNull: false,
    },
    discount: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    camera_id: dataTypes.INTEGER,
    colors_id: dataTypes.INTEGER,
    category_id: dataTypes.INTEGER,
    sub_category_id: dataTypes.INTEGER,
    description: {
      type: dataTypes.STRING(5000),
      allowNull: false,
    },
    stock: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    active:{
      type: dataTypes.TINYINT(1),
      default:true
    }
  };
  const config = {
    tableName: "products",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
    paranoid: true,
  };

  const Products = sequelize.define(alias, cols, config);
  Products.associate = (models) => {
    Products.belongsTo(models.Categories, {
      as: "categories",
      foreignKey: "category_id",
    });
    Products.belongsTo(models.Sub_categories, {
      as: "sub_categories",
      foreignKey: "sub_category_id",
    });
    Products.belongsTo(models.Brands, {
      as: "brands",
      foreignKey: "brands_id",
    });
    Products.belongsTo(models.Rams, {
      as: "rams",
      foreignKey: "rams_id",
    });
    Products.belongsTo(models.Memories, {
      as: "memories",
      foreignKey: "memory_id",
    });

    Products.belongsTo(models.Camera, {
      as: "camera",
      foreignKey: "camera_id",
    });
    Products.belongsToMany(models.Images, {
      as: "images",
      through: "products_images",
      foreignKey: "products_id",
      otherKey: "images_id",
      timestamps: false,
    });
    Products.belongsTo(models.Colors, {
      as: "colors",
      foreignKey: "colors_id",
    });
  };

  return Products;
};
