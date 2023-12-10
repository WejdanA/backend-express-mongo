const express = require("express");
const app = express();
const productsRouter = require("../routes/productsRoutes");

app.use("/products", productsRouter);

app.listen(8080, () => {
  console.log("This server running in port 8080");
});
