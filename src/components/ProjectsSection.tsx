// import { ExternalLink } from "lucide-react"; // Make sure you have lucide-react installed

// const projects = [
//     {
//       title: "Smriti AI",
//       description: "Smriti AI is an intelligent, all-in-one learning assistant that helps you organize, understand, and retain everything you study 🧠",
//       image: "/smritiAi.jpg", // Replace with actual image path
//       link: "https://www.smriti.live/",
//     },
//   {
//     title: "CineVibe",
//     description: "A responsive movie and event platform built with React and Tailwind CSS.",
//     image: "/CineVibe.jpg", // Replace with actual image path
//     link: "https://cine-vibe-app.vercel.app/",
//   },
//   {
//     title: "BeBlogger",
//     description: "Blogging platform that allows users to create, share, and explore blogs on various topics.",
//     image: "/BeBlogger.jpg", // Replace with actual image path
//     link: "https://beblogger-ruby.vercel.app/",
//   },
//   {
//     title: "WorkSphere",
//     description: "A modern Employee Management System built to help businesses streamline employee tracking, manage records, and visualize workforce insights with an interactive dashboard.",
//     image: "/ems.jpg", // Replace with actual image path
//     link: "https://employee-management-system-seven-henna.vercel.app/",
//   },
//   {
//     title: "Retro Themed UI",
//     description: "Retro-themed website designed to showcase classic design elements and aesthetics. The website is built using modern web technologies while maintaining a vintage look and feel.",
//     image: "/retro.jpg", // Replace with actual image path
//     link: "https://retro-design-plum.vercel.app/",
//   },
// ];

// export default function ProjectsSection() {
//   return (
//     <section id="projects" className="bg-[#221D11] py-20 px-4 md:px-10">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl text-center font-bold text-[#F4C753] mb-2">Featured Projects</h2>
//         <p className="text-[#d3c3a4] text-center text-base mb-12">
//           A selection of projects showcasing my full stack development skills.
//         </p>

//         <div className="grid md:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className='bg-[#2d2618] rounded-xl overflow-hidden shadow-md shadow-[#F4C753] transition duration-200 scale-95 hover:scale-100 border-2 border-[#F4C753]'
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-50 object-cover object-top"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-white flex items-center justify-between">
//                   {project.title}
//                   <a
//                     href={project.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-[#F4C753] hover:text-white transition"
//                   >
//                     <ExternalLink size={18} />
//                   </a>
//                 </h3>
//                 <p className="text-[#f5e7c4] text-sm mt-2">
//                   {project.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    title: "Smriti AI",
    description:
      "Smriti AI is an intelligent, all-in-one learning assistant that helps you organize, understand, and retain everything you study 🧠",
    image: "/smritiAi.jpg",
    link: "https://www.smriti.live/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini API", "Express", "MongoDB"],
  },
  {
    title: "CineVibe",
    description:
      "A responsive movie and event platform built with React and Tailwind CSS.",
    image: "/CineVibe.jpg",
    link: "https://cine-vibe-app.vercel.app/",
    tech: ["React", "Tailwind CSS", "Framer"],
  },
  {
    title: "BeBlogger",
    description:
      "Blogging platform that allows users to create, share, and explore blogs on various topics.",
    image: "/BeBlogger.jpg",
    link: "https://beblogger-ruby.vercel.app/",
    tech: ["React", "Tailwind CSS", "Framer"],
  },
  {
    title: "WorkSphere",
    description:
      "A modern Employee Management System built to help businesses streamline employee tracking and visualize workforce insights.",
    image: "/ems.jpg",
    link: "https://employee-management-system-seven-henna.vercel.app/",
    tech: ["React", "Javascript", "Tailwind CSS"],
  },
  {
    title: "Retro Themed UI",
    description:
      "Retro-themed website built with modern tech while capturing classic aesthetics.",
    image: "/retro.jpg",
    link: "https://retro-design-plum.vercel.app/",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#221D11] py-20 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl text-center font-bold text-[#F4C753] mb-3">
          Featured Projects
        </h2>
        <p className="text-[#d3c3a4] text-center text-base max-w-2xl mx-auto mb-12">
          A selection of projects showcasing my frontend and full stack development skills.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#2d2618] rounded-xl overflow-hidden shadow-md shadow-[#F4C753]/40 border border-[#F4C753]/30 hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <img
                src={project.image}
                alt={project.title || "Project image"}
                className="w-full h-48 sm:h-52 object-cover object-top"
              />
              <div className="p-5">
                <h3 className="text-lg sm:text-xl font-semibold text-white flex items-center justify-between">
                  {project.title}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} live site`}
                    className="text-[#F4C753] hover:text-white transition"
                  >
                    <ExternalLink size={18} />
                  </a>
                </h3>

                <p className="text-[#f5e7c4] text-sm mt-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[#F4C753] text-black px-2 py-1 rounded font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
