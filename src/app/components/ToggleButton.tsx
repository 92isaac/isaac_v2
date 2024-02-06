"use client"

import React from 'react';
import { useContextGlobal } from './Context';

interface ToggleButtonProps {
  defaultMode?: 'light' | 'dark';
}

const ToggleButton: React.FC<ToggleButtonProps> = () => {
  const { isDarkMode, toggleDarkMode } = useContextGlobal()

  return (
    <div
    className={`relative w-12 h-6 border rounded-full bg-gray-300 flex items-center cursor-pointer ${
      isDarkMode ? "bg-smoky-black" : ""
    }`}
    onClick={toggleDarkMode}
  >
    <div
      className={`absolute left-1 transition-transform duration-300 ease-in-out w-4 h-4 rounded-full  transform ${
        isDarkMode ? "translate-x-6 bg-white" : "bg-black"
      }`}
    ></div>
  </div>
  );
};

export default ToggleButton;
