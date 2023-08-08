'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
import { projectsData } from '@/lib/data';

import Paragraph from '@/components/Paragraph';
import LargeHeader from '@/components/LargeHeader';
import Climb from '@/components/Climb';

export default function Climbs() {
    const { ref } = useSectionInView("Projects");
    return (

        <motion.section
            id="projects"
            ref={ref}
            className='scroll-mt-28 mb-28 p-5 w-full'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.176 }}
        >
            <LargeHeader className='flex justify-center mb-6 dark:text-light-gold' size={'md'}>Amenities</LargeHeader>
            <div className='flex items-center justify-center'>
                <div className='flex flex-col sm:flex-row'>
                    {projectsData.map((project, index) => (
                        <React.Fragment key={index} >
                            <Climb {...project} />
                        </React.Fragment >
                    ))}
                </div>
            </div>
        </motion.section>
    )
}
