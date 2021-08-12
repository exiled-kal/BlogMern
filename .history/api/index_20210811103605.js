const express = require("express");
const app = express();
const dotenv = require("dontenv");

dotenv.config();

app.listen("5000", () => {
  console.log("Backend is running.");
});
