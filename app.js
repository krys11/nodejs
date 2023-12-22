const express = require("express");
const bodyParer = require("body-parser");
const path = require("path");

const app = express();
const adminData = require("./routes/admin");
const userRoutes = require("./routes/shop");
const rootDir = require("./util/path");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParer.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use("/admin", adminData.routes);
app.use(userRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found", path: "" });
});

app.listen(3000, () => {
  console.log("app launch");
});
