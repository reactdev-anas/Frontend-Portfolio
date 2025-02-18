import React from 'react'
import { SlSocialInstagram } from "react-icons/sl";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import Logo from '../Images/favicon.ico'

const Footer = () => {
  return (
    <div className=' bg-gray-100 py-8'>
        <h2 className='text-center'>Anas Qureshi © 2024</h2>
        <div className='flex justify-center items-center'>
        <img src={Logo} alt='Brand_Logo' className='w-24 sm:w-24 md:w-28 lg:w-28 xl:w-28 mt-2 mb-0 h-auto '/>
        </div>
        <div className='flex justify-center items-center mt-6'>
            <span className='mr-6 text-xl text-cyan-700'><a href='https://www.instagram.com/'><SlSocialInstagram/> </a></span>
            <span className='mr-6 text-2xl text-cyan-700'> <a href='https://www.linkedin.com/in/anas-qureshi-537617330/'> <FaLinkedinIn/></a></span>
            <span className='mr-6 text-xl text-cyan-700'><a href='https://mail.google.com/mail/?view=cm&fs=1&to=anas.reactdev@gmail.com' target='blank'> <SiGmail/></a></span>
            <span className='text-xl text-cyan-700'> <a href='https://github.com/reactdev-anas'> <FaGithub/></a></span>
        </div>
    </div>
  )
}

export default Footer