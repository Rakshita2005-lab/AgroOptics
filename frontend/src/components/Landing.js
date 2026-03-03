// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { SoilDiagnostics } from "./SoilDiagnostics";
// import { PlantDiagnostics } from "./PlantDiagnostics";
// import DeveloperSection  from "./DeveloperSection";
// import { Footer } from "./Footer";


// export const Landing = ({ sections }) => {
//   const [authModalOpen, setAuthModalOpen] = useState(false);
//   const navigate = useNavigate();

//   return (
//     <div className="text-white">

//       {/* ================= HERO SECTION ================= */}
//       <section
//         ref={sections.home}
//         className="relative h-screen flex items-center justify-center"
//       >
//         <video
//           autoPlay
//           loop
//           muted
//           className="absolute inset-0 w-full h-full object-cover"
//         >
//           <source src="/videos/farmer-bg.mp4" type="video/mp4" />
//         </video>
//         <div className="absolute inset-0 bg-black/60" />

//         <div className="relative z-10 text-center px-6">
//           <h1 className="text-5xl md:text-7xl font-extrabold">Agro-Optics</h1>
//           <p className="mt-4 text-lg md:text-xl text-gray-200">
//             Soil Vision, Plant Disease Diagnosis & Smart Farming Analytics.
//           </p>

//           <div className="mt-8 flex justify-center gap-4">
//             <button
//               onClick={() =>
//                 sections.soil.current.scrollIntoView({ behavior: "smooth" })
//               }
//               className="px-8 py-3 bg-green-500 rounded-xl"
//             >
//               Soil Vision 🚜
//             </button>

//             <button
//               onClick={() =>
//                 sections.plant.current.scrollIntoView({ behavior: "smooth" })
//               }
//               className="px-8 py-3 bg-white text-black rounded-xl"
//             >
//               Plant Diagnostics 🌿
//             </button>

//             <button
//               onClick={() => setAuthModalOpen(true)}
//               className="px-8 py-3 bg-blue-600 rounded-xl"
//             >
//               Get Started
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* ================= SOIL DIAGNOSTICS ================= */}
//       <section ref={sections.soil}>
//         <SoilDiagnostics />
//       </section>

//       {/* ================= PLANT DIAGNOSTICS ================= */}
//       <section ref={sections.plant}>
//         <PlantDiagnostics />
//       </section>

//       {/* ================= DEVELOPER SECTION ================= */}
//       <DeveloperSection ref={sections.developers} />

//       {/* ================= FOOTER ================= */}
//       <Footer />

//       {/* ================= AUTH MODAL ================= */}
//       {authModalOpen && (
//         <div className="fixed inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm z-50">
//           <div className="bg-gray-800 p-8 rounded-3xl w-full max-w-md text-center border border-gray-700">
//             <h2 className="text-2xl font-bold text-blue-400 mb-4">Sign Up</h2>

//             <input
//               className="w-full p-3 mb-3 bg-gray-700 rounded"
//               placeholder="Name"
//               id="modal-name"
//             />
//             <input
//               className="w-full p-3 mb-3 bg-gray-700 rounded"
//               placeholder="Email"
//               id="modal-email"
//             />
//             <input
//               className="w-full p-3 mb-4 bg-gray-700 rounded"
//               placeholder="Password"
//               type="password"
//               id="modal-password"
//             />

//             <button
//               onClick={() => {
//                 const name = document.getElementById("modal-name").value;
//                 const email = document.getElementById("modal-email").value;
//                 const password =
//                   document.getElementById("modal-password").value;
//                 if (!name || !email || !password)
//                   return alert("Fill all fields!");
//                 alert(`Account Created!\nName: ${name}\nEmail: ${email}`);
//                 setAuthModalOpen(false);
//                 navigate("/signup");
//               }}
//               className="w-full py-3 bg-green-600 rounded-xl hover:bg-green-700 transition"
//             >
//               Create Account
//             </button>

//             <button
//               onClick={() => setAuthModalOpen(false)}
//               className="mt-4 text-red-400 font-semibold"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };















// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { SoilDiagnostics } from "./SoilDiagnostics";
// import { PlantDiagnostics } from "./PlantDiagnostics";
// import DeveloperSection from "./DeveloperSection";
// import { Footer } from "./Footer";
// import { ArrowRight, Play, Sparkles, Leaf, Globe, Zap, ChevronDown, X, Target, TrendingUp, Shield } from "lucide-react";

// export const Landing = ({ sections }) => {
//   const [authModalOpen, setAuthModalOpen] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [videoLoaded, setVideoLoaded] = useState(false);
//   const [hoveredButton, setHoveredButton] = useState(null);
//   const [counters, setCounters] = useState({ farmers: 0, accuracy: 0, plants: 0 });
//   const [currentNumber, setCurrentNumber] = useState(1);
//   const [showAgroOptics, setShowAgroOptics] = useState(false);
//   const [showContent, setShowContent] = useState(false);
//   const [countdownComplete, setCountdownComplete] = useState(false);
//   const navigate = useNavigate();
//   const heroRef = useRef(null);
//   const numbersContainerRef = useRef(null);

//   // Countdown animation from 1-12
//   useEffect(() => {
//     if (!countdownComplete) {
//       const interval = setInterval(() => {
//         setCurrentNumber(prev => {
//           if (prev >= 12) {
//             clearInterval(interval);
//             setTimeout(() => {
//               setShowAgroOptics(true);
//               setTimeout(() => {
//                 setShowContent(true);
//                 setCountdownComplete(true);
//               }, 1500);
//             }, 500);
//             return 12;
//           }
//           return prev + 1;
//         });
//       }, 100); // Each number appears for 100ms

//       return () => clearInterval(interval);
//     }
//   }, [countdownComplete]);

//   // Counter animation
//   useEffect(() => {
//     if (countdownComplete) {
//       const targetValues = { farmers: 10000, accuracy: 95, plants: 50000 };
//       const duration = 2000;
//       const step = 20;

//       const animateCounter = (key, target) => {
//         let current = 0;
//         const increment = target / (duration / step);

//         const timer = setInterval(() => {
//           current += increment;
//           if (current >= target) {
//             current = target;
//             clearInterval(timer);
//           }
//           setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
//         }, step);
//       };

//       Object.keys(targetValues).forEach(key => {
//         animateCounter(key, targetValues[key]);
//       });
//     }
//   }, [countdownComplete]);

//   // Scroll progress tracking
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const maxScroll = document.body.scrollHeight - window.innerHeight;
//       const progress = (scrollY / maxScroll) * 100;
//       setScrollProgress(progress);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Stats data
//   const stats = [
//     { 
//       value: counters.farmers.toLocaleString(), 
//       label: "Farmers Empowered", 
//       icon: "👨‍🌾", 
//       color: "from-green-500 to-emerald-400" 
//     },
//     { 
//       value: `${counters.accuracy}%`, 
//       label: "AI Accuracy", 
//       icon: "🤖", 
//       color: "from-blue-500 to-cyan-400" 
//     },
//     { 
//       value: counters.plants.toLocaleString(), 
//       label: "Plants Diagnosed", 
//       icon: "🌿", 
//       color: "from-emerald-500 to-green-400" 
//     },
//   ];

