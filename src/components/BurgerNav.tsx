// 'use client'
// import { navItems } from '@/lib/data';
// import { menuSlide } from '@/lib/utils';
// import { motion } from 'framer-motion';
// import { usePathname } from 'next/navigation';
// import { useState } from 'react';
// import Links from './Link';


// const BurgerNav = () => {
//     const pathname = usePathname();
//     const [selectedIndicator, setSelectedIndicator] = useState(pathname);

//     return (
//         <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={"menu"}>
//             <div className={"body"}>
//                 <div onMouseLeave={() => { setSelectedIndicator(pathname) }} className={"nav"}>
//                     <div className={"header"}>
//                         <p>Navigation</p>
//                     </div>
//                     {
//                         navItems.map((data, index) => {
//                             return <Links key={index} data={{ ...data, index }} isActive={selectedIndicator == data.href} setSelectedIndicator={setSelectedIndicator}></Links>
//                         })
//                     }
//                 </div>
//             </div>
//         </motion.div>
//     )
// }

// export default BurgerNav