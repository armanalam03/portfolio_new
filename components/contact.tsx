"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { INFORMATION } from "@/lib/constants/data";
import Socials from "./socials";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 w-full lg:px-[20%] text-center"
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
      <div className="h-full w-full flex flex-col items-center justify-between">
        <div />
        <div className="flex flex-col gap-6 w-full">
          <div className="mb-28 flex flex-col gap-5">
            <p className="animate-gradient-text text-3xl  font-markpro bg-gradient-to-r to-orange  from-purple bg-clip-text text-transparent text-left lg:text-4xl font-extrabold">
              Sold yet?
            </p>
            <p className="text-foreground/80 text-left text-2xl font-circular">
              {INFORMATION.CONTACT.MESSAGE}
            </p>
          </div>
          <div className="flex flex-col text-left gap-2">
            <p className="animate-gradient-text text-3xl font-markpro bg-gradient-to-r to-orange  from-purple bg-clip-text text-transparent text-left lg:text-4xl font-extrabold">
              Let's Connect!
            </p>
            <p className="text-sm text-foreground font-circular text-left mb-4 ">
              Connect with me online
            </p>
            <Socials allowidth />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
