// // import React from "react";

// // export const DeveloperSection = React.forwardRef((props, ref) => {
// //   const devs = [
// //     { name: "Rutika T K", img: "/image/rutika.jpg", bio: "UI/UX expert", linkedin: "#", github: "#" },
// //     { name: "Prachi S D", img: "/images/prachi.jpg", bio: "Frontend designer", linkedin: "#", github: "#" },
// //     { name: "Pranjal R Y", img: "/images/pranjal.jpg", bio: "Backend expert", linkedin: "#", github: "#" },
// //     { name: "Rakshita H", img: "/image/rakshita.jpg", bio: "Full-stack dev", linkedin: "#", github: "#" },
// //   ];

// //   return (
// //     <section ref={ref} className="min-h-screen px-8 pt-28 pb-20 bg-gradient-to-br from-gray-900 to-black">
// //       <div className="max-w-7xl mx-auto text-center mb-16">
// //         <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
// //           Development Team
// //         </h1>
// //         <p className="text-gray-300 text-lg max-w-2xl mx-auto">
// //           Meet the talented developers behind this project.
// //         </p>
// //       </div>

// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
// //         {devs.map((dev, index) => (
// //           <div key={index} className="w-64 h-80 rounded-xl overflow-hidden relative cursor-pointer transform transition-all duration-500 hover:-translate-y-2 shadow-2xl">
// //             <img src={dev.img} alt={dev.name} className="w-full h-full object-cover transition-all duration-500 hover:scale-110 hover:brightness-50"/>
// //             <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent transform translate-y-20 opacity-0 transition-all duration-500 hover:translate-y-0 hover:opacity-100">
// //               <h3 className="text-lg font-bold text-white mb-1">{dev.name}</h3>
// //               <p className="text-gray-300 text-xs mb-3 line-clamp-2">{dev.bio}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // });

// import React, { useState } from "react";

// export const DeveloperSection = React.forwardRef((props, ref) => {
//   const devs = [
//     { 
//       name: "Rutika T K", 
//       img: "/image/rutika.jpg", 
//       bio: "UI/UX expert", 
//       linkedin: "/icons/link.png", 
//       github: "/icons/github.svg", 
//       instagram: "/icons/instagram.svg" 
//     },
//     { 
//       name: "Prachi S D", 
//       img: "/image/prachi.jpg", 
//       bio: "Frontend designer", 
//       linkedin: "/icons/link.png", 
//       github: "/icons/github.svg", 
//       instagram: "/icons/instagram.svg" 
//     },
//     { 
//       name: "Pranjal R Y", 
//       img: "/image/pranjal.jpg", 
//       bio: "Backend expert", 
//       linkedin: "/icons/link.png", 
//       github: "/icons/github.svg", 
//       instagram: "/icons/instagram.svg" 
//     },
//     { 
//       name: "Rakshita H", 
//       img: "/image/rakshita.jpg", 
//       bio: "Full-stack dev", 
//       linkedin: "/icons/link.png", 
//       github: "/icons/github.svg", 
//       instagram: "/icons/instagram.svg" 
//     },
//   ];

//   const [activeIndex, setActiveIndex] = useState(null);

//   const handleCardClick = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section ref={ref} className="min-h-screen px-8 pt-28 pb-20 bg-gradient-to-br from-gray-900 to-black">
//       <div className="max-w-7xl mx-auto text-center mb-16">
//         <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
//           Development Team
//         </h1>
//         <p className="text-gray-300 text-lg max-w-2xl mx-auto">
//           Meet the talented developers behind this project.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
//         {devs.map((dev, index) => (
//           <div
//             key={index}
//             className="w-64 h-80 rounded-xl overflow-hidden relative cursor-pointer transform transition-all duration-500 hover:-translate-y-2 shadow-2xl"
//             onClick={() => handleCardClick(index)}
//           >
//             <img
//               src={dev.img}
//               alt={dev.name}
//               className={`w-full h-full object-cover transition-transform duration-500 ${
//                 activeIndex === index ? "scale-110 brightness-75" : "hover:scale-110 hover:brightness-50"
//               }`}
//             />

//             {/* Overlay */}
//             <div
//               className={`absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent transform transition-all duration-500 ${
//                 activeIndex === index ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 hover:translate-y-0 hover:opacity-100"
//               }`}
//             >
//               <h3 className="text-lg font-bold text-white mb-1">{dev.name}</h3>
//               <p className="text-gray-300 text-xs mb-3 line-clamp-2">{dev.bio}</p>

