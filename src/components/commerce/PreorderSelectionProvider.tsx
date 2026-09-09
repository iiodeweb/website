'use client';

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

import { preorderPrices, type PreorderPriceItem } from '@/content/pricing';

type PreorderSelectionContextValue = {
  selected: PreorderPriceItem;
  selectedId: string;
  setSelectedId: (next: string) => void;
};

const defaultSelection = preorderPrices[0];

const PreorderSelectionContext = createContext<PreorderSelectionContextValue>({
  selected: defaultSelection,
  selectedId: defaultSelection.id,
  setSelectedId: () => {},
});

export function PreorderSelectionProvider({ children }: { children: ReactNode }) {
  const [selectedId, setSelectedId] = useState(defaultSelection.id);

  const value = useMemo(() => {
    const selected = preorderPrices.find((item) => item.id === selectedId) ?? defaultSelection;

    return { selected, selectedId, setSelectedId };
  }, [selectedId]);

  return <PreorderSelectionContext.Provider value={value}>{children}</PreorderSelectionContext.Provider>;
}

export function usePreorderSelection(): PreorderSelectionContextValue {
  return useContext(PreorderSelectionContext);
}
