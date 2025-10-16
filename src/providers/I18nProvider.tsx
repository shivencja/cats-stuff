"use client";

import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";
import i18n from "../i18n/config";
import { Loader } from "@/components/Loader/Loader";
import { AVAILABLE_LANGS, Lang } from "@/types/langs";

const LANG_STORAGE_KEY = "lang";

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
}
const I18nContext = createContext<I18nContextType | undefined>(undefined);

// function to load translations
const loadTranslations = async (lang: Lang) => {
  if (i18n.translations[lang]) {
    return;
  }
  const response = await fetch(`/locales/${lang}.json`);
  if (!response.ok) {
    throw new Error(`Failed to fetch translations for ${lang}`);
  }
  i18n.translations[lang] = await response.json();
};

/**
 * Hook to initialize and manage i18n state
 */
function useI18nInitializer() {
  const [lang, setLangState] = useState<Lang>("en");
  const [isInitialized, setIsInitialized] = useState(false);

  // on mount, determine initial language
  useEffect(() => {
    const initialize = async () => {
      let initialLang: Lang = "en";
      const savedLang = localStorage.getItem(LANG_STORAGE_KEY) as Lang;

      // check localStorage for saved language preference
      if (savedLang && AVAILABLE_LANGS.includes(savedLang)) {
        initialLang = savedLang;
      } else {
        // if no saved preference, try to detect browser language
        const browserLang = navigator.language.split("-")[0];
        if (browserLang === "pl") {
          initialLang = "pl";
        }
      }

      try {
        await loadTranslations(initialLang);
        i18n.locale = initialLang;
        setLangState(initialLang);
      } catch (error) {
        console.error(
          `Failed to load initial language '${initialLang}'`,
          error
        );

        if (initialLang !== "en") {
          console.warn("Error loading 'pl' translations. Falling back to 'en'");
          try {
            await loadTranslations("en");
            i18n.locale = "en";
            setLangState("en");
          } catch (fallbackError) {
            console.error(
              "Failed to load default fallback language 'en'",
              fallbackError
            );
          }
        } else {
          console.error("The default language 'en' failed to load");
        }
      } finally {
        setIsInitialized(true);
      }
    };

    initialize();
  }, []);

  // function to switch languages
  const setLang = useCallback(async (newLang: Lang) => {
    try {
      await loadTranslations(newLang);

      i18n.locale = newLang;
      localStorage.setItem(LANG_STORAGE_KEY, newLang);
      setLangState(newLang);
    } catch (error) {
      console.error(`Failed to switch to language ${newLang}:`, error);
    }
  }, []);

  return { lang, setLang, isInitialized };
}

export default function I18nProvider({ children }: PropsWithChildren) {
  const { lang, setLang, isInitialized } = useI18nInitializer();

  const contextValue = useMemo(() => ({ lang, setLang }), [lang, setLang]);

  // shows a loader until i18n is initialized
  if (!isInitialized) {
    return <Loader />;
  }

  return (
    <I18nContext.Provider value={contextValue}>{children}</I18nContext.Provider>
  );
}

export function useSwitchLang() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error("useSwitchLang must be used within an I18nProvider");
  }
  return context;
}
