import React from "react";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hello, I'm Ashish Bauria",
      "Guy-who-Loves-Coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src="/Images/logo.jpg"
        alt="logo"
        width={500}
        height={500}
        className="w-32 h-32 relative rounded-full mx-auto object-cover "
      />
      <div
        
        className="z-20"
      >
        <h2 className="text-sm uppercase text-gray-300 pb-2 tracking-[10px]">
          software engineer
        </h2>
        <h1 className="text-4xl lg:text-5xl font-semibold px-10">
          <span className="">{text}</span>
          <Cursor cursorColor="white" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="px-5 md:px-6 py-2 uppercase text-xs text-gray-400 tracking-widest hover:text-white">
              about
            </button>
          </Link>
          <Link href="#experience">
            <button className="px-5 md:px-6 py-2 uppercase text-xs text-gray-400 tracking-widest hover:text-white">
              experience
            </button>
          </Link>
          <Link href="#skills">
            <button className="px-5 md:px-6 py-2 uppercase text-xs text-gray-400 tracking-widest hover:text-white">
              skills
            </button>
          </Link>
          <Link href="#projects">
            <button className="px-5 md:px-6 py-2 uppercase text-xs text-gray-400 tracking-widest hover:text-white">
              projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
