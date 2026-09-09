'use client';

import Image from 'next/image';

import { usePreorderSelection } from '@/components/commerce/PreorderSelectionProvider';
import type { Locale } from '@/lib/locale';

type PreorderImageProps = {
  locale: Locale;
};

export function PreorderImage({ locale }: PreorderImageProps) {
  const { selected } = usePreorderSelection();

  return <Image src={selected.image} alt={selected.label[locale]} fill sizes='(max-width: 767px) 100vw, 50vw' className='object-cover absolute inset-0 h-full w-full' />;
}
