export const AVAILABLE_LANGS = ["en", "pl"] as const;
export type Lang = (typeof AVAILABLE_LANGS)[number];

export type MultilingualObject<T> = {
  [key in Lang]?: T;
};
