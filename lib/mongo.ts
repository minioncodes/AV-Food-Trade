import mongoose, { Mongoose } from "mongoose";

// 1️⃣ Define a type for cached mongoose connection
interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// 2️⃣ Extend NodeJS global type
declare global {
  var mongoose: MongooseCache | undefined;
}

// 3️⃣ Use strongly typed global variable
const cached: MongooseCache = global.mongoose ?? { conn: null, promise: null };

async function connectDB(): Promise<Mongoose> {
  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    throw new Error("please define the MONGO_URI environment variable");
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(mongoUri, {
        dbName: "productdb",
        bufferCommands: false,
      })
      .then((m) => m);
  }

  cached.conn = await cached.promise;
  global.mongoose = cached;
  return cached.conn;
}

export default connectDB;
