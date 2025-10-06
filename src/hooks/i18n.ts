import i18n from "@/i18n/config";

export function useI18n() {
  const t = (...args: Parameters<typeof i18n.t>) => i18n.t(...args);

  return { t };
}
