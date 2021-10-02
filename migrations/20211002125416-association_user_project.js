"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("userproject", {
			_id: {
				type: Sequelize.INTEGER(11),
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			userId: {
				type: Sequelize.INTEGER(11),
				references: {
					model: "User", // name of Target model
					key: "_id", // key in Target model that we're referencing
				},
				onDelete: "CASCADE",
			},
			projectId: {
				type: Sequelize.INTEGER(11),
				references: {
					model: "Project", // name of Target model
					key: "_id", // key in Target model that we're referencing
				},
				onDelete: "CASCADE",
			},
			createdAt: Sequelize.DATE,
			updatedAt: Sequelize.DATE,
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("userproject");
	},
};
