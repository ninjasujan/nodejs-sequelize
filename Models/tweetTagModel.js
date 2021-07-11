const Sequelize = require("sequelize");
const sequelize = require("../db/connection");

const TweetTag = sequelize.define(
  "tweet_tag",
  {
    tweetId: {
      type: Sequelize.INTEGER(11),
      primaryKey: true,
    },
    tagId: {
      type: Sequelize.INTEGER(11),
      primaryKey: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = TweetTag;
