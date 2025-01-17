const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.set("view engine", "pug"); //view engine -> set the templating engine to the pug
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public"))); //multiple static folder ref can be given

app.use("/admin", adminData.routes); //for nested routing /admin/add-products
app.use(shopRoutes);

app.use("*", (req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404");
});

app.listen(3000);
