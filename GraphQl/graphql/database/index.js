import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URL;

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

export async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version

    await mongoose.connect(uri, clientOptions);
    const data = await mongoose.connection
      .useDb("sample_mflix")
      .collection("movies")
      .find()
      .limit(10)
      .toArray();
    console.log("CONNECTED");
    return { data };
  } catch (err) {
    console.log("Mongoose connection Error!!", err);
    return {};
  }
}
