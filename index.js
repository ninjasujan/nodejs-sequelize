const express = require("express");
const app = express();
const { json } = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const router = require("./routes/tweet.router");
require("./db/connection");
// require("./db/association");

app.use(json());
app.use(cors());

app.use("/api", router);

app.use((err, req, res, next) => {
	console.log(err);
	res.status(500).json({ message: err.message });
});

app.listen(process.env.PORT, () => {
	console.log("SERVER RUNNING ON PORT: ", process.env.PORT);
});
