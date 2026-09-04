import Image from 'next/image';

import { CurrencyProvider } from '@/components/commerce/CurrencyProvider';
import { CurrencySelect } from '@/components/commerce/CurrencySelect';
import { PreorderImage } from '@/components/commerce/PreorderImage';
import { PreorderPriceList } from '@/components/commerce/PreorderPriceList';
import { PreorderSelectionProvider } from '@/components/commerce/PreorderSelectionProvider';
import { getPagesCopy } from '@/content/pages';
import { getCurrency } from '@/lib/currency-server';
import { getLocale } from '@/lib/locale-server';

export default async function PreorderPage() {
  const locale = await getLocale();
  const currency = await getCurrency();
  const copy = getPagesCopy(locale).preorder;

  return (
    <section id='top' className='bg-background text-foreground'>
      <div className='iiode-section-wrap'>
        <CurrencyProvider initialCurrency={currency}>
          <PreorderSelectionProvider>
            <div className='iiode-section-panel iiode-split-grid grid grid-cols-1 md:grid-cols-2'>
              <div className='iiode-split-half iiode-half-pad-2 flex items-start py-8'>
                <div className='iiode-type-2 iiode-copy-narrow grid gap-6 text-foreground md:ml-auto'>
                  <h2 className='iiode-type-1'>{copy.title}</h2>
                  <CurrencySelect className='max-w-[18rem]' />
                  <PreorderPriceList locale={locale} />
                </div>
              </div>

              <div className='iiode-split-half order-1 relative md:order-2 min-h-[100vh] md:min-h-[50vh]'>
                <PreorderImage fallbackSrc={copy.imageRight} alt='Pre-order' />
              </div>
            </div>
          </PreorderSelectionProvider>
        </CurrencyProvider>
      </div>

      <div className='iiode-section-wrap'>
        <div className='iiode-section-panel iiode-split-grid grid grid-cols-1 md:grid-cols-2'>
          <div className='iiode-split-half relative min-h-[50vh] order-2 md:order-1'>
            <Image src={copy.imageLeft} alt='Pre-order' fill sizes='(max-width: 767px) 100vw, 50vw' className='object-cover absolute inset-0 h-full w-full' />
          </div>

          <div className='iiode-split-half iiode-half-pad-2 flex items-start py-8 order-1 md:order-2'>
            <div className='iiode-type-2 iiode-copy-narrow grid gap-5 text-foreground'>
              <h1 className='iiode-type-2'>{copy.title}</h1>
              {copy.description.map((line, index) => (
                <p key={line} className={index === 0 ? '' : 'border-t border-foreground/20 pt-4'}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
