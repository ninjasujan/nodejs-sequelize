"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("tweet_tag", {
      tweetId: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        references: {
          model: "tweets",
          key: "_id",
        },
      },
      tagId: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        references: {
          model: "tags",
          key: "_id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("tweet_tag");
  },
};
