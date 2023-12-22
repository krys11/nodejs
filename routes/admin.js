const express = require("express");
const path = require("path");
const rootDir = require("../util/path");

const router = express.Router();
const productsController = require("../controllers/products");

//admin/app-product => get
router.get("/add-product", productsController.getAddProduct);

//admin/app-product => post
router.post("/add-product", productsController.postAddProduct);

exports.routes = router;
