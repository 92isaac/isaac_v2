import React, { ReactNode } from 'react'
import { useContextGlobal } from './Context';



interface ContextUseProps {
  children: ReactNode;
}

const ContextWrapper = ({children}: ContextUseProps) => {
    // const { isDarkMode } = useContextGlobal();
    const isDarkMode = true
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