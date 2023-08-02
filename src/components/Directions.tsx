'use client'
import { motion } from "framer-motion"
import Image from "next/image"
import LargeHeader from "@/components/LargeHeader"
import Paragraph from "./Paragraph"

const Directions = () => {
    return (
        <motion.div
            className='bg-purple-400 group mb-3 sm:mb-8 last:mb-0 p-4'
        >
            <section className=" w-[50-rem]  rounded-lg overflow-hidden sm:pr-8 relative sm:h-[30rem]
            transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20  justify-center flex flex-col sm:flex-row items-center gap-10">
                <div>
                    <Image
                        src={'/hb.jpg'}
                        alt="Projects"
                        quality={95}
                        height={300}
                        width={300}
                        className='justify-center flex w-[15rem] rounded-t-lg
                            transition sm:w-[30rem]'
                    />
                </div>
                <div>
                    <LargeHeader size='md'>
                        Directions
                    </LargeHeader>
                    <Paragraph className="justify-start text-left">
                        12420 Main St Way.
                        Huntington Beach, CA 92647
                        <br />
                        Monday-Friday 9am-8pm
                        Saturday-Sunday 9am-6pm
                    </Paragraph>
                </div>
            </section>
        </motion.div>)
}

export default Directions