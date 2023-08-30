const path = require("path");
const express = require("express");

const rootDir = require("../util/path");
const adminRoute = require("./admin");

const Route = express.Router();

Route.get("/", (req, res, next) => {
  const products = adminRoute.products;
  console.log(adminRoute.products);
  res.render("shop", {
    prods: products,
    pageTitle: "Add Product",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

module.exports = Route;
