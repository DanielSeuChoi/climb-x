'use client'
import { gearData } from '@/lib/data';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react'
import Image from 'next/image';
import LargeHeader from '@/components/LargeHeader';
import Paragraph from '@/components/Paragraph';
import Button from '@/components/ui/Button';
import Link from '@/components/Link';


type GearCardProps = (typeof gearData)[number];

export default function GearCard({
    title,
    description,
    price


}: GearCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <motion.div
            className='group p-3'
            ref={ref}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
        >
            <section className="
            max-w-[30rem] w-full p-5
            rounded-lg overflow-hidden relative 
            sm:h-[25rem] md:flex-col lg:flex-col
            transition dark:text-white
            dark:bg-white/10 dark:hover:bg-white/20 
            flex flex-col justify-center items-center">
                <div className="pt-4 pb-7 sm:pt-10 sm:max-w-[50%] flex flex-col ">
                    <LargeHeader size='md' className="text-center justify-center flex">
                        {title}
                    </LargeHeader>
                </div>
                <div className='text-center justify-center flex'>
                    <span>$</span>
                        <LargeHeader size='md'>
                           {price}
                        </LargeHeader>
                    </div>
                    <Paragraph className='mt-3'>
                        {description}
                    </Paragraph>
            </section>
        </motion.div>)
}

