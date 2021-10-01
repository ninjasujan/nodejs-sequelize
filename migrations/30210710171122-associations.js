"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addColumn("tweets", "userId", {
			type: Sequelize.INTEGER(11),
			references: {
				model: "users",
				key: "_id",
			},
			onUpdate: "CASCADE",
			onDelete: "SET NULL",
		});
		await queryInterface.addColumn("subscriptions", "userId", {
			type: Sequelize.INTEGER(11),
			references: {
				model: "users",
				key: "_id",
			},
		});
		await queryInterface.addConstraint("tweet_tag", {
			fields: ["tweetId"],
			type: "foreign key",
			name: "tweet_tag_tweet_fk",
			references: {
				table: "tweets",
				field: "_id",
			},
			onDelete: "cascade",
			onUpdate: "cascade",
		});
		await queryInterface.addConstraint("tweet_tag", {
			fields: ["tagId"],
			type: "foreign key",
			name: "tweet_tag_tag_fk",
			references: {
				table: "tags",
				field: "_id",
			},
			onDelete: "cascade",
			onUpdate: "cascade",
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeColumn("tweets", "userId");
		await queryInterface.removeColumn("subscriptions", "user");
		await queryInterface.removeConstraint("tweet_tag", "tweet_tag_tweet_fk");
		await queryInterface.removeConstraint("tweet_tag", "tweet_tag_tag_fk");
	},
};
