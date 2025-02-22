// Services.jsx
import React from 'react';
import { FaReact, FaNodeJs, FaCss3, FaJsSquare } from 'react-icons/fa';
import { SiMongodb, SiFramer } from 'react-icons/si';
import { SiExpress } from "react-icons/si";

const services = [
  {
    name: "React Development",
    description: "Building interactive and responsive web applications using React.",
    icon: <FaReact size={40} />
  },
  {
    name: "Node.js ",
    description: "Building robust server-side applications and RESTful APIs using Node.js and Express.",
    icon: <FaNodeJs size={40} />
  },
  {
    name: "Express.js",
    description: "Creating RESTful APIs and server-side logic using Express.js, a lightweight Node.js framework.",
    icon: <SiExpress size={40} />
  },
  {
    name: "MongoDB Integration",
    description: "Setting up and managing NoSQL databases with MongoDB for scalable applications.",
    icon: <SiMongodb size={40} />
  },
  {
    name: "Responsive Web Design",
    description: "Creating mobile-friendly and responsive designs with HTML, CSS, and Tailwind CSS.",
    icon: <FaCss3 size={40} />
  },
  {
    name: "JavaScript Development",
    description: "Building dynamic websites and interactive features using JavaScript.",
    icon: <FaJsSquare size={40} />
  },
  {
    name: "Framer Motion Animations",
    description: "Creating smooth and modern animations for web apps using Framer Motion.",
    icon: <SiFramer size={40} />
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-gray-100 py-8 sm:py-8 md:py-8 lg:py-10">
      <div className=" max-w-6xl mx-auto px-6 ">
        <h2 className=" text-center text-cyan-700  mt-6 mb-10 sm:mb-14 md:mb-14 lg:mb-16 xl:mb-16"><span className=' border-2 font-bold border-cyan-700 rounded px-4 sm:px-6 md:px-6 lg:px-7 py-2 text-2xl sm:text-3xl md:text-4xl lg:text-4xl'>My Services</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
