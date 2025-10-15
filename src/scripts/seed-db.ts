// command: ts-node src/scripts/seed-db.ts

import { Offer } from "@/types/offers";
import { createClient } from "@vercel/kv";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

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

async function seedDatabase() {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;

  if (!url || !token) {
    throw new Error(
      "Missing Vercel KV environment variables. Make sure your .env.local file is in the project root and is correctly set up."
    );
  }

  const kv = createClient({
    url,
    token,
  });

  console.log("Uploading...");

  await kv.set("offers", offers);

  console.log("Upload completed");
}

seedDatabase();
