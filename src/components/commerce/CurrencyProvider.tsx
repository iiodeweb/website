'use client';

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';

import { defaultCurrency, type Currency } from '@/lib/currency';

const cookieMaxAgeSeconds = 60 * 60 * 24 * 365;

type CurrencyContextValue = {
  currency: Currency;
  setCurrency: (next: Currency) => void;
};

const CurrencyContext = createContext<CurrencyContextValue>({
  currency: defaultCurrency,
  setCurrency: () => {},
});

type CurrencyProviderProps = {
  initialCurrency: Currency;
  children: ReactNode;
};

export function CurrencyProvider({ initialCurrency, children }: CurrencyProviderProps) {
  const [currency, setCurrencyState] = useState<Currency>(initialCurrency);

  const setCurrency = useCallback((next: Currency) => {
    setCurrencyState(next);
    // Persisted so the server renders the right prices on the next request.
    document.cookie = `iiode-currency=${next}; path=/; max-age=${cookieMaxAgeSeconds}; samesite=lax`;
  }, []);

  const value = useMemo(() => ({ currency, setCurrency }), [currency, setCurrency]);

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency(): CurrencyContextValue {
  return useContext(CurrencyContext);
}
