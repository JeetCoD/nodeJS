const express = require("express");
const path = require("path");

const rootDir = require("../utils/path");

const router = express.Router();
const products = [];

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  console.log(req.body); //we are requesting to /product thats why
  res.redirect("/"); //redirect user to this route.
});

router.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", { docTitle: "Add Product" });
});

// module.exports = router;
//when we are exporting more than one thing, we do it by exports.name = propertyName
exports.routes = router;
exports.products = products;
