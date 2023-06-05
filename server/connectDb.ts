import mongoose from "mongoose";
const connectDB = async (): Promise<void> => {
  try {
    mongoose.set("strictQuery", true);
    if (!process.env.MONGO_URI) throw Error("undefined connection string");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to mongo database");
  } catch (e) {
    console.log(e);
  }
};

export { connectDB };
