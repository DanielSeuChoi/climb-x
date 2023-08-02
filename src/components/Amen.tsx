'use client'
import { amensData } from '@/lib/data';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react'
import Image from 'next/image';


type AmenProps = (typeof amensData)[number];

export default function Amen({
    title,
    description,
    imageUrl,
}: AmenProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],

    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    return (
        <motion.div
            className='group mb-3 sm:mb-8 justify-center p-3 bg-purple-300'
            ref={ref}
        >
            <section className=" bg-red-300 max-w-[20rem] rounded-lg overflow-hidden sm:pr-8 relative sm:h-[30rem]
            transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 flex flex-col justify-center items-center">
                <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col ">
                    <h3 className="text-2xl font-semibold">{title}</h3>
                </div>

                <p className="p-4 mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                    {description}
                </p>

            </section>
        </motion.div>)
}

