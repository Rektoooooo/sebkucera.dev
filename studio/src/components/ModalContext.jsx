import { createContext, useContext, useState, useCallback } from 'react';

const ModalContext = createContext({ open: () => {}, close: () => {}, isOpen: false, pkg: null });

export function ModalProvider({ children }) {
  const [state, setState] = useState({ isOpen: false, pkg: null });
  const open = useCallback((pkg = null) => setState({ isOpen: true, pkg }), []);
  const close = useCallback(() => setState((s) => ({ ...s, isOpen: false })), []);
  return (
    <ModalContext.Provider value={{ ...state, open, close }}>{children}</ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
