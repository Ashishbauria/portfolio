import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col md:flex-row text-left max-w-full px-4 sm:px-10 justify-evenly pt-[100px] sm:pt-[120px] mx-auto items-center"
    >
      <h2 className="absolute top-20 text-2xl uppercase text-center text-gray-400 pb-2 tracking-[15px]">
        work experience
      </h2>
      <div className="w-full flex space-x-5 overflow-x-scroll p-0 md:p-10 snap-x overflow-y-hidden snap-mandatory items-center mt-[10px] scrollbar-thin scrollbar-track-slate-500/20 scrollbar-thumb-[#2c2c2c] ">
        <ExperienceCard />
      </div>
    </motion.div>
  );
};

const ExperienceCard = () => {
  const skills = [
    "html.jpg",
    "css.jpg",
    "javascript.png",
    "react.png",
    "redux.png",
    "firebase.png",
    "tailwind.png",
    "mui.png",
  ];
  return (
    <motion.article
      initial={{ opacity: 0, y: -300 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="flex flex-col items-center rounded-xl space-y-7 flex-shrink-0 w-[340px] sm:w-[540px] md:w-[700px] xl:[900px] mx-auto overflow-hidden snap-center pl-4 py-2 xl:opacity-70 hover:opacity-100 shadow-md shadow-transparent cursor-default transition-opacity duration-200 sm:py-10  bg-transparent/40"
    >
      <Image
        src="/Images/company1.jpg"
        alt="logo"
        width={500}
        height={500}
        className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover object-center mb-[-18px] "
      />
      <div className="p-0 md:px-8">
        <h4 className="text-2xl sm:text-4xl font-light text-center">
          Frontend Developer Intern
        </h4>
        <p className="font-bold text-xl sm:text-2xl text-center mt-0 sm:mt-2">
          FuelCab India
        </p>
        <div className="flex gap-2 mt-2">
          {skills.map((item, index) => (
            <Image
              src={`/Images/${item}`}
              alt="logo"
              key={index}
              width={500}
              height={500}
              className="rounded-full border-2 border-gray-600 object-cover w-8 h-8 sm:w-12 sm:h-12 hover:animate-ping transition duration-300 ease-in-out"
            />
          ))}
        </div>
        <p className="uppercase my-[5px] md:my-4 text-gray-300 ml-4">Feb 2023 - Present</p>
        <ul className=" list-disc space-y-3 ml-5 text-sm md:text-[16px] text-left font-poppins">
          <li>
            Developed and maintained FuelCab India&apos;s website using HTML,
            CSS, and JavaScript, ensuring that it was mobile responsive and
            accessible to users with disabilities.
          </li>
          <li>
            Collaborated with a team of developers and designers to implement
            new features and improve the overall user experience of the website.
          </li>
          <li>
            Assisted with the development of a new web application using React
            and Redux, which enabled FuelCab India to streamline their booking
            process and improve customer satisfaction.
          </li>
        </ul>
      </div>
    </motion.article>
  );
};

export default Experience;
