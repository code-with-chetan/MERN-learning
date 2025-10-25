const mongoose = require("mongoose");

const URI = "mongodb://127.0.0.1:27017/mern_admin";
// mongoose.connect(URI);

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
