import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGO_URI as string;
console.log("mongo db uri = ", MONGODB_URI);

if (!MONGODB_URI) {
  throw new Error("please define the MONGO_URI environment variable in .env.local");
}

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
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
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
