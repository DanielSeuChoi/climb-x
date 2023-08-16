'use client'
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import { useState } from "react"

export default function ContactSection() {
    const { ref } = useSectionInView("Contact");
    const [setsentMail, SetsentMail] = useState();
    return (
        <motion.section
            id="contact"
            ref={ref}
            className="mb-20 mt-6 sm:mb-28 w-[min(80%,38rem)] text-center"
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