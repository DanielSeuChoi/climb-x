import { FC } from 'react'
import LargeHeader from '@/components/LargeHeader'
import Link from 'next/link'
interface ContactProps {

}

const Contact: FC<ContactProps> = ({ }) => {
    return (
        <div className='flex h-[15rem] dark:text-white justify-center gap-4 mx-auto p-5 items-center '>
            <div className='grid grid-cols-2 gap-5 sm:grid-cols-3 items-center'>
                <div className=''>
                    <LargeHeader className='flex justify-start mb-4'>
                        Get In Touch
                    </LargeHeader>
                    <ul>
                        <li>(714)555-5555</li>
                        <li>climbx@climberx.com</li>
                        <li>lorem way drive</li>
                    </ul>
                </div>
                <div className=''>
                    <LargeHeader className='flex justify-start mb-4'>
                        Hours Of Operation
                    </LargeHeader>
                    <ul>
                        <li>Mon-Fri: 9am-10pm</li>
                        <li>Saturday: 9am-8pm</li>
                        <li>Sunday: 9am-6pm</li>
                    </ul>
                </div>
                <div className=''>
                    <LargeHeader className='flex justify-start mb-4'>
                        First Time Here?
                    </LargeHeader>
                    <ul className='flex flex-col'>
                        <Link className='hover:underline' href='/'>First Visit?</Link>
                        <Link className='hover:underline' href='/'>FAQ</Link>
                        <Link className='hover:underline' href='/'>Gear</Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact