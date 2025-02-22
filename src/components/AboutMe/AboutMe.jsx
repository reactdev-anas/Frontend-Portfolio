import React from "react";
import { TiDelete } from "react-icons/ti";
import { motion } from "framer-motion";

const AboutMe = ({ setShow }) => {
  const handleDelete = () => {
    setShow(false);
  };

  const skills = [
    "#Docker", "#React", "#Node", "#JavaScript", "#React-router", "#Redux", 
    "#MongoDB", "#MaterialUi", "#Tailwind CSS", "#Github", "#Git", "#CSS", "#HTML", "#Framer Motion"
  ];

  return (
    <div className="fixed inset-0 z-50  h-screen w-screen  flex justify-center items-center">
      {/* Modal container */}
      <motion.div
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="bg-black  text-white p-6 rounded-lg shadow-xl w-full sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] h-auto overflow-auto max-h-[90vh]"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-cyan-600">ABOUT ME</h2>
          <TiDelete onClick={handleDelete} className="text-xl cursor-pointer hover:text-red-500" />
        </div>

        <h3 className="mt-3 text-lg font-semibold">Interactive MERN Developer</h3>
        <p className="tracking-wide mt-2 mb-4 text-base">
          I'm Anas Qureshi, a 23-year-old Indian Freelance MERN developer | React.js Specialist. 
          I'm a weird guy who likes making weird things with web technologies. 
          I like to resolve design problems, create smart user interfaces, and imagine useful interactions, 
          developing rich web experiences & web applications. My focus is always on creating clean, 
          responsive, and interactive user interfaces that elevate the user experience.
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {skills.map((skill, index) => (
            <span key={index} className="border text-white px-4 py-2 rounded-full">
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center">
          <span className="text-xl font-semibold">What do I offer?</span>
          <button className="ml-4 px-3 py-2 bg-gradient-to-r from-blue-900 to-purple-500 text-white font-semibold rounded hover:scale-105 transition-all ease-in-out">
           <a href="#services" onClick={()=> setShow(false)}>Check it out <span >→</span></a> 
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
