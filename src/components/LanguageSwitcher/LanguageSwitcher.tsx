"use client";

import { useI18n } from "@/hooks/i18n";
import { Lang, useSwitchLang } from "@/providers/I18nProvider";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useMemo } from "react";

type LanguageOption = {
  value: Lang;
  label: string;
  ariaLabel: string;
};

export function LanguageSwitcher() {
  const { lang, setLang } = useSwitchLang();
  const { t } = useI18n();

  const handleLanguageChange = (
    event: React.MouseEvent<HTMLElement>,
    newLang: Lang | null
  ) => {
    if (newLang !== null) {
      setLang(newLang);
    }
  };

  const languages = useMemo<LanguageOption[]>(
    () => [
      {
        value: "pl",
        label: "🇵🇱",
        ariaLabel: t("conponents.languageSwitcher.en"),
      },
      {
        value: "en",
        label: "🇬🇧",
        ariaLabel: t("conponents.languageSwitcher.pl"),
      },
    ],
    [t]
  );

  return (
    <ToggleButtonGroup
      value={lang}
      exclusive
      onChange={handleLanguageChange}
      aria-label={t("conponents.languageSwitcher.label")}
      size="small"
    >
      {languages.map(({ value, label, ariaLabel }) => (
        <ToggleButton key={value} value={value} aria-label={ariaLabel}>
          {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
