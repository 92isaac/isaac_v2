"use client"

import { useState, createContext, useContext, ReactNode, useEffect } from "react";

interface GlobalData {
  isDarkMode: boolean;
  defaultMode?: 'light' | 'dark';
  toggleDarkMode: (nextChecked: boolean) => void;
}

export const AppContext = createContext<GlobalData | null | any >(null);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps, { defaultMode = 'light' }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(defaultMode === 'dark');

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode ? 'dark' : 'light');
  };

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedMode) {
      setIsDarkMode(savedMode === 'dark');
    } else {
      setIsDarkMode(prefersDarkMode);
    }
  }, []);



  const globalData: GlobalData = {
    isDarkMode,
    toggleDarkMode,
  };

  return (
    <AppContext.Provider value={globalData}>
      {children}
    </AppContext.Provider>
  );
};

export function useContextGlobal() {
  return useContext(AppContext);
};
