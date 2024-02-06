"use client"

import React, { ReactNode, useContext } from 'react'
import { AppProvider, useContextGlobal } from './Context';



interface ContextUseProps {
  children: ReactNode;
}

const ContextWrapper = ({children}: ContextUseProps) => {
  const isDarkMode = useContextGlobal()?.isDarkMode;
  console.log(isDarkMode)
  return (

    <main
    className={`${
      isDarkMode
      ? "bg-smoky-black text-white"
      : "bg-white text-smoky-black"
    } w-full min-h-screen h-full p-[2%] gap-10`}
    >
    {children}
    </main>
  )
}

export default ContextWrapper