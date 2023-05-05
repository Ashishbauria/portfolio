import React from "react";
import { motion } from "framer-motion";

const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{y:-500, opacity: 0 }}
      animate={{y:0, opacity: [0, 0.2, 0.4, 0.6, 1],borderRadius:["20%","40%","60%","80%","100%"] }}
      transition={{ duration: 1.5 }}
      className="relative flex justify-center items-center mb-2 -z-10"
    >
      <div className="absolute border border-[#3a29ae] rounded-full w-[200px] h-[200px] mt-52 animate-ping"></div>
      <div className="absolute border-2 border-[#3a2a9d] rounded-full w-[140px] h-[140px] mt-52 animate-pulse"></div>
    </motion.div>
  );
};

export default BackgroundCircles;
