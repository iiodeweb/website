import type { Locale } from '@/lib/locale';

import { localizedContent, type SiteCopy } from './locales';

type NavKey = 're27' | 'collaborations' | 'about' | 'downloads' | 'contact' | 'preorder';

type FooterLeftKey = 'home' | 'contact' | 'instagram';

type FooterLinkKey = 'services' | 'preorder' | 'terms' | 'newsletter';

export const siteConfig = {
  name: 'iiode',
  email: 'info@iiode.com',
  archiveUrl: 'https://services.iiode.com',
  analytics: {
    googleMeasurementId: 'G-95N9191CK7',
  },
  nav: {
    items: [
      { key: 're27' as NavKey, href: '/' },
      { key: 'collaborations' as NavKey, href: '/collaborations' },
      { key: 'about' as NavKey, href: '/about' },
      { key: 'preorder' as NavKey, href: '/preorder' },
      { key: 'downloads' as NavKey, href: '/downloads' },
    ],
  },
  footerLinks: {
    left: [
      { key: 'home' as FooterLeftKey, href: '/' },
      { key: 'contact' as FooterLeftKey, href: 'mailto:info@iiode.com' },
      { key: 'instagram' as FooterLeftKey, href: 'https://www.instagram.com/iiode/' },
    ],
    right: [
      { key: 'services' as FooterLinkKey, href: 'https://services.iiode.com' },
      { key: 'preorder' as FooterLinkKey, href: '/preorder' },
      { key: 'terms' as FooterLinkKey, href: '/terms-and-services' },
      {
        key: 'newsletter' as FooterLinkKey,
        href: '#newsletter',
      },
    ],
  },
};

export function getSiteCopy(locale: Locale): SiteCopy {
  return localizedContent[locale]?.site ?? localizedContent.en.site;
}
