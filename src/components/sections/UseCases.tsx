import Image from 'next/image';

import type { Re27Copy } from '@/content/re27';

type UseCasesProps = {
  copy: Re27Copy['useCases'];
};

export function UseCases({ copy }: UseCasesProps) {
  return (
    <section id='use-cases' className='bg-background'>
      <div>
        <div className='iiode-section-panel grid grid-cols-1 md:grid-cols-2'>
          <div className='iiode-split-half relative min-h-[50vh]'>
            <Image src={copy.leftImage} alt='Re27 product image' fill sizes='(max-width: 767px) 100vw, 50vw' className='object-cover absolute inset-0 h-full w-full' />

            <div className='iiode-half-pad-1 relative flex h-full items-start py-8'>
              <h2 className='iiode-type-1 text-white text-shadow-lg'>{copy.leftTitle}</h2>
            </div>
          </div>

          <div className='iiode-split-half iiode-half-pad-2 flex items-start py-8'>
            <div className='iiode-type-2 iiode-copy-narrow grid gap-5 text-foreground md:mr-auto'>
              <p>{copy.bridge}</p>
              {copy.groups.map((group) => (
                <div key={group.heading} className='border-t border-foreground/20 pt-4'>
                  <p className='mb-2'>{group.heading}</p>
                  <ul>
                    {group.bullets.map((bullet) => (
                      <li key={bullet}>- {bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <p className='text-[0.72em]'>{copy.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
