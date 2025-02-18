// import React from 'react'

// const AboutMe = () => {
//     const skils =["docker","react","node",'JavaScript','redux','mongodb','materialUi','Tailwind CSS','Framer Motion','git','github','css','html']
//   return (
//     <div className='fixed  bg-gradient-to-b h-screen w-screen opacity-90 text-white from-gray-800 via-gray-900 to-black top-0 left-0 bottom-0 right-0 '>
//         <div className="bg-gray-600 w-[40%]  h-96">
//         <h2>ABOUT ME</h2>
//         <p>Hi! I’m Anas Qureshi, a MERN stack developer with hands on experience in building web applications. I am specialized in MongoDB, Express.js, React.js, and Node.js, and I’m passionate about creating user-friendly and efficient solutions. Feel free to check out my portfolio and reach out if you’d like to connect!</p>
//         <div className="div">
//             {skils.map((skill,index)=>{
//                 return <span key={index} >{skill}</span>
//             })}
//         </div>
//         </div>
//     </div>
//   )
// }

// export default AboutMe

// import React from "react";
// import { TiDelete } from "react-icons/ti";
// import { motion } from "framer-motion";

// const AboutMe = ({ setShow }) => {
//   const handleDelete = () => {
//     setShow(false);
//   };
//   const skils = [
//     "#Docker",
//     "#React",
//     "#Node",
//     "#JavaScript",
//     "#React-router",
//     "#Redux",
//     "#MongoDB",
//     "#MaterialUi",
//     "#Tailwind CSS",
//     "#Github",
//     "#Git",
//     "#CSS",
//     "#HTML",
//     "#Framer Motion",
//   ];

//   return (
//     <div className="fixed inset-0 bg-gradient-to-b h-screen w-screen opacity-90 text-white from-gray-800 via-gray-900 to-black">
//       {/* Centering the modal */}
//       <motion.div
//         initial={{ opacity: 0, scale: 3, top: 120, left: 300 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{
//           duration: 0.3,
//           ease: [0, 0.71, 0.2, 1.01],
//           scale: {
//             type: "spring",
//             damping: 9,
//             stiffness: 100,
//             restDelta: 0.001,
//           },
//         }}
//         className=" bg-black w-[50%] rounded-lg shadow-xl h-auto p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//       >
//         <div className="flex flex-row justify-between items-center ">
//           <h2 className="text-xl font-bold  text-cyan-600">ABOUT ME</h2>
//           <TiDelete
//             onClick={handleDelete}
//             className="text-xl mb-3 cursor-pointer"
//           />
//         </div>
//         <h2 className="mb-3">Interactive MERN developer</h2>
//         <p className="tracking-wide mb-3">
//           I'm Anas Qureshi, a 23-year-old Indian Freelance MERN developer |
//           React.js Specialist. I'm a weird guy who likes making weird things
//           with web technologies. I like to resolve design problems, create smart
//           user interface and imagine useful interaction, developing rich web
//           experiences & web applications. My focus is always on creating clean,
//           responsive, and interactive user interfaces that elevate the user
//           experience.
//         </p>
//         <div className="flex flex-wrap  gap-2">
//           {skils.map((skill, index) => {
//             return (
//               <span
//                 key={index}
//                 className="rounded-full border border-white px-4 py-1 mt-1 ml-1 "
//               >
//                 {skill}
//               </span>
//             );
//           })}
//         </div>
//         <div className="mt-6">
//           <span className="text-xl font-semibold">what do i offer ?</span>{" "}
//           <span>
//             <button className="font-semibold bg-gradient-to-r from-blue-900 to bg-purple-500 shadow-blue-500/50 hover:scale-105 transition-transform duration-200 hover:shadow-blue-500/50 ease-in-out delay-100 py-1 px-3 rounded ml-3">
//               Check it out
//             </button>
//           </span>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default AboutMe;




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
    <div className="fixed inset-0  h-screen w-screen  flex justify-center items-center">
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
