const express = require("express");
const app = express();
require("dotenv").config();

require("./db/connection");

app.listen(process.env.PORT, () => {
  console.log("SERVER RUNNING...");
});