//               {/* Social icons */}
//               <div
//                 className={`flex justify-center space-x-4 mt-2 transition-all duration-500 ${
//                   activeIndex === index ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//                 }`}
//               >
//                 <a href={dev.instagram} target="_blank" rel="noopener noreferrer">
//                   <img src={dev.instagram} alt="Instagram" className="w-6 h-6 hover:scale-125 transition-transform" />
//                 </a>
//                 <a href={dev.linkedin} target="_blank" rel="noopener noreferrer">
//                   <img src={dev.linkedin} alt="LinkedIn" className="w-6 h-6 hover:scale-125 transition-transform" />
//                 </a>
//                 <a href={dev.github} target="_blank" rel="noopener noreferrer">
//                   <img src={dev.github} alt="GitHub" className="w-6 h-6 hover:scale-125 transition-transform" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// });
















































// import React, { useState, useEffect, useRef } from "react";

// export const DeveloperSection = React.forwardRef((props, ref) => {
//   const devs = [
//     { 
//       name: "Rutika T K", 
//       img: "/image/rutika.jpg", 
//       bio: "UI/UX Designer & Frontend Developer", 
//       role: "Design Lead",
//       linkedin: "https://linkedin.com", 
//       github: "https://github.com", 
//       instagram: "https://instagram.com",
//       color: "from-purple-500 to-pink-500"
//     },
//     { 
//       name: "Prachi S D", 
//       img: "/image/prachi.jpg", 
//       bio: "Frontend Engineer & UI Specialist", 
//       role: "Frontend Lead",
//       linkedin: "https://linkedin.com", 
//       github: "https://github.com", 
//       instagram: "https://instagram.com",
//       color: "from-blue-500 to-cyan-500"
//     },
//     { 
//       name: "Pranjal R Y", 
//       img: "/image/pranjal.jpg", 
//       bio: "Backend Architect & System Designer", 
//       role: "Backend Lead",
//       linkedin: "https://linkedin.com", 
//       github: "https://github.com", 
//       instagram: "https://instagram.com",
//       color: "from-green-500 to-emerald-500"
//     },
//     { 
//       name: "Rakshita H", 
//       img: "/image/rakshita.jpg", 
//       bio: "Full-Stack Developer & DevOps", 
//       role: "Full-Stack Lead",
//       linkedin: "https://linkedin.com", 
//       github: "https://github.com", 
//       instagram: "https://instagram.com",
//       color: "from-orange-500 to-red-500"
//     },
//   ];

//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHoveringAnyCard, setIsHoveringAnyCard] = useState(false);
//   const containerRef = useRef(null);
//   const glowRef = useRef(null);

//   // Track mouse position for glow effect
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
      
//       if (glowRef.current) {
//         glowRef.current.style.left = `${e.clientX}px`;
//         glowRef.current.style.top = `${e.clientY}px`;
//       }
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   // Social icons data
//   const socialIcons = [
//     { name: "linkedin", icon: "💼", color: "bg-blue-600 hover:bg-blue-700" },
//     { name: "github", icon: "💻", color: "bg-gray-800 hover:bg-gray-900" },
//     { name: "instagram", icon: "📸", color: "bg-pink-600 hover:bg-pink-700" },
//   ];

//   return (
//     <section 
//       ref={ref} 
//       className="relative min-h-screen px-4 md:px-8 pt-28 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden"
//     >
//       {/* Animated Background */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000" />
//         <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-500" />
//       </div>

//       {/* Floating Glow Effect */}
//       <div 
//         ref={glowRef}
//         className="fixed pointer-events-none z-10 w-64 h-64 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full blur-3xl opacity-20 transition-transform duration-300"
//         style={{
//           transform: `translate(-50%, -50%) scale(${isHoveringAnyCard ? 1.5 : 1})`,
//         }}
//       />

//       {/* Floating Particles */}
//       <div className="absolute inset-0 overflow-hidden">
//         {Array.from({ length: 50 }).map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1 h-1 bg-white/10 rounded-full animate-float"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               animationDuration: `${10 + Math.random() * 20}s`,
//             }}
//           />
//         ))}
//       </div>

//       <div className="max-w-7xl mx-auto relative z-20">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-full border border-gray-700/50 backdrop-blur-sm">
//             <span className="text-2xl animate-spin-slow">✨</span>
//             <span className="text-sm font-bold text-gray-300 tracking-wider">MEET THE TEAM</span>
//           </div>

