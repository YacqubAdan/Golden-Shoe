const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const connectDB = require("./config/database");

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const cartRoute = require("./routes/cart");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");

connectDB();

app.use(express.json());

if (process.env.NODE_ENV === "production") {
  console.log("hello");
  app.use(express.static("client/build"));
}

//API Routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/order", orderRoute);
app.use("/api/cart", cartRoute);

app.listen(port, () => console.log(`Server running on port ${port}`));
