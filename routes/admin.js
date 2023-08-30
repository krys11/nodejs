const express = require("express");
const Route = express.Router();

Route.get("/add-product", (req, res, next) => {
  res.send(
    "<html><body><form action='/admin/product' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body></html>"
  );
});

Route.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = Route;