//           <h1 className="text-5xl md:text-6xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-text">
//               Development Team
//             </span>
//           </h1>
          
//           <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
//             Meet the talented minds behind this project. Our diverse team brings together expertise in design, development, and innovation.
//           </p>
          
//           <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto"></div>
//         </div>

//         {/* Team Cards */}
//         <div 
//           ref={containerRef}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center"
//         >
//           {devs.map((dev, index) => (
//             <div
//               key={index}
//               className="relative w-full max-w-xs"
//               onMouseEnter={() => {
//                 setHoveredCard(index);
//                 setIsHoveringAnyCard(true);
//               }}
//               onMouseLeave={() => {
//                 setHoveredCard(null);
//                 setIsHoveringAnyCard(false);
//               }}
//             >
//               {/* Glowing Border */}
//               <div className={`absolute -inset-0.5 bg-gradient-to-r ${dev.color} rounded-2xl blur-lg opacity-0 transition-all duration-700 ${
//                 hoveredCard === index ? 'opacity-70' : 'group-hover:opacity-30'
//               }`} />
              
//               {/* Main Card */}
//               <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl overflow-hidden border border-gray-700/50 backdrop-blur-sm transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                
//                 {/* Image Container */}
//                 <div className="relative h-72 overflow-hidden group">
//                   {/* Glow Effect behind image */}
//                   <div className={`absolute inset-0 bg-gradient-to-b ${dev.color} opacity-20 blur-xl transform scale-150 transition-transform duration-700 ${
//                     hoveredCard === index ? 'scale-100 opacity-40' : ''
//                   }`} />
                  
//                   {/* Developer Image */}
//                   <img
//                     src={dev.img}
//                     alt={dev.name}
//                     className="relative w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110 z-10"
//                   />
                  
//                   {/* Overlay Gradient */}
//                   <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-500 ${
//                     hoveredCard === index ? 'opacity-100' : ''
//                   }`} />
                  
//                   {/* Floating Role Badge */}
//                   <div className={`absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full border border-gray-600/50 transform transition-all duration-500 ${
//                     hoveredCard === index ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
//                   }`}>
//                     <span className="text-xs font-medium text-gray-200">{dev.role}</span>
//                   </div>
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-6 relative">
//                   {/* Name */}
//                   <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-500">
//                     {dev.name}
//                   </h3>
                  
//                   {/* Bio */}
//                   <p className="text-gray-400 text-sm mb-4 line-clamp-2">
//                     {dev.bio}
//                   </p>
                  
//                   {/* Social Links - Animated on Hover */}
//                   <div className="flex justify-center space-x-3 mt-6">
//                     {socialIcons.map((social, i) => (
//                       <a
//                         key={i}
//                         href={dev[social.name]}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className={`relative w-10 h-10 rounded-full ${social.color} flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:shadow-lg group/social`}
//                         style={{
//                           transform: hoveredCard === index 
//                             ? `translateY(0) rotate(${i * 360}deg)`
//                             : 'translateY(20px) rotate(0deg)',
//                           opacity: hoveredCard === index ? 1 : 0,
//                           transitionDelay: hoveredCard === index ? `${i * 100}ms` : '0ms',
//                         }}
//                       >
//                         <span className="text-lg">{social.icon}</span>
                        
//                         {/* Tooltip */}
//                         <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 whitespace-nowrap">
//                           {social.name.charAt(0).toUpperCase() + social.name.slice(1)}
//                           <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-gray-900 rotate-45"></div>
//                         </span>
//                       </a>
//                     ))}
//                   </div>

//                   {/* Connect Button - Slides in on hover */}
//                   <div className="mt-6">
//                     <a
//                       href={dev.linkedin}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`block w-full py-3 text-center bg-gradient-to-r ${dev.color} text-white font-medium rounded-lg transform transition-all duration-500 ${
//                         hoveredCard === index 
//                           ? 'translate-y-0 opacity-100' 
//                           : 'translate-y-6 opacity-0'
//                       }`}
//                     >
//                       <div className="flex items-center justify-center gap-2">
//                         <span>Connect</span>
//                         <span className="group-hover:rotate-90 transition-transform duration-500">→</span>
//                       </div>
//                     </a>
//                   </div>
//                 </div>

