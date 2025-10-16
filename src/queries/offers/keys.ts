/** Keys of offers queries */
export const offersKeys = {
  list: () => ["offers", "list"] as const,
  detail: (offerId: number) => ["offers", "detail", offerId ?? {}] as const,
};

/** Keys of users queries */
export const usersKeys = {
  list: () => ["users", "list"] as const,
  detail: (userId: number) => ["users", "detail", userId ?? {}] as const,
};
