import React from "react";
import { SocialIcon } from "react-social-icons";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

type Props = {};

const Header = ({}: Props) => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-6xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.linkedin.com/in/ashish-bauria-65363118a"
          target="_blank"
          bgColor="transparent"
          fgColor="white"
          className="hover:bg-[#323232] rounded-full"
        />
        <SocialIcon
          url="mailto:ashishbauria7477@gmail.com"
          target="_blank"
          className="hover:bg-[#323232] rounded-full"
          network="email"
          bgColor="transparent"
          fgColor="white"
        />
        <SocialIcon
          url="https://github.com/Ashishbauria"
          target="_blank"
          bgColor="transparent"
          fgColor="white"
          className="hover:bg-[#323232] rounded-full"
        />
        <SocialIcon
          url="https://www.instagram.com/ashish.b_9424/"
          target="_blank"
          bgColor="transparent"
          fgColor="white"
          className="hover:bg-[#323232] rounded-full"
        />
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="flex flex-row items-center gap-[10px] cursor-pointer"
      >
        <a
          id="2"
          href="https://docs.google.com/document/d/1ss-pIiH_MiIbJ0T871UcP3ZdkS7OL3SDmUW16TROEKw/edit?usp=sharing"
          download
          target="_blank"
          className="flex flex-row items-center gap-[10px] hover:bg-[#323232] w-[40px] sm:w-[120px] h-[40px] rounded-full justify-center"
        >
          <FiDownload />
          <p className=" uppercase hidden sm:inline-flex font-medium tracking-wide text-sm text-white">
            resume
          </p>
        </a>
      </motion.div>
    </header>
  );
};

export default Header;
