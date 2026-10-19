import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { ui, type Locale, type Text } from "../content";

const STORAGE_KEY = "lang";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (text: Text) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

// Priority: ?lang=es in the URL (handy for the Spanish CV), then the saved choice, then English.
function initialLocale(): Locale {
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (fromUrl === "en" || fromUrl === "es") return fromUrl;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "es") return saved;
  } catch {
    // Storage can be blocked (private mode); fall through to the default.
  }
  return "en";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Not critical: the choice just won't persist.
    }
    const url = new URL(window.location.href);
    url.searchParams.delete("lang");
    window.history.replaceState(null, "", url);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = ui.meta.title[locale];
    document.querySelector('meta[name="description"]')?.setAttribute("content", ui.meta.description[locale]);
  }, [locale]);

  const t = useCallback((text: Text) => text[locale], [locale]);

  return <LocaleContext.Provider value={{ locale, setLocale, t }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const value = useContext(LocaleContext);
  if (!value) throw new Error("useLocale must be used inside LocaleProvider");
  return value;
}
