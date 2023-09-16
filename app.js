const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const rootDIr = require("./util/path");
const admin = require("./routes/admin");
const user = require("./routes/shop");
const errorControlers = require("./controllers/error");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDIr, "public")));

app.use("/admin", admin.routes);
app.use(user.routes);

//error page
app.use(errorControlers.Pages404);

app.listen(3000);
