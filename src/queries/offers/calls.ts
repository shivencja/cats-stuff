import { api } from "@/lib/api";
import { Offer } from "@/types/offers";
/** Fetch offers */
export async function getOffers() {
  return api.get<Offer[]>("/offers");
}

/** Fetch offer */
export async function getOffer(offerId: number) {
  return api.get<Offer>(`/offers/${offerId}`);
}
