'use client'
import { themes } from '@/utils/utilities'
import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'

interface ThemeSelectorProps {
    theme: string
    setTheme: (theme: string) => void
}

function ThemeSelector({theme, setTheme}: ThemeSelectorProps) {
    const [showDropdown, setShowDropdown] = useState(false)

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown)
    }

    const handleThemeChange = (newTheme: string) => {
        setTheme(newTheme) 
    }

  return (
    <div className='theme-selector' onClick={toggleDropdown}>
        <p className='py-[5px] text-sm font-medium'>Code Colors</p>
        <div className='dropdown-title capitalize w-[120px]'>
            {theme} <ChevronDown/>
        </div>
        {showDropdown && <div className='dropdown-menu relative top-[94px] w-[120px]'>{themes.map((theme,i) => {
            return <button key={i} onClick={()=> handleThemeChange(theme)} className='capitalize text-left '>
                {theme}
            </button>
        })}</div>}
    </div>
  )
}

export default ThemeSelector