"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addColumn(
			"Subscription", // name of Source model
			"userId", // name of the key we're adding
			{
				type: Sequelize.INTEGER(11),
				references: {
					model: "User", // name of Target model
					key: "_id", // key in Target model that we're referencing
				},
				onDelete: "CASCADE",
			}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeColumn("Subscription", "userId");
	},
};
