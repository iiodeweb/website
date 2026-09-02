import Link from 'next/link';

import { HubspotFormModalTrigger } from '@/components/forms/HubspotFormModalTrigger';
import { hubspotConfig } from '@/content/hubspot';
import { getSiteCopy, siteConfig } from '@/content/site';
import type { Locale } from '@/lib/locale';

type FooterProps = {
  locale: Locale;
};

export function Footer({ locale }: FooterProps) {
  const copy = getSiteCopy(locale);

  return (
    <footer id='contact' className='bg-background text-foreground border-t border-foreground/20'>
      <div className='iiode-container py-8 md:py-10'>
        <div className='grid grid-cols-2 gap-y-5 xl:grid-cols-4 xl:gap-y-4'>
          <div className='iiode-hover-group grid content-start gap-y-1'>
            {siteConfig.footerLinks.left.map((link) => (
              <Link key={link.href} href={link.href} className='block text-base leading-6' target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>
                {copy.links[link.key]}
              </Link>
            ))}
          </div>

          <div className='iiode-hover-group grid content-start gap-y-1'>
            {siteConfig.footerLinks.right.map((link) =>
              link.key === 'newsletter' ? (
                <HubspotFormModalTrigger key={link.key} triggerLabel={copy.links[link.key]} modalTitle={hubspotConfig.forms.newsletter.modalTitle} portalId={hubspotConfig.forms.newsletter.portalId} formId={hubspotConfig.forms.newsletter.formId} region={hubspotConfig.forms.newsletter.region} fallbackEmail={siteConfig.email} successMessage='Thanks. You are now subscribed to the iiode newsletter.' className='block text-base leading-6' />
              ) : (
                <Link key={link.href} href={link.href} className='block text-base leading-6' target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>
                  {copy.links[link.key]}
                </Link>
              ),
            )}
          </div>
          <div className='col-span-2 text-justify text-[9px] leading-[1.08] sm:text-[9.5px] sm:leading-[1.12] xl:col-span-2 xl:text-[10px] xl:leading-[1.24]'>
            <p>{copy.footer.legal}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
