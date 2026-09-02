import type { Metadata } from 'next';

import { getPagesCopy } from '@/content/pages';
import { getLocale } from '@/lib/locale-server';

export const metadata: Metadata = {
  title: 'General Terms and Conditions',
  description: 'General terms and conditions for the iiode website.',
};

export default async function TermsAndServicesPage() {
  const locale = await getLocale();
  const copy = getPagesCopy(locale).terms;

  return (
    <section className='bg-background text-foreground'>
      <div className='iiode-container py-12 md:py-16 lg:py-20'>
        <article className='mx-auto max-w-[46rem]'>
          <header className='border-b border-foreground/20 pb-8'>
            <h1 className='iiode-type-1'>{copy.title}</h1>
            <p className='mt-3 text-sm text-foreground/70'>
              {copy.updatedLabel}: {copy.updatedAt}
            </p>
            <p className='iiode-type-2 mt-6'>{copy.intro}</p>
          </header>

          <div className='mt-10 grid gap-10'>
            {copy.sections.map((section) => (
              <section key={section.heading} className='grid gap-4 border-t border-foreground/20 pt-5 first:border-t-0 first:pt-0'>
                <h2 className={section.paragraphs.length > 0 ? 'iiode-type-2' : 'iiode-type-1'}>
                  {section.heading}
                </h2>
                {section.paragraphs.length > 0 ? (
                  <div className='grid gap-4 text-base leading-relaxed text-foreground/85'>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                ) : null}
              </section>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
