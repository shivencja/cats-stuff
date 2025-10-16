"use client";

import { useI18n } from "@/hooks/i18n";
import { MultilingualObject } from "@/types/langs";
import { EM_DASH } from "@/utils";

interface PriceProps {
  value: MultilingualObject<number>;
}

/**
 * A component that calculates and displays price in a human-readable format
 */
export default function Price({ value }: PriceProps) {
  const { t, lang } = useI18n();

  const price = value[lang] || value.en || Object.values(value)[0] || null;
  const formattedPrice = price
    ? `${(price / 100).toFixed(2)} ${t(`commons.localizedCurrency`)}`
    : EM_DASH;

  return <>{formattedPrice}</>;
}
