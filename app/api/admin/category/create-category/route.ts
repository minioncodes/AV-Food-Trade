import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongo";
import Category from "@/models/admin/Category";
import { JWTPayload, jwtVerify } from "jose";

export interface AdminPayload extends JWTPayload {
  id: string;
  email: string;
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const token = await req.cookies.get("adminToken")?.value;
    if (!token) {
      return NextResponse.json({ msg: "Unauthorized" }, { status: 401 });
    }

    const { name, slug, description, isActive }: { name: string; slug: string; description?: string; isActive: boolean } = await req.json();

    const existingCategory = await Category.findOne({ name });

    const { payload } = await jwtVerify<AdminPayload>(token, new TextEncoder().encode(process.env.SECRET_KEY));
    const adminId = payload.id;

    if (existingCategory) {
      return NextResponse.json({ msg: "The category already exists" }, { status: 400 });
    }

    const response = await Category.create({
      name,
      slug,
      description,
      isActive,
      createdBy: adminId,
    });

    return NextResponse.json({ msg: "Category created", response }, { status: 201 });
  } catch (e: unknown) {
    const errorMessage = e instanceof Error ? e.message : "Unknown error";
    console.log(errorMessage);
    return NextResponse.json({ msg: "Some error in category creation" }, { status: 500 });
  }
}
