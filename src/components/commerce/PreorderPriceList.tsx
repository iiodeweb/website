'use client';

import { useCurrency } from '@/components/commerce/CurrencyProvider';
import { usePreorderSelection } from '@/components/commerce/PreorderSelectionProvider';
import { preorderPrices } from '@/content/pricing';
import { formatPrice } from '@/lib/currency';
import type { Locale } from '@/lib/locale';

type PreorderPriceListProps = {
  locale: Locale;
  chooseLabel: string;
  checkoutLabel: string;
  priceNote: string;
  className?: string;
};

export function PreorderPriceList({ locale, chooseLabel, checkoutLabel, priceNote, className }: PreorderPriceListProps) {
  const { currency } = useCurrency();
  const { selected, selectedId, setSelectedId } = usePreorderSelection();

  return (
    <div className={`grid gap-5 ${className ?? ''}`}>
      {chooseLabel}
      <ul className='iiode-hover-group grid list-none p-0'>
        {preorderPrices.map((item) => {
          const isSelected = item.id === selectedId;

          return (
            <li key={item.id}>
              <button type='button' onClick={() => setSelectedId(item.id)} aria-pressed={isSelected} className={`w-full cursor-pointer appearance-none border-0 bg-transparent p-0 text-left underline-offset-4 transition-colors ${isSelected ? 'underline' : ''}`}>
                {`${item.label[locale]} — ${formatPrice(item.amounts[currency], currency, locale)}`}
              </button>
            </li>
          );
        })}
      </ul>
      <p>{priceNote}</p>
      <div>
        <a href={selected.checkoutUrls[currency]} className='inline-block cursor-pointer bg-foreground px-5 py-3 iiode-type-small uppercase tracking-[0.08em] text-background transition-opacity hover:opacity-90' target='_blank' rel='noopener'>
          {checkoutLabel}
        </a>
      </div>
    </div>
  );
}
