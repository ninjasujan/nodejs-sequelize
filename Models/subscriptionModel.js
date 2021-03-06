const Sequelize = require("sequelize");
const sequelize = require("../db/connection");

const Subscription = sequelize.define(
	"Subscription",
	{
		_id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		userId: {
			type: Sequelize.INTEGER(11),
			reference: {
				model: "User",
				key: "_id",
			},
			onDelete: "CASCADE",
		},
		productId: {
			type: Sequelize.STRING(35),
			allowNull: false,
		},
		purchaseToken: {
			type: Sequelize.STRING,
			allowNull: false,
		},
	},
	{
		classMethods: {
			associate: function (models) {
				Subscription.belongsTo(models.User);
			},
		},
	},
	{
		timestamps: true,
	}
);

module.exports = Subscription;
