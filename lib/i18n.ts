// Unica fonte di verità per le lingue supportate.
// Importato da middleware, SEO, sitemap, layout e componenti.

export const locales = ["it", "en", "es"] as const;

export type Lang = (typeof locales)[number];

export const defaultLocale: Lang = "it";

export const isLang = (value: unknown): value is Lang =>
  locales.includes(value as Lang);

export const normalizeLang = (value: string | undefined): Lang =>
  isLang(value) ? value : defaultLocale;

export const ogLocales: Record<Lang, string> = {
  it: "it_IT",
  en: "en_US",
  es: "es_ES",
};

// Testo localizzato: una voce per ogni lingua supportata.
export type Localized = Record<Lang, string>;
