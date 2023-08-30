const express = require("express");
const Route = express.Router();

Route.get("/", (req, res, next) => {
  res.send("<h1>Home Page</h1>");
});

module.exports = Route;
