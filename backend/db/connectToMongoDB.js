import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("<<<=== Connected to DB ===>>>>");
  } catch (error) {
    console.log("Error in Connecting to DB", error.message);
  }
};
export default connectToMongoDB;
