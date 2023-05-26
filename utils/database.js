import { log } from "console";
import mongoose from "mongoose";

let isConnected = false;
export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    log("Already connected to MongoDB");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "nobodyKnows",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    log("MongoDB is connected");
  } catch (error) {
    log(error);
  }
};
