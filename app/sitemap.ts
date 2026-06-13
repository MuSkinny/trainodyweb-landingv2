import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { locales, defaultLocale } from "@/lib/i18n";

const paths = ["", "/privacy-policy", "/terms-and-conditions"];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((lang) =>
    paths.map((path) => ({
      url: `${SITE_URL}/${lang}${path}`,
      alternates: {
        languages: {
          ...Object.fromEntries(
            locales.map((locale) => [locale, `${SITE_URL}/${locale}${path}`])
          ),
          "x-default": `${SITE_URL}/${defaultLocale}${path}`,
        },
      },
    }))
  );
}
