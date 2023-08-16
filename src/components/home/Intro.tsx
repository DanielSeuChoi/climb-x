'use client'
import { FC } from 'react'
import LargeHeader from "@/components/LargeHeader";
import { motion } from "framer-motion"
import Image from 'next/image';
import Paragraph from '../Paragraph';


interface IntroProps {

}

const Intro: FC<IntroProps> = ({ }) => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.176 }}
            className="relative h-screen w-full 
            flex items-center justify-center mb-14"
        >
            <div className='container pt-24 max-w-7xl w-full mx-auto h-full'>
                <motion.div className=" h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
                    <div className='relative w-full max-w-xl lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute'>
                        <Image
                            priority
                            className='img-shadow '
                            quality={100}
                            style={{ objectFit: 'scale-down' }}
                            fill
                            src='/hb.jpg'
                            alt='typewriter'
                        />
                    </div>
                    <LargeHeader className='text-left justify-start lg:mr-14' size='lg'>
                        Climber X.
                        <br />
                        Community,
                        <br />
                        Coffee,
                        Climb
                    </LargeHeader>
                    <Paragraph className='justify-start flex max-w-xl mb-8 lg:text-left'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Numquam, rem magnam culpa repudiandae at pariatur.
                    </Paragraph>
                </motion.div>
            </div>
            {/* <div className='text-center justify-center w-full sm:w-[50rem]  mt-20'></div> */}
        </motion.section>
    )
}

export default Intro