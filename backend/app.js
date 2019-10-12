// MONGODB PWD: stbf6CKIQoicpx7r
// Connection string: mongodb+srv://jida:<password>@cluster0-d9wpy.mongodb.net/test?retryWrites=true&w=majority
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
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
app.post("/api/stuff", (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: "Thing created successfully!"
  });
});
app.use("/api/stuff", (req, res, next) => {
  const stuff = [
    {
      _id: "aufuah89ya8y",
      title: "this is a thing",
      description: "this is a beautiful thing",
      imageUrl:
        "https://images.unsplash.com/photo-1562887009-7924341c5cbc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
      price: 400,
      userId: "akhfuiaon8y"
    },
    {
      _id: "ajboa89pnu9[0s",
      title: "this is a thing",
      description: "this is a beautiful thing",
      imageUrl:
        "https://images.unsplash.com/photo-1562887009-7924341c5cbc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
      price: 200,
      userId: "akhfuiaon8y"
    }
  ];
  res.status(200).json(stuff);
  next();
});
module.exports = app;
