const Sequelize = require("sequelize/types");
const sequelize = require("../db/connection");

module.exports = sequelize.define("Tweet", {
  _id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  content: Sequelize.STRING(300),
});
