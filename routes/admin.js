const express = require("express");

const router = express.Router();

const adminControllers = require("../controllers/admin");

router.get("/add-product", adminControllers.getAddProducts);

router.get("/products", adminControllers.getProducts);

router.post("/add-product", adminControllers.postAddProdutcs);

exports.routes = router;
