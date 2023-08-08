'use client'
import { projectsData } from '@/lib/data';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Icons from '@/components/Icons'
import Paragraph from '@/components/Paragraph';
import LargeHeader from './LargeHeader';

type ClimbProps = (typeof projectsData)[number];

export default function Climb({
    title,
    description,
    imageUrl,
}: ClimbProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],

    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    return (
        <motion.div
            className='group mb-3 sm:mb-8 p-3'
            ref={ref}
        >
            <section className=" w-full rounded-lg overflow-hidden sm:pr-8 relative sm:h-[30rem]
            transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 flex flex-col justify-center items-center">
                <div className="pt-4 pb-7 sm:pt-10 sm:max-w-[50%] flex flex-col ">
                    <LargeHeader size={'md'} className="text-center justify-center">
                        {title}
                    </LargeHeader>
                </div>
                <Image
                    src={imageUrl}
                    alt="Projects"
                    quality={95}
                    className='justify-center items-center  flex w-[10rem] rounded-t-lg shadow-2xl
                        transition'
                />
                <p className="p-4 mt-2 text-center text-gray-700 dark:text-white/70">
                    {description}
                </p>

            </section>
        </motion.div>)
}

