'use client'
import { membershipData } from '@/lib/data';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react'
import Image from 'next/image';
import LargeHeader from '@/components/LargeHeader';
import Paragraph from '@/components/Paragraph';
import Button from '@/ui/Button';



type MembershipProps = (typeof membershipData)[number];

export default function MembershipCard({
    title,
    description,
    tags,
    mini

}: MembershipProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],

    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    return (
        <motion.div
            className='group p-3'
            ref={ref}
        >
            <section className="max-w-[30rem] w-full p-5 
            rounded-lg overflow-hidden relative 
            sm:h-[20rem]  md:flex-col lg:flex-col
            transition dark:text-white
            dark:bg-white/10 dark:hover:bg-white/20 
            flex flex-col justify-center items-center
            
            ">
                <div className="pt-4 pb-4 sm:pt-10 sm:max-w-[50%] flex flex-col ">
                    <LargeHeader size='md' className="text-center justify-center">
                        {title}
                    </LargeHeader>
                </div>
                <div className='justify-center items-center flex w-[10rem] rounded-t-lg shadow-2xl
                        transition'>
                    <span>$</span>
                    <LargeHeader size='md'>
                        {tags}
                    </LargeHeader>

                </div>
                <Paragraph>
                    {mini}
                </Paragraph>
                <Button variant='default' className="p-4 sm:p-4 text-center">

                    {description}
                </Button>

            </section>
        </motion.div>)
}

