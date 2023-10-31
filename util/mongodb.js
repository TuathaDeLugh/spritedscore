import mongoose from "mongoose";
export default async function connectdb() {
  try {
    await mongoose.connect(
      process.env.MONGO_URI
    );
    console.log("Database connected");
  } catch (e) {
    console.log(e);
  }
}