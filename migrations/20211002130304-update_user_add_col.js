"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addColumn("User", "email", {
			type: Sequelize.STRING,
			allowNull: false,
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeColumn("User", "email");
	},
};
