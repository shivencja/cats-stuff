"use client";

import { queryOptions, useQuery } from "@tanstack/react-query";
import { getOffer, getOffers } from "./calls";
import { offersKeys } from "./keys";

export function getOffersOptions() {
  return queryOptions({
    queryKey: offersKeys.list(),
    queryFn: async () => {
      const { data } = await getOffers();
      return data;
    },
  });
}

export function useOffers() {
  return useQuery(getOffersOptions());
}

export function getOfferOptions(offerId: number) {
  return queryOptions({
    queryKey: offersKeys.detail(offerId),
    queryFn: async () => {
      const { data } = await getOffer(offerId);
      return data;
    },
    enabled: !!offerId,
  });
}

export function useOffer(offerId: number) {
  return useQuery(getOfferOptions(offerId));
}
