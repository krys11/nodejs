const express = require("express");

const router = express.Router();

const shopControllers = require("../controllers/shop");

router.get("/", shopControllers.getIndex);

router.get("/products", shopControllers.getProdutcs);

router.get("/cart", shopControllers.getCart);

router.get("/orders", shopControllers.getOrder);

router.get("/checkout", shopControllers.getCheckout);

exports.routes = router;
