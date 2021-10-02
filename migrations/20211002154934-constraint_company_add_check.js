"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addConstraint("Company", {
			fields: ["type"],
			type: "check",
			name: "company_type_check",
			where: {
				type: ["MNC", "STARTUP"],
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeConstraint("Company", "company_type_check");
	},
};
