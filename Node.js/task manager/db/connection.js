const mongoose = require("mongoose");

async function mongoDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = { mongoDB };
