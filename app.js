const express = require("express");

const app = express();

app.use("/add-product", (req, res, next) => {
  console.log("Midle....");
  res.send(
    "<html><body><form action='/product' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body></html>"
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("two Midle....");
  res.send("<h1>Home Page</h1>");
});

app.listen(3000);
