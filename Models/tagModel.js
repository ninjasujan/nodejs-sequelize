const Sequelize = require("sequelize");
const sequelize = require("../db/connection");

const Tag = sequelize.define(
  "tags",
  {
    _id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    tagName: {
      type: Sequelize.STRING(35),
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

Tag.associate = (models) => {
  Tag.belongsToMany(models.tweets, { through: "tweet_tag" });
};

module.exports = User;
