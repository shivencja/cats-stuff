"use client";

import { useSwitchLang } from "@/i18n/Provider";
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
