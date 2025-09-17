import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import User from "@/models/User";

export async function POST(req: NextRequest) {
  try {
    const cookiestore = await cookies();
    const body = await req.json();

    const isuser = await User.findOne({ email: body.email });
    if (!isuser) {
      return NextResponse.json({ msg: "User not found with this email" }, { status: 401 });
    }

    const isvaliduser = await bcrypt.compare(body.password, isuser.password);
    if (!isvaliduser) {
      return NextResponse.json({ msg: "Unauthorized user" }, { status: 401 });
    }

    const userObj = isuser.toObject();
    delete userObj.password;

    if (!process.env.SECRET_KEY) throw new Error("SECRET_KEY is not defined");

    const token = jwt.sign(
      { id: isuser.id, email: isuser.email, role: "user" },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );

    cookiestore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "lax",
      maxAge: 60 * 60,
      path: "/",
    });

    return NextResponse.json({ user: userObj, token }, { status: 201 });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Error in the user signin func";
    return NextResponse.json({ msg: message }, { status: 500 });
  }
}
