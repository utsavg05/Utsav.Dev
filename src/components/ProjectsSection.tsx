import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    title: "Zync",
    description:
      "Zync is a full-stack real-time chat application that lets users chat privately or in groups, with instant message delivery, persistent storage, and a beautiful multi-theme UI",
    image: "/zync_ss.jpg",
    link: "https://zync-1hnm.onrender.com/",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "Tailwind CSS", "DaisyUI", "Zustand"],
  },
  {
    title: "Smriti AI",
    description:
      "Smriti AI is an intelligent, all-in-one learning assistant that helps you organize, understand, and retain everything you study 🧠",
    image: "/smritiAi.jpg",
    link: "https://www.smriti.live/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini API", "Express", "MongoDB"],
  },
  {
    title: "JobSeek",
    description:
    "JobSeek is a full-featured MERN stack job portal that connects job seekers with recruiters in a streamlined and intuitive interface. Designed with role-based access control, it supports both student applicants and company recruiters.",
    image: "/jobseek_ss.jpg",
    link: "https://jobseek-ete7.onrender.com/",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "Redux", "ShadcnUI"],
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