//   // Features data
//   const features = [
//     {
//       icon: Globe,
//       title: "Soil Vision",
//       description: "Advanced soil analysis with AI-powered insights",
//       color: "from-amber-600 to-yellow-400",
//       delay: "100"
//     },
//     {
//       icon: Leaf,
//       title: "Plant Health",
//       description: "Instant disease detection and treatment recommendations",
//       color: "from-emerald-600 to-green-400",
//       delay: "200"
//     },
//     {
//       icon: Zap,
//       title: "Smart Analytics",
//       description: "Real-time farming insights and predictions",
//       color: "from-violet-600 to-purple-400",
//       delay: "300"
//     },
//   ];

//   const scrollToSection = (section) => {
//     if (sections[section]?.current) {
//       sections[section].current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const handleGetStarted = () => {
//     setAuthModalOpen(true);
//   };

//   const handleModalSignup = () => {
//     const name = document.getElementById("modal-name")?.value || "";
//     const email = document.getElementById("modal-email")?.value || "";
//     const password = document.getElementById("modal-password")?.value || "";
    
//     if (!name || !email || !password) {
//       alert("Please fill all fields!");
//       return;
//     }
    
//     setAuthModalOpen(false);
//     navigate("/signup");
//   };

//   // Numbers 1-12 with their meanings
//   const numberMeanings = [
//     { number: 1, meaning: "Vision" },
//     { number: 2, meaning: "Precision" },
//     { number: 3, meaning: "Innovation" },
//     { number: 4, meaning: "Growth" },
//     { number: 5, meaning: "Sustainability" },
//     { number: 6, meaning: "Technology" },
//     { number: 7, meaning: "Accuracy" },
//     { number: 8, meaning: "Efficiency" },
//     { number: 9, meaning: "Intelligence" },
//     { number: 10, meaning: "Transformation" },
//     { number: 11, meaning: "Excellence" },
//     { number: 12, meaning: "Revolution" },
//   ];

//   return (
//     <div className="text-white bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
//       {/* Scroll Progress Bar */}
//       <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
//         <div 
//           className="h-full bg-gradient-to-r from-blue-500 via-emerald-500 to-cyan-500 transition-all duration-300"
//           style={{ width: `${scrollProgress}%` }}
//         />
//       </div>

//       {/* Countdown Animation Section */}
//       {!countdownComplete && (
//         <div className="fixed inset-0 z-[100] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center">
//           <div className="relative">
//             {/* Numbers Container */}
//             <div 
//               ref={numbersContainerRef}
//               className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-4 md:gap-6 mb-12"
//             >
//               {Array.from({ length: currentNumber }, (_, i) => i + 1).map((num) => (
//                 <div
//                   key={num}
//                   className={`relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center rounded-2xl border-2 ${
//                     num === currentNumber
//                       ? 'border-emerald-500 bg-emerald-500/20 shadow-lg shadow-emerald-500/30 animate-pulse'
//                       : 'border-gray-700 bg-gray-800/50'
//                   } transition-all duration-300`}
//                 >
//                   <span className={`text-3xl sm:text-4xl md:text-5xl font-black ${
//                     num === currentNumber 
//                       ? 'text-emerald-400 animate-bounce' 
//                       : 'text-gray-300'
//                   }`}>
//                     {num}
//                   </span>
                  
//                   {/* Meaning Tooltip */}
//                   {num === currentNumber && numberMeanings[num-1] && (
//                     <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
//                       <span className="text-xs sm:text-sm text-emerald-400 font-medium">
//                         {numberMeanings[num-1].meaning}
//                       </span>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* AgroOptics Reveal */}
//             {showAgroOptics && (
//               <div className="text-center animate-fadeInUp">
//                 <h1 className="text-4xl sm:text-6xl md:text-8xl font-black leading-tight mb-4">
//                   <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
//                     Agro-Optics
//                   </span>
//                 </h1>
//                 <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto animate-fadeInUp delay-200">
//                   Revolutionizing Agriculture with AI-Powered Intelligence
//                 </p>
//               </div>
//             )}

//             {/* Loading Bar */}
//             {!showAgroOptics && (
//               <div className="w-64 sm:w-80 md:w-96 h-2 bg-gray-700 rounded-full overflow-hidden mt-12">
//                 <div 
//                   className="h-full bg-gradient-to-r from-blue-500 via-emerald-500 to-cyan-500 transition-all duration-100"
//                   style={{ width: `${(currentNumber / 12) * 100}%` }}
//                 />
//               </div>
//             )}
//           </div>

//           {/* Skip Button */}
//           {!showAgroOptics && (
//             <button
//               onClick={() => {
//                 setCurrentNumber(12);
//                 setTimeout(() => {
//                   setShowAgroOptics(true);
//                   setTimeout(() => {
//                     setShowContent(true);
//                     setCountdownComplete(true);
//                   }, 1500);
//                 }, 100);
//               }}
//               className="absolute bottom-8 right-8 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-xl text-gray-400 hover:text-white hover:border-gray-600/50 transition-all duration-300 text-sm"
//             >
//               Skip Intro
//             </button>
//           )}
//         </div>
//       )}

//       {/* Hero Section */}
//       {showContent && (
//         <section
//           ref={heroRef}
//           className="relative min-h-screen flex items-center justify-center overflow-hidden"
//         >
//           {/* Background Video with Overlay */}
//           <div className="absolute inset-0">
//             <video
//               autoPlay
//               loop
//               muted
//               playsInline
//               className="absolute inset-0 w-full h-full object-cover"
//               onLoadedData={() => setVideoLoaded(true)}
//             >
//               <source src="/videos/farmer-bg.mp4" type="video/mp4" />
//             </video>
//             <div className={`absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900/90 transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`} />
            
//             {/* Animated Particles */}
//             <div className="absolute inset-0">
//               {[...Array(20)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
//                   style={{
//                     left: `${Math.random() * 100}%`,
//                     top: `${Math.random() * 100}%`,
//                     animationDelay: `${Math.random() * 5}s`,
//                     animationDuration: `${3 + Math.random() * 7}s`
//                   }}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="relative z-10 text-center px-4 sm:px-6 max-w-7xl mx-auto">
//             {/* Animated Welcome Text */}
//             <div className="mb-8 animate-fadeIn">
//               <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-full border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
//                 🚀 Where Precision Meets Agriculture
//               </span>
//             </div>

//             {/* Main Title */}
//             <h1 className="text-4xl sm:text-6xl md:text-8xl font-black leading-tight mb-6 animate-fadeInUp">
//               <span className="block bg-gradient-to-r from-blue-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
//                 Agro-Optics
//               </span>
//               <span className="block text-2xl sm:text-4xl md:text-5xl font-normal text-gray-300 mt-4">
//                 Intelligent Farming Solutions
//               </span>
//             </h1>

//             {/* Description */}
//             <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed animate-fadeInUp delay-200">
//               Advanced soil analysis, plant disease detection, and smart farming analytics 
//               powered by cutting-edge AI technology.
//             </p>

//             {/* Stats Counter */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12 animate-fadeInUp delay-300">
//               {stats.map((stat, index) => (
//                 <div 
//                   key={index}
//                   className="bg-gray-900/40 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 group hover:scale-105"
//                 >
//                   <div className="flex items-center justify-center gap-3 mb-2">
//                     <span className="text-2xl">{stat.icon}</span>
//                     <span className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
//                       {stat.value}
//                     </span>
//                   </div>
//                   <p className="text-gray-400 text-sm">{stat.label}</p>
//                 </div>
//               ))}
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fadeInUp delay-400">
//               <button
//                 onClick={() => scrollToSection("soil")}
//                 onMouseEnter={() => setHoveredButton("soil")}
//                 onMouseLeave={() => setHoveredButton(null)}
//                 className={`relative group px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform ${
//                   hoveredButton === "soil" ? 'scale-105' : ''
//                 } bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-yellow-600`}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
//                 <div className="flex items-center justify-center gap-3 relative z-10">
//                   <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform duration-500" />
//                   <span>Soil Vision</span>
//                   <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
//                 </div>
//               </button>

