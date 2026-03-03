// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";

// // Import components
// import { SoilDiagnostics } from "../components/SoilDiagnostics";
// import { PlantDiagnostics } from "../components/PlantDiagnostics";
// import { DeveloperSection } from "../components/DeveloperSection";
// import { Footer } from "../components/Footer";
// import { ParticleBackground } from "../components/ParticleBackground";
// import { CustomCursor } from "../components/CustomCursor";

// export const Landing = ({ sections }) => {
//   const [authModalOpen, setAuthModalOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const navigate = useNavigate();
//   const heroRef = useRef(null);

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Handle signup
//   const handleSignup = () => {
//     const name = document.getElementById("modal-name")?.value;
//     const email = document.getElementById("modal-email")?.value;
//     const password = document.getElementById("modal-password")?.value;

//     if (!name || !email || !password) {
//       alert("Please fill all fields!");
//       return;
//     }

//     alert(`Account Created!\nWelcome ${name}!`);
//     setAuthModalOpen(false);
//     navigate("/signup");
//   };

//   return (
//     <div className="text-white overflow-x-hidden">
//       {/* Custom Cursor */}
//       <CustomCursor />
      
//       {/* Background Effects */}
//       <div className="fixed inset-0 gradient-bg -z-10" />
//       <ParticleBackground />
      
//       {/* Floating Elements */}
//       <div className="fixed top-20 left-10 w-4 h-4 bg-emerald-400 rounded-full opacity-30 float-animation" />
//       <div className="fixed top-40 right-20 w-6 h-6 bg-blue-400 rounded-full opacity-20 float-animation" style={{animationDelay: '2s'}} />
//       <div className="fixed bottom-40 left-1/4 w-8 h-8 bg-teal-400 rounded-full opacity-15 float-animation" style={{animationDelay: '4s'}} />

//       {/* ================= HERO SECTION ================= */}
//       <section
//         ref={sections.home}
//         className="relative min-h-screen flex items-center justify-center overflow-hidden"
//       >
//         <div className="absolute inset-0 z-0">
//           <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
//           <video
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="w-full h-full object-cover"
//           >
//             <source src="/videos/farmer-bg.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>

//         <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
//           {/* Animated Title */}
//           <div className="mb-8 transform transition-all duration-1000">
//             <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4">
//               <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-teal-400 bg-clip-text text-transparent animate-pulse">
//                 Agro-Optics
//               </span>
//             </h1>
//             <div className="w-48 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-6" />
//           </div>
          
//           {/* Animated Subtitle */}
//           <div className="mb-10 space-y-2">
//             <p className="text-xl md:text-2xl text-gray-200">
//               <span className="inline-block animate-bounce">🌱</span> Soil Vision
//             </p>
//             <p className="text-xl md:text-2xl text-gray-200">
//               <span className="inline-block animate-bounce" style={{animationDelay: '0.2s'}}>🔬</span> Plant Disease Diagnosis
//             </p>
//             <p className="text-xl md:text-2xl text-gray-200">
//               <span className="inline-block animate-bounce" style={{animationDelay: '0.4s'}}>📊</span> Smart Farming Analytics
//             </p>
//           </div>

//           {/* Interactive Buttons */}
//           <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 items-center">
//             <button
//               onClick={() => sections.soil.current.scrollIntoView({ behavior: "smooth" })}
//               className="group relative px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl font-semibold text-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/30"
//               data-cursor-hover
//             >
//               <span className="relative z-10 flex items-center gap-2">
//                 Soil Vision <span className="group-hover:rotate-90 transition-transform">🚜</span>
//               </span>
//               <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
//             </button>

//             <button
//               onClick={() => sections.plant.current.scrollIntoView({ behavior: "smooth" })}
//               className="group relative px-8 sm:px-10 py-3 sm:py-4 bg-white text-gray-900 rounded-2xl font-semibold text-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
//               data-cursor-hover
//             >
//               <span className="relative z-10 flex items-center gap-2">
//                 Plant Health <span className="group-hover:animate-spin">🌿</span>
//               </span>
//               <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
//             </button>

//             <button
//               onClick={() => setAuthModalOpen(true)}
//               className="group relative px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl font-semibold text-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30"
//               data-cursor-hover
//             >
//               <span className="relative z-10">Get Started</span>
//               <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
//               <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-600 blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
//             </button>
//           </div>

//           {/* Scroll Indicator */}
//           <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
//             <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex justify-center animate-bounce">
//               <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= SOIL DIAGNOSTICS ================= */}
//       <div ref={sections.soil}>
//         <SoilDiagnostics />
//       </div>

//       {/* ================= PLANT DIAGNOSTICS ================= */}
//       <div ref={sections.plant}>
//         <PlantDiagnostics />
//       </div>

//       {/* ================= DEVELOPER SECTION ================= */}
//       <DeveloperSection ref={sections.developers} />

//       {/* ================= FOOTER ================= */}
//       <Footer />

//       {/* ================= AUTH MODAL ================= */}
//       {authModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//           {/* Backdrop */}
//           <div 
//             className="absolute inset-0 bg-black/80 backdrop-blur-sm"
//             onClick={() => setAuthModalOpen(false)}
//           />
          
//           {/* Modal */}
//           <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-3xl w-full max-w-md border border-gray-700 shadow-2xl transform animate-scaleIn">
//             {/* Close Button */}
//             <button
//               onClick={() => setAuthModalOpen(false)}
//               className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300"
//               data-cursor-hover
//             >
//               <span className="text-xl">×</span>
//             </button>

//             {/* Header */}
//             <div className="text-center mb-8">
//               <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto mb-4 rounded-full" />
//               <h2 className="text-2xl sm:text-3xl font-bold mb-2">
//                 <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
//                   Join Agro-Optics
//                 </span>
//               </h2>
//               <p className="text-gray-400 text-sm sm:text-base">Start your smart farming journey today</p>
//             </div>

