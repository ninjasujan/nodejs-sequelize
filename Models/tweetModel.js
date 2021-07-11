const Sequelize = require("sequelize");
const sequelize = require("../db/connection");

const Tweet = sequelize.define(
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
  {
    timestamps: true,
  }
);

Tweet.associate = (models) => {
  Tweet.belongsTo(models.users);
};

Tweet.associate = (models) => {
  Tweet.belongsToMany(models.tags, { through: "tweet_tag" });
};

module.exports = tweets;
