import * as React from "react";
import { motion } from "framer-motion";

export interface IAppProps {}

export default function About(props: IAppProps) {
  return (
    <div className="flex flex-col md:flex-row relative text-center h-screen max-w-7xl px-10  mx-auto items-center gap-2 md:gap-5 justify-center">
      <h2 className="absolute top-24 text-2xl uppercase text-gray-400 pb-2 tracking-[15px] text-center">
        about
      </h2>
      <motion.img
        initial={{ x: -200, opacity: 0, scale: 0.5 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src="/Images/logo2.jpg"
        className=" md:mb-0 flex-shrink-0 w-20 h-20 rounded-full object-cover md:rounded-xl md:w-64 md:h-64 xl:w-[300px] xl:h-[300px] mt-36 md:mt-2 border-2 border-gray-500"
      />
      <motion.div
        initial={{ y: -200, opacity: 0, scale: 0.5 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className=" px-[10px] md:px-10 rounded-xl  space-y-4  min-w-[320px] sm:w-[500px] md:w-[500px] xl:w-[700px] bg-transparent/40"
      >
        <h4 className=" text-xl sm:text-3xl font-semibold">{`<Profile />`}</h4>
        <div className="text-base ">
          <ul className=" list-disc space-y-2 md:space-y-5 pl-5 text-sm md:text-[16px] w-full text-left font-poppins">
            <li>
              Recent graduate with a Bachelor&apos;s degree in Computer Science and a
              strong passion for developing innovative technology solutions.
              Possess a solid foundation in programming languages like C/ C++
              and Javascript, as well as experience in developing Modern web
              applications.
            </li>
            <li>
              Throughout my Journey, I have Enjoyed on a variety of works .
              These experiences have helped me develop my skills in every
              aspect, and have taught me the importance of clear communication,
              attention to detail, and working collaboratively with team
              members.
            </li>
            <li>
              In my free time, I enjoy playing chess and exploring new
              technologies. If you&apos;re interested in working together or would
              like to chat about software development, feel free to reach out!
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
