// import React, { useState } from 'react'
// import AboutMe from '../AboutMe/AboutMe'


// const HeroSection = () => {
//   const [show, setShow]= useState(false)
//   return (
//     <>
//     <div className='absolute rounded  top-[30%] left-[0%] sm:left-[8%] md:left-[10%] lg:left-[10%] p-5  text-white '>
//       <h1 className='text-5xl sm:text-7xl md:text-8xl font-serif  '>Anas Qureshi</h1>
//       <h2 className='text-2xl sm:text-7xl md:text-4xl font-semibold mt-4'>Frontend Developer | React Specialist</h2>
//       <div className="mt-5">
//         <button onClick={()=> setShow(true)} className='font-semibold bg-gradient-to-r from-blue-900 to bg-purple-500 shadow-blue-500/50 hover:scale-105 transition-transform duration-200 hover:shadow-blue-500/50 ease-in-out delay-100 py-2 px-5 rounded'>About Me <span >→</span> </button>
//       </div>
//     </div>
//     {show?<>
//       <AboutMe setShow={setShow}/>
//     </>:<></>}
    
//     </>
//   )
// }

// export default HeroSection


import React, { useState } from 'react';
import AboutMe from '../AboutMe/AboutMe'

const Hero = () => {
  const [show, setShow]= useState(false);
  return (
    <>
    <section id='home' className="relative h-screen bg-gray-800 text-white flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-16 py-20 pt-32">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('your-image-url.jpg')" }}></div>

      <div className="relative z-10">
        {/* Heading */}
        <h1 className="text-5xl md:text-5xl lg:text-6xl font-extrabold mb-4">
          Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-purple-500">Anas Qureshi</span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-lg md:text-xl lg:text-2xl mb-8 px-6 md:px-12">
          I’m a passionate MERN Stack Developer, building modern web applications with performance, scalability, and innovation in mind.
        </p>

        {/* Button */}
       <button onClick={()=> setShow(true)} className='text-lg font-semibold bg-gradient-to-r from-blue-900 to bg-purple-500 shadow-blue-500/50 hover:scale-105 transition-transform duration-200 hover:shadow-blue-500/50 ease-in-out delay-100 py-2 px-5 rounded'>About Me <span >→</span> </button>

      </div>
    </section>
     {show?<>
           <AboutMe setShow={setShow}/>
          </>:<></>}
          </>
  );
};

export default Hero;




