import { UserRole } from "@/types/users";
import { kv } from "@vercel/kv";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password || password.length < 6) {
      return NextResponse.json(
        { message: "Email and password (min. 6 characters) are required" },
        { status: 400 }
      );
    }

    const existingUser = await kv.get(`user:${email}`);

    if (existingUser) {
      return NextResponse.json(
        { message: "User with this email already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      id: crypto.randomUUID(),
      email: email,
      hashedPassword: hashedPassword,
      role: UserRole.USER,
    };

    await kv.set(`user:${email}`, JSON.stringify(newUser));

    return NextResponse.json(
      {
        id: newUser.id,
        email: newUser.email,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
