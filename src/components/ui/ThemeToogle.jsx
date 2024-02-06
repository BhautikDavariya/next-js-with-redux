"use client";

import React, { useEffect, useState } from 'react'
import { Button } from './Button'
import IconMoon from '../svg/IconMoon'
import { useTheme } from 'next-themes'
import IconSun from '../svg/IconSun'

const ThemeToogle = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
  
    useEffect(() => {
      setMounted(true);
    }, []);
  
    if (!mounted) {
      return null;
    }
  
  return (
      <Button variant={"ghost"} className={"w-8 h-8 flex items-center justify-center border border-theme rounded-[6px]"} onClick={()=>setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? <IconMoon className="w-4 h-4 text-white"/> : <IconSun className="w-4 h-4 text-white"/>}
      </Button>
  )
}

export default ThemeToogle