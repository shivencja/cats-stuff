"use client";

import { queryOptions, useQuery } from "@tanstack/react-query";
import { getOffer, getOffers, getUsers } from "./calls";
import { offersKeys, usersKeys } from "./keys";

export function useOffers() {
  return useQuery(
    queryOptions({
      queryKey: offersKeys.list(),
      queryFn: async () => {
        const { data } = await getOffers();
        return data;
      },
    })
  );
}

export function useOffer(offerId: number) {
  return useQuery(
    queryOptions({
      queryKey: offersKeys.detail(offerId),
      queryFn: async () => {
        const { data } = await getOffer(offerId);
        return data;
      },
      enabled: !!offerId,
    })
  );
}

export function useUsers() {
  return useQuery(
    queryOptions({
      queryKey: usersKeys.list(),
      queryFn: async () => {
        const { data } = await getUsers();
        return data;
      },
    })
  );
}
