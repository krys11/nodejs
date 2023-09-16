const express = require("express");

const admin = require("./admin");
const router = express.Router();

const productControllers = require("../controllers/products");

router.get("/", productControllers.getProdutcs);

exports.routes = router;
