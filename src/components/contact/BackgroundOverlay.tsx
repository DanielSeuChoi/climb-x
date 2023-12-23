'use client'
import React, { HTMLAttributes } from "react";
import LargeHeader from "@/components/LargeHeader";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactSection from "./ContactSection";


interface BackgroundImageOverlayProps extends HTMLAttributes<HTMLDivElement> {
    imageUrl: string
    title: string
}
const BackgroundImageOverlay: React.FC<BackgroundImageOverlayProps> = ({ title, imageUrl, children, ...props }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.176 }}
            className="h-screen justify-items-center mb-10 mt-20 bg-fixed
            w-screen sm:mt-0">
            <Image
                src={imageUrl}
                alt='stock lead climber'
                height={1500}
                width={2000}
                quality={92}
                priority
                style={{ objectFit: "cover" }}
                className="h-1/2 sm:h-1/2 bg-no-repeat bg-contain bg-center bg-fixed"
            />
            <LargeHeader
                className="absolute flex justify-center items-center 
            left-0 right-0 top-64 md:left-32 md:right-32 md:top-64 mb-20
            text-white"
                size={'lg'}>{title} </LargeHeader>
            <div className="flex justify-center ">
                {children}
            </div>
        </motion.div>

    );
};
export default BackgroundImageOverlay;