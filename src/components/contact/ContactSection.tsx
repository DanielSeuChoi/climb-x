'use client'
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import { useState } from "react"
import Paragraph from "@/components/Paragraph";
import LargeHeader from "@/components/LargeHeader";

export default function ContactSection() {
    const { ref } = useSectionInView("Contact");
    const [setsentMail, SetsentMail] = useState();
    return (
        <motion.section
            id="contact"
            ref={ref}
            className="bg-zinc-300 dark:bg-transparent rounded-lg mb-20 mt-6 sm:mb-28 w-[min(85%,38rem)] text-center p-3 md:p-5"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            <LargeHeader size='md' className="dark:text-light-gold tracking-tighter">
                Reach out to us for any questions!
            </LargeHeader>
            <form
                className="mt-10 flex flex-col dark:text-black"
                onSubmit={() => setsentMail}
            >
                <input
                    className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    name="senderEmail"
                    type="email"
                    required
                    maxLength={500}
                    placeholder="Your email"
                />
                <textarea
                    className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    name="message"
                    placeholder="Your message"
                    required
                    maxLength={5000}
                />
                <Button>Submit</Button>
            </form>
        </motion.section>
    );
}