//                 {/* Corner Accent */}
//                 <div className={`absolute top-0 right-0 w-16 h-16 overflow-hidden ${
//                   hoveredCard === index ? 'opacity-100' : 'opacity-0'
//                 } transition-opacity duration-500`}>
//                   <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${dev.color} opacity-30 rounded-full transform translate-x-1/2 -translate-y-1/2`} />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Team Stats */}
//         <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
//           {[
//             { label: "Projects", value: "50+", icon: "🚀" },
//             { label: "Experience", value: "3+ Years", icon: "🎯" },
//             { label: "Technologies", value: "15+", icon: "⚡" },
//             { label: "Commitment", value: "100%", icon: "❤️" },
//           ].map((stat, index) => (
//             <div 
//               key={index}
//               className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-6 rounded-xl border border-gray-700/30 text-center backdrop-blur-sm transform transition-all duration-500 hover:scale-105 hover:border-purple-500/30"
//             >
//               <div className="text-3xl mb-2 animate-bounce-slow">{stat.icon}</div>
//               <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
//               <div className="text-gray-400 text-sm">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CSS Animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(5deg); }
//         }
//         @keyframes gradient-text {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         @keyframes bounce-slow {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-10px); }
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         .animate-gradient-text {
//           background-size: 200% 200%;
//           animation: gradient-text 3s ease infinite;
//         }
//         .animate-spin-slow {
//           animation: spin-slow 20s linear infinite;
//         }
//         .animate-bounce-slow {
//           animation: bounce-slow 3s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// });











// import React from "react";
// import {
//   FaTwitter,
//   FaLinkedinIn,
//   FaInstagram,
//   FaBehance,
// } from "react-icons/fa";

// const team = [
//   {
//     name: "Rahul Sharma",
//     role: "Founder & Creative Director",
//     description:
//       "With over 10 years in the industry, Rahul leads our creative vision and ensures every project exceeds expectations.",
//     image:
//       "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=60",
//   },
//   {
//     name: "Rahul Sharma",
//     role: "Founder & Creative Director",
//     description:
//       "With over 10 years in the industry, Rahul leads our creative vision and ensures every project exceeds expectations.",
//     image:
//       "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=60",
//   },
//   {
//     name: "Priya Patel",
//     role: "Video Editor & Motion Designer",
//     description:
//       "Priya specializes in creating visually stunning content with seamless transitions and captivating motion graphics.",
//     image:
//       "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=60",
//   },
//   {
//     name: "Arun Kumar",
//     role: "Social Media Strategist",
//     description:
//       "Arun develops data-driven social media strategies that maximize engagement and drive measurable results for our clients.",
//     image:
//       "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=600&q=60",
//   },
// ];

// export default function DeveloperSection() {
//   return (
//     <div className="bg-black text-white py-20 px-6">
//       {/* Section Header */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-extrabold">Our Team</h2>
//         <div className="flex justify-center mt-3">
//           <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full"></div>
//         </div>
//         <p className="mt-4 text-gray-300">
//           Meet the talented individuals who make Editkaro.in possible
//         </p>
//       </div>

//       {/* Team Grid */}
//       <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
//         {team.map((member, index) => (
//           <div
//             key={index}
//             className="bg-[#111] rounded-2xl shadow-lg overflow-hidden border border-gray-800 hover:border-pink-600 transition-all duration-300"
//           >
//             {/* Photo */}
//             <img
//               src={member.image}
//               alt={member.name}
//               className="w-full h-80 object-cover"
//             />

//             {/* Content */}
//             <div className="p-6 text-center">
//               <h3 className="text-2xl font-bold">{member.name}</h3>
//               <p className="text-yellow-400 font-semibold mt-1">
//                 {member.role}
//               </p>
//               <p className="text-gray-300 mt-4 leading-relaxed">
//                 {member.description}
//               </p>

//               {/* Social Icons */}
//               <div className="flex justify-center gap-4 mt-6">
//                 <a className="p-2 rounded-full bg-gray-800 hover:bg-pink-600 transition">
//                   <FaTwitter />
//                 </a>
//                 <a className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition">
//                   <FaLinkedinIn />
//                 </a>
//                 <a className="p-2 rounded-full bg-gray-800 hover:bg-pink-500 transition">
//                   <FaInstagram />
//                 </a>
//                 <a className="p-2 rounded-full bg-gray-800 hover:bg-blue-400 transition">
//                   <FaBehance />
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
































import React from "react";
import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaBehance,
} from "react-icons/fa";

