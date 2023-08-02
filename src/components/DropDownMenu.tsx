'use client'
// MenuNav.tsx
import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Icons from "./Icons";

const MenuNav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const controls = useAnimation();

    const toggleMenu = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };
    const closeMenu = () => {
        setIsOpen((closeItUp) => !closeItUp)
    }
    // Define animation variants
    const menuVariants = {
        open: { y: 0 },
        closed: { x: "0%", y: "100%" },
    };

    // Define animation gestures
    const menuTransition = {
        type: "tween",
        duration: 2,
    };

    // Handle animation when isOpen changes
    React.useEffect(() => {
        controls.start(isOpen ? "open" : "closed");
    }, [isOpen, controls]);

    return (
        <div className="container fixed">
            <button onClick={toggleMenu} className="bg-red-300 absolute border top-5 px-4 py-2">
                Toggle Menu
            </button>
            <motion.div
                className="bg-gray-200 w-full absolute  left-0 overflow-hidden p-4"
                initial="closed"
                animate={controls}
                variants={menuVariants}
                transition={menuTransition}
            >
                <ul className="py-2">
                    <li className="px-4 py-2">Menu Item 1</li>
                    <Icons.X onClick={closeMenu} className="hover:opacity-40 flex justify-end" />
                    <li className="px-4 py-2">Menu Item 3</li>
                </ul>
            </motion.div>
        </div>
    );
};

export default MenuNav;
