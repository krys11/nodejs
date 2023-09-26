const Product = require("../models/product");

exports.getProdutcs = (req, res, next) => {
  Product.getAllProducts((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Product",
      Path: "/products",
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.getAllProducts((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Add Product",
      Path: "/",
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    pageTitle: "Your Cart",
    Path: "/cart",
  });
};

exports.getOrder = (req, res, next) => {
  res.render("shop/orders", {
    pageTitle: "Orders",
    Path: "/orders",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    pageTitle: "Checkout",
    Path: "/checkout",
  });
};
