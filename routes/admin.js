const express = require("express");
const path = require("path");
const rootDir = require("../util/path");

const router = express.Router();

const products = [];

//admin/app-product => get
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

//admin/app-product => post
router.post("/add-product", (req, res, next) => {
  products.push(req.body.title);
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
