import { api } from "@/lib/api";
import { OfferDTO } from "@/types/offers";
import { UserDTO } from "@/types/users";

/** Fetch offers */
export async function getOffers() {
  return api.get<OfferDTO[]>("/offers");
}

/** Fetch offer */
export async function getOffer(offerId: number) {
  return api.get<OfferDTO>(`/offers/${offerId}`);
}

/** Fetch users */
export async function getUsers() {
  return api.get<UserDTO[]>("/users");
}

/** Fetch user */
export async function getUser(userId: number) {
  return api.get<UserDTO>(`/users/${userId}`);
}
