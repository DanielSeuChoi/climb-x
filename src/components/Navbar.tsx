'use client'
import Image from 'next/image'
import Header from '@/home/Header'
import Icons from '@/components/Icons'
import ClimbLogo from './ClimbLogo'
import LargeHeader from '@/components/LargeHeader'
import MobileMenu from './MobileMenu'
import Link from 'next/link'
import Button from './ui/Button'
import { ThemeToggle } from './ThemeToggle'
import DropDownMenu from './DropDownMenu'
const Navbar = () => {

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
            <div className='hidden md:flex justify-center mt-6'>
                <Link href={'/'}>
                    <Button className='' variant={'link'}>Home</Button>
                </Link>
                <Link href={'/membership'}>
                    <Button className='' variant={'link'}>Memberships</Button>
                </Link>
                <Link href={'/locations'}>
                    <Button className='' variant={'link'}>Locations</Button>
                </Link>
                <Link href={'/gear'}>
                    <Button className='' variant={'link'}>Gear</Button>
                </Link>
                <Link href={'/locations'}>
                    <Button className='' variant={'link'}>Locations</Button>
                </Link>
                <DropDownMenu />
            </div>
        </nav>
    )
}

export default Navbar