const team = [
  {
    name: "Rahul Sharma",
    role: "Founder & Creative Director",
    description:
      "With over 10 years in the industry, Rahul leads our creative vision and ensures every project exceeds expectations.",
    image: "/image/rakshita.jpg",
    socials: {
      twitter: "#",
      linkedin: "#",
      instagram: "#",
      behance: "#"
    }
  },
  {
    name: "Aarav Mehta",
    role: "Video Editor & VFX Artist",
    description:
      "Aarav specializes in creating visually stunning content with seamless transitions and captivating motion graphics.",
    image: "/image/rakshita.jpg",
    socials: {
      twitter: "#",
      linkedin: "#",
      instagram: "#",
      behance: "#"
    }
  },
  {
    name: "Priya Patel",
    role: "Video Editor & Motion Designer",
    description:
      "Priya specializes in creating visually stunning content with seamless transitions and captivating motion graphics.",
    image: "/image/rakshita.jpg",
    socials: {
      twitter: "#",
      linkedin: "#",
      instagram: "#",
      behance: "#"
    }
  },
  {
    name: "Arun Kumar",
    role: "Social Media Strategist",
    description:
      "Arun develops data-driven social media strategies that maximize engagement and drive measurable results for our clients.",
    image: "/image/rakshita.jpg",
    socials: {
      twitter: "#",
      linkedin: "#",
      instagram: "#",
      behance: "#"
    }
  },
];

export default function DeveloperSection() {
  return (
    <div className="bg-black text-white py-20 px-4 md:px-6">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold">Our Team</h2>
        <div className="flex justify-center mt-3">
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full"></div>
        </div>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Meet the talented individuals who make Editkaro.in possible
        </p>
      </div>

      {/* Team Grid - All in one row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {team.map((member, index) => (
          <div
            key={index}
            className="group bg-[#111] rounded-2xl shadow-lg overflow-hidden border border-gray-800 hover:border-pink-600 transition-all duration-300 hover:shadow-xl hover:shadow-pink-900/20"
          >
            {/* Photo Container */}
            <div className="relative overflow-hidden h-80">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Social Icons Overlay - Hidden by default, visible on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-10">
                <div className="flex gap-4">
                  <a 
                    href={member.socials.twitter} 
                    className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-pink-600 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 hover:scale-110"
                  >
                    <FaTwitter className="text-white text-lg" />
                  </a>
                  <a 
                    href={member.socials.linkedin} 
                    className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-blue-600 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75 hover:scale-110"
                  >
                    <FaLinkedinIn className="text-white text-lg" />
                  </a>
                  <a 
                    href={member.socials.instagram} 
                    className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-pink-500 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-100 hover:scale-110"
                  >
                    <FaInstagram className="text-white text-lg" />
                  </a>
                  <a 
                    href={member.socials.behance} 
                    className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-blue-400 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-150 hover:scale-110"
                  >
                    <FaBehance className="text-white text-lg" />
                  </a>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-xl md:text-2xl font-bold group-hover:text-pink-400 transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-yellow-400 font-semibold mt-1 text-sm md:text-base">
                {member.role}
              </p>
              <p className="text-gray-300 mt-4 leading-relaxed text-sm md:text-base">
                {member.description}
              </p>

              {/* Social Icons for mobile (always visible on mobile, hidden on desktop) */}
              <div className="flex justify-center gap-4 mt-6 lg:hidden">
                <a 
                  href={member.socials.twitter} 
                  className="p-2 rounded-full bg-gray-800 hover:bg-pink-600 transition"
                >
                  <FaTwitter />
                </a>
                <a 
                  href={member.socials.linkedin} 
                  className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition"
                >
                  <FaLinkedinIn />
                </a>
                <a 
                  href={member.socials.instagram} 
                  className="p-2 rounded-full bg-gray-800 hover:bg-pink-500 transition"
                >
                  <FaInstagram />
                </a>
                <a 
                  href={member.socials.behance} 
                  className="p-2 rounded-full bg-gray-800 hover:bg-blue-400 transition"
                >
                  <FaBehance />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional styling for better responsiveness */}
      <style jsx>{`
        @media (min-width: 1024px) {
          .grid-cols-4 > * {
            flex: 0 0 calc(25% - 1.5rem);
          }
        }
      `}</style>
    </div>
  );
}