//               <button
//                 onClick={() => scrollToSection("plant")}
//                 onMouseEnter={() => setHoveredButton("plant")}
//                 onMouseLeave={() => setHoveredButton(null)}
//                 className={`relative group px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform ${
//                   hoveredButton === "plant" ? 'scale-105' : ''
//                 } bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600`}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
//                 <div className="flex items-center justify-center gap-3 relative z-10">
//                   <Leaf className="w-5 h-5 group-hover:rotate-12 transition-transform duration-500" />
//                   <span>Plant Diagnostics</span>
//                   <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
//                 </div>
//               </button>

//               <button
//                 onClick={handleGetStarted}
//                 onMouseEnter={() => setHoveredButton("started")}
//                 onMouseLeave={() => setHoveredButton(null)}
//                 className={`relative group px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform ${
//                   hoveredButton === "started" ? 'scale-105' : ''
//                 } bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-lg shadow-blue-500/20`}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
//                 <div className="flex items-center justify-center gap-3 relative z-10">
//                   <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-500" />
//                   <span>Get Started Free</span>
//                   <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
//                 </div>
//               </button>
//             </div>

//             {/* Features Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20 animate-fadeInUp delay-500">
//               {features.map((feature, index) => (
//                 <div
//                   key={index}
//                   className={`bg-gray-900/40 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 delay-${feature.delay} hover:scale-[1.02] group`}
//                 >
//                   <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-500`}>
//                     <feature.icon className="w-6 h-6 text-white" />
//                   </div>
//                   <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
//                   <p className="text-gray-400">{feature.description}</p>
//                   <div className="mt-4 pt-4 border-t border-gray-700/50">
//                     <button
//                       onClick={() => scrollToSection(feature.title.includes("Soil") ? "soil" : "plant")}
//                       className="text-sm text-gray-300 hover:text-white flex items-center gap-2 group/button"
//                     >
//                       Learn More
//                       <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-300" />
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Scroll Down Indicator */}
//             <button
//               onClick={() => scrollToSection("soil")}
//               className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce group"
//             >
//               <div className="flex flex-col items-center">
//                 <span className="text-sm text-gray-400 mb-2">Explore Features</span>
//                 <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
//               </div>
//             </button>
//           </div>
//         </section>
//       )}

//       {/* Soil Diagnostics */}
//       {showContent && (
//         <section ref={sections.soil}>
//           <SoilDiagnostics />
//         </section>
//       )}

//       {/* Plant Diagnostics */}
//       {showContent && (
//         <section ref={sections.plant}>
//           <PlantDiagnostics />
//         </section>
//       )}

//       {/* Developer Section */}
//       {showContent && (
//         <DeveloperSection ref={sections.developers} />
//       )}

//       {/* Footer */}
//       {showContent && (
//         <Footer />
//       )}

//       {/* Auth Modal */}
//       {authModalOpen && (
//         <div className="fixed inset-0 z-[100]">
//           {/* Backdrop */}
//           <div 
//             className="absolute inset-0 bg-black/80 backdrop-blur-xl"
//             onClick={() => setAuthModalOpen(false)}
//           />
          
//           {/* Modal */}
//           <div className="absolute inset-0 flex items-center justify-center p-4">
//             <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl w-full max-w-md overflow-hidden border border-gray-700/50 shadow-2xl animate-modalIn">
//               {/* Animated Border */}
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-emerald-500/20 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              
//               {/* Modal Content */}
//               <div className="relative z-10">
//                 {/* Header */}
//                 <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
//                   <div className="flex items-center gap-3">
//                     <div className="p-2 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg">
//                       <Sparkles className="w-5 h-5 text-white" />
//                     </div>
//                     <div>
//                       <h2 className="text-xl font-bold text-white">Start Your Journey</h2>
//                       <p className="text-sm text-gray-400">Join thousands of smart farmers</p>
//                     </div>
//                   </div>
//                   <button
//                     onClick={() => setAuthModalOpen(false)}
//                     className="p-2 hover:bg-gray-800 rounded-xl transition-all duration-300 group"
//                   >
//                     <X className="w-5 h-5 text-gray-400 group-hover:text-white" />
//                   </button>
//                 </div>

//                 {/* Form */}
//                 <div className="p-6">
//                   <div className="space-y-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
//                       <input
//                         id="modal-name"
//                         className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
//                         placeholder="Enter your name"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
//                       <input
//                         id="modal-email"
//                         type="email"
//                         className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
//                         placeholder="you@example.com"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
//                       <input
//                         id="modal-password"
//                         type="password"
//                         className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
//                         placeholder="••••••••"
//                       />
//                     </div>

//                     <button
//                       onClick={handleModalSignup}
//                       className="w-full py-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-[1.02] mt-6"
//                     >
//                       Create Free Account
//                     </button>

