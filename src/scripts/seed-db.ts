// command: ts-node src/scripts/seed-db.ts

import { createClient } from "@vercel/kv";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

export const offers = [
  {
    id: 1,
    name: { en: "Cat Wand with Feather", pl: "Wędka dla kota z piórkiem" },
    description: {
      en: "An interactive wand that will provide your cat with hours of fun",
      pl: "Interaktywna wędka, która zapewni Twojemu kotu godziny zabawy",
    },
    price: { en: 199, pl: 1999 },
  },
  {
    id: 2,
    name: { en: "Elegant Ceramic Bowl", pl: "Elegancka ceramiczna miska" },
    description: {
      en: "A stylish and easy-to-clean bowl for water or food",
      pl: "Stylowa i łatwa do czyszczenia miska na wodę lub jedzenie",
    },
    price: { en: 199, pl: 1999 },
  },
  {
    id: 3,
    name: { en: "Scratching Post with Cave", pl: "Drapak z jaskinią" },
    description: {
      en: "A sturdy scratching post with a cozy hideaway, perfect for sleeping and claw sharpening",
      pl: "Solidny drapak z przytulną jaskinią, idealny do spania i ostrzenia pazurów",
    },
    price: { en: 199, pl: 1999 },
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
