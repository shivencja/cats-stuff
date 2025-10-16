"use client";

import { useI18n } from "@/hooks/i18n";
import { MultilingualObject } from "@/types/langs";

interface TranslatedProps {
  text: MultilingualObject<string>;
}

/**
 * A text component that translates its text based on the current language.
 */
export default function Translated({ text }: TranslatedProps) {
  const { lang } = useI18n();

  const translatedText = text[lang] || text.en || Object.values(text)[0] || "";

  return <>{translatedText}</>;
}
