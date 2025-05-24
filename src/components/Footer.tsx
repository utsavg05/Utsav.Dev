// import { Github, Linkedin } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-[#F4C753] text-white py-6 px-8 mt-20 border-t border-[#F4C753]/20">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
//         <p className="text-md text-[#221D11] font-md">
//           © {new Date().getFullYear()} Utsav Gupta. All rights reserved.
//         </p>

//         <div className="flex gap-6 text-md font-medium text-[#221D11]">
//           <a href="#about" className="hover:text-[#F4C753] transition">
//             About
//           </a>
//           <a href="#projects" className="hover:text-[#F4C753] transition">
//             Projects
//           </a>
//           <a href="#contact" className="hover:text-[#F4C753] transition">
//             Contact
//           </a>
//         </div>

//         <div className="flex gap-4">
//           <a
//             href="https://github.com/utsavg05"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 rounded bg-[#221D11] hover:text-[#F4C753] transition"
//           >
//             <Github className="w-5 h-5" />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/utsav-gupta-3443a0324"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 rounded bg-[#221D11] hover:text-[#F4C753] transition"
//           >
//             <Linkedin className="w-5 h-5" />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }



import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F4C753] text-white py-6 px-6 sm:px-8 mt-20 border-t border-[#F4C753]/20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
        {/* Copyright */}
        <p className="text-sm sm:text-md text-[#221D11] font-medium text-center sm:text-left">
          © {new Date().getFullYear()} Utsav Gupta. All rights reserved.
        </p>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-md font-medium text-[#221D11]">
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-3">
          <a
            href="https://github.com/utsavg05"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#221D11] hover:text-[#F4C753] transition"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/utsav-gupta-3443a0324"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#221D11] hover:text-[#F4C753] transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
