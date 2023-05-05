import React from "react";
import { motion } from "framer-motion";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { BiLinkExternal } from "react-icons/bi";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      image: "project1.png",
      type: "Full Stack Social Media",
      name: "Share ME",
      skills: [
        "html.jpg",
        "css.jpg",
        "javascript.png",
        "react.png",
        "firebase.png",
        "tailwind.png",
        "mui.png",
      ],
      points: [
        " Developed interactive and dynamic user interface using React-JS incorporating features such as user Google authentication, post creation/deletion and commenting, save search and download post.",
        "Use Sanity studio for data management and create schemes for social media data (post/pins , user, etc ), and use Sanity client to fetch and display that data from Sanity studio for user interface.",
        "Improvised user experience by implementing animation, icons and loading indicators using CSS and Tailwind-CSS.",
      ],
      source: "https://github.com/Ashishbauria/Share-Me",
    },
    {
      image: "project2.png",
      type: "Full Stack Blog App",
      name: ".Blog",
      skills: [
        "html.jpg",
        "css.jpg",
        "javascript.png",
        "react.png",
        "node.png",
        "express.jpg",
        "sql.png",
        "tailwind.png",
      ],
      points: [
        "Developed a full-stack blog website with a focus on security and user experience. Implemented advanced user authentication using JSON Web Tokens (JWT). Designed and developed the front-end using ReactJS.",
        "Built the back-end using ExpressJS, REST APIs, integrated to a SQL Database to perform CRUD operations with mvc Architechture and store data which allowed for seamless and efficient data management.",
        "Enhance user experience by implementing animation, icons and loading indicators using CSS and Tailwind-CSS.",
      ],
      source: "https://github.com/Ashishbauria/Blog-WebApp",
    },
    {
      image: "p3.png",
      type: "Video Streaming App",
      name: "YouTube Clone",
      skills: [
        "html.jpg",
        "css.jpg",
        "javascript.png",
        "react.png",
        "tailwind.png",
        "mui.png",
        "api.png",
      ],
      points: [
        "Build a dynamic and responsive front end user interface using React JS , implemented features such as video playback , search for particular channels and videos ,predefined categories.",
        "Utilized third party API to retrieve video data for any given query and display it in the web application.",
        "Improvised user experience by implementing animation, icons and loading indicators using CSS and Tailwind-CSS.",
      ],
      source: "https://github.com/Ashishbauria/yt",
    },
  ];

  const slideRight = () => {
    let slider: any = document.getElementById("slider1");
    slider.scrollLeft = slider.scrollLeft + 300;
  };
  const slideLeft = () => {
    let slider: any = document.getElementById("slider1");
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-y-hidden flex-col md:flex-row text-left max-w-full px-4 sm:px-10 justify-evenly pt-[100px] sm:pt-[120px] mx-auto items-center"
    >
      <div className="flex flex-row gap-2 sm:gap-5 items-center absolute top-20 text-2xl uppercase text-center text-gray-400 pb-2 tracking-[15px]">
        <button
          onClick={slideLeft}
          className="w-[40px] h-[40px] rounded-full flex items-center justify-center hover:bg-[#2b2a2a]"
        >
          <MdOutlineArrowBackIos />
        </button>
        <span>projects</span>
        <button
          onClick={slideRight}
          className="w-[40px] h-[40px] rounded-full flex items-center justify-center hover:bg-[#2b2a2a]"
        >
          <MdOutlineArrowForwardIos />
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        id="slider1"
        className="w-full flex flex-row space-x-5 px-2 md:p-10 snap-x snap-center snap-mandatory scroll-smooth items-center sm:mt-[10px] overflow-y-hidden overflow-x-scroll scrollbar-thin scrollbar-track-slate-400/20 scrollbar-thumb-[#2c2c2c]"
      >
        {projects.map((item, index) => (
          <div key={index}>
            <ProjectCard project={item} key={index} />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

type Props = any;
const ProjectCard = ({ project }: Props) => {
  const skills = project.skills;
  return (
    <article className="flex flex-col items-center rounded-xl space-y-7 flex-shrink-0 w-[340px] sm:w-[540px] md:w-[700px] xl:[900px] overflow-hidden snap-center p-4 xl:opacity-50 hover:opacity-100 shadow-sm shadow-black cursor-default transition-opacity duration-200 sm:py-10 bg-blend-overlay bg-transparent/40">
      <Image
        src={`/Images/${project.image}`}
        alt="logo"
        width={500}
        height={500}
        className="w-20 h-20 sm:w-28 sm:h-28 rounded-full object-cover object-center mb-[-18px] border-2 border-gray-400 "
      />
      <div className="p-0 md:px-8">
        <h4 className="text-2xl sm:text-4xl font-light text-center uppercase">
          {project.type}
        </h4>
        <div className="flex flex-row font-bold text-xl sm:text-2xl text-center sm:mt-2 items-center justify-center gap-3">
          {project.name}
          <a href={project.source} target="_blank">
            <BiLinkExternal />
          </a>
        </div>
        <div className="flex gap-2 my-3 md:my-5">
          {skills.map((item: any, index: number) => (
            <Image
              src={`/Images/${item}`}
              alt="logo"
              width={500}
              height={500}
              key={index}
              className="rounded-full border-2 border-gray-600 object-cover w-8 h-8 sm:w-12 sm:h-12 hover:animate-pulse transition duration-300 ease-in-out"
            />
          ))}
        </div>

        <ul className=" list-disc space-y-2 ml-4 text-sm text-gray-100 md:text-[16px] text-left font-poppins">
          {project.points.map((point: any, index: number) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Projects;
