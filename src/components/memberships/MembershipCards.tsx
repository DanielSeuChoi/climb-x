'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
import { membershipData } from '@/lib/data';

import Paragraph from '@/components/Paragraph';
import LargeHeader from '@/components/LargeHeader';
import Climb from '@/components/Climb';
import MembershipCard from './MembershipCard';
import Link from 'next/link';

export default function MembershipCards() {
    const { ref } = useSectionInView("Projects");
    return (

        <motion.section
            id="projects"
            ref={ref}
            className='scroll-mt-28 mb-1 p-5 w-full'
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.176 }}
        >
            <LargeHeader className='flex justify-center mb-6 dark:text-light-gold' size={'lg'}>
                Memberships
            </LargeHeader>
            <div className="flex flex-col items-center justify-center mb-6 dark:text-light-gold">
                <LargeHeader size='sm'>
                    Not a member?
                </LargeHeader>
                <Link className='hover:underline' href='/login'>Create an Account</Link>
            </div>
            <div className='flex items-center justify-center'>
                <div className='flex flex-col sm:flex-row'>
                    {membershipData.map((project, index) => (
                        <React.Fragment key={index} >
                            <MembershipCard {...project} />
                        </React.Fragment >
                    ))}
                </div>
            </div>
        </motion.section>
    )
}
