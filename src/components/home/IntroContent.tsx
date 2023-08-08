"use client";
import { FC, useState } from "react";
import LargeHeader from "@/components/LargeHeader";
import { motion } from "framer-motion";
import Image from "next/image";
import Paragraph from "@/components/Paragraph";

interface IntroContentProps {}

const IntroContent: FC<IntroContentProps> = ({}) => {
  const [isHovered, setHovered] = useState(false);
  return (
    <motion.section
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.176 }}
      className="relative h-[30rem] w-full flex items-center justify-around"
    >
      <div className=" container w-full h-full">
        <motion.div className="gap-10 lg:flex w-full justify-between lg:justify-center items-center lg:items-start">
            <div className="lg:order-first sm:order-first">
              <LargeHeader size='md' className="order-last mx-auto justify-center items-center ">
                  Schedule
              </LargeHeader>
              <br/>
              <Paragraph className=" text-center justify-center">
                Mon-Fri 7AM-9PM
                <br/>
                Sat 8AM-8PM
                <br/>
                Sun 9AM-6PM
              </Paragraph>
            </div>
          <div>
            <Paragraph className="justify-start flex max-w-xl lg:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              reiciendis deleniti sint temporibus doloremque commodi veniam
              delectus ipsam eveniet ad? Asperiores et modi quae voluptatem harum
              fugiat minus temporibus labore assumenda necessitatibus? Eveniet,
              quasi! Accusamus iure maxime blanditiis vero facilis ut consequuntur
              quod doloremque aliquam.
            </Paragraph>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
IntroContent.displayName = "IntroContent";
export default IntroContent;
