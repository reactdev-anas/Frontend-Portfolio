import React, { useState } from 'react'
import AboutMe from '../AboutMe/AboutMe'


const HeroSection = () => {
  const [show, setShow]= useState(false)
  return (
    <>
    <div className='absolute rounded  top-[30%] left-[0%] sm:left-[8%] md:left-[10%] lg:left-[10%] p-5  text-white '>
      <h1 className='text-5xl sm:text-7xl md:text-8xl font-serif  '>Anas Qureshi</h1>
      <h2 className='text-2xl sm:text-7xl md:text-4xl font-semibold mt-4'>Frontend Developer | React Specialist</h2>
      <div className="mt-5">
        <button onClick={()=> setShow(true)} className='font-semibold bg-gradient-to-r from-blue-900 to bg-purple-500 shadow-blue-500/50 hover:scale-105 transition-transform duration-200 hover:shadow-blue-500/50 ease-in-out delay-100 py-2 px-5 rounded'>About Me <span >→</span> </button>
      </div>
    </div>
    {show?<>
      <AboutMe setShow={setShow}/>
    </>:<></>}
    
    </>
  )
}

export default HeroSection



