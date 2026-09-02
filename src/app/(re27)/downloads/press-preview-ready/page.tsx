'use client';

import Link from 'next/link';
import { useEffect } from 'react';

const DOWNLOAD_HREF = '/api/downloads/press-preview';

export default function PressPreviewReadyPage() {
  useEffect(() => {
    const timeout = window.setTimeout(() => {
      window.location.assign(DOWNLOAD_HREF);
    }, 150);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <section className='bg-background text-foreground'>
      <div className='iiode-section-wrap'>
        <div className='iiode-section-panel iiode-split-grid grid grid-cols-1' data-scroll-panel='true'>
          <div className='iiode-split-half iiode-text-half iiode-half-pad-2 flex items-start py-8'>
            <div className='iiode-type-2 iiode-copy-narrow grid gap-5 text-foreground md:ml-auto md:mr-auto'>
              <h1 className='iiode-type-2'>Press Preview</h1>
              <p>Your download should start automatically.</p>
              <p>
                If it does not,{' '}
                <Link href={DOWNLOAD_HREF} className='underline underline-offset-4'>
                  click here to download the press preview
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
