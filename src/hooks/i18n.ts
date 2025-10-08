"use client";

import i18n from "@/i18n/config";
import { useSwitchLang } from "@/providers/I18nProvider";

export function useI18n() {
  const { lang } = useSwitchLang();

  const t = (...args: Parameters<typeof i18n.t>) => i18n.t(...args);

  return { t, lang };
}
