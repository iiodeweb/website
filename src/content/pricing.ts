import type { Currency } from '@/lib/currency';
import type { Locale } from '@/lib/locale';

export type PreorderPriceItem = {
  id: string;
  label: string;
  descriptions: Record<Locale, string>;
  amounts: Record<Currency, number>;
  image: string;
  // One link per currency so the buyer is charged in the currency they selected.
  checkoutUrls: Record<Currency, string>;
};

// EUR amounts are final. CHF/GBP amounts, descriptions and every checkout URL
// are placeholders pending confirmed pricing and a live checkout.
export const preorderPrices: readonly PreorderPriceItem[] = [
  {
    id: 're27-1',
    label: '1 x Re27',
    descriptions: {
      en: 'A single Re27 bulb, shipped in recycled packaging. Reserve now to secure a unit from the first production run.',
      de: 'Ein einzelnes Re27-Glühbirne, versandt in recycelten Verpackungen. Reservieren Sie jetzt, um eine Einheit aus der ersten Produktionslauf zu sichern.',
      fr: 'Une seule lampe Re27, expédiée dans des emballages recyclés. Réservez maintenant pour garantir une unité de la première production.',
    },
    amounts: { EUR: 130, CHF: 125, GBP: 110 },
    image: '/assets/Re27/pre-orders/iiode-Re27-solo.webp',
    checkoutUrls: {
      CHF: 'https://example.com/checkout/re27-1-chf',
      EUR: 'https://example.com/checkout/re27-1-eur',
      GBP: 'https://example.com/checkout/re27-1-gbp',
    },
  },
  {
    id: 're27-1-lampholder',
    label: '1 x Re27 + Lampholder',
    descriptions: {
      en: 'A single Re27 bulb paired with its matching lampholder, ready to mount straight out of the box.',
      de: 'Eine einzelne Re27-Glühbirne in Verbindung mit ihrem passenden Lamphalter, bereit zum Aufbau direkt aus der Verpackung.',
      fr: 'Une seule lampe Re27 associée à son lampholder correspondant, prête à être montée directement hors de la boîte.',
    },
    amounts: { EUR: 150, CHF: 145, GBP: 130 },
    image: '/assets/Re27/pre-orders/iiode-Re27-pendant.webp',
    checkoutUrls: {
      CHF: 'https://example.com/checkout/re27-1-lampholder-chf',
      EUR: 'https://example.com/checkout/re27-1-lampholder-eur',
      GBP: 'https://example.com/checkout/re27-1-lampholder-gbp',
    },
  },
  {
    id: 're27-2',
    label: '2 x Re27',
    descriptions: {
      en: 'A pair of Re27 bulbs for a small installation or a spare, shipped together in a single package.',
      de: 'Eine Paar von Re27-Glühbirnen für eine kleine Installation oder als Ersatz, versandt zusammen in einem einzigen Paket.',
      fr: 'Un couple de lampes Re27 pour une petite installation ou un remplacement, expédiées ensemble dans un seul paquet.',
    },
    amounts: { EUR: 260, CHF: 250, GBP: 220 },
    image: '/assets/Re27/pre-orders/iiode-Re27-duo.webp',
    checkoutUrls: {
      CHF: 'https://example.com/checkout/re27-2-chf',
      EUR: 'https://example.com/checkout/re27-2-eur',
      GBP: 'https://example.com/checkout/re27-2-gbp',
    },
  },
  {
    id: 're27-5',
    label: '5 x Re27',
    descriptions: {
      en: 'Five Re27 bulbs for a full room or studio fit-out, at the best per-unit price of the pre-order.',
      de: 'Fünf Re27-Glühbirnen für eine vollständige Raum- oder Studio-Ausstattung, zum besten Einzelpreis der Vorbestellung.',
      fr: "Cinq lampes Re27 pour une installation complète d'une pièce ou d'un studio, au meilleur prix unitaire de la précommande.",
    },
    amounts: { EUR: 650, CHF: 625, GBP: 550 },
    image: '/assets/Re27/pre-orders/iiode-Re27-group.webp',
    checkoutUrls: {
      CHF: 'https://example.com/checkout/re27-5-chf',
      EUR: 'https://example.com/checkout/re27-5-eur',
      GBP: 'https://example.com/checkout/re27-5-gbp',
    },
  },
];
