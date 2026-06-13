import { NextResponse, type NextRequest } from "next/server";
import Negotiator from "negotiator";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import { locales as supportedLocales, defaultLocale, isLang } from "./lib/i18n";

const locales = [...supportedLocales];

// Mappa dei paesi alle lingue
const countryToLang: { [key: string]: string } = {
  IT: "it",
  CH: "it",
  SM: "it",
  VA: "it",
  US: "en",
  GB: "en",
  CA: "en",
  AU: "en",
  NZ: "en",
  ES: "es",
  MX: "es",
  AR: "es",
  CO: "es",
  CL: "es",
  PE: "es",
  VE: "es",
  EC: "es",
  GT: "es",
  BO: "es",
  PY: "es",
  UY: "es",
  CR: "es",
  PA: "es",
  DO: "es",
  HN: "es",
  SV: "es",
  NI: "es",
};

function getPreferredLocale(request: NextRequest): string {
  // Check cookies first
  const storedLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (isLang(storedLocale)) {
    return storedLocale;
  }

  // Check country from IP
  const country = request.headers.get("cf-ipcountry");
  if (country && countryToLang[country]) {
    return countryToLang[country];
  }

  // Check browser preferences
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  return matchLocale(languages, locales, defaultLocale);
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  let response = NextResponse.next();
  
  // Route di metadata SEO servite alla radice: non devono ricevere il prefisso di lingua.
  if (
    pathname.includes('favicon.ico') ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml'
  ) {
    return response;
  }
 
  const localeRegex = new RegExp(`^/(${locales.join("|")})(/|$)`);
  const pathnameIsMissingLocale = !localeRegex.test(pathname);

  // Estrai il locale dal pathname
  let locale;
  if (pathnameIsMissingLocale) {
    locale = getPreferredLocale(request);
    const newUrl = new URL(`/${locale}${pathname}`, request.url);
    newUrl.search = request.nextUrl.search;
    response = NextResponse.redirect(newUrl);
  } else {
    locale = pathname.split('/')[1];
  }

  // Imposta sempre l'header e il cookie della lingua
  response.headers.set('x-locale', locale);
  const storedLocale = request.cookies.get("NEXT_LOCALE")?.value;

  if (!storedLocale || storedLocale !== locale) {
    response.cookies.set("NEXT_LOCALE", locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      secure: true
    });
  }

  return response;
}


export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!api|_next|favicon.ico|.\.[^/]$).*)'
  ],
};
