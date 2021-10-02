const Sequelize = require("sequelize");
const sequelize = require("../db/connection");

const Project = sequelize.define(
	"Project",
	{
		_id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		title: {
			type: Sequelize.STRING(30),
			allowNull: false,
		},
	},
	{
		classMethods: {
			associate: function (models) {
				Project.belongsToMany(models.User);
			},
		},
	},
	{
		timestamps: true,
	}
);

module.exports = Project;
