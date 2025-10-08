export interface Offer {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
}

export const offers: Offer[] = [
  {
    id: 1,
    name: "Cat Wand with Feather",
    description:
      "An interactive wand that will provide your cat with hours of fun",
    price: 1999,
  },
  {
    id: 2,
    name: "Elegant Ceramic Bowl",
    description: "A stylish and easy-to-clean bowl for water or food",
    price: 4950,
  },
  {
    id: 3,
    name: "Scratching Post with Cave",
    description:
      "A sturdy scratching post with a cozy hideaway, perfect for sleeping and claw sharpening",
    price: 12900,
  },
];
