import type { Currency } from '@/lib/currency';
import type { Locale } from '@/lib/locale';

export type PreorderPriceItem = {
  id: string;
  label: Record<Locale, string>;
  amounts: Record<Currency, number>;
  image: string;
  // One link per currency so the buyer is charged in the currency they selected.
  checkoutUrls: Record<Currency, string>;
};

// Confirmed base prices exclude VAT and shipping.
export const preorderPrices: readonly PreorderPriceItem[] = [
  {
    id: 're27-1',
    label: { en: 'Re27 Solo', fr: 'Re27 Solo', de: 'Re27 Solo' },
    amounts: { EUR: 150, CHF: 140, GBP: 130 },
    image: '/assets/Re27/pre-orders/iiode-Re27-solo.webp',
    checkoutUrls: {
      CHF: 'https://payments-eu1.hubspot.com/payments/X96yXdCxfbGxPG?referrer=PAYMENT_LINK',
      EUR: 'https://payments-eu1.hubspot.com/payments/nbnJ4tNFRTWbw?referrer=PAYMENT_LINK',
      GBP: 'https://payments-eu1.hubspot.com/payments/fNcMPVPgbg2sR?referrer=PAYMENT_LINK',
    },
  },
  {
    id: 're27-2',
    label: { en: 'Re27 Duo', fr: 'Re27 Duo', de: 'Re27 Duo' },
    amounts: { EUR: 270, CHF: 250, GBP: 230 },
    image: '/assets/Re27/pre-orders/iiode-Re27-duo.webp',
    checkoutUrls: {
      CHF: 'https://payments-eu1.hubspot.com/payments/Y6Ynwn7n6qz?referrer=PAYMENT_LINK',
      EUR: 'https://payments-eu1.hubspot.com/payments/z6XxfkFYWmvHssNv?referrer=PAYMENT_LINK',
      GBP: 'https://payments-eu1.hubspot.com/payments/4TwpctSRhS7vsy7?referrer=PAYMENT_LINK',
    },
  },
  {
    id: 're27-1-lampholder',
    label: { en: 'Re27 + Pendant', fr: 'Re27 + Suspension', de: 'Re27 + Pendel' },
    amounts: { EUR: 245, CHF: 230, GBP: 210 },
    image: '/assets/Re27/pre-orders/iiode-Re27-pendant.webp',
    checkoutUrls: {
      CHF: 'https://payments-eu1.hubspot.com/payments/y24bmhS2FkCwxjYm?referrer=PAYMENT_LINK',
      EUR: 'https://payments-eu1.hubspot.com/payments/CbmKCR79Ryp6X?referrer=PAYMENT_LINK',
      GBP: 'https://payments-eu1.hubspot.com/payments/HZKJPjVXHJcszYW?referrer=PAYMENT_LINK',
    },
  },
];
