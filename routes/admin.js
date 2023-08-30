const path = require("path");
const express = require("express");

const rootDir = require("../util/path");

const routes = express.Router();
const products = [];

routes.get("/add-product", (req, res, next) => {
  res.render("add-product", { pageTitle: "Add Product" });
});

routes.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = routes;
exports.products = products;
