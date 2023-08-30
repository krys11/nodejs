const path = require("path");
const express = require("express");

const rootDir = require("../util/path");
const adminRoute = require("./admin");

const Route = express.Router();

Route.get("/", (req, res, next) => {
  console.log(adminRoute.products);
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = Route;
