const Sequelize = require("sequelize");
const sequelize = require("../db/connection");

const Subscription = sequelize.define(
  "subscriptions",
  {
    _id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    productId: {
      type: Sequelize.STRING(35),
      allowNull: false,
    },
    purchaseToken: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

Subscription.associate = (models) => {
  Subscription.belongsTo(models.users);
};

/* business logic one user can have only one subscription */

module.exports = User;
