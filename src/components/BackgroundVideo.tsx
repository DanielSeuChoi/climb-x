'use client'
import React from "react";
import LargeHeader from "./LargeHeader";
import { motion } from "framer-motion";
interface BackgroundImageOverlayProps {
    imageUrl: string;
}

const BackgroundImageOverlay: React.FC<BackgroundImageOverlayProps> = ({ imageUrl }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.176 }}
            className="relative h-screen w-screen bg-cover bg-center bottom-24"
            style={{ backgroundImage: `url(${imageUrl})`, height: '80%' }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="text-white text-4xl font-bold">
                    <LargeHeader size='lg'>
                        Locations
                    </LargeHeader>
                </div>
            </div>
        </motion.div>
    );
};

export default BackgroundImageOverlay;
