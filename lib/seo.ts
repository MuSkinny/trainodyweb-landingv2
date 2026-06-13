import type { Metadata } from "next";
import { locales, defaultLocale, ogLocales, type Lang } from "./i18n";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.trainody.com";

type BuildMetadataParams = {
  lang: Lang;
  path: string;
  title: string;
  description: string;
};

export function buildMetadata({
  lang,
  path,
  title,
  description,
}: BuildMetadataParams): Metadata {
  const canonical = `${SITE_URL}/${lang}${path}`;
  const languages = {
    ...Object.fromEntries(
      locales.map((locale) => [locale, `${SITE_URL}/${locale}${path}`])
    ),
    "x-default": `${SITE_URL}/${defaultLocale}${path}`,
  };
  const ogLocale = ogLocales[lang];
  // L'immagine OG è generata dinamicamente da app/[lang]/opengraph-image.tsx

  return {
    title,
    description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: "website",
      siteName: "Trainody",
      title,
      description,
      url: canonical,
      locale: ogLocale,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: { index: true, follow: true },
  };
}
