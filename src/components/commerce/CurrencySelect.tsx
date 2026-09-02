'use client';

import { useCurrency } from '@/components/commerce/CurrencyProvider';
import { currencyOptions, currencyOrder, isCurrency } from '@/lib/currency';

type CurrencySelectProps = {
  className?: string;
};

export function CurrencySelect({ className }: CurrencySelectProps) {
  const { currency, setCurrency } = useCurrency();

  const handleChange = (value: string) => {
    if (!isCurrency(value) || value === currency) {
      return;
    }

    setCurrency(value);
  };

  return (
    <div className={`grid gap-2 ${className ?? ''}`}>
      <label htmlFor='iiode-currency-select'>Your Location:</label>
      <div className='relative'>
        <select id='iiode-currency-select' value={currency} onChange={(event) => handleChange(event.target.value)} aria-label='Currency' className='w-full cursor-pointer appearance-none rounded-none border border-foreground/20 bg-foreground/5 py-3 pl-4 pr-11 text-left text-base text-foreground outline-none transition-colors hover:border-foreground/40 focus-visible:border-foreground'>
          {currencyOrder.map((option) => (
            <option key={option} value={option} className='bg-background text-foreground'>
              {`${currencyOptions[option].regionLabel} \u2014 ${currencyOptions[option].currencyLabel}`}
            </option>
          ))}
        </select>
        <svg aria-hidden='true' viewBox='0 0 12 8' className='pointer-events-none absolute right-4 top-1/2 h-2 w-3 -translate-y-1/2 opacity-70'>
          <path d='M1 1.5 6 6.5l5-5' fill='none' stroke='currentColor' strokeWidth='1.4' strokeLinecap='square' />
        </svg>
      </div>
    </div>
  );
}
