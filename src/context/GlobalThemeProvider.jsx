"use client";

import { ThemeProvider } from 'next-themes';
import React from 'react'

const GlobalThemeProvider = ({children}) => {
  return (
    <ThemeProvider attribute='class' enableSystem='true' defaultTheme='dark' themes={['light','dark']}>
       {children}
    </ThemeProvider>
  )
}

export default GlobalThemeProvider