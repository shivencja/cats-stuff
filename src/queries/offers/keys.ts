/** Keys of offers queries */
export const offersKeys = {
  list: () => ["offers", "list"] as const,
  detail: (offerId: number) => ["offers", "detail", offerId ?? {}] as const,
};
