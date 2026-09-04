import Image from 'next/image';

import { getPagesCopy } from '@/content/pages';
import { getLocale } from '@/lib/locale-server';
import { SimpleCarousel } from '@/components/sections/SimpleCarousel';

export default async function CollaborationsPage() {
  const locale = await getLocale();
  const copy = getPagesCopy(locale).collaborations;

  return (
    <>
      <section className='bg-background text-foreground'>
        <div className='iiode-section-wrap'>
          <div className='iiode-section-panel grid grid-cols-1 md:grid-cols-2'>
            <div className='iiode-split-half iiode-half-pad-2 flex items-start py-8'>
              <p className='iiode-type-2 iiode-copy-narrow whitespace-pre-line md:ml-auto'>{copy.introLeft}</p>
            </div>
            <div className='iiode-split-half min-h-[100vh] md:min-h-[50vh]'>
              <div className='grid h-full w-full grid-cols-2 grid-rows-2'>
                {copy.introImages.slice(0, 4).map((image) => (
                  <div key={image} className='group relative overflow-hidden'>
                    <Image src={image} alt='' fill sizes='(max-width: 767px) 100vw, 50vw' className='object-cover absolute inset-0 h-full w-full' />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-background text-foreground'>
        <div className='iiode-section-wrap' data-scroll-track='true'>
          <div className='iiode-section-panel iiode-split-grid grid grid-cols-1 md:grid-cols-2' data-scroll-panel='true'>
            <div className='iiode-split-half iiode-half-pad-2 flex items-start py-8'>
              <div className='iiode-type-2 iiode-copy-narrow grid gap-5 md:ml-auto'>
                <p className='whitespace-pre-line'>{copy.abatJourTitle}</p>
                {copy.contributors.length > 0 ? (
                  <div className='grid gap-1'>
                    {copy.contributors.map((name) => (
                      <p key={name}>{name}</p>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
            <div className='iiode-split-half'>
              <SimpleCarousel images={copy.images} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
