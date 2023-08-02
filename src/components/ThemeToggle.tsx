'use client'
import React from 'react'
import { useTheme } from 'next-themes'
import Button from '@/ui/Button'
import Icons from './Icons'
import { motion } from "framer-motion"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    return (
        <div
            className="fixed bottom-6 right-5   
        flex items-center justify-center 
        transition-all">
            {theme === 'light' ?
                <Button className='hover:scale-[1.15] active:scale-105 transition-all' variant={'round'} size={'lground'} onClick={() => setTheme('dark')}>
                    <Icons.Lightbulb />
                </Button>
                :
                <Button className='hover:scale-[1.15] active:scale-105 transition-all' variant={'round'} size={'lground'} onClick={() => setTheme('light')}>
                    <Icons.Lightbulb />
                </Button>
            }
        </div>
    )
}
