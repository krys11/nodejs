const express = require("express");
const path = require("path");
const rootDir = require("../util/path");

const router = express.Router();
const adminController = require("../controllers/admin");

//admin/app-product => get
router.get("/add-product", adminController.getAddProduct);

//admin/products => get
router.get("/products", adminController.getProducts);

//admin/app-product => post
router.post("/add-product", adminController.postAddProduct);

exports.routes = router;
