// import React from 'react'
// import { Link } from 'react-router'
// import { RiHome5Fill } from "react-icons/ri";
// import { GrServices } from "react-icons/gr";
// import { MdGroupWork } from "react-icons/md";
// import { BsChatRightQuoteFill } from "react-icons/bs"
// import { FaPhoneAlt } from "react-icons/fa";
// const NavBar_1 = () => {
//   return (
//     <div className='h-64 absolute  top-24 left-6 rounded shadow-lg bg-[#ffff] opacity-90 w-9 flex flex-col pt-4 overflow-x-hidden'>
//             <Link className='text-orange-400 mx-auto text-2xl font-semibold '><RiHome5Fill/></Link>
//             <Link className='text-cyan-700 mx-auto text-2xl mt-7 font-semibold'><GrServices/></Link>
//             <Link className='text-purple-700 mx-auto  text-2xl mt-7 font-semibold'><MdGroupWork/></Link>
//             <Link className='text-pink-300 mx-auto text-xl mt-7 font-semibold'><BsChatRightQuoteFill/></Link>
//             <Link className='text-yellow-600 mx-auto text-xl mt-7 font-semibold'><FaPhoneAlt/></Link>
        
//     </div>
//   )
// }

// export default NavBar_1


import React, { useState } from 'react';
import { Link } from 'react-router'; // Update this to 'react-router-dom' if you're using react-router v6 or above
import { RiHome5Fill } from "react-icons/ri";
import { GrServices } from "react-icons/gr";
import { MdGroupWork } from "react-icons/md";
import { BsChatRightQuoteFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";

const NavBar_1 = () => {
  const [activeLink, setActiveLink] = useState('home'); // Default active link

  const handleClick = (linkName) => {
    setActiveLink(linkName); // Set active link when clicked
  }

  return (
    <div className='h-64 absolute top-24 right-3 sm:right-5 md:right-6 lg:right-6 rounded shadow-lg bg-[#ffff]  w-10 sm:w-10 md:w-10 lg:w-10 flex flex-col pt-4 overflow-x-hidden'>
      <Link 
        to="/" 
        className={`mx-auto text-2xl font-semibold ${activeLink === 'home' ? 'text-[#00008b] text-2xl sm:text-2xl md:text-2xl lg:text-2xl' : 'text-orange-400 text-xl sm:text-2xl md:text-2xl lg:text-2xl'}`} 
        onClick={() => handleClick('home')}
      >
        <RiHome5Fill />
      </Link>
      <Link 
        to="/services" 
        className={`mx-auto text-2xl mt-7 font-semibold ${activeLink === 'services' ? 'text-[#00008b] text-2xl sm:text-2xl md:text-2xl lg:text-2xl' : 'text-cyan-700 text-xl sm:text-2xl md:text-2xl lg:text-2xl'}`} 
        onClick={() => handleClick('services')}
      >
        <GrServices />
      </Link>
      <Link 
        to="/work" 
        className={`mx-auto text-2xl mt-7 font-semibold ${activeLink === 'work' ? 'text-[#00008b] text-2xl sm:text-2xl md:text-2xl lg:text-2xl' : 'text-purple-700 text-xl sm:text-2xl md:text-2xl lg:text-2xl'}`} 
        onClick={() => handleClick('work')}
      >
        <MdGroupWork />
      </Link>
      <Link 
        to="/quotes" 
        className={`mx-auto text-xl mt-7 font-semibold ${activeLink === 'quotes' ? 'text-[#00008b] text-lg sm:text-xl md:text-xl lg:text-xl' : 'text-pink-300 text-lg sm:text-xl md:text-xl lg:text-xl'}`} 
        onClick={() => handleClick('quotes')}
      >
        <BsChatRightQuoteFill />
      </Link>
      <Link 
        to="/contact" 
        className={`mx-auto text-xl mt-7 font-semibold ${activeLink === 'contact' ? 'text-[#00008b] text-lg sm:text-xl md:text-xl lg:text-xl' : 'text-yellow-600 text-lg sm:text-xl md:text-xl lg:text-xl'}`} 
        onClick={() => handleClick('contact')}
      >
        <FaPhoneAlt />
      </Link>
    </div>
  );
}

export default NavBar_1;
