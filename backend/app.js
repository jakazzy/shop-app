const express = require("express");
const app = express();

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
app.use("/api/stuff", (req, res, next) => {
  const stuff = [
    {
      _id: "aufuah89ya8y",
      title: "this is a thing",
      description: "this is a beautiful thing",
      imageUrl: "",
      price: 400,
      userId: "akhfuiaon8y"
    },
    {
      _id: "ajboa89pnu9[0s",
      title: "this is a thing",
      description: "this is a beautiful thing",
      imageUrl: "",
      price: 200,
      userId: "akhfuiaon8y"
    }
  ];
  res.status(200).json(stuff);
});
module.exports = app;
