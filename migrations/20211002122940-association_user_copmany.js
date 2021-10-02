"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addColumn(
			"User", // name of Source model
			"cmpId", // name of the key we're adding
			{
				type: Sequelize.INTEGER(11),
				references: {
					model: "Company", // name of Target model
					key: "_id", // key in Target model that we're referencing
				},
				onDelete: "SET NULL",
			}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeColumn("User", "cmpId");
	},
};
