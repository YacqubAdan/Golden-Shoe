require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewURLParser: true,
      useUnifiedTopology: true,
    });

    console.log("Mongodb connection success");
  } catch (error) {
    console.error("Mongodb connection fail");
    process.exit(1);
  }
};

module.exports = connectDB;
