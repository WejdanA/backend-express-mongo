const express = require("express");
const app = express();
const productsRouter = require("../routes/productsRoutes");
require("dotenv").config();
const port = process.env.PORT;
console.log("port", port);

app.use("/products", productsRouter);
app.listen(port, () => {
  console.log("This server running in port 8080");
});
