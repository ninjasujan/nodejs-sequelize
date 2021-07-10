const Sequelize = require("sequelize");
const config = require("../config/config.json");
const fs = require("fs");
const path = require("path");

const configs = fs.readFileSync(
  path.join(__dirname, "..", "config", "config.json")
);

const dbCredentials = JSON.parse(configs);

const { username, password, database, host, dialect } =
  dbCredentials.development;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});

module.exports = sequelize;
