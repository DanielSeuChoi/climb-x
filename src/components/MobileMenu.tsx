'use client'

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle'
import Drawer from '@/components/Drawer';
import LargeHeader from './LargeHeader';


const MobileMenu = ({ }) => {
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    useEffect(() => {
        if (isActive) setIsActive(false)
    }, [pathname])

    return (
        <nav className='md:hidden fixed backdrop-blur-sm dark:bg-slate-900/75 z-50 top-0 left-0 right-0 lg:h-24 md:h-24 sm:h-24 h-24
        border-b border-slate-300 dark:border-slate-700 shadow-sm items-center justify-between'>
                <div className='text-start justify-left flex'>
                    <LargeHeader size='lg' className='p-4 '>
                        Climb X
                    </LargeHeader>
                </div>
                <Drawer />
                {/* <ThemeToggle /> */}
        </nav>
    )
}

export default MobileMenu