//                     <div className="text-center pt-4">
//                       <p className="text-gray-400 text-sm">
//                         Already have an account?{" "}
//                         <button
//                           onClick={() => { setAuthModalOpen(false); navigate("/login"); }}
//                           className="text-blue-400 hover:text-blue-300 font-medium"
//                         >
//                           Sign In
//                         </button>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Custom Animations */}
//       <style jsx global>{`
//         @keyframes gradient {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes fadeInUp {
//           from { 
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to { 
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         @keyframes float {
//           0%, 100% { transform: translateY(0) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(180deg); }
//         }
//         @keyframes modalIn {
//           from { 
//             opacity: 0;
//             transform: translateY(20px) scale(0.95);
//           }
//           to { 
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }
        
//         .animate-gradient {
//           background-size: 200% auto;
//           animation: gradient 3s ease infinite;
//         }
//         .animate-fadeIn {
//           animation: fadeIn 1s ease-out;
//         }
//         .animate-fadeInUp {
//           animation: fadeInUp 0.8s ease-out forwards;
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//         .animate-modalIn {
//           animation: modalIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
//         }
        
//         .delay-100 {
//           animation-delay: 100ms;
//         }
//         .delay-200 {
//           animation-delay: 200ms;
//         }
//         .delay-300 {
//           animation-delay: 300ms;
//         }
//         .delay-400 {
//           animation-delay: 400ms;
//         }
//         .delay-500 {
//           animation-delay: 500ms;
//         }
//       `}</style>
//     </div>
//   );
// };

















// // Landing.js
// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { SoilDiagnostics } from "./SoilDiagnostics";
// import { PlantDiagnostics } from "./PlantDiagnostics";
// import DeveloperSection from "./DeveloperSection";
// import { Footer } from "./Footer";
// import { ArrowRight, Play, Sparkles, Leaf, Globe, Zap, ChevronDown, X, Target, TrendingUp, Shield } from "lucide-react";

// export const Landing = ({ sections }) => {
//   const [authModalOpen, setAuthModalOpen] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [videoLoaded, setVideoLoaded] = useState(false);
//   const [hoveredButton, setHoveredButton] = useState(null);
//   const [counters, setCounters] = useState({ farmers: 0, accuracy: 0, plants: 0 });
//   const [currentNumber, setCurrentNumber] = useState(1);
//   const [showAgroOptics, setShowAgroOptics] = useState(false);
//   const [showContent, setShowContent] = useState(false);
//   const [countdownComplete, setCountdownComplete] = useState(false);
//   const [aiVideoLoaded, setAiVideoLoaded] = useState(false);
//   const navigate = useNavigate();
//   const heroRef = useRef(null);
//   const numbersContainerRef = useRef(null);
//   const aiVideoRef = useRef(null);

//   // Countdown animation from 1-12
//   useEffect(() => {
//     if (!countdownComplete) {
//       const interval = setInterval(() => {
//         setCurrentNumber(prev => {
//           if (prev >= 12) {
//             clearInterval(interval);
//             setTimeout(() => {
//               setShowAgroOptics(true);
//               setTimeout(() => {
//                 setShowContent(true);
//                 setCountdownComplete(true);
//               }, 1500);
//             }, 500);
//             return 12;
//           }
//           return prev + 1;
//         });
//       }, 100);

//       return () => clearInterval(interval);
//     }
//   }, [countdownComplete]);

//   // Counter animation
//   useEffect(() => {
//     if (countdownComplete) {
//       const targetValues = { farmers: 10000, accuracy: 95, plants: 50000 };
//       const duration = 2000;
//       const step = 20;

//       const animateCounter = (key, target) => {
//         let current = 0;
//         const increment = target / (duration / step);

//         const timer = setInterval(() => {
//           current += increment;
//           if (current >= target) {
//             current = target;
//             clearInterval(timer);
//           }
//           setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
//         }, step);
//       };

//       Object.keys(targetValues).forEach(key => {
//         animateCounter(key, targetValues[key]);
//       });
//     }
//   }, [countdownComplete]);

//   // Scroll progress tracking
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const maxScroll = document.body.scrollHeight - window.innerHeight;
//       const progress = (scrollY / maxScroll) * 100;
//       setScrollProgress(progress);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Preload AI video
//   useEffect(() => {
//     if (aiVideoRef.current) {
//       aiVideoRef.current.load();
//     }
//   }, []);

//   // Stats data
//   const stats = [
//     { 
//       value: counters.farmers.toLocaleString(), 
//       label: "Farmers Empowered", 
//       icon: "👨‍🌾", 
//       color: "from-green-500 to-emerald-400" 
//     },
//     { 
//       value: `${counters.accuracy}%`, 
//       label: "AI Accuracy", 
//       icon: "🤖", 
//       color: "from-blue-500 to-cyan-400" 
//     },
//     { 
//       value: counters.plants.toLocaleString(), 
//       label: "Plants Diagnosed", 
//       icon: "🌿", 
//       color: "from-emerald-500 to-green-400" 
//     },
//   ];

//   // Features data
//   const features = [
//     {
//       icon: Globe,
//       title: "Soil Vision",
//       description: "Advanced soil analysis with AI-powered insights",
//       color: "from-amber-600 to-yellow-400",
//       delay: "100"
//     },
//     {
//       icon: Leaf,
//       title: "Plant Health",
//       description: "Instant disease detection and treatment recommendations",
//       color: "from-emerald-600 to-green-400",
//       delay: "200"
//     },
//     {
//       icon: Zap,
//       title: "Smart Analytics",
//       description: "Real-time farming insights and predictions",
//       color: "from-violet-600 to-purple-400",
//       delay: "300"
//     },
//   ];

//   const scrollToSection = (section) => {
//     if (sections[section]?.current) {
//       sections[section].current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const handleGetStarted = () => {
//     setAuthModalOpen(true);
//   };

//   const handleModalSignup = () => {
//     const name = document.getElementById("modal-name")?.value || "";
//     const email = document.getElementById("modal-email")?.value || "";
//     const password = document.getElementById("modal-password")?.value || "";
    
//     if (!name || !email || !password) {
//       alert("Please fill all fields!");
//       return;
//     }
    
//     setAuthModalOpen(false);
//     navigate("/signup");
//   };

//   // Numbers 1-12 with their meanings
//   const numberMeanings = [
//     { number: 1, meaning: "Vision" },
//     { number: 2, meaning: "Precision" },
//     { number: 3, meaning: "Innovation" },
//     { number: 4, meaning: "Growth" },
//     { number: 5, meaning: "Sustainability" },
//     { number: 6, meaning: "Technology" },
//     { number: 7, meaning: "Accuracy" },
//     { number: 8, meaning: "Efficiency" },
//     { number: 9, meaning: "Intelligence" },
//     { number: 10, meaning: "Transformation" },
//     { number: 11, meaning: "Excellence" },
//     { number: 12, meaning: "Revolution" },
//   ];

//   return (
//     <div className="text-white bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
//       {/* Scroll Progress Bar */}
//       <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
//         <div 
//           className="h-full bg-gradient-to-r from-blue-500 via-emerald-500 to-cyan-500 transition-all duration-300"
//           style={{ width: `${scrollProgress}%` }}
//         />
//       </div>

//       {/* Countdown Animation Section */}
//       {!countdownComplete && (
//         <div className="fixed inset-0 z-[100] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center">
//           <div className="relative">
//             {/* AI Video Background */}
//             <div className="absolute inset-0 overflow-hidden">
//               <video
//                 ref={aiVideoRef}
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="absolute inset-0 w-full h-full object-cover opacity-30"
//                 onLoadedData={() => setAiVideoLoaded(true)}
//               >
//                 <source 
//                   src="https://assets.mixkit.co/videos/preview/mixkit-abstract-geometric-ai-video-14106-large.mp4" 
//                   type="video/mp4" 
//                 />
//                 <source 
//                   src="/videos/ai-tech-background.mp4" 
//                   type="video/mp4" 
//                 />
//               </video>
//               <div className={`absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/70 to-gray-900/90 transition-opacity duration-1000 ${aiVideoLoaded ? 'opacity-100' : 'opacity-0'}`} />
              
//               {/* Floating AI particles */}
//               <div className="absolute inset-0">
//                 {[...Array(15)].map((_, i) => (
//                   <div
//                     key={i}
//                     className="absolute w-2 h-2 bg-gradient-to-r from-blue-400/30 to-emerald-400/30 rounded-full animate-float"
//                     style={{
//                       left: `${Math.random() * 100}%`,
//                       top: `${Math.random() * 100}%`,
//                       animationDelay: `${Math.random() * 5}s`,
//                       animationDuration: `${2 + Math.random() * 4}s`,
//                       width: `${4 + Math.random() * 8}px`,
//                       height: `${4 + Math.random() * 8}px`,
//                     }}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Numbers Container */}
//             <div 
//               ref={numbersContainerRef}
//               className="relative grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-4 md:gap-6 mb-12"
//             >
//               {Array.from({ length: currentNumber }, (_, i) => i + 1).map((num) => (
//                 <div
//                   key={num}
//                   className={`relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center rounded-2xl border-2 ${
//                     num === currentNumber
//                       ? 'border-emerald-500 bg-gradient-to-br from-emerald-500/30 to-green-500/20 shadow-lg shadow-emerald-500/30 animate-pulse backdrop-blur-sm'
//                       : 'border-gray-700/50 bg-gray-900/50 backdrop-blur-sm'
//                   } transition-all duration-300`}
//                 >
//                   <span className={`text-3xl sm:text-4xl md:text-5xl font-black ${
//                     num === currentNumber 
//                       ? 'text-emerald-400 animate-bounce' 
//                       : 'text-gray-300'
//                   }`}>
//                     {num}
//                   </span>
                  
//                   {/* Meaning Tooltip */}
//                   {num === currentNumber && numberMeanings[num-1] && (
//                     <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
//                       <div className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm px-3 py-1 rounded-lg border border-emerald-500/30">
//                         <span className="text-xs sm:text-sm text-emerald-400 font-medium">
//                           {numberMeanings[num-1].meaning}
//                         </span>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* AgroOptics Reveal with AI Video Background */}
//             {showAgroOptics && (
//               <div className="relative z-10 text-center animate-fadeInUp">
//                 {/* AI Pattern Background */}
//                 <div className="absolute inset-0 -z-10 overflow-hidden">
//                   <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/0 via-gray-900/70 to-gray-900" />
                  
//                   {/* Animated Neural Network Lines */}
//                   <div className="absolute inset-0">
//                     {[...Array(8)].map((_, i) => (
//                       <div
//                         key={i}
//                         className="absolute h-0.5 bg-gradient-to-r from-blue-500/10 via-emerald-500/10 to-transparent animate-neuralLine"
//                         style={{
//                           top: `${(i + 1) * 12}%`,
//                           left: '-10%',
//                           width: '120%',
//                           animationDelay: `${i * 0.2}s`,
//                           animationDuration: `${3 + Math.random() * 2}s`
//                         }}
//                       />
//                     ))}
//                   </div>
//                 </div>

//                 <h1 className="text-4xl sm:text-6xl md:text-8xl font-black leading-tight mb-6">
//                   <span className="relative inline-block">
//                     <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
//                       Agro-Optics
//                     </span>
//                     {/* Animated glow effect */}
//                     <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-emerald-500/10 to-cyan-500/10 blur-3xl animate-pulse" />
//                   </span>
//                 </h1>
                
//                 {/* AI Tagline with Tech Elements */}
//                 <div className="relative mb-6">
//                   <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto">
//                     <span className="relative">
//                       Revolutionizing Agriculture with
//                       <span className="ml-2 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent font-bold">
//                         AI-Powered Intelligence
//                       </span>
//                       <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
//                         <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full animate-ping opacity-70" />
//                       </div>
//                     </span>
//                   </p>
                  
//                   {/* Tech Badges */}
//                   <div className="flex flex-wrap justify-center gap-3 mt-6">
//                     <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-blue-600/10 rounded-full border border-blue-500/30 text-blue-300 text-sm">
//                       Deep Learning
//                     </span>
//                     <span className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-emerald-600/10 rounded-full border border-emerald-500/30 text-emerald-300 text-sm">
//                       Neural Networks
//                     </span>
//                     <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-purple-600/10 rounded-full border border-purple-500/30 text-purple-300 text-sm">
//                       Computer Vision
//                     </span>
//                     <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-cyan-600/10 rounded-full border border-cyan-500/30 text-cyan-300 text-sm">
//                       Predictive Analytics
//                     </span>
//                   </div>
//                 </div>

//                 {/* Animated AI Visualization */}
//                 <div className="max-w-4xl mx-auto mb-8 relative">
//                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                     {[
//                       { icon: "🧠", label: "AI Models", color: "from-blue-500 to-cyan-400" },
//                       { icon: "👁️", label: "Vision AI", color: "from-emerald-500 to-green-400" },
//                       { icon: "📊", label: "Analytics", color: "from-violet-500 to-purple-400" },
//                       { icon: "🤖", label: "Automation", color: "from-amber-500 to-yellow-400" }
//                     ].map((item, index) => (
//                       <div
//                         key={index}
//                         className="bg-gray-900/40 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 group"
//                       >
//                         <div className="flex items-center justify-center gap-3">
//                           <span className="text-2xl animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
//                             {item.icon}
//                           </span>
//                           <span className={`text-lg font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
//                             {item.label}
//                           </span>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
                  
//                   {/* Connecting Lines Animation */}
//                   <div className="absolute inset-0 pointer-events-none">
//                     <div className="absolute top-1/2 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-blue-500/20 via-emerald-500/20 to-transparent animate-pulse" />
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Loading Bar */}
//             {!showAgroOptics && (
//               <div className="relative z-10 w-64 sm:w-80 md:w-96 h-2 bg-gray-800/50 backdrop-blur-sm rounded-full overflow-hidden mt-12">
//                 <div 
//                   className="h-full bg-gradient-to-r from-blue-500 via-emerald-500 to-cyan-500 transition-all duration-100"
//                   style={{ width: `${(currentNumber / 12) * 100}%` }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
//               </div>
//             )}
//           </div>

