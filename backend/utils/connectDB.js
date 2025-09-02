import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("MONGODB is connected");
  } catch (err) {
    console.log("MONGODB CONNECTING ERROR", err);
  }
};

export default connectDB;
