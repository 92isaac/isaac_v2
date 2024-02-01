"use client"

import React, { useEffect, useState } from 'react';

interface ToggleButtonProps {
  defaultMode?: 'light' | 'dark';
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ defaultMode = 'light' }) => {
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

  return (
    <button
      onClick={toggleDarkMode}
      className={`p-2 rounded ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'
      }`}
    >
      {isDarkMode ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

export default ToggleButton;
