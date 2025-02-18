import { motion } from "framer-motion";
import { FaReact, FaJs, FaDocker, FaNode, FaPython, FaJava, FaFigma, FaGithub, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiFirebase, SiPostgresql, SiTypescript, SiGraphql, SiRedux, SiTailwindcss, SiMongodb, SiAngular, SiFlutter, SiWebpack, SiJest, SiVite, SiSass, SiPrisma, SiSolidity } from "react-icons/si";

// ✅ Icons with Custom Colors
const techStack = [
  { icon: <FaReact />, color: "#38bdf8" }, // Cyan Blue
  { icon: <FaReact />, color: "#38bdf8" }, // Cyan Blue
  { icon: <FaJs />, color: "#facc15" }, // Yellow
  { icon: <FaDocker />, color: "#3b82f6" }, // Blue
  { icon: <SiNextdotjs />, color: "#ffffff" }, // White
  { icon: <FaNode />, color: "#22c55e" }, // Green
  { icon: <SiFirebase />, color: "#eab308" }, // Gold
  { icon: <SiWebpack />, color: "#7c3aed" }, // Purple
  { icon: <SiTailwindcss />, color: "#38bdf8" }, // Cyan
  { icon: <SiAngular />, color: "#f87171" }, // Red
  { icon: <SiGraphql />, color: "#ea580c" }, // Orange
  { icon: <SiMongodb />, color: "#16a34a" }, // Dark Green
  { icon: <SiPostgresql />, color: "#3b82f6" }, // Blue
  { icon: <SiFlutter />, color: "#38bdf8" }, // Cyan
  { icon: <FaJava />, color: "#facc15" }, // Yellow
  { icon: <FaPython />, color: "#16a34a" }, // Green
  { icon: <SiTypescript />, color: "#3b82f6" }, // Blue
  { icon: <SiNextdotjs />, color: "#ffffff" }, // White
  { icon: <FaNode />, color: "#22c55e" }, // Green
  { icon: <SiFirebase />, color: "#eab308" }, // Gold
  { icon: <SiWebpack />, color: "#7c3aed" }, // Purple
  { icon: <SiTailwindcss />, color: "#38bdf8" }, // Cyan
  { icon: <SiAngular />, color: "#f87171" }, // Red
  { icon: <SiGraphql />, color: "#ea580c" }, // Orange
  { icon: <SiMongodb />, color: "#16a34a" }, // Dark Green
  { icon: <SiPostgresql />, color: "#3b82f6" }, // Blue
  { icon: <SiFlutter />, color: "#38bdf8" }, // Cyan
  { icon: <FaJava />, color: "#facc15" }, // Yellow
  { icon: <FaPython />, color: "#16a34a" }, // Green
  { icon: <SiTypescript />, color: "#3b82f6" }, // Blue
  { icon: <SiRedux />, color: "#a855f7" }, // Purple
  { icon: <FaGithub />, color: "#ffffff" }, // White
  { icon: <FaGitAlt />, color: "#ea580c" }, // Orange
  { icon: <FaFigma />, color: "#e5e7eb" }, // Light Gray
  { icon: <SiJest />, color: "#9c27b0" }, // Purple (Jest)
  { icon: <SiVite />, color: "#f7ab00" }, // Orange (Vite)
  { icon: <SiSass />, color: "#c6538c" }, // Pink (Sass)
  { icon: <SiPrisma />, color: "#2D3748" }, // Dark Gray (Prisma)
  { icon: <SiSolidity />, color: "#363636" }, // Dark Gray (Solidity)
];

// ✅ Infinite scrolling ke liye list ko triplicate (3x) kiya
const duplicatedStack = [...techStack, ...techStack, ...techStack];



const Home = () => {
    return (
      <div className="w-screen h-screen pt-6 sm:pt-14 md:pt-14 lg:pt-16 flex flex-col gap-3 sm:gap-2 md:gap-2 overflow-x-hidden lg:gap-2 justify-center  
        bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white relative">
          
        {[...Array(13)].map((_, rowIndex) => (
          <div key={rowIndex} className="overflow-x-hidden   whitespace-nowrap">
           
            <motion.div
              className="flex gap-0 sm:gap-4 md:gap-4 lg:gap-4 text-5xl"
              animate={{ x: rowIndex % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
             
            >
              {duplicatedStack.map((item, index) => (
                <span 
                  key={index} 
                  className="px-5 py-3 text-[19px] sm:text-[18px] md:text-[18px] lg:text-[18px]"
                  style={{ color: item.color }} // ✅ Custom Icon Colors Applied
                >
                  {item.icon}
                </span>
              ))}
            </motion.div>
            </div>
          
        ))}
 </div>
  );
};

export default Home;  


