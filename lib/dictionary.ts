import { headers } from 'next/headers';
import 'server-only'
import { defaultLocale, isLang, type Lang } from './i18n';

const dictionaries: Record<Lang, () => Promise<any>> = {
  it: () => import('../dictionaries/it.json').then((module) => module.default),
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  es: () => import('../dictionaries/es.json').then((module) => module.default),
}

export const getDictionary = async (locale?: Lang) => {
  // Se il locale non è fornito, usa l'header
  const headerLocale = (await headers()).get('x-locale');
  const finalLocale = locale || (isLang(headerLocale) ? headerLocale : defaultLocale);

  if (!dictionaries[finalLocale]) {
    throw new Error(`Dictionary for locale ${finalLocale} not found`);
  }

  return dictionaries[finalLocale]();
}
