const Product = require("../models/product");
const products = [];

exports.getAddProdutc = (req, res, next) => {
  res.render("add-product", {
    prods: Product.getAllProducts(),
    pageTitle: "Add Product",
    Path: "admin/add-product",
    formsCSS: true,
    activeAddProduct: true,
    productCSS: true,
  });
};

exports.postAddProdutcs = (req, res, next) => {
  Product.addProducts({ title: req.body.title });
  //products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProdutcs = (req, res, next) => {
  Product.getAllProducts((products) => {
    res.render("shop", {
      prods: products,
      pageTitle: "Add Product",
      Path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};
