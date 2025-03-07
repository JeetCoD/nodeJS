const express = require("express");
const rootDir = require("../utils/path");

const path = require("path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  // console.log(adminData.products);
  // res.sendFile(path.join(rootDir, "views", "shop.html")); //dont add / coz this method will work on both windows and linux system
  const products = adminData.products;
  res.render("shop", { prods: products, docTitle: "Shop", path: "/" });
});

module.exports = router;
