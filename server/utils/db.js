const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

const connectionDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("successfully connected to database.");
  } catch (error) {
    console.error("Database connection failed.", error.message);
    process.exit(0);
  }
};

module.exports = connectionDB;
