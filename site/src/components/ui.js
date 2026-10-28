import { createContext, useContext } from 'react'

// Shared actions for the menu bar, sidebar, Spotlight and easter eggs:
// { openAbout, openSpotlight, sleep, notify({ title, text, icon }), party, copyEmail }
export const UI = createContext(null)
export const useUI = () => useContext(UI)
