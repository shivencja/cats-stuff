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
    price: { en: 499, pl: 2499 },
  },
  {
    id: 2,
    name: { en: "Elegant Ceramic Bowl", pl: "Elegancka ceramiczna miska" },
    description: {
      en: "A stylish and easy-to-clean bowl for water or food",
      pl: "Stylowa i łatwa do czyszczenia miska na wodę lub jedzenie",
    },
    price: { en: 999, pl: 4999 },
  },
  {
    id: 3,
    name: { en: "Scratching Post with Cave", pl: "Drapak z jaskinią" },
    description: {
      en: "A sturdy scratching post with a cozy hideaway, perfect for sleeping and claw sharpening",
      pl: "Solidny drapak z przytulną jaskinią, idealny do spania i ostrzenia pazurów",
    },
    price: { en: 2999, pl: 14999 },
  },
  {
    id: 4,
    name: { en: "Catnip Toy Set", pl: "Zestaw zabawek z kocimiętką" },
    description: {
      en: "A set of fun toys filled with catnip to keep your feline entertained",
      pl: "Zestaw zabawnych zabawek wypełnionych kocimiętką, które zapewnią rozrywkę Twojemu kotu",
    },
    price: { en: 599, pl: 2999 },
  },
  {
    id: 5,
    name: { en: "Comfortable Cat Bed", pl: "Wygodne legowisko dla kota" },
    description: {
      en: "A soft and cozy bed where your cat can relax and sleep",
      pl: "Miękkie i przytulne legowisko, w którym Twój kot może odpoczywać i spać",
    },
    price: { en: 1799, pl: 8999 },
  },
  {
    id: 6,
    name: { en: "Automatic Laser Toy", pl: "Automatyczna zabawka laserowa" },
    description: {
      en: "An automatic laser toy that moves randomly to keep your cat engaged",
      pl: "Automatyczna zabawka laserowa, która porusza się losowo, aby zainteresować Twojego kota",
    },
    price: { en: 2399, pl: 11999 },
  },
  {
    id: 7,
    name: { en: "Feather Teaser", pl: "Zabawka z piórkiem" },
    description: {
      en: "A fun feather teaser to stimulate your cat's hunting instincts",
      pl: "Zabawka z piórkiem, która pobudzi instynkty łowieckie Twojego kota",
    },
    price: { en: 299, pl: 1499 },
  },
  {
    id: 8,
    name: { en: "Interactive Ball Track", pl: "Interaktywny tor z piłeczką" },
    description: {
      en: "A ball track toy that will keep your cat entertained for hours",
      pl: "Zabawka z torem i piłeczką, która zapewni Twojemu kotu godziny zabawy",
    },
    price: { en: 899, pl: 4499 },
  },
  {
    id: 9,
    name: { en: "Window Perch", pl: "Parapetowe legowisko" },
    description: {
      en: "A comfortable perch that attaches to your window, giving your cat a great view",
      pl: "Wygodne legowisko mocowane do okna, które zapewnia Twojemu kotu doskonały widok",
    },
    price: { en: 1599, pl: 7999 },
  },
  {
    id: 10,
    name: { en: "Cat Tunnel", pl: "Tunel dla kota" },
    description: {
      en: "A collapsible tunnel that provides a fun hiding and playing spot for your cat",
      pl: "Składany tunel, który zapewnia Twojemu kotu zabawne miejsce do chowania się i zabawy",
    },
    price: { en: 1199, pl: 5999 },
  },
  {
    id: 11,
    name: { en: "Treat Dispensing Toy", pl: "Zabawka na przysmaki" },
    description: {
      en: "A toy that dispenses treats as your cat plays with it, encouraging activity",
      pl: "Zabawka, która wydaje przysmaki podczas zabawy, zachęcając do aktywności",
    },
    price: { en: 699, pl: 3499 },
  },
  {
    id: 12,
    name: { en: "Cat Grooming Brush", pl: "Szczotka do pielęgnacji kota" },
    description: {
      en: "A gentle grooming brush to keep your cat's coat healthy and shiny",
      pl: "Delikatna szczotka do pielęgnacji, która utrzyma sierść Twojego kota w zdrowiu i blasku",
    },
    price: { en: 799, pl: 3999 },
  },
  {
    id: 13,
    name: { en: "Window-Mounted Cat Tree", pl: "Drapak montowany na oknie" },
    description: {
      en: "A cat tree that mounts to your window, providing a sunny spot for lounging",
      pl: "Drapak montowany na oknie, zapewniający słoneczne miejsce do wypoczynku",
    },
    price: { en: 3599, pl: 17999 },
  },
  {
    id: 14,
    name: { en: "Cat Puzzle Feeder", pl: "Zabawka logiczna na jedzenie" },
    description: {
      en: "A puzzle feeder that challenges your cat to work for their food",
      pl: "Zabawka logiczna, która zmusza Twojego kota do wysiłku w zdobywaniu jedzenia",
    },
    price: { en: 1099, pl: 5499 },
  },
  {
    id: 15,
    name: { en: "Soft Plush Mouse Toy", pl: "Miękka pluszowa myszka" },
    description: {
      en: "A soft plush mouse toy that your cat will love to chase and cuddle",
      pl: "Miękka pluszowa myszka, którą Twój kot pokocha gonić i przytulać",
    },
    price: { en: 199, pl: 999 },
  },
  {
    id: 16,
    name: { en: "Cat Activity Center", pl: "Centrum aktywności dla kota" },
    description: {
      en: "A multi-level activity center with various toys and scratching posts",
      pl: "Wielopoziomowe centrum aktywności z różnymi zabawkami i drapakami",
    },
    price: { en: 5999, pl: 29999 },
  },
  {
    id: 17,
    name: { en: "LED Light Toy", pl: "Zabawka z diodami LED" },
    description: {
      en: "A toy with LED lights that move around to captivate your cat's attention",
      pl: "Zabawka z diodami LED, które poruszają się, aby przyciągnąć uwagę Twojego kota",
    },
    price: { en: 399, pl: 1999 },
  },
  {
    id: 18,
    name: { en: "Cat Hammock", pl: "Hamak dla kota" },
    description: {
      en: "A cozy hammock that provides a comfortable resting spot for your cat",
      pl: "Przytulny hamak, który zapewnia wygodne miejsce do odpoczynku dla Twojego kota",
    },
    price: { en: 1399, pl: 6999 },
  },
  {
    id: 19,
    name: { en: "Rolling Ball Toy", pl: "Tocząca się piłeczka" },
    description: {
      en: "A rolling ball toy that keeps your cat entertained as they chase it around",
      pl: "Tocząca się piłeczka, która zapewnia Twojemu kotu rozrywkę podczas gonitwy za nią",
    },
    price: { en: 499, pl: 2499 },
  },
  {
    id: 20,
    name: { en: "Catnip Spray", pl: "Spray z kocimiętką" },
    description: {
      en: "A spray filled with catnip to attract and excite your cat",
      pl: "Spray wypełniony kocimiętką, który przyciąga i ekscytuje Twojego kota",
    },
    price: { en: 549, pl: 2799 },
  },
  {
    id: 21,
    name: { en: "Feather Chase Toy", pl: "Zabawka do gonitwy za piórkiem" },
    description: {
      en: "A toy that dangles feathers to entice your cat to chase and play",
      pl: "Zabawka z piórkami, która zachęca Twojego kota do gonitwy i zabawy",
    },
    price: { en: 499, pl: 2499 },
  },
  {
    id: 22,
    name: { en: "Cat Exercise Wheel", pl: "Koło do ćwiczeń dla kota" },
    description: {
      en: "An exercise wheel that allows your cat to run and stay active indoors",
      pl: "Koło do ćwiczeń, które pozwala Twojemu kotu biegać i pozostawać aktywnym w domu",
    },
    price: { en: 9999, pl: 49999 },
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
