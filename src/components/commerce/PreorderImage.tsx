'use client';

import Image from 'next/image';

import { usePreorderSelection } from '@/components/commerce/PreorderSelectionProvider';

type PreorderImageProps = {
  fallbackSrc: string;
  alt: string;
};

export function PreorderImage({ fallbackSrc, alt }: PreorderImageProps) {
  const { selected } = usePreorderSelection();

  return <Image src={selected?.image ?? fallbackSrc} alt={selected?.label ?? alt} fill sizes='(max-width: 767px) 100vw, 50vw' className='object-cover absolute inset-0 h-full w-full' />;
}
