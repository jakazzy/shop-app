const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const stuffRouter = require("./routes/stuff");
const userRouter = require("./routes/user");

mongoose
  .connect(
    "mongodb+srv://jida:stbf6CKIQoicpx7r@cluster0-d9wpy.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connection with mongoDB successful"))
  .catch(err => {
    console.log("unable to connect to mongodb atlas");
    console.error(err);
  });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());

app.use("/api/stuff", stuffRouter);
app.use("/api/auth", userRouter);
module.exports = app;
