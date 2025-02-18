import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJsSquare, } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiMui } from "react-icons/si";

// Skills array with updated skills including Material UI, Tailwind CSS, Express, MongoDB, Framer Motion, React Router
const skills = [
  { name: "React", icon: <FaReact size={40} />, progress: 95 },
  { name: "JavaScript", icon: <FaJsSquare size={40} />, progress: 90 },
  { name: "Node.js", icon: <FaNodeJs size={40} />, progress: 80 },
  {name: "Express Js", icon: <SiExpress size={40} />, progress: 75 },
  {name: "MongoDB", icon: <BiLogoMongodb size={40} />, progress: 75 },
  {name: "Tailwind CSS", icon: <RiTailwindCssFill size={40} />, progress: 85 },
  {name: "Material UI", icon: <SiMui size={40} />, progress: 80 },
  { name: "HTML", icon: <FaHtml5 size={40} />, progress: 95 },
  { name: "CSS", icon: <FaCss3 size={40} />, progress: 90 },
  {name: "Framer Motion", icon: <TbBrandFramerMotion size={40} />, progress: 65 },
  
];

// Now you can use this array to render skills with progress in your React component


const Skills = () => {

  return (
    <>
    <section id="skill" className=" bg-gray-100 py-6 sm:py-10 md:py-12 lg:py-14" >
      <div className="container mx-auto text-center ">
        <h2 className="  text-cyan-700 mt-5 mb-10 sm:mb-14 md:mb-14 lg:mb-16 xl:mb-16 "><span className="border-2 font-bold border-cyan-700 rounded px-4 sm:px-6 md:px-6 lg:px-7 py-2 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">My Skills</span></h2>
        <div className="grid mx-4 sm:mx-4 md:mx-6 lg:mx-0 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3  gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className=" bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                <div
                  className="bg-cyan-700 h-2 rounded-full"
                  style={{ width: `${skill.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Skills;
