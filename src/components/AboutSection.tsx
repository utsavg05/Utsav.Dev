// import React from "react";

// const AboutSection = () => {
//   return (
//     <section
//       id="about"
//       className="w-full bg-[#221D11] text-[#F4C753] px-6 py-20 flex flex-col items-center"
//     >
//       <div className="max-w-5xl w-full">
//         {/* Heading */}
//         <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
//           About Me
//         </h2>

//         {/* Main Introduction */}
//         <div className="text-[#f5e7c4] text-md md:text-lg leading-relaxed space-y-6">
//           <p>
//             Hello! I’m <span className="text-[#F4C753] font-semibold">Utsav Gupta</span>, a passionate full stack developer and tech enthusiast. I enjoy building scalable, responsive, and user-friendly web applications that solve real-world problems.
//           </p>

//           <p>
//             My journey started with a deep curiosity for how things work on the web. Over time, I honed my skills in both frontend and backend development, and now I specialize in building complete web platforms using modern technologies like React, TypeScript, Node.js, and Tailwind CSS.
//           </p>

//           <p>
//             Apart from coding, I’m fascinated by the evolving world of tech — especially in areas like AI integration, clean UI/UX, and developer tooling. I believe in writing clean code, learning continuously, and building products that users love.
//           </p>

//           <p>
//             I also lead as the <span className="text-white font-semibold">Technical Head of GeeksForGeeks – BVP</span>, where I drive technical initiatives within the college developer community.
//           </p>
//         </div>

//         {/* Education Section */}
//         <div className="mt-16">
//           <h3 className="text-3xl font-bold mb-4 text-[#F4C753]">Education</h3>
//           <div className="text-[#f5e7c4] space-y-4 text-lg">
//             <p><span className="font-medium text-white">🎓 Degree:</span> B.Tech in Information Technology</p>
//             <p><span className="font-medium text-white">🏫 College:</span> Bharati Vidyapeeth's College of Engineering, New Delhi</p>
//             <p><span className="font-medium text-white">📅 Years:</span> 2023 – 2027</p>
//             <p><span className="font-medium text-white">📊 CGPA:</span> 9.289</p>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default AboutSection;



import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full bg-[#221D11] text-[#F4C753] px-4 sm:px-6 md:px-12 py-20 border-t border-[#F4C753]/10"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center md:text-left">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">
          About Me
        </h2>

        {/* Description */}
        <div className="text-[#f5e7c4] text-base sm:text-lg leading-relaxed space-y-6">
          <p>
            Hello! I’m <span className="text-[#F4C753] font-semibold">Utsav Gupta</span>, a passionate full stack developer and tech enthusiast. I enjoy building scalable, responsive, and user-friendly web applications that solve real-world problems.
          </p>

          <p>
            My journey started with a deep curiosity for how things work on the web. Over time, I honed my skills in both frontend and backend development, and now I specialize in building complete web platforms using modern technologies like React, TypeScript, Node.js, and Tailwind CSS.
          </p>

          <p>
            Apart from coding, I’m fascinated by the evolving world of tech — especially in areas like AI integration, clean UI/UX, and developer tooling. I believe in writing clean code, learning continuously, and building products that users love.
          </p>

          <p>
            I also lead as the{" "}
            <span className="text-white font-semibold">
              Technical Head of GeeksForGeeks – BVP
            </span>
            , where I drive technical initiatives within the college developer community.
          </p>
        </div>

        {/* Education */}
        <div className="mt-16 w-full">
          <h3 className="text-3xl font-bold mb-6 text-[#F4C753] text-center md:text-left">
            Education
          </h3>
          <div className="text-[#f5e7c4] space-y-4 text-base sm:text-lg leading-relaxed">
            <p>
              <span className="font-medium text-white">🎓 Degree:</span>{" "}
              B.Tech in Information Technology
            </p>
            <p>
              <span className="font-medium text-white">🏫 College:</span>{" "}
              Bharati Vidyapeeth's College of Engineering, New Delhi
            </p>
            <p>
              <span className="font-medium text-white">📅 Years:</span> 2023 – 2027
            </p>
            <p>
              <span className="font-medium text-white">📊 CGPA:</span> 9.289
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