//           {/* Skip Button */}
//           {!showAgroOptics && (
//             <button
//               onClick={() => {
//                 setCurrentNumber(12);
//                 setTimeout(() => {
//                   setShowAgroOptics(true);
//                   setTimeout(() => {
//                     setShowContent(true);
//                     setCountdownComplete(true);
//                   }, 1500);
//                 }, 100);
//               }}
//               className="absolute bottom-8 right-8 px-4 py-2 bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-xl text-gray-400 hover:text-white hover:border-gray-600/50 transition-all duration-300 text-sm z-20"
//             >
//               Skip Intro
//             </button>
//           )}
//         </div>
//       )}

//       {/* Hero Section */}
//       {showContent && (
//         <section
//           ref={heroRef}
//           className="relative min-h-screen flex items-center justify-center overflow-hidden"
//         >
//           {/* Background Video with Overlay */}
//           <div className="absolute inset-0">
//             <video
//               autoPlay
//               loop
//               muted
//               playsInline
//               className="absolute inset-0 w-full h-full object-cover"
//               onLoadedData={() => setVideoLoaded(true)}
//             >
//               <source src="/videos/farmer-bg.mp4" type="video/mp4" />
//             </video>
//             <div className={`absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900/90 transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`} />
            
//             {/* Animated Particles */}
//             <div className="absolute inset-0">
//               {[...Array(20)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
//                   style={{
//                     left: `${Math.random() * 100}%`,
//                     top: `${Math.random() * 100}%`,
//                     animationDelay: `${Math.random() * 5}s`,
//                     animationDuration: `${3 + Math.random() * 7}s`
//                   }}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="relative z-10 text-center px-4 sm:px-6 max-w-7xl mx-auto">
//             {/* Animated Welcome Text */}
//             <div className="mb-8 animate-fadeIn">
//               <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-full border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
//                 🚀 Where Precision Meets Agriculture
//               </span>
//             </div>

//             {/* Main Title */}
//             <h1 className="text-4xl sm:text-6xl md:text-8xl font-black leading-tight mb-6 animate-fadeInUp">
//               <span className="block bg-gradient-to-r from-blue-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
//                 Agro-Optics
//               </span>
//               <span className="block text-2xl sm:text-4xl md:text-5xl font-normal text-gray-300 mt-4">
//                 Intelligent Farming Solutions
//               </span>
//             </h1>

//             {/* Description */}
//             <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed animate-fadeInUp delay-200">
//               Advanced soil analysis, plant disease detection, and smart farming analytics 
//               powered by cutting-edge AI technology.
//             </p>

//             {/* Stats Counter */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12 animate-fadeInUp delay-300">
//               {stats.map((stat, index) => (
//                 <div 
//                   key={index}
//                   className="bg-gray-900/40 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 group hover:scale-105"
//                 >
//                   <div className="flex items-center justify-center gap-3 mb-2">
//                     <span className="text-2xl">{stat.icon}</span>
//                     <span className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
//                       {stat.value}
//                     </span>
//                   </div>
//                   <p className="text-gray-400 text-sm">{stat.label}</p>
//                 </div>
//               ))}
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fadeInUp delay-400">
//               <button
//                 onClick={() => scrollToSection("soil")}
//                 onMouseEnter={() => setHoveredButton("soil")}
//                 onMouseLeave={() => setHoveredButton(null)}
//                 className={`relative group px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform ${
//                   hoveredButton === "soil" ? 'scale-105' : ''
//                 } bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-yellow-600`}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
//                 <div className="flex items-center justify-center gap-3 relative z-10">
//                   <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform duration-500" />
//                   <span>Soil Vision</span>
//                   <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
//                 </div>
//               </button>

