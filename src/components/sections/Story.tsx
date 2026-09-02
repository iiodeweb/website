import Image from 'next/image';

import type { Re27Copy } from '@/content/re27';

type StoryProps = {
  copy: Re27Copy['story'];
};

export function Story({ copy }: StoryProps) {
  return (
    <section id='story' className='bg-background'>
      <div>
        <div className='iiode-section-panel grid grid-cols-1 md:grid-cols-2'>
          <div className='iiode-split-half order-2 md:order-1'>
            <div className='iiode-half-pad-1 pt-8 pb-8'>
              <h2 className='iiode-type-1 text-foreground'>{copy.leftText}</h2>
            </div>
          </div>

          <div className='iiode-split-half order-1 relative md:order-2 min-h-[50vh]'>
            <Image src={copy.rightImage} alt='Lighting made conscious' fill sizes='(max-width: 767px) 100vw, 50vw' className='object-cover absolute inset-0 h-full w-full' />

            <div className='iiode-half-pad-1 relative z-1 flex h-full items-center justify-center text-center'>
              <h2 className='iiode-type-1 text-white text-shadow-lg'>{copy.rightTitle}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
