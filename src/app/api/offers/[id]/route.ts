import { offers } from "@/data/offers";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  context: {
    params: Promise<{ id: string }>;
  }
) {
  const { id } = await context.params;

  const offer = offers.find((p) => p.id === parseInt(id, 10));

  if (!offer) {
    return NextResponse.json({ message: "Offer not found" }, { status: 404 });
  }

  return NextResponse.json(offer);
}
