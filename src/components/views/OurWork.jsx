import React from 'react';
import AdminDashboard from '../Images/AdminDashboard_laptop.png'
import Detailing from '../Images/Detailing_laptop-1.png'
import Portfolio from '../Images/Portfolio.png'
import Cartify from '../Images/Cartify.png'
import { HiOutlineExternalLink } from "react-icons/hi";

const ProjectCard = () => {
  return (
    <>
    <section id='ourwork'>
  <div className="text-center pt-1">
    <span className=' px-5 py-3 border-2  text-cyan-700 border-cyan-700 rounded font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-4xl'>Our Work</span>
  </div>
   <div className="border-0 mt-16 sm:mt-1 md:t-0 lg:mt-0 overflow-hidden p-4 flex flex-col sm:flex-col md:flex-row lg:flex-row items-center gap-4">
      {/* Left Side: Project Image */}
      <div className="w-full sm:w-full  md:w-1/2 lg:w-1/2">
        <img
          src={Detailing}
          alt="Project"
          className=" w-full h-64 sm:w-3/4 sm:h-96 transition ease-in-out delay-75 hover:scale-110 cursor-pointer  md:w-3/4 md:h-96  lg:w-3/4 lg:h-96 rounded-lg object-cover"
        />
      </div>
      {/* Right Side: Project Details */}
      <div className="w-full sm:w-full   md:w-1/2 lg:w-1/2 flex flex-col">
        {/* Live Project Link */}
        <a
          href="https://vensero-detailing.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600  flex items-center font-bold mb-2 hover:underline"
        >
          View Live Project <span className='ml-1'><HiOutlineExternalLink/></span>
        </a>
        {/* Project Name */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mb-2">
          Vensero Detailing
        </h2>
        {/* Project Description */}
        <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-lg mb-4">
        Vensero Detailing is a premium car detailing service dedicated to delivering showroom-quality finishes. Using advanced techniques and high-end products, we ensure every vehicle gets the ultimate care and attention. 
        From deep cleaning to ceramic coatings, Vensero transforms cars with precision and passion.
        </p>
        {/* Technologies Used */}
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-200 text-gray-800 text-xs sm:text-sm md:text-base lg:text-base px-2 py-1 rounded">
            #react
          </span>
          <span className="bg-gray-200 text-gray-800 text-xs sm:text-sm md:text-base lg:text-base px-2 py-1 rounded">
            #node
          </span>
          
          {/* Add more technology tags as needed */}
          <span className="bg-gray-200 text-gray-800 text-xs sm:text-sm md:text-base lg:text-base px-2 py-1 rounded">
            #javaScript
          </span>
          <span className="bg-gray-200 text-gray-800 text-xs sm:text-sm md:text-base lg:text-base px-2 py-1 rounded">
            #tailwindCss
          </span>
          <span className="bg-gray-200 text-gray-800 text-xs sm:text-sm md:text-base lg:text-base px-2 py-1 rounded">
            #express.js
          </span>
          <span className="bg-gray-200 text-gray-800 text-xs sm:text-sm md:text-base lg:text-base px-2 py-1 rounded">
            #react-router
          </span>
        </div>
      </div>
    </div>

    {/* // { Project section-2} */}

    <div className="border-0 overflow-hidden p-4 flex flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row items-center gap-4">
  {/* Left Side: Project Details (Content) */}
  <div className="w-full sm:w-full md:w-45% lg:w-40%  flex flex-col justify-center pl-0 sm:pl-0 md:pl-6 lg:pl-7">
    {/* Live Project Link */}
    <a
      href="https://todo-admin-nine.vercel.app/login"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 flex items-center font-bold mb-2 hover:underline"
    >
      View Live Project <span className='ml-1'><HiOutlineExternalLink/></span>
    </a>
    {/* Project Name */}
    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mb-2">
     Admin Dashboard
    </h2>
    {/* Project Description */}
    <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-lg mb-4">
    The Admin Dashboard is a user-friendly platform designed to efficiently manage tasks and monitor activities. 
    It offers features like real-time data tracking, user management, and interactive visualizations, 
    simplifying complex operations and enhancing productivity.
    </p>
    {/* Technologies Used */}
    <div className="flex flex-wrap gap-2">
      <span className="bg-gray-200 text-gray-800 text-xs sm:text-sm md:text-base lg:text-base px-2 py-1 rounded">
        #react
      </span>
      <span className="bg-gray-200 text-gray-800 text-xs sm:text-sm md:text-base lg:text-base px-2 py-1 rounded">
        #node
      </span>
      <span className="bg-gray-200 text-gray-800 text-xs sm:text-sm md:text-base lg:text-base px-2 py-1 rounded">
        #mongodb
      </span>
      <span className="bg-gray-200 text-gray-800 text-xs sm:text-sm md:text-base lg:text-base px-2 py-1 rounded">
        #javaScript
      </span>
      <span className="bg-gray-200 text-gray-800 text-xs sm:text-sm md:text-base lg:text-base px-2 py-1 rounded">
        #materialUi
      </span>
      <span className="bg-gray-200 text-gray-800 text-xs sm:text-sm md:text-base lg:text-base px-2 py-1 rounded">
        #express.js
      </span>
      <span className="bg-gray-200 text-gray-800 text-xs sm:text-sm md:text-base lg:text-base px-2 py-1 rounded">
        #react-router
      </span>
    </div>
  </div>

  {/* Right Side: Project Image */}
  <div className="w-full sm:w-full md:w-45% lg:w-40%  flex justify-end items-center">
    <img
      src={AdminDashboard}
      alt="Project"
      className="w-full h-64 sm:w-3/4 sm:h-96 md:w-3/4 md:h-96 lg:w-3/4 lg:h-96 rounded-lg object-cover  transition ease-in-out delay-75 hover:scale-110 cursor-pointer"
    />
  </div>
    </div>


{/* Project Section-3 */}

<div className="border-0  overflow-hidden p-4 flex flex-col sm:flex-col md:flex-row lg:flex-row items-center gap-4">
      {/* Left Side: Project Image */}
      <div className="w-full sm:w-full  md:w-1/2 lg:w-1/2">
        <img
          src={Portfolio}
          alt="Project"
          className=" w-full h-64 sm:w-3/4 sm:h-96 transition ease-in-out delay-75 hover:scale-110 cursor-pointer  md:w-3/4 md:h-96  lg:w-3/4 lg:h-96 rounded-lg object-cover"
        />
      </div>
      {/* Right Side: Project Details */}
      <div className="w-full sm:w-full  md:w-1/2 lg:w-1/2 flex flex-col">
        {/* Live Project Link */}
        <a
          href="https://anas-eta.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 flex items-center font-bold mb-2 hover:underline"
        >
          View Live Project <span className='ml-1'><HiOutlineExternalLink/></span>
        </a>
        {/* Project Name */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mb-2">
          Portfolio Website
        </h2>
        {/* Project Description */}
        <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-lg mb-4">
        The Portfolio Website is a personal platform designed to showcase my skills, projects, and experiences. 
        It features sections highlighting completed projects, a brief biography, and contact information, all 
        presented with a clean and responsive design to provide visitors with an engaging and informative experience.
        </p>
        {/* Technologies Used */}
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-200 text-gray-800 text-xs sm:text-sm md:text-base lg:text-base px-2 py-1 rounded">
            #react
          </span>
          <span className="bg-gray-200 text-gray-800 text-xs sm:text-sm md:text-base lg:text-base px-2 py-1 rounded">
            #node
          </span>
          
          {/* Add more technology tags as needed */}
          <span className="bg-gray-200 text-gray-800 text-xs sm:text-sm md:text-base lg:text-base px-2 py-1 rounded">
            #framer-motion
          </span>
          <span className="bg-gray-200 text-gray-800 text-xs sm:text-sm md:text-base lg:text-base px-2 py-1 rounded">
            #materialUi
          </span>
          <span className="bg-gray-200 text-gray-800 text-xs sm:text-sm md:text-base lg:text-base px-2 py-1 rounded">
            #express.js
          </span>
          <span className="bg-gray-200 text-gray-800 text-xs sm:text-sm md:text-base lg:text-base px-2 py-1 rounded">
            #react-router
          </span>
          <span className="bg-gray-200 text-gray-800 text-xs sm:text-sm md:text-base lg:text-base px-2 py-1 rounded">
            #node-mailer
          </span>
        </div>
      </div>
    </div>

{/* Project Section-4 */}

    <div className="border-0 overflow-hidden p-4 flex flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row items-center gap-4">
  {/* Left Side: Project Details (Content) */}
  <div className="w-full sm:w-full md:w-45% lg:w-40%  flex flex-col justify-center pl-0 sm:pl-0 md:pl-6 lg:pl-7">
    {/* Live Project Link */}
    <a
      href="https://cartify-one-hazel.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 flex items-center font-bold mb-2 hover:underline"
    >
      View Live Project <span className='ml-1'><HiOutlineExternalLink/></span>
    </a>
    {/* Project Name */}
    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mb-2">
     Cartify
    </h2>
    {/* Project Description */}
    <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-lg mb-4">
    Cartify is a responsive shopping cart application built with React, HTML, and CSS. It allows users to easily add, 
    remove, and adjust quantities of items in their cart, with real-time price updates. The app is fully responsive, 
    providing an optimized experience across both mobile and desktop devices.
    </p>
    {/* Technologies Used */}
    <div className="flex flex-wrap gap-2">
      <span className="bg-gray-200 text-gray-800 text-xs sm:text-sm md:text-base lg:text-base px-2 py-1 rounded">
        #react
      </span>
      <span className="bg-gray-200 text-gray-800 text-xs sm:text-sm md:text-base lg:text-base px-2 py-1 rounded">
        #javaScript
      </span>
      
      <span className="bg-gray-200 text-gray-800 text-xs sm:text-sm md:text-base lg:text-base px-2 py-1 rounded">
        #html
      </span>
      
      <span className="bg-gray-200 text-gray-800 text-xs sm:text-sm md:text-base lg:text-base px-2 py-1 rounded">
        #css
      </span>
      <span className="bg-gray-200 text-gray-800 text-xs sm:text-sm md:text-base lg:text-base px-2 py-1 rounded">
        #react-router
      </span>
    </div>
  </div>

  {/* Right Side: Project Image */}
  <div className="w-full sm:w-full md:w-45% lg:w-40%  flex justify-end items-center">
    <img
      src={Cartify}
      alt="Project"
      className="w-full h-64 sm:w-3/4 sm:h-96 md:w-3/4 md:h-96 lg:w-3/4 lg:h-96 rounded-lg object-cover  transition ease-in-out delay-75 hover:scale-110 cursor-pointer"
    />
  </div>
</div>
</section>
    
    </>
  );
};
 
export default ProjectCard;




