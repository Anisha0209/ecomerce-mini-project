const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const connectDatabase = require("./config/connectDatabase");
dotenv.config({ path: path.join(__dirname, "config", "config.env") });

connectDatabase();

const products = require("./routes/products");
const orders = require("./routes/order");

//use middleware to dispaly json data
app.use(express.json());
app.use(cors());
app.use("/api/v1", products);
app.use("/api/v1/", orders);

app.listen(process.env.PORT, () => {
  console.log(
    `Server listening in ${process.env.PORT} ${process.env.NODE_ENV}`
  );
});
