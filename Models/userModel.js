const Sequelize = require("sequelize");
const sequelize = require("../db/connection");

const User = sequelize.define(
  "users",
  {
    _id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: Sequelize.STRING(35),
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

User.associate = (models) => {
  User.hasMany(models.tweets);
};

User.associate = (models) => {
  User.hasOne(models.subscriptions);
};

module.exports = User;
