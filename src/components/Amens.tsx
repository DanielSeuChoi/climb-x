'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
import { amensData } from '@/lib/data';

import Paragraph from '@/components/Paragraph';
import LargeHeader from '@/components/LargeHeader';
import Amen from '@/components/Amen';

export default function Amens() {
    const { ref } = useSectionInView("Projects");
    return (

        <motion.section
            id="projects"
            ref={ref}
            className='scroll-mt-28 mb-28 p-5 bg-[#ecececfa] w-full'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.176 }}
        >
            <LargeHeader className='flex justify-center mb-6 dark:text-light-gold text-white' size={'md'}>Amenities</LargeHeader>
            <div className='items-center justify-center'>
                <div className='sm:grid sm:grid-cols-3 flex flex-col'>
                    {amensData.map((project, index) => (
                        <React.Fragment key={index} >
                            <Amen {...project} />
                        </React.Fragment >
                    ))}
                </div>
            </div>
        </motion.section>
    )
}
