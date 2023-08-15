'use client'
import { motion } from "framer-motion"
import Image from "next/image"
import LargeHeader from "@/components/LargeHeader"
import Paragraph from "./Paragraph"

const Directions = () => {
    return (
        <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.176 }}
            className='mx-auto justify-center items-center h-full w-full mb-7 px-8'
        >
            <section className=" w-full rounded-lg overflow-hidden relative sm:h-[30rem]
            transition dark:text-white dark:bg-white/10  justify-center flex 
            flex-col sm:flex-row items-center gap-10 p-4">
                <div>
                    {/* <Image
                        src={'/hb.jpg'}
                        alt="Projects"
                        quality={95}
                        height={300}
                        width={300}
                        className='justify-center flex w-[15rem] rounded-t-lg
                            transition sm:w-[30rem]'
                    /> */}
    <Paragraph className="justify-start text-center lg:text-left">
        We're an in-door climbing facility,
        located a mile from Huntington Beach's Main St.
        Lorem ipsum dolor sit amet consectetur.
        Lorem ipsum, dolor sit amet 
        consectetur adipisicing elit.
        Omnis architecto obcaecati perspiciatis!
        <br/>
        We're an in-door climbing facility,
        located a mile from Huntington Beach's Main St.
        Lorem ipsum dolor sit amet consectetur.
        Lorem ipsum, dolor sit amet 
        consectetur adipisicing elit.
        Omnis architecto obcaecati perspiciatis!
    </Paragraph>
                </div>
                <div>
                    <LargeHeader size='md'>
                        Directions
                    </LargeHeader>
                    <br/>
                    <Paragraph className="justify-start text-center lg:text-left">
                        12420 Main St Way.
                        Huntington Beach, CA 92647

                    </Paragraph>
                    <br/>
                    <LargeHeader size='md'>
                        Schedule
                    </LargeHeader>

                    <Paragraph className="justify-start text-center lg:text-left">
                            <br />
                            Monday-Friday 9am-8pm
                            <br/> 
                            Saturday-Sunday 9am-6pm
                        </Paragraph>
                </div>

            </section>
        </motion.div>)
}

export default Directions