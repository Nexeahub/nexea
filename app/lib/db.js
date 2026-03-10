import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("⚠️ Please define the MONGODB_URI environment variable");
}

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("⚡ MongoDB already connected");
      return;
    }

    if (mongoose.connection.readyState === 2) {
      console.log("⏳ MongoDB connection in progress...");
      return;
    }

    await mongoose.connect(MONGODB_URI, {
      dbName: "yourDatabaseName",
    });

    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};
