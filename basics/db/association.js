const userModel = require("../Models/userModel");
const tweetModel = require("../Models/tweetModel");

userModel.hasMany(tweetModel, { as: "tweets", foreignKey: "userId" });
tweetModel.belongsTo(userModel, { as: "user", foreignKey: "userId" });