//               <button
//                 onClick={() => scrollToSection("plant")}
//                 onMouseEnter={() => setHoveredButton("plant")}
//                 onMouseLeave={() => setHoveredButton(null)}
//                 className={`relative group px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform ${
//                   hoveredButton === "plant" ? 'scale-105' : ''
//                 } bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600`}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
//                 <div className="flex items-center justify-center gap-3 relative z-10">
//                   <Leaf className="w-5 h-5 group-hover:rotate-12 transition-transform duration-500" />
//                   <span>Plant Diagnostics</span>
//                   <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
//                 </div>
//               </button>

//               <button
//                 onClick={handleGetStarted}
//                 onMouseEnter={() => setHoveredButton("started")}
//                 onMouseLeave={() => setHoveredButton(null)}
//                 className={`relative group px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform ${
//                   hoveredButton === "started" ? 'scale-105' : ''
//                 } bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-lg shadow-blue-500/20`}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
//                 <div className="flex items-center justify-center gap-3 relative z-10">
//                   <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-500" />
//                   <span>Get Started Free</span>
//                   <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
//                 </div>
//               </button>
//             </div>

//             {/* Features Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20 animate-fadeInUp delay-500">
//               {features.map((feature, index) => (
//                 <div
//                   key={index}
//                   className={`bg-gray-900/40 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 delay-${feature.delay} hover:scale-[1.02] group`}
//                 >
//                   <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-500`}>
//                     <feature.icon className="w-6 h-6 text-white" />
//                   </div>
//                   <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
//                   <p className="text-gray-400">{feature.description}</p>
//                   <div className="mt-4 pt-4 border-t border-gray-700/50">
//                     <button
//                       onClick={() => scrollToSection(feature.title.includes("Soil") ? "soil" : "plant")}
//                       className="text-sm text-gray-300 hover:text-white flex items-center gap-2 group/button"
//                     >
//                       Learn More
//                       <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-300" />
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Scroll Down Indicator */}
//             <button
//               onClick={() => scrollToSection("soil")}
//               className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce group"
//             >
//               <div className="flex flex-col items-center">
//                 <span className="text-sm text-gray-400 mb-2">Explore Features</span>
//                 <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
//               </div>
//             </button>
//           </div>
//         </section>
//       )}

//       {/* Soil Diagnostics */}
//       {showContent && (
//         <section ref={sections.soil}>
//           <SoilDiagnostics />
//         </section>
//       )}

//       {/* Plant Diagnostics */}
//       {showContent && (
//         <section ref={sections.plant}>
//           <PlantDiagnostics />
//         </section>
//       )}

//       {/* Developer Section */}
//       {showContent && (
//         <DeveloperSection ref={sections.developers} />
//       )}

//       {/* Footer */}
//       {showContent && (
//         <Footer />
//       )}

//       {/* Auth Modal */}
//       {authModalOpen && (
//         <div className="fixed inset-0 z-[100]">
//           {/* Backdrop */}
//           <div 
//             className="absolute inset-0 bg-black/80 backdrop-blur-xl"
//             onClick={() => setAuthModalOpen(false)}
//           />
          
//           {/* Modal */}
//           <div className="absolute inset-0 flex items-center justify-center p-4">
//             <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl w-full max-w-md overflow-hidden border border-gray-700/50 shadow-2xl animate-modalIn">
//               {/* Animated Border */}
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-emerald-500/20 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              
//               {/* Modal Content */}
//               <div className="relative z-10">
//                 {/* Header */}
//                 <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
//                   <div className="flex items-center gap-3">
//                     <div className="p-2 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg">
//                       <Sparkles className="w-5 h-5 text-white" />
//                     </div>
//                     <div>
//                       <h2 className="text-xl font-bold text-white">Start Your Journey</h2>
//                       <p className="text-sm text-gray-400">Join thousands of smart farmers</p>
//                     </div>
//                   </div>
//                   <button
//                     onClick={() => setAuthModalOpen(false)}
//                     className="p-2 hover:bg-gray-800 rounded-xl transition-all duration-300 group"
//                   >
//                     <X className="w-5 h-5 text-gray-400 group-hover:text-white" />
//                   </button>
//                 </div>

//                 {/* Form */}
//                 <div className="p-6">
//                   <div className="space-y-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
//                       <input
//                         id="modal-name"
//                         className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
//                         placeholder="Enter your name"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
//                       <input
//                         id="modal-email"
//                         type="email"
//                         className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
//                         placeholder="you@example.com"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
//                       <input
//                         id="modal-password"
//                         type="password"
//                         className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
//                         placeholder="••••••••"
//                       />
//                     </div>

//                     <button
//                       onClick={handleModalSignup}
//                       className="w-full py-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-[1.02] mt-6"
//                     >
//                       Create Free Account
//                     </button>

