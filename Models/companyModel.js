const Sequelize = require("sequelize");
const sequelize = require("../db/connection");

const Company = sequelize.define(
	"Company",
	{
		_id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: Sequelize.STRING(30),
			allowNull: false,
		},
		localtion: {
			type: Sequelize.STRING(35),
			allowNull: false,
		},
		type: {
			type: Sequelize.ENUM("MNC", "STARTUP"),
			allowNull: false,
		},
	},
	{
		classMethods: {
			associate: function (models) {
				Company.hasMany(models.User);
			},
		},
	},
	{
		timestamps: true,
	}
);

module.exports = Company;
