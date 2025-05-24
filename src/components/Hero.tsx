// import { motion } from "motion/react"

// const Hero = () => {
//     return (
//         <section className="w-full bg-[#221D11] text-white min-h-[90vh] flex items-center justify-center px-6">
//             <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-center py-4 mb-12">
//                 {/* Left - Designer */}
//                 <motion.div
//                     initial={{ opacity: 0, x: -100 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: 100 }}
//                     transition={{ duration: 0.8 }}
//                     className="text-center md:text-left space-y-4 mb-50">
//                     <h2 className="text-6xl font-extrabold text-[#F4C753] tracking-wide">{"<designer>"}</h2>
//                     <p className="text-gray-200 md:text-lg text-base leading-relaxed max-w-md md:ml-auto">
//                         <span className="text-[#F4C753] font-medium">Frontend Developer</span> with a knack for creating clean, functional, and beautiful user experiences.
//                     </p>
//                 </motion.div>

//                 {/* Center - Image Circle */}
//                 <motion.div
//                 initial={{opacity: 0}}
//                 animate={{opacity: 1}}
//                 transition={{duration: 0.8}}
//                 className="flex justify-center items-center">
//                     <div className="w-80 h-80 rounded-full border-4 border-[#F4C753] overflow-hidden">
//                         {/* Replace src with your image or keep blank for now */}
//                         <img
//                             src="/profile.jpg"
//                             alt="Utsav Gupta"
//                             className="w-full h-full object-cover object-top"
//                         />
//                     </div>
//                 </motion.div>

//                 {/* Right - Coder */}
//                 <motion.div
//                 initial={{ opacity: 0, x: 100 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -100 }}
//                     transition={{ duration: 0.8 }}
//                 className="text-center md:text-center space-y-4 mt-50">
//                     <h2 className="text-6xl font-extrabold text-[#F4C753] tracking-wide">
//                         {"<coder>"}
//                     </h2>
//                     <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-md md:ml-auto">
//                         <span className="text-[#F4C753] font-medium">Full Stack Developer</span> who crafts scalable systems and smooth user experiences with modern web technologies.
//                     </p>
//                 </motion.div>

//             </div>

//             {/* Download Resume CTA */}
//             <div className="absolute bottom-15 w-full flex justify-center">
//                 <a
//                     href="/Resume__Copy_ (6).pdf"
//                     download
//                     className="bg-[#F4C753] text-black font-semibold px-6 py-3 rounded-md shadow-lg hover:scale-105 transition-transform duration-200"
//                 >
//                     Download Resume
//                 </a>
//             </div>
//         </section>
//     );
// };

// export default Hero



import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full bg-[#221D11] text-white min-h-screen flex items-center justify-center px-4 sm:px-8">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-10 items-center py-9 mb-7">
        {/* Left - Designer */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left space-y-4 md:mb-50"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F4C753] tracking-wide">
            {"<designer>"}
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            <span className="text-[#F4C753] font-medium">Frontend Developer</span> with a knack for
            creating clean, functional, and beautiful user experiences.
          </p>
        </motion.div>

        {/* Center - Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center"
        >
          <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-4 border-[#F4C753] overflow-hidden">
            <img
              src="/profile.jpg"
              alt="Utsav Gupta"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>

        {/* Right - Coder */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-right space-y-4 md:mt-50"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F4C753] tracking-wide">
            {"<coder>"}
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-md mx-auto md:ml-auto">
            <span className="text-[#F4C753] font-medium">Full Stack Developer</span> who crafts
            scalable systems and smooth user experiences with modern web technologies.
          </p>
        </motion.div>
      </div>

      {/* Resume CTA */}
      <div className="absolute bottom-0.5 md:bottom-12 w-full flex justify-center items-center">
        <a
          href="/Resume__Copy_ (6).pdf"
          download
          className="bg-[#F4C753] text-black font-semibold px-6 py-3 rounded-md shadow-lg hover:scale-105 transition-transform duration-200"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
