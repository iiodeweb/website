import Image from 'next/image';
import type { Re27Copy } from '@/content/re27';

type GalleryProps = {
  copy: Re27Copy['gallery'];
};

export function Gallery({ copy }: GalleryProps) {
  return (
    <section className='bg-background'>
      <div className='iiode-section-wrap'>
        <div className='iiode-section-panel grid grid-cols-1 md:grid-cols-2'>
          <div className='iiode-split-half relative overflow-hidden min-h-[80vh] md:min-h-auto'>
            <Image src={copy.leftImage} alt='One bulb for every environment' fill sizes='(max-width: 767px) 100vw, 50vw' className='object-cover absolute inset-0 h-full w-full' />

            <div className='iiode-half-pad-1 relative z-10 flex h-full items-center justify-center text-center'>
              <h2 className='iiode-type-1 text-white text-shadow-lg'>{copy.leftTitle}</h2>
            </div>
          </div>

          <div className='iiode-split-half iiode-half-pad-1 py-8'>
            <p className='iiode-type-1 text-foreground '>{copy.rightText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
