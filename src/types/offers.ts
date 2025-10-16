import { MultilingualObject } from "./langs";

export interface Offer {
  id: number;
  name: MultilingualObject<string>;
  description: MultilingualObject<string>;
  price: MultilingualObject<number>;
  imageUrl?: string;
}
