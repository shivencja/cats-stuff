"use client";

import { useSwitchLang } from "@/providers/I18nProvider";
import { Button } from "@mui/material";

export function LanguageSwitcher() {
  const { lang, setLang } = useSwitchLang();

  const toggleLanguage = () => {
    const newLang = lang === "pl" ? "en" : "pl";
    setLang(newLang);
  };

  return (
    <Button onClick={toggleLanguage}>
      Change to: {lang === "pl" ? "EN" : "PL"}
    </Button>
  );
}
