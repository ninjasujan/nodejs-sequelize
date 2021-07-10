const Sequelize = require("sequelize");
const sequelize = require("../db/connection");

module.exports = sequelize.define(
  "tweets",
  {
    _id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    content: Sequelize.STRING(300),
  },
  {}
);
