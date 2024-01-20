const express = require("express");
const path = require("path");
const rootDir = require("../util/path");

const router = express.Router();
const adminController = require("../controllers/admin");

//admin/app-product => get
router.get("/add-product", adminController.getAddProduct);
//admin/app-product => post
router.post("/add-product", adminController.postAddProduct);

//admin/products => get
router.get("/products", adminController.getProducts);

//admin/edit-product => post
router.post("/edit-product", adminController.postEditProduct);
//admin/edit-product => get
router.get("/edit-product/:productId", adminController.getEditProduct);

//admin/delete-product => post
router.post("/delete-product", adminController.postDeleteProduct);

exports.routes = router;
