const tweetModel = require("../Models/tweetModel");
const userModel = require("../Models/userModel");

const express = require("express");
const router = express.Router();

router.post("/create-records", async (req, res, next) => {
  try {
    const { username, password, content } = req.body;
    const user = await userModel.create({
      username,
      password,
    });
    const tweet = await tweetModel.create({
      content,
      userId: user._id,
    });
    res.status(200).json({ user, tweet });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
