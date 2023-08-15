"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import LargeHeader from "@/components/LargeHeader";
import Paragraph from "./Paragraph";
import Icons from "./Icons";

const LocationsContext = () => {
  return (
    <motion.div className="grid mx-auto justify-center items-center 
    h-full w-full mt-32 mb-7 px-8"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.176 }}
    >
      <LargeHeader size="lg" className="flex justify-center items-center mb-10">
        Other passes
      </LargeHeader>
      <section
        className="grid-cols-3 w-full rounded-lg overflow-hidden relative sm:h-[30rem]
            transition dark:text-white dark:bg-white/10  justify-center flex 
            flex-col sm:flex-row items-center gap-10 p-10"
      >
        <div>
            <LargeHeader size='md'>
                Membership Perks
            </LargeHeader>
            <br/>
          <Paragraph className="justify-start text-center lg:text-left">
            We're an in-door climbing facility, 
            <br/>located a mile from Huntington
            Beach's Main St.
          </Paragraph>
        </div>
        <div>
                <div className="flex">
                    <Icons.Check/>
                          <Paragraph>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Paragraph>
                </div>
                <div className="flex">
                    <Icons.Check/>
                          <Paragraph>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Paragraph>
                </div>
                <div className="flex">
                    <Icons.Check/>
                          <Paragraph>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Paragraph>
                </div>
                <div className="flex">
                    <Icons.Check/>
                          <Paragraph>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Paragraph>
                </div>
        </div>
        <div>
                <div className="flex">
                    <Icons.Check/>
                          <Paragraph>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Paragraph>
                </div>
                <div className="flex">
                    <Icons.Check/>
                          <Paragraph>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Paragraph>
                </div>
                <div className="flex">
                    <Icons.Check/>
                          <Paragraph>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Paragraph>
                </div>
                <div className="flex">
                    <Icons.Check/>
                          <Paragraph>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Paragraph>
                </div>
        </div>
      </section>
    </motion.div>
  );
};

export default LocationsContext;
