const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const connectDB = require("./config/database");
const path = require("path");

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const cartRoute = require("./routes/cart");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");

connectDB();

app.use(express.json());

//API Routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/order", orderRoute);
app.use("/api/cart", cartRoute);

const dirname = path.resolve();
app.use(express.static(path.join(dirname, "/client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(dirname, "client", "build", "index.html"));
});

app.listen(port, () => console.log(`Server running on port ${port}`));
