const Product = require("../models/product");

exports.getAddProducts = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    Path: "admin/add-product",
    formsCSS: true,
    activeAddProduct: true,
    productCSS: true,
  });
};

exports.postAddProdutcs = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  Product.addProducts({ title, imageUrl, price, description });
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.getAllProducts((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      Path: "/admin/products",
    });
  });
};
