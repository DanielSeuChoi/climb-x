'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
import { gearData, membershipData } from '@/lib/data';
import LargeHeader from '@/components/LargeHeader';
import Link from 'next/link';
import GearCard from './GearCard';

export default function GearCards() {
    const { ref } = useSectionInView("Projects");
    return (

        <motion.section
            id="projects"
            ref={ref}
            className='scroll-mt-28 mb-1 p-5 w-full '
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.176 }}
        >
            <div className="flex flex-col items-center justify-center mb-6 dark:text-light-gold">
                <LargeHeader size='md'>
                    Gear prices
                </LargeHeader>
            </div>
            <div className='flex items-center justify-center'>
                <div className='flex flex-col sm:flex-row'>
                    {gearData.map((project, index) => (
                        <React.Fragment key={index} >
                            <GearCard {...project} />
                        </React.Fragment >
                    ))}
                </div>
            </div>
        </motion.section>
    )
}
