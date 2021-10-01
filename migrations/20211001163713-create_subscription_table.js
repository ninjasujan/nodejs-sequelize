"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("subscriptions", {
			_id: {
				type: Sequelize.INTEGER(11),
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			productId: {
				type: Sequelize.STRING(35),
				allowNull: false,
				unique: true,
			},
			purchaseToken: {
				type: Sequelize.STRING(20),
				allowNull: false,
			},
			createdAt: Sequelize.DATE,
			updatedAt: Sequelize.DATE,
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("subscriptions");
	},
};
