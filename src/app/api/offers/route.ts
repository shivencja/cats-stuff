import { offers } from "@/data/offers";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(offers);
}
