"use client"

import { useState, createContext, useContext, ReactNode, useEffect } from "react";

interface GlobalData {
  checked: boolean;
  isDarkMode: boolean;
  defaultMode?: 'light' | 'dark';
  handleChange: (nextChecked: boolean) => void;
  toggleDarkMode: (nextChecked: boolean) => void;
}

export const AppContext = createContext<GlobalData | null | any >(null);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps, { defaultMode = 'light' }) => {
  const [checked, setChecked] = useState(true);
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



  const handleChange = () => {
    setChecked(!checked);
  };


  const globalData: GlobalData = {
    checked,
    isDarkMode,
    handleChange,
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
