"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.changeColumn("User", "username", {
			type: Sequelize.STRING,
			allowNull: false,
			defaultValue: "no-username",
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.changeColumn("User", "username", {
			type: Sequelize.STRING,
			allowNull: false,
		});
	},
};
