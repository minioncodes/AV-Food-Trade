import { NextResponse } from "next/server";
import connectDB from "@/lib/mongo";
import ProductSchema from "@/models/admin/ProductSchema";

console.log("get api route got called");

export async function GET() {
  try {
    await connectDB();
    const products = await ProductSchema.find({});
    console.log("products from the API", products);
    return NextResponse.json(products);
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    console.log("Error message =", errorMessage);
    return NextResponse.json({ msg: errorMessage }, { status: 500 });
  }
}
