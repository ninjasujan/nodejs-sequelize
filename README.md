### Nodejs with sequelize (ORM)

**_Note: This repository contains sequelize ORM migration script to create database schema (MySql).`migration` directory in this project contains the sample migration script along with defined association among the entity._**

#### Steps to create migration script

1. Establish the connecton to the database (See connection.js script in db directory)
2. install sequelize-cli library to create migration script `npm i --save-dev sequelize-cli`.
3. Create model first (refer sample model given in the Models directory).
4. Now create migration script that helps to create schema in the database. Use the command `sequelize migration:create --name <name>` always follow proper naming convntion for script so that you can easily manage large group of migration script.
5. Run the migration script to define desired schema to the database table. `sequelize db:migrate`
6. Undo the last migration script you have executed
   `sequelize db:migrate:undo`

### Example migration script

**_In this example we will create migration script for users and subscriptions also define association between the user and subscription_**

**1. Define the user model in the model directory.**

```javascript
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
```

**2. Create user migration script to create schema in the database**

`> sequelize migration:create --name create_user_model`

The command will create the migration script with the basic template, define your user schema according to your business logic.

```javascript
"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("User", {
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
			password: {
				type: Sequelize.STRING(20),
				allowNull: false,
			},
			createdAt: Sequelize.DATE,
			updatedAt: Sequelize.DATE,
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("User");
	},
};
```

**3. Run the migration script**
`> sequelize db:migrate`
The command will create desired schema in the database

**4. Same way define the schema and migration script for subscription.**

**5. Define association between User and Subscription Model**
User can have many subscription
Subscription should belongs to particular User.

one to many relation between user and subscription

Create a new migration script to define association.

```javascript
"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addColumn(
			"Subscription", // name of Source model
			"userId", // name of the key we're adding
			{
				type: Sequelize.INTEGER(11),
				references: {
					model: "User", // name of Target model
					key: "_id", // key in Target model that we're referencing
				},
				onDelete: "CASCADE",
			}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeColumn("Subscription", "userId");
	},
};
```

Note: Refer all migration script to learn more.
