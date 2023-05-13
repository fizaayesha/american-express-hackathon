const express = require("express");

const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5001;

const connect = mongoose.connect;
connect.once("open", () => {
  console.log("mongodb database connection established successfully!!");
});

const transactionRouter = require("./routes/trasactionhist");
const registrations = require("./routes/register");
const contactRouter = require("./routes/contact");
