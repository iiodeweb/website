'use client';

import { useCurrency } from '@/components/commerce/CurrencyProvider';
import { usePreorderSelection } from '@/components/commerce/PreorderSelectionProvider';
import { preorderPrices } from '@/content/pricing';
import { formatPrice } from '@/lib/currency';
import type { Locale } from '@/lib/locale';

type PreorderPriceListProps = {
  locale: Locale;
  checkoutLabel?: string;
  className?: string;
};

export function PreorderPriceList({ locale, checkoutLabel = 'pre-order now', className }: PreorderPriceListProps) {
  const { currency } = useCurrency();
  const { selected, selectedId, setSelectedId } = usePreorderSelection();

  return (
    <div className={`grid gap-5 ${className ?? ''}`}>
      Choose your option:
      <ul className='iiode-hover-group grid list-none p-0'>
        {preorderPrices.map((item) => {
          const isSelected = item.id === selectedId;

          return (
            <li key={item.id}>
              <button type='button' onClick={() => setSelectedId(isSelected ? null : item.id)} aria-expanded={isSelected} className={`w-full cursor-pointer appearance-none border-0 bg-transparent p-0 text-left underline-offset-4 transition-colors ${isSelected ? 'underline' : ''}`}>
                {`${item.label} — ${formatPrice(item.amounts[currency], currency)}`}
              </button>
            </li>
          );
        })}
      </ul>
      {selected ? (
        <div className='grid gap-4 border-t border-foreground/20 pt-4'>
          <p>{selected.descriptions[locale]}</p>

          <div>
            <a href={selected.checkoutUrls[currency]} className='cursor-pointer bg-foreground px-5 py-3 text-xs uppercase tracking-[0.08em] text-background transition-opacity hover:opacity-90' target='_blank'>
              {checkoutLabel}
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}
