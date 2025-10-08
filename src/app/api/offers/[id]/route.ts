import { offers } from "@/data/offers";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const offer = offers.find((p) => p.id === params.id);

  if (!offer) {
    return NextResponse.json({ message: "Offer not found" }, { status: 404 });
  }

  return NextResponse.json(offer);
}
