"use client";

import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import i18n from "./config";

export const AVAILABLE_LANGS = ["en", "pl"] as const;
export type Lang = (typeof AVAILABLE_LANGS)[number];

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
}
const I18nContext = createContext<I18nContextType | undefined>(undefined);

function useStoredLang(defaultLang: Lang = "en") {
  const [lang, setLang] = useState<Lang>(defaultLang);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Lang;
    if (savedLang && AVAILABLE_LANGS.includes(savedLang)) {
      setLang(savedLang);
    } else {
      const browserLang = navigator.language.split("-")[0];
      if (browserLang === "pl") {
        setLang("pl");
      }
    }
  }, []);

  useEffect(() => {
    if (lang !== defaultLang || localStorage.getItem("lang")) {
      localStorage.setItem("lang", lang);
    }
  }, [lang]);

  return { lang, setLang };
}

export default function I18nProvider({ children }: PropsWithChildren) {
  const { lang, setLang } = useStoredLang("en");

  useEffect(() => {
    i18n.locale = lang;
  }, [lang]);

  const contextValue = useMemo(() => ({ lang, setLang }), [lang, setLang]);

  return (
    <I18nContext.Provider value={contextValue}>
      <div key={lang}>{children}</div>
    </I18nContext.Provider>
  );
}

export function useSwitchLang() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error("useSwitchLang must be used within an I18nProvider");
  }
  return context;
}
