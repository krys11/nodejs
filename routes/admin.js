const express = require("express");

const router = express.Router();

const productControllers = require("../controllers/products");

router.get("/add-product", productControllers.getAddProdutc);

router.post("/add-product", productControllers.postAddProdutcs);

exports.routes = router;
