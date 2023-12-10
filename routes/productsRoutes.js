const express = require("express");
const router = express.Router();
const { getAllProducts } = require("../controller/productsControllers");

router.get("/", getAllProducts);

module.exports = router;
