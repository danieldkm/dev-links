"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { getTheme, DEFAULT_THEME_ID, applySiteTheme } from "./themes";

const STORAGE_KEY = "settings";

interface SettingsContextValue {
  themeId: string;
  setTheme: (newThemeId: string) => void;
  isLoaded: boolean;
}
const SettingsContext = createContext<SettingsContextValue | undefined>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [themeId, setThemeId] = useState(DEFAULT_THEME_ID);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const { themeId } = JSON.parse(stored);
      setThemeId(themeId || DEFAULT_THEME_ID);
    }
    setIsLoaded(true);
  }, []);

  // Apply theme when it changes
  useEffect(() => {
    if (!isLoaded) return;
    console.log('Applying theme:', themeId);
    const theme = getTheme(themeId);
    applySiteTheme(theme);
  }, [themeId, isLoaded]);

  const setTheme = useCallback((newThemeId: string) => {
    setThemeId(newThemeId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ themeId: newThemeId }));
  }, []);

  return (
    <SettingsContext.Provider value={{ themeId, setTheme, isLoaded }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) throw new Error("useSettings must be used within SettingsProvider");
  return context;
}