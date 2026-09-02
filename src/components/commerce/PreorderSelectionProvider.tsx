'use client';

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

import { preorderPrices, type PreorderPriceItem } from '@/content/pricing';

type PreorderSelectionContextValue = {
  selected: PreorderPriceItem | null;
  selectedId: string | null;
  setSelectedId: (next: string | null) => void;
};

const PreorderSelectionContext = createContext<PreorderSelectionContextValue>({
  selected: null,
  selectedId: null,
  setSelectedId: () => {},
});

export function PreorderSelectionProvider({ children }: { children: ReactNode }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const value = useMemo(() => {
    const selected = preorderPrices.find((item) => item.id === selectedId) ?? null;

    return { selected, selectedId, setSelectedId };
  }, [selectedId]);

  return <PreorderSelectionContext.Provider value={value}>{children}</PreorderSelectionContext.Provider>;
}

export function usePreorderSelection(): PreorderSelectionContextValue {
  return useContext(PreorderSelectionContext);
}
