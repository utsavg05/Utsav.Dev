// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="bg-[#221D11] text-white py-20 px-4 md:px-16 border-t border-[#F4C753]"
//     >
//       <div className="max-w-4xl mx-auto border border-[#3a3220] rounded-xl p-7 bg-[#282114] shadow-md">
//         <h2 className="text-4xl font-bold text-[#F4C753] mb-10 text-center">
//           Get in Touch
//         </h2>

//         {/* Contact Icons */}
//         <div className="flex justify-center gap-6 text-3xl mb-12">
//           <a
//             href="https://github.com/utsavg05"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-[#F4C753] transition duration-200"
//           >
//             <FaGithub />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/utsav-gupta-3443a0324"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-[#F4C753] transition duration-200"
//           >
//             <FaLinkedin />
//           </a>
//           <a
//             href="mailto:your@email.com"
//             className="hover:text-[#F4C753] transition duration-200"
//           >
//             <FaEnvelope />
//           </a>
//         </div>

//         {/* Contact Form */}
//         <form className="space-y-6 max-w-2xl mx-auto">
//           <div>
//             <label className="block mb-2 text-lg text-[#f5e7c4]">Name</label>
//             <input
//               type="text"
//               className="w-full px-4 py-2 rounded-md bg-[#2f2719] text-white border border-gray-700 focus:outline-none focus:border-[#F4C753]"
//               placeholder="Your Name"
//             />
//           </div>

//           <div>
//             <label className="block mb-2 text-lg text-[#f5e7c4]">Email</label>
//             <input
//               type="email"
//               className="w-full px-4 py-2 rounded-md bg-[#2f2719] text-white border border-gray-700 focus:outline-none focus:border-[#F4C753]"
//               placeholder="you@example.com"
//             />
//           </div>

//           <div>
//             <label className="block mb-2 text-lg text-[#f5e7c4]">Message</label>
//             <textarea
//               rows={5}
//               className="w-full px-4 py-2 rounded-md bg-[#2f2719] text-white border border-gray-700 focus:outline-none focus:border-[#F4C753]"
//               placeholder="Your message..."
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="bg-[#F4C753] text-black font-semibold px-6 py-2 rounded-md hover:bg-[#eeb938] transition duration-300"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }


import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#221D11] text-white py-20 px-4 sm:px-6 md:px-12 lg:px-24 border-t border-[#F4C753]"
    >
      <div className="max-w-4xl mx-auto border border-[#3a3220] rounded-xl p-6 sm:p-8 md:p-10 bg-[#282114] shadow-md">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#F4C753] mb-10 text-center">
          Get in Touch
        </h2>

        {/* Contact Icons */}
        <div className="flex justify-center gap-6 text-2xl sm:text-3xl mb-10 flex-wrap">
          <a
            href="https://github.com/utsavg05"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-[#F4C753] transition duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/utsav-gupta-3443a0324"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#F4C753] transition duration-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:your@email.com"
            aria-label="Email"
            className="hover:text-[#F4C753] transition duration-200"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Contact Form */}
        <form className="space-y-6 w-full">
          <div>
            <label className="block mb-2 text-base sm:text-lg text-[#f5e7c4]">
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md bg-[#2f2719] text-white border border-gray-700 focus:outline-none focus:border-[#F4C753]"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block mb-2 text-base sm:text-lg text-[#f5e7c4]">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md bg-[#2f2719] text-white border border-gray-700 focus:outline-none focus:border-[#F4C753]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-2 text-base sm:text-lg text-[#f5e7c4]">
              Message
            </label>
            <textarea
              rows={5}
              className="w-full px-4 py-2 rounded-md bg-[#2f2719] text-white border border-gray-700 focus:outline-none focus:border-[#F4C753]"
              placeholder="Your message..."
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#F4C753] text-black font-semibold px-6 py-2 rounded-md hover:bg-[#eeb938] transition duration-300 w-full sm:w-auto"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
