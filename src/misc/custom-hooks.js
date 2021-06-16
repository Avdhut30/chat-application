import { useState, useCallback } from 'react';

export function useModalState(defaultValue = false) {
  const [isOpen, setIsOpen] = useState(defaultValue);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(true), []);

  return { isOpen, open, close };
}
