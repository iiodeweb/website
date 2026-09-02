import Image from 'next/image';

import type { Re27Copy } from '@/content/re27';

type WorkWithUsProps = {
  copy: Re27Copy['workWithUs'];
};

export function WorkWithUs({ copy }: WorkWithUsProps) {
  return (
    <section className='bg-background'>
      <div className='iiode-section-wrap'>
        <div className='iiode-section-panel grid grid-cols-1 md:grid-cols-2'>
          <div className='iiode-split-half order-2 md:order-1 iiode-half-pad-2 flex items-start py-8'>
            <div className='iiode-type-2 iiode-copy-narrow grid gap-4 text-foreground md:ml-auto'>
              <h2 className='iiode-type-2 mb-2'>{copy.leftTitle}</h2>
              {copy.items.map((item) => (
                <div key={item.title} className='border-t border-foreground/20 pt-4'>
                  <h3>{item.title}</h3>
                  <p className='mt-3'>{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='order-1 md:order-2 iiode-split-half relative flex items-center justify-center min-h-[50vh]'>
            <Image src={copy.rightImage} alt={copy.rightTitle} fill sizes='(max-width: 767px) 100vw, 50vw' className='object-cover' />

            <div className='iiode-half-pad-1 relative z-10 flex h-full items-center justify-center text-center' />
          </div>
        </div>
      </div>
    </section>
  );
}
