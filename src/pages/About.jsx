
// import React from 'react'
// import  profile_img from '../assets/profile-img.jpg'

// const About = () => {
//   return (
//     <section
//       id='/about'
//       className="mt-16 mb-15 px-4 md:px-8 lg:px-8 "
//       style={{
//         animation: 'fadeInUp 1s ease-out forwards',
//         opacity: 0
//       }}
//     >
//       <style>
//         {`
//           @keyframes fadeInUp {
//             0% { opacity: 0; transform: translateY(20px); }
//             100% { opacity: 1; transform: translateY(0); }
//           }
//         `}
//       </style>

//       <div className="flex flex-col items-center gap-6 text-center">
//         <h1
//           className="text-4xl font-bold text-blue-600"
//           style={{ animation: 'fadeInUp 1s ease-out forwards', animationDelay: '0.2s', opacity: 0 }}
//         >
//           About Me
//         </h1>
//         <h2
//           className="text-lg text-blue-400"
//           style={{ animation: 'fadeInUp 1s ease-out forwards', animationDelay: '0.4s', opacity: 0 }}
//         >
//           Get to know me better
//         </h2>

//         {/* Top section */}
//         <div className="flex flex-col md:flex-row items-center justify-between max-w-[1260px] w-full gap-12 mt-10">
          
//           {/* Profile image placeholder */}
//           <div
//             className="w-100 md:w-[48%] flex items-center object-fill justify-center bg-white rounded-full shadow-lg border border-gray-200 overflow-hidden"
//             style={{ animation: 'fadeInUp 1s ease-out forwards', animationDelay: '0.6s', opacity: 0 }}
//           >
//             <span className="text-gray-400">
//               <img src={profile_img} alt="" width={350}  />
//             </span>
//           </div>
       



//           {/* About text */}
//           <div
//             className="md:w-[48%] flex flex-col gap-4 text-left"
//             style={{ animation: 'fadeInUp 1s ease-out forwards', animationDelay: '0.8s', opacity: 0 }}
//           >
//             <h3 className="text-2xl font-semibold text-blue-600">Who I Am</h3>
//             <p className="text-gray-600 leading-relaxed">
//               Hello! I’m Rohit Parmar, a tech enthusiast and problem-solver who loves turning ideas into digital experiences. I thrive at the intersection of creativity and code, building apps that are both functional and visually engaging.
//             </p>
//             <p className="text-gray-600 leading-relaxed">
//               My toolkit includes JavaScript, React, Node.js, and Python. I’m always curious, always learning, and passionate about exploring new technologies.
//             </p>
//             <p className="text-gray-600 leading-relaxed">
//               Outside the screen, I enjoy experimenting with AI, reading about emerging tech, and tinkering with personal projects that challenge me to grow.
//             </p>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }

// export default About






import React from "react";
import profile_img from '../assets/profile-img.jpg'
import resumePDF from '../assets/Resume.pdf'


const About = () => {
  return (
    <section id='/about' className="bg-[#0d1126] text-white py-26 px-16">
      {/* Wrapper with max width */}
      <div className="max-w-[1260px] mx-auto p-8 ">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center ">
          <h2 className="text-3xl font-bold mb-2  ">ABOUT ME</h2>
        <p className="text-gray-500 mb-8 ">
        Get to know me better
        </p>

        </div>
        {/* Content Wrapper */}
        <div className="flex flex-col md:flex-row items-start md:items-center md:justify-center gap-8">
          {/* Profile Image */}
          <div className="flex-shrink-0 w-[40%]">
            <img
              src={profile_img}
              alt="Profile"
              className="w-48 h-48 md:w-85 md:h-86 rounded-full shadow-2xl border-4 border-blue-200 object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex-1 text-gray-300">
            <p className="mb-2 leading-relaxed text-sm md:text-base">
              Hello! I’m Rohit Parmar, a tech enthusiast and problem-solver who loves turning ideas into digital experiences. I thrive at the intersection of creativity and code, building apps that are both functional and visually engaging.
            </p>
             <p className="mb-2 leading-relaxed text-sm md:text-base">
            My toolkit includes JavaScript, React, Node.js, and Python. I’m always curious, always learning, and passionate about exploring new technologies.
             </p>
             <p className="mb-2 leading-relaxed text-sm md:text-base">
               Outside the screen, I enjoy experimenting with AI, reading about emerging tech, and tinkering with personal projects that challenge me to grow.
             </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm md:text-base">
              <p>
                <span className="font-semibold">BIRTHPLACE:</span> Nipaniya
            
              </p>
              <p>
                <span className="font-semibold">RESIDENCE:</span> Bhopal MP
              </p>
              <p>
                <span className="font-semibold">BORN:</span> 12/08/2004
              </p>
              <p>
                <span className="font-semibold">EDUCATION:</span> B.Tech
              </p>
              <p>
                <span className="font-semibold">HOBBIES:</span> Sketching, traveling, coding
              </p>
              <p>
                <span className="font-semibold">EMAIL:</span> rohitparmar8349@gmail.com
              </p>
            </div>

            {/* Resume Button */}
            <a
              href={resumePDF}
              download
              className="inline-block mt-6 bg-blue-600 text-white font-semibold px-6 py-3 rounded shadow hover:bg-blue-800 transition"
            >
              📄 Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
