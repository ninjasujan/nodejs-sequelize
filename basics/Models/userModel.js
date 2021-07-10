const Sequelize = require("sequelize");
const sequelize = require("../db/connection");

module.exports = sequelize.define("users", {
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
});
