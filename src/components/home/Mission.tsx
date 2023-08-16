'use client'
import { motion } from "framer-motion"
import Image from "next/image"
import LargeHeader from "@/components/LargeHeader"
import Paragraph from "@/components/Paragraph"

const Mission = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.176 }}
            className='mx-auto justify-center items-center h-full w-full mb-7 px-8'
        >
            <section className=" w-full rounded-lg overflow-hidden relative sm:h-[30rem]
            transition dark:text-white  justify-center flex 
            flex-col sm:flex-row items-center gap-10 p-4">
                <div>
                    <LargeHeader size='md' className="flex justify-center ">
                        Our Mission
                    </LargeHeader>
                    <br />
                    <Paragraph className="tracking justify-center text-center ">
                        We're an in-door climbing facility,
                        located a mile from Huntington Beach's Main St.
                        Lorem ipsum dolor sit amet consectetur.
                        Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit.
                        Omnis architecto obcaecati perspiciatis!
                    </Paragraph>
                    <br />
                    <LargeHeader size='md' className="flex justify-center ">
                        Our Goal
                    </LargeHeader>
                    <br />
                    <Paragraph className="justify-center text-center ">
                        Lorem ipsum dolor sit amet consectetur.
                        Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit.
                        Omnis architecto obcaecati perspiciatis!
                        Lorem ipsum dolor sit amet consectetur.
                        Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit.
                        Omnis architecto obcaecati perspiciatis!
                    </Paragraph>
                </div>

                <div>
                    <LargeHeader size='md' className="flex justify-center ">
                        First Time Climbing?
                    </LargeHeader>
                    <br />
                    <Paragraph className="tracking justify-center text-center ">
                        We're an in-door climbing facility,
                        located a mile from Huntington Beach's Main St.
                        Lorem ipsum dolor sit amet consectetur.
                        Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit.
                        Omnis architecto obcaecati perspiciatis!
                    </Paragraph>
                    <br />
                    <LargeHeader size='md' className="flex justify-center ">
                        Safety Rules
                    </LargeHeader>
                    <br />
                    <Paragraph className="justify-center text-center ">
                        Lorem ipsum dolor sit amet consectetur.
                        Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit.
                        Omnis architecto obcaecati perspiciatis!
                        Lorem ipsum dolor sit amet consectetur.
                        Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit.
                        Omnis architecto obcaecati perspiciatis!
                    </Paragraph>
                </div>

            </section>

        </motion.div>)
}

export default Mission