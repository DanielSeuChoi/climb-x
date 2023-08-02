'use client'

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle'
import Drawer from '@/components/Drawer';


const MobileMenu = ({ }) => {
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    useEffect(() => {
        if (isActive) setIsActive(false)
    }, [pathname])

    return (
        <nav className='fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 z-50 top-0 left-0 right-0 lg:h-24 md:h-24 sm:h-24 h-24
        border-b border-slate-300 dark:border-slate-700 shadow-sm flex flex-col items-center justify-between'>
            {/* <Image
                src='/yamero.jpg'
                alt='yamero cat'
                height={192}
                width={183}
                priority={true}
                className='h-[8rem] w-[10rem] border-[0.35rem]
                        rounded-2xl object-cover border-white shadow-xl mt-5'
            /> */}
            {/* <ClimbLogo /> */}
            {/* <LargeHeader size='md' className=''>
                Climb-X
            </LargeHeader> */}
            <Drawer />
            <ThemeToggle />
        </nav>
    )
}

export default MobileMenu