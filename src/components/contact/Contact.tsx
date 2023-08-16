'use client'
import { FC } from 'react'
import LargeHeader from "@/components/LargeHeader";
import { motion } from "framer-motion"
import ContactSection from './ContactSection';
import Paragraph from '../Paragraph';


interface ContactProps {

}

const Contact: FC<ContactProps> = ({ }) => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.176 }}
            className="relative h-screen w-full 
            flex flex-col items-center justify-center mb-14"
        >
            <LargeHeader className='mt-10 text-center justify-center ' size='lg'>
                Contact Us
            </LargeHeader>
            <br />
            <Paragraph>
                For any other questions,
                <br />
                contact us below.
                <br />
                We'd love to hear from you!
            </Paragraph>
            <ContactSection />
            {/* <div className='text-center justify-center w-full sm:w-[50rem]  mt-20'></div> */}
        </motion.section>
    )
}

export default Contact