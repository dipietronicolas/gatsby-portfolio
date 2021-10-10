import React from 'react';
import { createContext, useState } from "react";

export const ColorModeContext = createContext();

export const ColorModeProvider = ({ children }) => {

  const [colorMode, setColorMode] = useState('dark');

  const toggleColorMode = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark')
  }

  return (
    <ColorModeContext.Provider value={{colorMode, toggleColorMode}}>
      { children }
    </ColorModeContext.Provider>
  )
}