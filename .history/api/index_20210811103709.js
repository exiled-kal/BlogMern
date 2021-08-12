const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect("", {
  
})

app.listen("5000", () => {
  console.log("Backend is running.");
});
