const Sequelize = require("sequelize");
const sequelize = require("../db/connection");

const User = sequelize.define(
	"User",
	{
		_id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		username: {
			type: Sequelize.STRING(35),
			allowNull: false,
			unique: true,
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		password: {
			type: Sequelize.STRING(20),
			allowNull: false,
		},
	},
	{
		classMethods: {
			associate: function (models) {
				User.hasMany(models.Subscription);
				User.belongsTo(models.Company);
				User.belongsToMany(models.Project);
			},
		},
	},
	{
		timestamps: true,
	}
);

module.exports = User;
