import Link from 'next/link'
import { FC } from 'react'
import { ThemeToggle } from '@/components/ThemeToggle'
import Button from '@/ui/Button'
import Drawer from '@/components/Drawer'
import LargeHeader from '@/components/LargeHeader'
interface HeaderProps {

}

const Header: FC<HeaderProps> = ({ }) => {
    return (
        <div className='container flex justify-center items-center mt-5 mb-5'>
            {/* <div className='hidden sm:flex md:flex lg:flex'>
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
            </div> */}
            <div className='hidden md:flex gap-4 ' >

            </div>
        </div >
    )
}

export default Header