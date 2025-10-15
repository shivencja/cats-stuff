import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";
import { Offer } from "@/types/offers";

export async function GET() {
  try {
    const offers = await kv.get<Offer[]>("offers");
    return NextResponse.json(offers || []);
  } catch (error) {
    console.error("Failed to fetch offers:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
