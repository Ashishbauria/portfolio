import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    "html.jpg",
    "css.jpg",
    "javascript.png",
    "react.png",
    "node.png",
    "express.jpg",
    "sql.png",
    "firebase.png",
    "mongo.png",
    "tailwind.png",
    "mui.png",
    "c.png",
    "git.png",
    "vs.png",
  ];
  return (
    <div className="h-screen flex flex-col relative text-center max-w-[2000px] xl:px-10 min-h-screen justify-center mx-auto items-center">
      <h2 className="absolute top-20 text-2xl uppercase text-center text-gray-400 pb-2 tracking-[15px]">
        Skills
      </h2>
      <motion.div
        initial={{ opacity: 0, y: -200, scale: 0.6 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1 }}
        viewport={{ once: true }}
        className="grid grid-cols-4 gap-4 sm:gap-5 mt-5"
      >
        {skills.map((items, index) => (
          <Skill item={items} key={index} />
        ))}
      </motion.div>
    </div>
  );
};

type Props = any;
const Skill = ({ item }: Props) => {
  return (
    <img
      src={`Images/${item}`}
      className="rounded-full border-2 border-gray-600 object-cover w-16 h-16 sm:w-20 sm:h-20 hover:animate-ping transition duration-300 ease-in-out"
    />
  );
};

export default Skills;
