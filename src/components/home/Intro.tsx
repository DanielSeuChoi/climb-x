'use client'
import { FC } from 'react'
import LargeHeader from "@/components/LargeHeader";
import { motion } from "framer-motion"
import Image from 'next/image';
import HomePhoto from './HomePhoto';
import Link from 'next/link';
import Paragraph from '../Paragraph';

interface IntroProps {

}

const Intro: FC<IntroProps> = ({ }) => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.176 }}
            className="relative h-screen w-full flex items-center justify-center bg-emerald-400"
        >
            <div className='container pt-32 max-w-7xl w-full mx-auto h-full'>
                <motion.div className=" h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
                    <LargeHeader className='text-left justify-start mt-5 lg:mr-14' size='lg'>
                        Climb X.
                        <br />
                        Community,
                        <br />
                        Coffee,
                        Climb
                    </LargeHeader>
                    <Paragraph className='justify-start flex max-w-xl lg:text-left'>
                        With the Text Similarity API, you can easily determine the
                        similarity between two pieces of text with a free

                    </Paragraph>
                    <div className=''>
                        <Image
                            priority
                            className='img-shadow '
                            quality={100}
                            style={{ objectFit: 'scale-down' }}
                            fill
                            src='/giphy.gif'
                            alt='typewriter'
                        />
                    </div>

                </motion.div>
            </div>
            {/* <div className='text-center justify-center w-full sm:w-[50rem]  mt-20'></div> */}
        </motion.section>

    )
}

export default Intro