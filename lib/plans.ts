// Unica fonte di verità per i piani tariffari.
// Importato sia da components/pricing.tsx (UI) sia da components/json-ld.tsx (JSON-LD).
// Mantenere sincronizzati prezzi e feature qui.

import type { Localized } from "./i18n";

export type PlanFeature = {
  title: Localized;
  check: boolean;
};

export type Plan = {
  name: string;
  price: Localized;
  // Prezzo numerico per i dati strutturati / offerte (valuta EUR).
  priceValue: number;
  oldPrice: string;
  bestSeller: boolean;
  features: PlanFeature[];
};

export const plans: Plan[] = [
  {
    name: "Basic",
    price: { it: "Gratis", en: "Free", es: "Gratis" },
    priceValue: 0,
    oldPrice: "",
    bestSeller: false,
    features: [
      {
        title: {
          it: "Gestisci fino a 2 clienti",
          en: "Manage up to 2 clients",
          es: "Gestiona hasta 2 clientes",
        },
        check: true,
      },
      {
        title: {
          it: "Disdici in qualsiasi momento",
          en: "Cancel anytime",
          es: "Cancela en cualquier momento",
        },
        check: true,
      },
      {
        title: {
          it: "App Mobile (iOS / Android) per i clienti",
          en: "Mobile App (iOS / Android) for clients",
          es: "App móvil (iOS / Android) para los clientes",
        },
        check: true,
      },
      {
        title: {
          it: "Chat Clienti",
          en: "Client Chat",
          es: "Chat con clientes",
        },
        check: true,
      },
      {
        title: {
          it: "Gestione pagamenti online",
          en: "Online payment management",
          es: "Gestión de pagos online",
        },
        check: false,
      },
    ],
  },
  {
    name: "Pro",
    price: { it: "€19.90", en: "€19.90", es: "€19.90" },
    priceValue: 19.9,
    oldPrice: "",
    bestSeller: true,
    features: [
      {
        title: {
          it: "Gestisci fino a 20 clienti",
          en: "Manage up to 20 clients",
          es: "Gestiona hasta 20 clientes",
        },
        check: true,
      },
      {
        title: {
          it: "Disdici in qualsiasi momento",
          en: "Cancel anytime",
          es: "Cancela en cualquier momento",
        },
        check: true,
      },
      {
        title: {
          it: "App Mobile (iOS / Android) per i clienti",
          en: "Mobile App (iOS / Android) for clients",
          es: "App móvil (iOS / Android) para los clientes",
        },
        check: true,
      },
      {
        title: {
          it: "Chat Clienti",
          en: "Client Chat",
          es: "Chat con clientes",
        },
        check: true,
      },
      {
        title: {
          it: "Gestione pagamenti online",
          en: "Online payment management",
          es: "Gestión de pagos online",
        },
        check: false,
      },
    ],
  },
  {
    name: "Business",
    price: { it: "€49.90", en: "€49.90", es: "€49.90" },
    priceValue: 49.9,
    oldPrice: "",
    bestSeller: false,
    features: [
      {
        title: {
          it: "Gestisci fino a 50 clienti",
          en: "Manage up to 50 clients",
          es: "Gestiona hasta 50 clientes",
        },
        check: true,
      },
      {
        title: {
          it: "Disdici in qualsiasi momento",
          en: "Cancel anytime",
          es: "Cancela en cualquier momento",
        },
        check: true,
      },
      {
        title: {
          it: "App Mobile (iOS / Android) per i clienti",
          en: "Mobile App (iOS / Android) for clients",
          es: "App móvil (iOS / Android) para los clientes",
        },
        check: true,
      },
      {
        title: {
          it: "Chat Clienti",
          en: "Client Chat",
          es: "Chat con clientes",
        },
        check: true,
      },
      {
        title: {
          it: "Gestione pagamenti online",
          en: "Online payment management",
          es: "Gestión de pagos online",
        },
        check: true,
      },
    ],
  },
];
