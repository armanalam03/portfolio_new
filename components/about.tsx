"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Lottie from "react-lottie-player/dist/LottiePlayerLight";
import coffeCat from "@/components/animation/cat-coffee.json";
import Socials from "./socials";
import CommonHand from "./common/commonhand";
import WordRotate from "./magicui/word-rotate";
import { words } from "@/lib/constants/data";
import Link from "next/link";
export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="text-center leading-8 mb-20 scroll-mt-32"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <main className="h-dvh  flex flex-col items-left justify-between gap-8  py-6 px-4 md:px-[20%]">
        <div />
        <CommonHand />
        <div className="flex flex-col w-full gap-6 justify-center items-start h-full mt-20">
          <h1 className="text-[3rem] tracking-tighter text-white font-bold text-left leading-[42px] font-markpro lg:hidden">
            turning ideas into real life{" "}
            <span className="animate-gradient-text bg-gradient-to-r to-orange from-purple bg-clip-text text-transparent">
              Products{" "}
            </span>
            is my calling .
          </h1>
          <h1 className=" hidden lg:block text-[5.5rem] text-white font-bold text-left leading-[5.4rem] tracking-tighter  font-markpro">
            turning ideas into real life{" "}
            <span className="animate-gradient-text bg-gradient-to-r to-orange from-purple bg-clip-text text-transparent">
              Products{" "}
            </span>
            is my calling .
          </h1>
          <p className="font-condensed  text-left cursor-pointer   group  flex flex-col gap-0.5 lg:text-2xl">
            <Link
              href={
                "https://drive.google.com/file/d/1GrJdWwLfwnLC4jQPQQ8nQ4GEEHvCzwY-/view?usp=sharing"
              }
              target="_blank"
            >
              <span className=" w-fit py-1 pr-0.5 text-left">View</span>
              <span>Resume</span>
            </Link>
            <span className="w-4  group-hover:w-full bg-white transition-all duration-300 h-[1px]" />
          </p>
        </div>
        <div className="flex flex-col  w-full gap-5">
          <div className="flex items-center justify-between  gap-1">
            <div className="flex justify-start items-end -mb-14 md:-mb-32 w-2/5">
              <WordRotate
                words={words}
                className="text-xs lg:text-xl bg-gradient-to-r to-orange from-purple bg-clip-text text-transparent font-bold font-markpro"
                duration={1000}
              />
            </div>
            <div className="flex  justify-end items-end h-full">
              <div className="flex items-end w-4/5 ">
                <Socials />
              </div>
              <Lottie
                animationData={coffeCat}
                play
                loop
                className="h-20 w-20 lg:h-40 lg:w-40"
              />
            </div>
          </div>
          <p className="font-condensed text-left text-base w-full lg:text-xl">
            Hi there! 👋 My name is Armaan, and I am a frontend engineer
            passionate about creating digital products that help people enjoy
            everyday life rather than just endure it.
          </p>
        </div>
      </main>
    </motion.section>
  );
}
