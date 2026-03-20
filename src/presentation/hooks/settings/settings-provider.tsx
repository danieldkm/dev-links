"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { getTheme, DEFAULT_THEME_ID, applySiteTheme } from "./themes";

const STORAGE_KEY = "settings";

interface SettingsContextValue {
  themeId: string;
  setTheme: (newThemeId: string) => void;
}
const SettingsContext = createContext<SettingsContextValue | undefined>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  // Initialize themeId from localStorage
  const [themeId, setThemeId] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const { themeId } = JSON.parse(stored);
        return themeId || DEFAULT_THEME_ID;
      }
    }
    return DEFAULT_THEME_ID;
  });

  // Apply theme when it changes
  useEffect(() => {
    if (!themeId) return;
    console.log('Applying theme:', themeId);
    const theme = getTheme(themeId);
    applySiteTheme(theme);
  }, [themeId]);

  const setTheme = useCallback((newThemeId: string) => {
    setThemeId(newThemeId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ themeId: newThemeId }));
  }, []);

  return (
    <SettingsContext.Provider value={{ themeId, setTheme }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) throw new Error("useSettings must be used within SettingsProvider");
  return context;
}