"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Company", {
			_id: {
				type: Sequelize.INTEGER(11),
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			name: {
				type: Sequelize.STRING(35),
				allowNull: false,
			},
			localtion: {
				type: Sequelize.STRING(20),
				allowNull: false,
			},
			type: {
				type: Sequelize.ENUM("MNC", "STARTUP"),
				allowNull: false,
			},
			createdAt: Sequelize.DATE,
			updatedAt: Sequelize.DATE,
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Company");
	},
};
