import { MultilingualObject } from "./langs";

export interface OfferDTO {
  id: number;
  name: MultilingualObject<string>;
  description: MultilingualObject<string>;
  price: MultilingualObject<number>;
  imageUrl?: string;
}
