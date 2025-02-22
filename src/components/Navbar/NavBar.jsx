// import React, { useState } from 'react';
// import BrandLogo from '../Images/favicon.ico';

// const NavBar = () => {
//   // State to toggle the mobile menu visibility
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Function to handle link clicks and close the menu
//   const handleLinkClick = () => {
//     setMenuOpen(false);  // Close the menu when a link is clicked
//   };

//   return (
//     <div className='absolute text-white py-3 top-0 w-screen justify-between items-center flex flex-row pt-0 px-5 overflow-x-hidden'>
//       <img 
//         src={BrandLogo} 
//         alt='Logo' 
//         className='w-16 sm:w-28 md:w-32 lg:w-20 h-auto sm:ml-8 md:ml-8 z-10'
//       />

//       {/* Desktop Navbar */}
//       <ul className='pr-3 hidden sm:mr-4 md:mr-6 sm:hidden md:flex lg:flex space-x-10'>
//         <li className='text-xl group relative'>
//           <a href='#home' className='hover:text-blue-500'>Home</a>
//           <div className='h-0.5 bg-blue-500 absolute bottom-0 left-0 right-0 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300'></div>
//         </li>
//         <li className='text-xl group relative'>
//           <a href='#ourwork' className='hover:text-blue-500'>Our Work</a>
//           <div className='h-0.5 bg-blue-500 absolute bottom-0 left-0 right-0 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300'></div>
//         </li>
//         <li className='text-xl group relative'>
//           <a href='#skill' className='hover:text-blue-500'>My Skills</a>
//           <div className='h-0.5 bg-blue-500 absolute bottom-0 left-0 right-0 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300'></div>
//         </li>
//         <li className='text-xl group relative'>
//           <a href='#services' className='hover:text-blue-500'>Services</a>
//           <div className='h-0.5 bg-blue-500 absolute bottom-0 left-0 right-0 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300'></div>
//         </li>
//         <li className='text-xl group relative'>
//           <a href='#testimonial' className='hover:text-blue-500'>Testimonials</a>
//           <div className='h-0.5 bg-blue-500 absolute bottom-0 left-0 right-0 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300'></div>
//         </li>
//         <li className='text-xl group relative'>
//           <a href='#contact' className='hover:text-blue-500'>Contact Us</a>
//           <div className='h-0.5 bg-blue-500 absolute bottom-0 left-0 right-0 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300'></div>
//         </li>
//       </ul>

//       {/* Mobile Hamburger Menu */}
//       <div className='md:hidden flex items-center'>
//         {/* Hamburger Menu Button */}
//         <button 
//           onClick={() => setMenuOpen(true)} 
//           className='text-3xl focus:outline-none'
//         >
//           ☰
//         </button>

//         {/* Conditional rendering of mobile menu */}
//         {menuOpen && (
//           <ul className='relative top-0 z-30 h-screen right-28 bg-black text-white w-screen flex flex-col items-center space-y-6 py-6'>
//             <li className='text-xl'>
//               <a href='#home' className='hover:text-blue-500' onClick={handleLinkClick}>Home</a>
//             </li>
//             <li className='text-xl'>
//               <a href='#ourwork' className='hover:text-blue-500' onClick={handleLinkClick}>Our Work</a>
//             </li>
//             <li className='text-xl'>
//               <a href='#skill' className='hover:text-blue-500' onClick={handleLinkClick}>My Skills</a>
//             </li>
//             <li className='text-xl'>
//               <a href='#services' className='hover:text-blue-500' onClick={handleLinkClick}>Services</a>
//             </li>
//             <li className='text-xl'>
//               <a href='#testimonial' className='hover:text-blue-500' onClick={handleLinkClick}>Testimonials</a>
//             </li>
//             <li className='text-xl'>
//               <a href='#contact' className='hover:text-blue-500' onClick={handleLinkClick}>Contact Us</a>
//             </li>
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }

// export default NavBar;


import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`fixed w-full top-0 left-0 bg-gray-900 p-4 z-50 ${isMenuOpen ? 'h-screen' : ''}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-2xl sm:text-3xl md:text-4xl">
          <a href="#">Anas.</a>
        </div>

        {/* Navbar Links */}
        <div className={`hidden md:flex md:items-center text-lg space-x-6 text-white ${isMenuOpen ? 'h-screen' : ''}`}>
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#ourwork" className="hover:text-gray-400">Our Work</a>
          <a href="#skill" className="hover:text-gray-400">My Skills</a>
          <a href="#services" className="hover:text-gray-400">Services</a>
          <a href="#testimonial" className="hover:text-gray-400">Testimonial</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
          
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button className="text-white text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden text-center text-lg  text-white p-4">
          <a href="#home" className="block py-2 " onClick={()=> setIsMenuOpen(!isMenuOpen)}>Home</a>
          <a href='#ourwork' className='block py-2'  onClick={()=> setIsMenuOpen(!isMenuOpen)}>Our Work</a>
          <a href='#skill' className='block py-2'  onClick={()=> setIsMenuOpen(!isMenuOpen)}> My Skills</a>
          <a href="#services" className="block py-2"  onClick={()=> setIsMenuOpen(!isMenuOpen)}>Services</a>
          <a href='#testimonial' className='block py-2'  onClick={()=> setIsMenuOpen(!isMenuOpen)}>Testimonial</a>
          <a href="#contact" className="block py-2"  onClick={()=> setIsMenuOpen(!isMenuOpen)}>Contact</a>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;