//                     <div className="text-center pt-4">
//                       <p className="text-gray-400 text-sm">
//                         Already have an account?{" "}
//                         <button
//                           onClick={() => { setAuthModalOpen(false); navigate("/login"); }}
//                           className="text-blue-400 hover:text-blue-300 font-medium"
//                         >
//                           Sign In
//                         </button>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Custom Animations */}
//       <style jsx global>{`
//         @keyframes gradient {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes fadeInUp {
//           from { 
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to { 
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         @keyframes float {
//           0%, 100% { transform: translateY(0) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(180deg); }
//         }
//         @keyframes modalIn {
//           from { 
//             opacity: 0;
//             transform: translateY(20px) scale(0.95);
//           }
//           to { 
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }
//         @keyframes neuralLine {
//           0% {
//             transform: translateX(-100%) scaleX(0.5);
//             opacity: 0;
//           }
//           50% {
//             transform: translateX(0) scaleX(1);
//             opacity: 0.5;
//           }
//           100% {
//             transform: translateX(100%) scaleX(0.5);
//             opacity: 0;
//           }
//         }
//         @keyframes shimmer {
//           0% {
//             transform: translateX(-100%);
//           }
//           100% {
//             transform: translateX(100%);
//           }
//         }
        
//         .animate-gradient {
//           background-size: 200% auto;
//           animation: gradient 3s ease infinite;
//         }
//         .animate-fadeIn {
//           animation: fadeIn 1s ease-out;
//         }
//         .animate-fadeInUp {
//           animation: fadeInUp 0.8s ease-out forwards;
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//         .animate-modalIn {
//           animation: modalIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
//         }
//         .animate-neuralLine {
//           animation: neuralLine 3s ease-in-out infinite;
//         }
//         .animate-shimmer {
//           animation: shimmer 2s infinite;
//         }
        
//         .delay-100 {
//           animation-delay: 100ms;
//         }
//         .delay-200 {
//           animation-delay: 200ms;
//         }
//         .delay-300 {
//           animation-delay: 300ms;
//         }
//         .delay-400 {
//           animation-delay: 400ms;
//         }
//         .delay-500 {
//           animation-delay: 500ms;
//         }
//       `}</style>
//     </div>
//   );
// };

































// Landing.js
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { SoilDiagnostics } from "./SoilDiagnostics";
import { PlantDiagnostics } from "./PlantDiagnostics";
import DeveloperSection from "./DeveloperSection";
import { Footer } from "./Footer";
import { ArrowRight, Play, Sparkles, Leaf, Globe, Zap, ChevronDown, X, Target, TrendingUp, Shield } from "lucide-react";

export const Landing = ({ sections }) => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [counters, setCounters] = useState({ farmers: 0, accuracy: 0, plants: 0 });
  const [currentNumber, setCurrentNumber] = useState(1);
  const [showAgroOptics, setShowAgroOptics] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [countdownComplete, setCountdownComplete] = useState(false);
  const [aiVideoLoaded, setAiVideoLoaded] = useState(false);
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const numbersContainerRef = useRef(null);
  const aiVideoRef = useRef(null);

  // Countdown animation from 1-12
  useEffect(() => {
    if (!countdownComplete) {
      const interval = setInterval(() => {
        setCurrentNumber(prev => {
          if (prev >= 12) {
            clearInterval(interval);
            setTimeout(() => {
              setShowAgroOptics(true);
              setTimeout(() => {
                setShowContent(true);
                setCountdownComplete(true);
              }, 1500);
            }, 500);
            return 12;
          }
          return prev + 1;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [countdownComplete]);

  // Counter animation
  useEffect(() => {
    if (countdownComplete) {
      const targetValues = { farmers: 10000, accuracy: 95, plants: 50000 };
      const duration = 2000;
      const step = 20;

      const animateCounter = (key, target) => {
        let current = 0;
        const increment = target / (duration / step);

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, step);
      };

      Object.keys(targetValues).forEach(key => {
        animateCounter(key, targetValues[key]);
      });
    }
  }, [countdownComplete]);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollY / maxScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Preload AI video
  useEffect(() => {
    if (aiVideoRef.current) {
      aiVideoRef.current.load();
    }
  }, []);

  // Stats data
  const stats = [
    { 
      value: counters.farmers.toLocaleString(), 
      label: "Farmers Empowered", 
      icon: "👨‍🌾", 
      color: "from-green-500 to-emerald-400" 
    },
    { 
      value: `${counters.accuracy}%`, 
      label: "AI Accuracy", 
      icon: "🤖", 
      color: "from-blue-500 to-cyan-400" 
    },
    { 
      value: counters.plants.toLocaleString(), 
      label: "Plants Diagnosed", 
      icon: "🌿", 
      color: "from-emerald-500 to-green-400" 
    },
  ];

  // Features data
  const features = [
    {
      icon: Globe,
      title: "Soil Vision",
      description: "Advanced soil analysis with AI-powered insights",
      color: "from-amber-600 to-yellow-400",
      delay: "100"
    },
    {
      icon: Leaf,
      title: "Plant Health",
      description: "Instant disease detection and treatment recommendations",
      color: "from-emerald-600 to-green-400",
      delay: "200"
    },
    {
      icon: Zap,
      title: "Smart Analytics",
      description: "Real-time farming insights and predictions",
      color: "from-violet-600 to-purple-400",
      delay: "300"
    },
  ];

  const scrollToSection = (section) => {
    if (sections[section]?.current) {
      sections[section].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGetStarted = () => {
    setAuthModalOpen(true);
  };

  const handleModalSignup = () => {
    const name = document.getElementById("modal-name")?.value || "";
    const email = document.getElementById("modal-email")?.value || "";
    const password = document.getElementById("modal-password")?.value || "";
    
    if (!name || !email || !password) {
      alert("Please fill all fields!");
      return;
    }
    
    setAuthModalOpen(false);
    navigate("/signup");
  };

  // Numbers 1-12 with their meanings
  const numberMeanings = [
    { number: 1, meaning: "Vision" },
    { number: 2, meaning: "Precision" },
    { number: 3, meaning: "Innovation" },
    { number: 4, meaning: "Growth" },
    { number: 5, meaning: "Sustainability" },
    { number: 6, meaning: "Technology" },
    { number: 7, meaning: "Accuracy" },
    { number: 8, meaning: "Efficiency" },
    { number: 9, meaning: "Intelligence" },
    { number: 10, meaning: "Transformation" },
    { number: 11, meaning: "Excellence" },
    { number: 12, meaning: "Revolution" },
    { number: 13, meaning: "Revolution" },
    { number: 14, meaning: "Revolution" },
  ];

  return (
    <div className="text-white bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-emerald-500 to-cyan-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Countdown Animation Section */}
      {!countdownComplete && (
        <div className="fixed inset-0 z-[100] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center">
          <div className="relative">
            {/* AI Video Background */}
            <div className="absolute inset-0 overflow-hidden">
              <video
                ref={aiVideoRef}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-30"
                onLoadedData={() => setAiVideoLoaded(true)}
              >
                <source 
                  src="https://assets.mixkit.co/videos/preview/mixkit-abstract-geometric-ai-video-14106-large.mp4" 
                  type="video/mp4" 
                />
                <source 
                  src="/videos/ai-tech-background.mp4" 
                  type="video/mp4" 
                />
              </video>
              <div className={`absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/70 to-gray-900/90 transition-opacity duration-1000 ${aiVideoLoaded ? 'opacity-100' : 'opacity-0'}`} />
              
              {/* Floating AI particles */}
              <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-gradient-to-r from-blue-400/30 to-emerald-400/30 rounded-full animate-float"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 5}s`,
                      animationDuration: `${2 + Math.random() * 4}s`,
                      width: `${4 + Math.random() * 8}px`,
                      height: `${4 + Math.random() * 8}px`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Numbers Container */}
            <div 
              ref={numbersContainerRef}
              className="relative grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-4 md:gap-6 mb-12"
            >
              {Array.from({ length: currentNumber }, (_, i) => i + 1).map((num) => (
                <div
                  key={num}
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center rounded-2xl border-2 ${
                    num === currentNumber
                      ? 'border-emerald-500 bg-gradient-to-br from-emerald-500/30 to-green-500/20 shadow-lg shadow-emerald-500/30 animate-pulse backdrop-blur-sm'
                      : 'border-gray-700/50 bg-gray-900/50 backdrop-blur-sm'
                  } transition-all duration-300`}
                >
                  <span className={`text-3xl sm:text-4xl md:text-5xl font-black ${
                    num === currentNumber 
                      ? 'text-emerald-400 animate-bounce' 
                      : 'text-gray-300'
                  }`}>
                    {num}
                  </span>
                  
                  {/* Meaning Tooltip */}
                  {num === currentNumber && numberMeanings[num-1] && (
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                      <div className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm px-3 py-1 rounded-lg border border-emerald-500/30">
                        <span className="text-xs sm:text-sm text-emerald-400 font-medium">
                          {numberMeanings[num-1].meaning}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* AgroOptics Reveal with AI Video Background */}
            {showAgroOptics && (
              <div className="relative z-10 text-center animate-fadeInUp">
                {/* AI Pattern Background */}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/0 via-gray-900/70 to-gray-900" />
                  
                  {/* Animated Neural Network Lines */}
                  <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute h-0.5 bg-gradient-to-r from-blue-500/10 via-emerald-500/10 to-transparent animate-neuralLine"
                        style={{
                          top: `${(i + 1) * 12}%`,
                          left: '-10%',
                          width: '120%',
                          animationDelay: `${i * 0.2}s`,
                          animationDuration: `${3 + Math.random() * 2}s`
                        }}
                      />
                    ))}
                  </div>
                </div>

                <h1 className="text-4xl sm:text-6xl md:text-8xl font-black leading-tight mb-6">
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                      Agro-Optics
                    </span>
                    {/* Animated glow effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-emerald-500/10 to-cyan-500/10 blur-3xl animate-pulse" />
                  </span>
                </h1>
                
                {/* AI Tagline with Tech Elements */}
                <div className="relative mb-6">
                  <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto">
                    <span className="relative">
                      Revolutionizing Agriculture with
                      <span className="ml-2 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent font-bold">
                        AI-Powered Intelligence
                      </span>
                      <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full animate-ping opacity-70" />
                      </div>
                    </span>
                  </p>
                  
                  {/* Tech Badges */}
                  <div className="flex flex-wrap justify-center gap-3 mt-6">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-blue-600/10 rounded-full border border-blue-500/30 text-blue-300 text-sm">
                      Deep Learning
                    </span>
                    <span className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-emerald-600/10 rounded-full border border-emerald-500/30 text-emerald-300 text-sm">
                      Neural Networks
                    </span>
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-purple-600/10 rounded-full border border-purple-500/30 text-purple-300 text-sm">
                      Computer Vision
                    </span>
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-cyan-600/10 rounded-full border border-cyan-500/30 text-cyan-300 text-sm">
                      Predictive Analytics
                    </span>
                  </div>
                </div>

                {/* Animated AI Visualization */}
                <div className="max-w-4xl mx-auto mb-8 relative">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { icon: "🧠", label: "AI Models", color: "from-blue-500 to-cyan-400" },
                      { icon: "👁️", label: "Vision AI", color: "from-emerald-500 to-green-400" },
                      { icon: "📊", label: "Analytics", color: "from-violet-500 to-purple-400" },
                      { icon: "🤖", label: "Automation", color: "from-amber-500 to-yellow-400" }
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-gray-900/40 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 group"
                      >
                        <div className="flex items-center justify-center gap-3">
                          <span className="text-2xl animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                            {item.icon}
                          </span>
                          <span className={`text-lg font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                            {item.label}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Connecting Lines Animation */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-blue-500/20 via-emerald-500/20 to-transparent animate-pulse" />
                  </div>
                </div>
              </div>
            )}

            {/* Loading Bar */}
            {!showAgroOptics && (
              <div className="relative z-10 w-64 sm:w-80 md:w-96 h-2 bg-gray-800/50 backdrop-blur-sm rounded-full overflow-hidden mt-12">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 via-emerald-500 to-cyan-500 transition-all duration-100"
                  style={{ width: `${(currentNumber / 12) * 100}%` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
              </div>
            )}
          </div>

          {/* Skip Button */}
          {!showAgroOptics && (
            <button
              onClick={() => {
                setCurrentNumber(12);
                setTimeout(() => {
                  setShowAgroOptics(true);
                  setTimeout(() => {
                    setShowContent(true);
                    setCountdownComplete(true);
                  }, 1500);
                }, 100);
              }}
              className="absolute bottom-8 right-8 px-4 py-2 bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-xl text-gray-400 hover:text-white hover:border-gray-600/50 transition-all duration-300 text-sm z-20"
            >
              Skip Intro
            </button>
          )}
        </div>
      )}

      {/* Hero Section */}
      {showContent && (
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Background Video with Overlay */}
          <div className="absolute inset-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              onLoadedData={() => setVideoLoaded(true)}
            >
              <source src="/videos/farmer-bg.mp4" type="video/mp4" />
            </video>
            <div className={`absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900/90 transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`} />
            
            {/* Animated Particles */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${3 + Math.random() * 7}s`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center px-4 sm:px-6 max-w-7xl mx-auto">
            {/* Animated Welcome Text */}
            <div className="mb-8 animate-fadeIn">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-full border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                🚀 Where Precision Meets Agriculture
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black leading-tight mb-6 animate-fadeInUp">
              <span className="block bg-gradient-to-r from-blue-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                Agro-Optics
              </span>
              <span className="block text-2xl sm:text-4xl md:text-5xl font-normal text-gray-300 mt-4">
                Intelligent Farming Solutions
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed animate-fadeInUp delay-200">
              Advanced soil analysis, plant disease detection, and smart farming analytics 
              powered by cutting-edge AI technology.
            </p>

            {/* Stats Counter */}
            

            {/* CTA Buttons */}
            

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20 animate-fadeInUp delay-500">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`bg-gray-900/40 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 delay-${feature.delay} hover:scale-[1.02] group`}
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-500`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                  <div className="mt-4 pt-4 border-t border-gray-700/50">
                    <button
                      onClick={() => scrollToSection(feature.title.includes("Soil") ? "soil" : "plant")}
                      className="text-sm text-gray-300 hover:text-white flex items-center gap-2 group/button"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Down Indicator */}
            <button
              onClick={() => scrollToSection("soil")}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce group"
            >
              <div className="flex flex-col items-center">
                <span className="text-sm text-gray-400 mb-2">Explore Features</span>
                <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </div>
            </button>
          </div>
        </section>
      )}

      {/* Soil Diagnostics */}
      {showContent && (
        <section ref={sections.soil}>
          <SoilDiagnostics />
        </section>
      )}

      {/* Plant Diagnostics */}
      {showContent && (
        <section ref={sections.plant}>
          <PlantDiagnostics />
        </section>
      )}

      {/* Developer Section */}
      {showContent && (
        <DeveloperSection ref={sections.developers} />
      )}

      {/* Footer */}
      {showContent && (
        <Footer />
      )}

      {/* Auth Modal */}
      {authModalOpen && (
        <div className="fixed inset-0 z-[100]">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            onClick={() => setAuthModalOpen(false)}
          />
          
          {/* Modal */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl w-full max-w-md overflow-hidden border border-gray-700/50 shadow-2xl animate-modalIn">
              {/* Animated Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-emerald-500/20 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              
              {/* Modal Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">Start Your Journey</h2>
                      <p className="text-sm text-gray-400">Join thousands of smart farmers</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setAuthModalOpen(false)}
                    className="p-2 hover:bg-gray-800 rounded-xl transition-all duration-300 group"
                  >
                    <X className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </button>
                </div>

                {/* Form */}
                <div className="p-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                      <input
                        id="modal-name"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                      <input
                        id="modal-email"
                        type="email"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                      <input
                        id="modal-password"
                        type="password"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                        placeholder="••••••••"
                      />
                    </div>

                    <button
                      onClick={handleModalSignup}
                      className="w-full py-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-[1.02] mt-6"
                    >
                      Create Free Account
                    </button>

                    <div className="text-center pt-4">
                      <p className="text-gray-400 text-sm">
                        Already have an account?{" "}
                        <button
                          onClick={() => { setAuthModalOpen(false); navigate("/login"); }}
                          className="text-blue-400 hover:text-blue-300 font-medium"
                        >
                          Sign In
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes modalIn {
          from { 
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes neuralLine {
          0% {
            transform: translateX(-100%) scaleX(0.5);
            opacity: 0;
          }
          50% {
            transform: translateX(0) scaleX(1);
            opacity: 0.5;
          }
          100% {
            transform: translateX(100%) scaleX(0.5);
            opacity: 0;
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-modalIn {
          animation: modalIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .animate-neuralLine {
          animation: neuralLine 3s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .delay-100 {
          animation-delay: 100ms;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
        .delay-400 {
          animation-delay: 400ms;
        }
        .delay-500 {
          animation-delay: 500ms;
        }
      `}</style>
    </div>
  );
};



























































