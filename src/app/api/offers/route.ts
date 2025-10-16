import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";
import { OfferDTO } from "@/types/offers";
import { ApiErrorKey } from "@/types/errors";

export async function GET() {
  try {
    const offers = await kv.get<OfferDTO[]>("offers");
    return NextResponse.json(offers || []);
  } catch (error) {
    console.error("Failed to fetch offers:", error);
    return NextResponse.json(
      {
        errors: [
          {
            key: ApiErrorKey.INTERNAL_SERVER_ERROR,
          },
        ],
      },
      { status: 500 }
    );
  }
}
