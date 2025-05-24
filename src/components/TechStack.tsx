// import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaJava } from 'react-icons/fa';
// import { SiTailwindcss, SiTypescript, SiJavascript, SiMongodb, SiExpress, SiVite, SiGithub, SiC, SiCplusplus, SiBootstrap, SiNextdotjs, SiShadcnui, SiFirebase, SiCloudinary, SiFramer } from 'react-icons/si';

// const techStack = {
//   Frontend: [
//     { name: "React", icon: <FaReact className="text-sky-400" /> },
//     { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
//     { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
//     { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
//     { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
//     { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
//     { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
//     { name: "Bootstrap", icon: <SiBootstrap className="text-purple-400" /> },
//     { name: "ShadCN UI", icon: <SiShadcnui className="text-green-300" /> },
//     { name: "Framer-Motion", icon: <SiFramer className="text-yellow-400" /> },
//   ],
//   Backend: [
//     { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
//     { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
//     { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
//     { name: "Cloudinary", icon: <SiCloudinary className='text-sky-400' />  },
//   ],
//   Languages: [
//     { name: "Java", icon: <FaJava className="text-red-500" /> },
//     { name: "C", icon: <SiC className="text-blue-400" /> },
//     { name: "C++", icon: <SiCplusplus className="text-indigo-400" /> },
//   ],
//   Tools: [
//     { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
//     { name: "GitHub", icon: <SiGithub className="text-white" /> },
//     { name: "Vite", icon: <SiVite className="text-purple-400" /> },
//     { name: "VS Code"},
//     { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
//   ],
// };



// export default function TechStack() {
//   return (
//     <section id="skills" className="bg-[#221D11] py-16 px-4 md:px-16">
//       <h2 className="text-4xl font-bold text-[#F4C753] mb-10 text-center">Tech Stack I Know</h2>

//       <div className="space-y-12 max-w-5xl mx-auto">
//         {Object.entries(techStack).map(([category, items]) => (
//           <div key={category}>
//             <h3 className="text-2xl font-semibold text-white mb-4">{category}</h3>
//             <div className="flex flex-wrap gap-6">
//               {items.map((tech, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center gap-3 px-4 py-3 bg-[#2d2618] text-[#f5e7c4] rounded-lg shadow-md hover:shadow-[#F4C753] transition"
//                 >
//                   <span className="text-2xl">{tech.icon}</span>
//                   <span className="font-medium">{tech.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiVite,
  SiGithub,
  SiC,
  SiCplusplus,
  SiBootstrap,
  SiNextdotjs,
  SiShadcnui,
  SiFirebase,
  SiCloudinary,
  SiFramer,
  SiFigma,
  SiMysql,
} from "react-icons/si";
// import Image from "next/image";

const techStack = {
  Frontend: [
    { name: "React", icon: <FaReact className="text-sky-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-400" /> },
    { name: "ShadCN UI", icon: <SiShadcnui className="text-green-300" /> },
    { name: "Framer Motion", icon: <SiFramer className="text-pink-300" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "MySQL", icon: <SiMysql className="text-white" /> },
    { name: "Cloudinary", icon: <SiCloudinary className="text-sky-400" /> },
  ],
  Languages: [
    { name: "Java", icon: <FaJava className="text-red-500" /> },
    { name: "C", icon: <SiC className="text-blue-400" /> },
    { name: "C++", icon: <SiCplusplus className="text-indigo-400" /> },
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "GitHub", icon: <SiGithub className="text-white" /> },
    { name: "Figma", icon: <SiFigma className="text-[#AB72FF]" /> },
    { name: "Vite", icon: <SiVite className="text-purple-400" /> },
    {
      name: "VS Code",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
          alt="VS Code"
          width={24}
          height={24}
        />
      ),
    },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  ],
};

export default function TechStack() {
  return (
    <section id="skills" className="bg-[#221D11] py-16 px-4 md:px-16">
      <h2 className="text-4xl font-bold text-[#F4C753] mb-10 text-center">
        Tech Stack I Know
      </h2>

      <div className="space-y-14 max-w-5xl mx-auto">
        {Object.entries(techStack).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-2xl font-semibold text-white mb-4">{category}</h3>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {items.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-4 py-3 bg-[#2d2618] text-[#f5e7c4] rounded-lg shadow-md hover:shadow-[#F4C753] transition-all"
                >
                  <span className="text-xl">{tech.icon}</span>
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
