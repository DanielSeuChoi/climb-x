import React from 'react'
import { motion } from "framer-motion"
import LargeHeader from './LargeHeader'
export default function ClimbLogo() {
    const icon = {
        hidden: {
            pathLength: 0,
            fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
            pathLength: 1,
            fill: "rgba(150, 255, 255, 1)"
        }
    }

    return (

        <motion.svg
            viewBox="-2.4 3.2 29 19"
            className="stroke-[#fff] item overflow-visible h-[10rem] w-[10rem]  bg-opacity-10  flex justify-center mt-5 p-3"
        >

            <motion.path
                d="m8 3 4 8 5-5 5 15H2L8 3z"
                variants={icon}
                initial="hidden"
                animate="visible"

                transition={{
                    default: { duration: 1, ease: "easeInOut" },
                    fill: { duration: 1, ease: [1, 0, 0.8, 1] }
                }}
            />
            <motion.path
                d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 1, ease: "easeInOut" },
                    fill: { duration: 1, ease: [1, 0, 0.8, 1] }
                }}
            />
        </motion.svg>

    )
}
