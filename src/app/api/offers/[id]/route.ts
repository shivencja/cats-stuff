import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";
import { Offer } from "@/types/offers";

export async function GET(
  request: Request,
  context: {
    params: Promise<{ id: string }>;
  }
) {
  const { id } = await context.params;
  try {
    const allOffers = await kv.get<Offer[]>("offers");

    if (!allOffers) {
      return NextResponse.json({ message: "No offers found" }, { status: 404 });
    }

    const offer = allOffers.find((p) => p.id === parseInt(id, 10));

    if (!offer) {
      return NextResponse.json({ message: "Offer not found" }, { status: 404 });
    }

    return NextResponse.json(offer);
  } catch (error) {
    console.error(`Failed to fetch offer ${id}:`, error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