//             {/* Form */}
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm text-gray-400 mb-2">Full Name</label>
//                 <input
//                   className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors duration-300"
//                   placeholder="John Doe"
//                   id="modal-name"
//                   data-cursor-hover
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm text-gray-400 mb-2">Email Address</label>
//                 <input
//                   className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors duration-300"
//                   placeholder="john@example.com"
//                   type="email"
//                   id="modal-email"
//                   data-cursor-hover
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm text-gray-400 mb-2">Password</label>
//                 <input
//                   className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors duration-300"
//                   placeholder="••••••••"
//                   type="password"
//                   id="modal-password"
//                   data-cursor-hover
//                 />
//               </div>

//               <button
//                 onClick={handleSignup}
//                 className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transform hover:scale-[1.02] transition-all duration-300"
//                 data-cursor-hover
//               >
//                 Create Account
//               </button>
//             </div>

//             {/* Divider */}
//             <div className="my-6 flex items-center">
//               <div className="flex-1 h-px bg-gray-700" />
//               <span className="px-4 text-sm text-gray-500">or continue with</span>
//               <div className="flex-1 h-px bg-gray-700" />
//             </div>

//             {/* Social Login */}
//             <div className="grid grid-cols-2 gap-3">
//               <button 
//                 className="p-3 bg-gray-900/50 rounded-xl hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2"
//                 data-cursor-hover
//               >
//                 <span className="text-blue-400">f</span> Facebook
//               </button>
//               <button 
//                 className="p-3 bg-gray-900/50 rounded-xl hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2"
//                 data-cursor-hover
//               >
//                 <span className="text-red-400">G</span> Google
//               </button>
//             </div>

//             {/* Login Link */}
//             <p className="text-center mt-6 text-gray-400">
//               Already have an account?{" "}
//               <button 
//                 onClick={() => {
//                   setAuthModalOpen(false);
//                   navigate("/login");
//                 }}
//                 className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
//                 data-cursor-hover
//               >
//                 Sign In
//               </button>
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
// // At the bottom of Landing.js
// export { Landing };

import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Import modular components
import { SoilDiagnostics } from "./SoilDiagnostics";
import { PlantDiagnostics } from "./PlantDiagnostics";
import { DeveloperSection } from "./DeveloperSection";
import { Footer } from "./Footer";

export const Landing = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const navigate = useNavigate();
  
  // Create refs for scrolling
  const homeRef = useRef(null);
  const soilRef = useRef(null);
  const plantRef = useRef(null);
  const developersRef = useRef(null);

  const sections = {
    home: homeRef,
    soil: soilRef,
    plant: plantRef,
    developers: developersRef
  };

  const handleSignUp = () => {
    const name = document.getElementById("modal-name")?.value;
    const email = document.getElementById("modal-email")?.value;
    const password = document.getElementById("modal-password")?.value;
    
    if (!name || !email || !password) {
      alert("Please fill all fields!");
      return;
    }
    
    // Here you would typically make an API call
    console.log("Signing up:", { name, email, password });
    setAuthModalOpen(false);
    navigate("/signup");
  };

  return (
    <div className="text-white">
      {/* ================= HERO SECTION ================= */}
      <section
        ref={homeRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Video with fallback */}
        <div className="absolute inset-0 bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            poster="/images/video-poster.jpg" // Fallback image
          >
            <source src="/videos/farmer-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Agro-Optics
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 mb-10">
            Soil Vision, Plant Disease Diagnosis & Smart Farming Analytics.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => soilRef.current?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              🌱 Soil Vision
            </button>

            <button
              onClick={() => plantRef.current?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 bg-white text-black hover:bg-gray-100 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              🍃 Plant Diagnostics
            </button>

            <button
              onClick={() => setAuthModalOpen(true)}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* ================= SOIL DIAGNOSTICS ================= */}
      <section ref={soilRef}>
        <SoilDiagnostics />
      </section>

      {/* ================= PLANT DIAGNOSTICS ================= */}
      <section ref={plantRef}>
        <PlantDiagnostics />
      </section>

      {/* ================= DEVELOPER SECTION ================= */}
      <DeveloperSection ref={developersRef} />

      {/* ================= FOOTER ================= */}
      <Footer />

      {/* ================= AUTH MODAL ================= */}
      {authModalOpen && (
        <div 
          className="fixed inset-0 bg-black/70 flex items-center justify-center backdrop-blur-sm z-50 p-4"
          onClick={(e) => e.target === e.currentTarget && setAuthModalOpen(false)}
        >
          <div className="bg-gray-800 p-6 md:p-8 rounded-2xl w-full max-w-md border border-gray-700 animate-fadeIn">
            <h2 className="text-2xl font-bold text-blue-400 mb-6 text-center">
              Create Account
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Full Name</label>
                <input
                  className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500 transition"
                  placeholder="Enter your name"
                  id="modal-name"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Email Address</label>
                <input
                  className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500 transition"
                  placeholder="you@example.com"
                  type="email"
                  id="modal-email"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Password</label>
                <input
                  className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500 transition"
                  placeholder="••••••••"
                  type="password"
                  id="modal-password"
                />
              </div>
            </div>

            <button
              onClick={handleSignUp}
              className="w-full py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold mt-6 transition"
            >
              Create Account
            </button>

            <p className="text-center text-gray-400 mt-4 text-sm">
              Already have an account?{" "}
              <button
                onClick={() => {
                  setAuthModalOpen(false);
                  navigate("/login");
                }}
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                Sign In
              </button>
            </p>

            <button
              onClick={() => setAuthModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-2"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};