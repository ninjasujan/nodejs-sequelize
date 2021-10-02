"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addColumn("Company", "totalEmployee", {
			type: Sequelize.INTEGER,
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeColumn("Company", "totalEmployee");
	},
};
