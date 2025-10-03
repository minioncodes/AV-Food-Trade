import User from "@/models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
import connectDB from "@/lib/mongo";

interface SignUpBody {
  name: string;
  email: string;
  password: string;
  location?: string;
  phoneNumber?: string;
  dateOfBirth?: string;
  address?: string;
  gender?: string;
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body: SignUpBody = await req.json();
    const { name, email, password, location, phoneNumber, dateOfBirth, address, gender } = body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ msg: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      createdAt: new Date(),
      location,
      phoneNumber,
      dateOfBirth,
      address,
      gender,
    });

    await newUser.save();

    if (!process.env.SECRET_KEY) {
      throw new Error("SECRET_KEY is not defined");
    }

    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );

   
    (await cookies()).set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "lax",
      maxAge: 60 * 60,
      path: "/",
    });

    const userObj = newUser.toObject() as Record<string, unknown>;
    delete userObj.password;

    return NextResponse.json({ user: userObj, token }, { status: 201 });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Error in signup route";
    return NextResponse.json({ msg: message }, { status: 500 });
  }
}
