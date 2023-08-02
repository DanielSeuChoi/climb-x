'use client'
import { FC, useState } from 'react'
import LargeHeader from "@/components/LargeHeader";
import { motion } from "framer-motion"
import Image from 'next/image';
import Paragraph from '@/components/Paragraph';

interface IntroContentProps {

}

const IntroContent: FC<IntroContentProps> = ({ }) => {
    const [isHovered, setHovered] = useState(false)
    return (
        <motion.section
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.176 }}
            className="relative h-[30rem] w-full flex items-center justify-center bg-red-400"
        >
            <div className='container pt-32 max-w-7xl w-full mx-auto h-full'>
                <motion.div className=" h-full gap-6 lg:flex flex-col justify-start ">
                    <div>
                        <Paragraph className='justify-start flex max-w-xl lg:text-left'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis reiciendis deleniti sint temporibus
                            doloremque commodi veniam delectus ipsam eveniet ad? Asperiores et modi quae voluptatem harum fugiat minus
                            temporibus labore assumenda necessitatibus? Eveniet, quasi!
                            Accusamus iure maxime blanditiis vero facilis ut consequuntur quod doloremque aliquam.
                        </Paragraph>
                    </div>
                    <div>
                        {/* <motion.div
                            initial={false}

                            whileHover={{ scale: 1.45 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        >
                            <Image
                                src={'/dog.png'}
                                alt='dog'
                                height={100}
                                width={100}

                            />
                        </motion.div> */}

                    </div>
                </motion.div>
            </div>
            {/* <div className='text-center justify-center w-full sm:w-[50rem]  mt-20'></div> */}
        </motion.section>

    )
}
IntroContent.displayName = 'IntroContent'
export default IntroContent