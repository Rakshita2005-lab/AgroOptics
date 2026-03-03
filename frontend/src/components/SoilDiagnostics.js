// import React, { useState } from "react";

// export const SoilDiagnostics = () => {
//   const [showUpload, setShowUpload] = useState(false);
//   const [selectedImg, setSelectedImg] = useState(null);

//   return (
//     <div className="min-h-screen bg-gray-900 flex items-center justify-center px-10 pt-24 pb-20">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
//         <div className="space-y-6">
//           <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 shadow-xl">
//             <h1 className="text-4xl font-extrabold text-green-400 mb-4">
//               Soil Vision Prediction 🧪
//             </h1>
//             <p className="text-gray-300 leading-relaxed">
//             In Agro-Optics, the Soil Vision module analyzes soil images to classify soil type and assess
//              fertility using deep learning. The system studies visual features such as texture, color, granularity,
//               and moisture patterns to identify soil categories like Alluvial, Red, Black, Clay, Silt, or Gravel. Along 
//               with classification, it estimates essential nutrient levels such as N, P, and K, and evaluates pH using pre-processed
//                dataset mappings. By combining CNN-based image analysis with real-time weather inputs, Soil Vision provides farmers with quick 
//                insights into soil health. This helps them choose suitable crops and fertilizers, making soil management more accurate, faster, and more
//                 affordable than traditional laboratory testing.
//             </p>
//           </div>

//           <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 shadow-xl flex justify-center">
//             <button
//               onClick={() => setShowUpload(true)}
//               className="px-8 py-4 bg-green-500 hover:bg-green-600 text-lg rounded-xl font-semibold"
//             >
//               Get Started
//             </button>
//           </div>
//         </div>

//         <div className="flex justify-center items-center">
//           <img
//             src="/images/soil-vision.jpg"
//             className="w-full h-[600px] object-cover rounded-3xl shadow-2xl border border-gray-700"
//             alt=""
//           />
//         </div>
//       </div>

//       {showUpload && (
//         <div className="fixed inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm">
//           <div className="bg-gray-800 p-8 rounded-3xl w-full max-w-4xl border border-gray-700 grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="text-center border-r border-gray-700 pr-4">
//               <h2 className="text-2xl font-bold text-green-400 mb-4">
//                 Upload Soil Image
//               </h2>
//               <input
//                 type="file"
//                 onChange={(e) =>
//                   setSelectedImg(URL.createObjectURL(e.target.files[0]))
//                 }
//                 className="w-full p-3 bg-gray-700 rounded-lg"
//               />
//               {selectedImg && (
//                 <img
//                   src={selectedImg}
//                   className="w-56 mx-auto mt-4 rounded-xl"
//                   alt=""
//                 />
//               )}
//               <button className="mt-4 w-full py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold">
//                 Analyze Soil
//               </button>
//               <button
//                 onClick={() => setShowUpload(false)}
//                 className="mt-4 text-red-400 font-semibold"
//               >
//                 Close
//               </button>
//             </div>
//             <div className="bg-gray-900/40 border border-gray-700 rounded-2xl p-6">
//               <h2 className="text-xl font-bold text-green-300 mb-3">
//                 Soil Analysis Result
//               </h2>
//               <div className="h-full flex items-center justify-center text-gray-400 text-lg">
//                 No result yet — upload and analyze soil 🧪
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };










// import React, { useState, useEffect, useRef } from "react";

// export const SoilDiagnostics = () => {
//   const [showUpload, setShowUpload] = useState(false);
//   const [selectedImg, setSelectedImg] = useState(null);
//   const [analyzing, setAnalyzing] = useState(false);
//   const [result, setResult] = useState(null);
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);
//   const [particles, setParticles] = useState([]);
//   const [glowIntensity, setGlowIntensity] = useState(0);
//   const containerRef = useRef(null);
//   const animationRef = useRef(null);

//   // Enhanced cursor effect
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setCursorPosition({ x: e.clientX, y: e.clientY });
      
//       // Create floating particles on movement
//       if (isHovering && Math.random() > 0.8) {
//         createSoilParticle(e.clientX, e.clientY);
//       }
//     };

//     window.addEventListener('mousemove', handleMouseMove);
    
//     // Animation for particles
//     animationRef.current = requestAnimationFrame(updateParticles);
    
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     };
//   }, [isHovering]);

//   const createSoilParticle = (x, y) => {
//     const colors = [
//       '#84cc16', // green-500
//       '#16a34a', // green-600
//       '#fbbf24', // amber-400
//       '#92400e', // brown
//       '#a16207', // dark brown
//     ];
    
//     setParticles(prev => [...prev, {
//       id: Date.now() + Math.random(),
//       x,
//       y,
//       size: Math.random() * 4 + 1,
//       color: colors[Math.floor(Math.random() * colors.length)],
//       speedX: (Math.random() - 0.5) * 2,
//       speedY: (Math.random() - 0.5) * 2,
//       life: 1
//     }]);
//   };

//   const updateParticles = () => {
//     setParticles(prev => 
//       prev
//         .map(p => ({
//           ...p,
//           x: p.x + p.speedX,
//           y: p.y + p.speedY,
//           life: p.life - 0.02
//         }))
//         .filter(p => p.life > 0)
//     );
//     animationRef.current = requestAnimationFrame(updateParticles);
//   };

//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       // Create upload effect
//       const imageUrl = URL.createObjectURL(file);
//       setSelectedImg(imageUrl);
      
//       // Create particle burst
//       for (let i = 0; i < 15; i++) {
//         createSoilParticle(window.innerWidth / 2, window.innerHeight / 2);
//       }
//     }
//   };

//   const handleAnalyze = () => {
//     if (!selectedImg) {
//       // Shake animation
//       const btn = document.querySelector('.analyze-btn');
//       if (btn) {
//         btn.classList.add('shake');
//         setTimeout(() => btn.classList.remove('shake'), 500);
//       }
//       return;
//     }

//     setAnalyzing(true);
    
//     // Simulate analysis with progress
//     let progress = 0;
//     const interval = setInterval(() => {
//       progress += Math.random() * 25;
//       if (progress >= 100) {
//         clearInterval(interval);
        
//         setTimeout(() => {
//           const soilTypes = ['Alluvial', 'Black Cotton', 'Red Clay', 'Loamy', 'Sandy', 'Clay Loam'];
//           const nutrients = ['N', 'P', 'K'];
          
//           setResult({
//             soilType: soilTypes[Math.floor(Math.random() * soilTypes.length)],
//             confidence: `${Math.floor(Math.random() * 15) + 85}%`,
//             ph: (Math.random() * 3 + 5.5).toFixed(1),
//             nutrients: nutrients.map(nutrient => ({
//               name: nutrient,
//               level: Math.floor(Math.random() * 100),
//               status: ['Low', 'Medium', 'High'][Math.floor(Math.random() * 3)]
//             })),
//             moisture: `${Math.floor(Math.random() * 40) + 30}%`,
//             organicMatter: `${Math.floor(Math.random() * 5) + 2}%`,
//             recommendations: [
//               'Add compost to improve organic content',
//               'Adjust pH with lime application',
//               'Use nitrogen-fixing cover crops',
//               'Implement contour farming for erosion control',
//               'Schedule irrigation based on moisture levels'
//             ],
//             suitableCrops: ['Wheat', 'Corn', 'Soybeans', 'Lentils', 'Barley']
//           });
//           setAnalyzing(false);
          
//           // Success particles
//           for (let i = 0; i < 20; i++) {
//             setTimeout(() => {
//               createSoilParticle(window.innerWidth / 2, window.innerHeight / 2);
//             }, i * 50);
//           }
//         }, 800);
//       }
//     }, 100);
//   };

//   // Background grid effect
//   const BackgroundGrid = () => (
//     <div className="absolute inset-0 overflow-hidden opacity-10">
//       {Array.from({ length: 50 }).map((_, i) => (
//         <div
//           key={i}
//           className="absolute w-[1px] h-[1px] bg-green-400 rounded-full"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             animation: `pulse ${3 + Math.random() * 4}s infinite alternate`
//           }}
//         />
//       ))}
//     </div>
//   );

//   return (
//     <div 
//       ref={containerRef}
//       className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4 md:px-10 pt-24 pb-20 overflow-hidden relative"
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//     >
//       {/* Custom Cursor Effect */}
//       <div
//         className="fixed pointer-events-none z-50 transition-transform duration-75"
//         style={{
//           left: `${cursorPosition.x}px`,
//           top: `${cursorPosition.y}px`,
//           transform: `translate(-50%, -50%) scale(${isHovering ? 1.3 : 1})`
//         }}
//       >
//         <div className="w-6 h-6 border-2 border-green-400/50 rounded-full animate-ping" />
//         <div className="w-4 h-4 border border-green-300 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
//         <div className="w-2 h-2 bg-green-300 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
//       </div>

//       {/* Floating Particles */}
//       {particles.map(p => (
//         <div
//           key={p.id}
//           className="fixed pointer-events-none z-40 rounded-full"
//           style={{
//             left: `${p.x}px`,
//             top: `${p.y}px`,
//             width: `${p.size}px`,
//             height: `${p.size}px`,
//             backgroundColor: p.color,
//             opacity: p.life * 0.7,
//             transform: `translate(-50%, -50%)`,
//           }}
//         />
//       ))}

//       {/* Background Effects */}
//       <BackgroundGrid />
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-20 left-20 w-64 h-64 bg-green-500 rounded-full blur-3xl animate-float" />
//         <div className="absolute bottom-32 right-32 w-96 h-96 bg-amber-500/30 rounded-full blur-3xl animate-float-delayed" />
//         <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-lime-500/20 rounded-full blur-3xl animate-pulse" />
//       </div>

//       {/* Floating Soil Icons */}
//       <div className="absolute top-10 left-10 text-3xl opacity-20 animate-bounce-slow">🌱</div>
//       <div className="absolute bottom-20 right-10 text-4xl opacity-20 animate-bounce-delayed">🧪</div>
//       <div className="absolute top-32 right-20 text-2xl opacity-15 animate-spin-slow">🌾</div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-7xl mx-auto relative z-10">
//         {/* Left Content */}
//         <div className="space-y-8">
//           {/* Main Card */}
//           <div className="relative group">
//             <div className="absolute -inset-3 bg-gradient-to-r from-green-500 via-emerald-400 to-teal-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
//             <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 p-8 rounded-2xl border border-gray-700/50 shadow-2xl backdrop-blur-sm relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-48 h-48 bg-green-500/10 rounded-full blur-3xl transform translate-x-24 -translate-y-24" />
              
//               {/* Header Badge */}
//               <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30">
//                 <span className="text-2xl animate-bounce-slow">🧪</span>
//                 <span className="text-sm font-bold text-green-300 tracking-wider">SOIL VISION AI</span>
//               </div>

//               <h1 className="text-4xl md:text-5xl font-bold mb-6">
//                 <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent animate-gradient-text">
//                   Soil Health Intelligence
//                 </span>
//               </h1>

//               <p className="text-gray-300 leading-relaxed text-lg mb-6 group-hover:text-gray-200 transition-colors duration-300">
//                 Our AI-driven Soil Vision module analyzes soil images to classify soil types and assess fertility 
//                 using deep learning. The system studies visual features like texture, color, granularity, and moisture 
//                 patterns to identify soil categories including Alluvial, Red, Black, Clay, Silt, or Gravel.
//               </p>

//               {/* Features Grid */}
//               <div className="grid grid-cols-2 gap-4 mb-6">
//                 {['Texture Analysis', 'Nutrient Mapping', 'pH Estimation', 'Crop Suitability'].map((feature, i) => (
//                   <div 
//                     key={i}
//                     className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-4 rounded-xl border border-gray-700/50 group-hover:border-green-500/30 transition-all duration-500"
//                   >
//                     <div className="flex items-center gap-2">
//                       <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//                       <span className="text-green-300 font-medium text-sm">{feature}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Stats Bar */}
//               <div className="bg-gradient-to-r from-gray-800/60 to-gray-900/60 p-4 rounded-xl border border-gray-700/50">
//                 <div className="flex justify-between items-center mb-2">
//                   <span className="text-sm text-gray-400">Analysis Accuracy</span>
//                   <span className="text-green-400 font-bold">95%</span>
//                 </div>
//                 <div className="w-full bg-gray-700 rounded-full h-2">
//                   <div className="bg-gradient-to-r from-green-500 to-teal-400 h-2 rounded-full animate-progress" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Action Button */}
//           <button
//             onClick={() => setShowUpload(true)}
//             className="group relative w-full py-5 bg-gradient-to-r from-green-600 via-emerald-500 to-teal-400 rounded-2xl font-bold text-lg overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/30 active:scale-95"
//             onMouseEnter={() => setGlowIntensity(1)}
//             onMouseLeave={() => setGlowIntensity(0)}
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-teal-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
//             <span className="relative z-10 flex items-center justify-center gap-3">
//               <span className="text-2xl group-hover:rotate-180 transition-transform duration-700">🔬</span>
//               <span className="bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
//                 Analyze Soil Sample
//               </span>
//               <span className="group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300">✨</span>
//             </span>
//             <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-green-400 transform translate-x-full group-hover:translate-x-0 transition-transform duration-700 delay-100" />
//           </button>
//         </div>

//         {/* Right Image */}
//         <div className="flex justify-center items-center">
//           <div 
//             className="relative group cursor-pointer"
//             onClick={() => setShowUpload(true)}
//           >
//             <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-emerald-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-700" />
//             <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-teal-300 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            
//             <img
//               src="/images/soil-vision.jpg"
//               className="relative w-full h-[600px] object-cover rounded-3xl shadow-2xl border-2 border-gray-700/50 transform group-hover:scale-[1.01] transition-all duration-500 group-hover:shadow-green-500/20 z-10"
//               alt="Soil Analysis"
//             />
            
//             {/* Overlay Effects */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             <div className="absolute bottom-6 left-6 right-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 rounded-2xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
//               <p className="text-green-300 font-semibold text-lg">AI Soil Analysis</p>
//               <p className="text-gray-300 text-sm">Click to analyze soil composition</p>
//             </div>
//             <div className="absolute top-6 right-6 px-4 py-2 bg-black/70 backdrop-blur-sm rounded-full border border-green-500/50 transform scale-0 group-hover:scale-100 transition-transform duration-500">
//               <span className="text-sm text-green-300">Deep Learning</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Enhanced Upload Modal */}
//       {showUpload && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
//           {/* Animated Background Rings */}
//           <div className="absolute inset-0 overflow-hidden">
//             {[1, 2, 3].map((ring) => (
//               <div
//                 key={ring}
//                 className="absolute top-1/2 left-1/2 border border-green-500/20 rounded-full"
//                 style={{
//                   width: `${ring * 300}px`,
//                   height: `${ring * 300}px`,
//                   transform: `translate(-50%, -50%)`,
//                   animation: `spin ${12 + ring * 4}s linear infinite`
//                 }}
//               />
//             ))}
//           </div>

//           <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 p-8 rounded-3xl w-full max-w-5xl border border-green-500/30 shadow-2xl transform animate-scaleIn backdrop-blur-lg">
//             {/* Animated Border */}
//             <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 via-emerald-400 to-teal-400 rounded-3xl blur opacity-30 animate-pulse" />
            
//             {/* Modal Header */}
//             <div className="flex justify-between items-center mb-8 relative z-10">
//               <div>
//                 <h2 className="text-3xl font-bold mb-2">
//                   <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
//                     Soil Analysis Studio
//                   </span>
//                 </h2>
//                 <p className="text-gray-400">Upload soil image for comprehensive analysis</p>
//               </div>
//               <button
//                 onClick={() => {
//                   setShowUpload(false);
//                   setSelectedImg(null);
//                   setResult(null);
//                 }}
//                 className="p-3 hover:bg-gray-800/50 rounded-xl transition-all duration-300 group border border-gray-700 hover:border-red-400/50"
//               >
//                 <span className="text-2xl group-hover:rotate-90 transition-transform duration-300">×</span>
//               </button>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
//               {/* Upload Section */}
//               <div className="space-y-6">
//                 <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-6 rounded-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-500 group">
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="p-3 bg-green-500/20 rounded-xl">
//                       <span className="text-2xl">🌍</span>
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-semibold text-green-300">Soil Sample Capture</h3>
//                       <p className="text-sm text-gray-400">Upload clear image of soil sample</p>
//                     </div>
//                   </div>
                  
//                   <label
//                     htmlFor="soil-upload"
//                     className="block border-2 border-dashed border-gray-600 rounded-xl p-8 text-center hover:border-green-500 transition-all duration-300 cursor-pointer group-hover:bg-gray-800/30"
//                   >
//                     <input
//                       type="file"
//                       onChange={handleFileUpload}
//                       accept="image/*"
//                       className="hidden"
//                       id="soil-upload"
//                     />
//                     <div className="text-5xl mb-4 animate-bounce-slow">🧫</div>
//                     <p className="text-gray-300 mb-2 font-medium">Click to upload soil image</p>
//                     <p className="text-sm text-gray-500">JPG, PNG, WEBP • Max 15MB</p>
//                   </label>
                  
//                   {selectedImg && (
//                     <div className="mt-6 relative group/image">
//                       <img
//                         src={selectedImg}
//                         alt="Selected soil"
//                         className="w-full h-48 object-cover rounded-xl border-2 border-gray-700 group-hover/image:border-green-500 transition-all duration-300"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
//                     </div>
//                   )}
//                 </div>
                
//                 <button
//                   onClick={handleAnalyze}
//                   disabled={analyzing || !selectedImg}
//                   className={`analyze-btn group relative w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 overflow-hidden ${
//                     analyzing || !selectedImg
//                       ? "bg-gray-700 cursor-not-allowed"
//                       : "bg-gradient-to-r from-green-600 to-emerald-500 hover:shadow-2xl hover:shadow-green-500/40"
//                   }`}
//                 >
//                   {analyzing ? (
//                     <span className="flex items-center justify-center gap-3">
//                       <div className="w-5 h-5 border-2 border-green-300 border-t-transparent rounded-full animate-spin" />
//                       Analyzing Composition...
//                     </span>
//                   ) : (
//                     <>
//                       <span className="relative z-10">🧪 Analyze Soil Sample</span>
//                       <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
//                     </>
//                   )}
//                 </button>
//               </div>

//               {/* Results Section */}
//               <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-6 rounded-2xl border border-gray-700/50">
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="p-3 bg-emerald-500/20 rounded-xl">
//                     <span className="text-2xl">📊</span>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold text-emerald-300">Analysis Results</h3>
//                     <p className="text-sm text-gray-400">AI-powered soil health assessment</p>
//                   </div>
//                 </div>
                
//                 {result ? (
//                   <div className="space-y-4 animate-slideIn">
//                     {/* Primary Metrics */}
//                     <div className="grid grid-cols-2 gap-4">
//                       <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-4 rounded-xl border border-green-500/30 group hover:border-green-500/60 transition-all duration-300">
//                         <p className="text-sm text-gray-400 mb-1">Soil Type</p>
//                         <p className="text-xl font-bold text-green-300 group-hover:text-green-200">{result.soilType}</p>
//                       </div>
//                       <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-4 rounded-xl border border-amber-500/30 group hover:border-amber-500/60 transition-all duration-300">
//                         <p className="text-sm text-gray-400 mb-1">Confidence</p>
//                         <p className="text-xl font-bold text-amber-300 group-hover:text-amber-200">{result.confidence}</p>
//                       </div>
//                     </div>

//                     {/* Secondary Metrics */}
//                     <div className="grid grid-cols-3 gap-3">
//                       <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-3 rounded-xl text-center">
//                         <p className="text-sm text-gray-400">pH Level</p>
//                         <p className="text-lg font-bold text-blue-300">{result.ph}</p>
//                       </div>
//                       <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-3 rounded-xl text-center">
//                         <p className="text-sm text-gray-400">Moisture</p>
//                         <p className="text-lg font-bold text-cyan-300">{result.moisture}</p>
//                       </div>
//                       <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-3 rounded-xl text-center">
//                         <p className="text-sm text-gray-400">Organic Matter</p>
//                         <p className="text-lg font-bold text-emerald-300">{result.organicMatter}</p>
//                       </div>
//                     </div>

//                     {/* Nutrient Levels */}
//                     <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-4 rounded-xl border border-amber-500/20">
//                       <div className="flex items-center gap-2 mb-3">
//                         <span className="text-amber-400">⚡</span>
//                         <p className="text-sm font-semibold text-gray-300">Nutrient Levels</p>
//                       </div>
//                       <div className="space-y-3">
//                         {result.nutrients.map((nutrient, i) => (
//                           <div key={i} className="space-y-1">
//                             <div className="flex justify-between text-sm">
//                               <span className="text-gray-400">{nutrient.name} Level</span>
//                               <span className={`font-medium ${
//                                 nutrient.status === 'High' ? 'text-green-400' : 
//                                 nutrient.status === 'Medium' ? 'text-amber-400' : 'text-red-400'
//                               }`}>
//                                 {nutrient.status}
//                               </span>
//                             </div>
//                             <div className="w-full bg-gray-700 rounded-full h-2">
//                               <div 
//                                 className={`h-2 rounded-full ${
//                                   nutrient.status === 'High' ? 'bg-gradient-to-r from-green-500 to-emerald-400' : 
//                                   nutrient.status === 'Medium' ? 'bg-gradient-to-r from-amber-500 to-yellow-400' : 
//                                   'bg-gradient-to-r from-red-500 to-orange-400'
//                                 }`}
//                                 style={{ width: `${nutrient.level}%` }}
//                               />
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Recommendations */}
//                     <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-4 rounded-xl border border-teal-500/20">
//                       <div className="flex items-center gap-2 mb-3">
//                         <span className="text-teal-400">💡</span>
//                         <p className="text-sm font-semibold text-gray-300">AI Recommendations</p>
//                       </div>
//                       <ul className="space-y-2">
//                         {result.recommendations.map((rec, i) => (
//                           <li key={i} className="flex items-start gap-2 group">
//                             <span className="text-teal-400 mt-1 group-hover:rotate-12 transition-transform">→</span>
//                             <span className="text-gray-300 text-sm group-hover:text-gray-100">{rec}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     {/* Suitable Crops */}
//                     <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-4 rounded-xl border border-green-500/30">
//                       <p className="text-sm text-gray-400 mb-2">Suitable Crops</p>
//                       <div className="flex flex-wrap gap-2">
//                         {result.suitableCrops.map((crop, i) => (
//                           <span 
//                             key={i} 
//                             className="px-3 py-1 bg-green-500/20 rounded-full text-sm text-green-300 border border-green-500/30"
//                           >
//                             {crop}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 ) : analyzing ? (
//                   <div className="h-full flex flex-col items-center justify-center text-center py-12">
//                     <div className="relative mb-6">
//                       <div className="w-16 h-16 border-4 border-green-500/30 border-t-green-400 rounded-full animate-spin" />
//                       <div className="absolute inset-4 border-4 border-emerald-500/20 border-t-emerald-400 rounded-full animate-spin-reverse" />
//                     </div>
//                     <p className="text-gray-300 font-medium">Analyzing soil composition...</p>
//                     <p className="text-sm text-gray-500 mt-2">Processing texture, color, and nutrient patterns</p>
//                     <div className="mt-4 w-full bg-gray-700 rounded-full h-2">
//                       <div className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full animate-progress" />
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="h-full flex flex-col items-center justify-center text-center py-12">
//                     <div className="text-6xl mb-4 opacity-30 animate-float">🌱</div>
//                     <p className="text-gray-400 font-medium">Awaiting Soil Analysis</p>
//                     <p className="text-sm text-gray-500 mt-2">Upload a soil image to begin comprehensive analysis</p>
//                     <div className="mt-6 text-xs text-gray-600 space-y-1">
//                       <p>• Capture soil sample in natural light</p>
//                       <p>• Include soil texture and color reference</p>
//                       <p>• Avoid shadows and glare</p>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* CSS Animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(5deg); }
//         }
//         @keyframes float-delayed {
//           0%, 100% { transform: translateY(0px) translateX(0px); }
//           33% { transform: translateY(-15px) translateX(10px); }
//           66% { transform: translateY(10px) translateX(-10px); }
//         }
//         @keyframes spin {
//           from { transform: translate(-50%, -50%) rotate(0deg); }
//           to { transform: translate(-50%, -50%) rotate(360deg); }
//         }
//         @keyframes spin-reverse {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(-360deg); }
//         }
//         @keyframes gradient-text {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
//         @keyframes scaleIn {
//           from { transform: scale(0.95); opacity: 0; }
//           to { transform: scale(1); opacity: 1; }
//         }
//         @keyframes slideIn {
//           from { transform: translateY(20px); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
//         @keyframes progress {
//           0% { width: 0%; }
//           100% { width: 100%; }
//         }
//         @keyframes pulse {
//           0%, 100% { opacity: 0.2; }
//           50% { opacity: 0.5; }
//         }
//         @keyframes bounce-slow {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-15px); }
//         }
//         @keyframes bounce-delayed {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-10px); }
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         .animate-float-delayed {
//           animation: float-delayed 8s ease-in-out infinite;
//         }
//         .animate-gradient-text {
//           background-size: 200% 200%;
//           animation: gradient-text 3s ease infinite;
//         }
//         .animate-scaleIn {
//           animation: scaleIn 0.3s ease-out;
//         }
//         .animate-slideIn {
//           animation: slideIn 0.5s ease-out;
//         }
//         .animate-progress {
//           animation: progress 2s ease-in-out infinite;
//         }
//         .animate-bounce-slow {
//           animation: bounce-slow 2s ease-in-out infinite;
//         }
//         .animate-bounce-delayed {
//           animation: bounce-delayed 3s ease-in-out infinite;
//         }
//         .animate-spin-slow {
//           animation: spin 20s linear infinite;
//         }
//         .shake {
//           animation: shake 0.5s ease-in-out;
//         }
//         @keyframes shake {
//           0%, 100% { transform: translateX(0); }
//           25% { transform: translateX(-10px); }
//           75% { transform: translateX(10px); }
//         }
//       `}</style>
//     </div>
//   );
// };



























// import React, { useState, useEffect, useRef } from "react";

// export const SoilDiagnostics = () => {
//   const [showUpload, setShowUpload] = useState(false);
//   const [selectedImg, setSelectedImg] = useState(null);
//   const [analyzing, setAnalyzing] = useState(false);
//   const [result, setResult] = useState(null);
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);
//   const [particles, setParticles] = useState([]);
//   const containerRef = useRef(null);
//   const animationRef = useRef(null);

//   // Enhanced cursor effect
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setCursorPosition({ x: e.clientX, y: e.clientY });
      
//       // Create floating particles on movement
//       if (isHovering && Math.random() > 0.8) {
//         createSoilParticle(e.clientX, e.clientY);
//       }
//     };

//     window.addEventListener('mousemove', handleMouseMove);
    
//     // Animation for particles
//     animationRef.current = requestAnimationFrame(updateParticles);
    
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     };
//   }, [isHovering]);

//   const createSoilParticle = (x, y) => {
//     const colors = [
//       '#3b82f6', // blue-500
//       '#0ea5e9', // sky-500
//       '#06b6d4', // cyan-500
//       '#14b8a6', // teal-500
//       '#0d9488', // teal-600
//     ];
    
//     setParticles(prev => [...prev, {
//       id: Date.now() + Math.random(),
//       x,
//       y,
//       size: Math.random() * 4 + 1,
//       color: colors[Math.floor(Math.random() * colors.length)],
//       speedX: (Math.random() - 0.5) * 2,
//       speedY: (Math.random() - 0.5) * 2,
//       life: 1
//     }]);
//   };

//   const updateParticles = () => {
//     setParticles(prev => 
//       prev
//         .map(p => ({
//           ...p,
//           x: p.x + p.speedX,
//           y: p.y + p.speedY,
//           life: p.life - 0.02
//         }))
//         .filter(p => p.life > 0)
//     );
//     animationRef.current = requestAnimationFrame(updateParticles);
//   };

//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       // Create upload effect
//       const imageUrl = URL.createObjectURL(file);
//       setSelectedImg(imageUrl);
      
//       // Create particle burst
//       for (let i = 0; i < 15; i++) {
//         createSoilParticle(window.innerWidth / 2, window.innerHeight / 2);
//       }
//     }
//   };

//   const handleAnalyze = () => {
//     if (!selectedImg) {
//       // Shake animation
//       const btn = document.querySelector('.analyze-btn');
//       if (btn) {
//         btn.classList.add('shake');
//         setTimeout(() => btn.classList.remove('shake'), 500);
//       }
//       return;
//     }

//     setAnalyzing(true);
    
//     // Simulate analysis with progress
//     let progress = 0;
//     const interval = setInterval(() => {
//       progress += Math.random() * 25;
//       if (progress >= 100) {
//         clearInterval(interval);
        
//         setTimeout(() => {
//           const soilTypes = ['Alluvial', 'Black Cotton', 'Red Clay', 'Loamy', 'Sandy', 'Clay Loam'];
//           const nutrients = ['N', 'P', 'K'];
          
//           setResult({
//             soilType: soilTypes[Math.floor(Math.random() * soilTypes.length)],
//             confidence: `${Math.floor(Math.random() * 15) + 85}%`,
//             ph: (Math.random() * 3 + 5.5).toFixed(1),
//             nutrients: nutrients.map(nutrient => ({
//               name: nutrient,
//               level: Math.floor(Math.random() * 100),
//               status: ['Low', 'Medium', 'High'][Math.floor(Math.random() * 3)]
//             })),
//             moisture: `${Math.floor(Math.random() * 40) + 30}%`,
//             organicMatter: `${Math.floor(Math.random() * 5) + 2}%`,
//             recommendations: [
//               'Add compost to improve organic content',
//               'Adjust pH with lime application',
//               'Use nitrogen-fixing cover crops',
//               'Implement contour farming for erosion control',
//               'Schedule irrigation based on moisture levels'
//             ],
//             suitableCrops: ['Wheat', 'Corn', 'Soybeans', 'Lentils', 'Barley']
//           });
//           setAnalyzing(false);
          
//           // Success particles
//           for (let i = 0; i < 20; i++) {
//             setTimeout(() => {
//               createSoilParticle(window.innerWidth / 2, window.innerHeight / 2);
//             }, i * 50);
//           }
//         }, 800);
//       }
//     }, 100);
//   };

//   // Background grid effect
//   const BackgroundGrid = () => (
//     <div className="absolute inset-0 overflow-hidden opacity-10">
//       {Array.from({ length: 50 }).map((_, i) => (
//         <div
//           key={i}
//           className="absolute w-[1px] h-[1px] bg-blue-400 rounded-full"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             animation: `pulse ${3 + Math.random() * 4}s infinite alternate`
//           }}
//         />
//       ))}
//     </div>
//   );

//   return (
//     <div 
//       ref={containerRef}
//       className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4 md:px-10 pt-24 pb-20 overflow-hidden relative"
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//     >
//       {/* Custom Cursor Effect */}
//       <div
//         className="fixed pointer-events-none z-50 transition-transform duration-75"
//         style={{
//           left: `${cursorPosition.x}px`,
//           top: `${cursorPosition.y}px`,
//           transform: `translate(-50%, -50%) scale(${isHovering ? 1.3 : 1})`
//         }}
//       >
//         <div className="w-6 h-6 border-2 border-blue-400/50 rounded-full animate-ping" />
//         <div className="w-4 h-4 border border-blue-300 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
//         <div className="w-2 h-2 bg-blue-300 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
//       </div>

//       {/* Floating Particles */}
//       {particles.map(p => (
//         <div
//           key={p.id}
//           className="fixed pointer-events-none z-40 rounded-full"
//           style={{
//             left: `${p.x}px`,
//             top: `${p.y}px`,
//             width: `${p.size}px`,
//             height: `${p.size}px`,
//             backgroundColor: p.color,
//             opacity: p.life * 0.7,
//             transform: `translate(-50%, -50%)`,
//           }}
//         />
//       ))}

//       {/* Background Effects */}
//       <BackgroundGrid />
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-float" />
//         <div className="absolute bottom-32 right-32 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-float-delayed" />
//         <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl animate-pulse" />
//       </div>

//       {/* Floating Soil Icons */}
//       <div className="absolute top-10 left-10 text-3xl opacity-20 animate-bounce-slow">🌱</div>
//       <div className="absolute bottom-20 right-10 text-4xl opacity-20 animate-bounce-delayed">🧪</div>
//       <div className="absolute top-32 right-20 text-2xl opacity-15 animate-spin-slow">🌾</div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-7xl mx-auto relative z-10">
//         {/* Left Content */}
//         <div className="space-y-8">
//           {/* Main Card */}
//           <div className="relative group">
//             <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
//             <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 p-8 rounded-2xl border border-gray-700/50 shadow-2xl backdrop-blur-sm relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl transform translate-x-24 -translate-y-24" />
              
//               {/* Header Badge */}
//               <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-500/30">
//                 <span className="text-2xl animate-bounce-slow">🧪</span>
//                 <span className="text-sm font-bold text-blue-300 tracking-wider">SOIL VISION AI</span>
//               </div>

//               <h1 className="text-4xl md:text-5xl font-bold mb-6">
//                 <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent animate-gradient-text">
//                   Soil Health Intelligence
//                 </span>
//               </h1>

//               <p className="text-gray-300 leading-relaxed text-lg mb-6 group-hover:text-gray-200 transition-colors duration-300">
//                 Our AI-driven Soil Vision module analyzes soil images to classify soil types and assess fertility 
//                 using deep learning. The system studies visual features like texture, color, granularity, and moisture 
//                 patterns to identify soil categories including Alluvial, Red, Black, Clay, Silt, or Gravel.
//               </p>

//               {/* Professional Features Section */}
//               <div className="space-y-4 mb-6">
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-4 rounded-xl border border-blue-500/20 group hover:border-blue-500/40 transition-all duration-300">
//                     <div className="flex items-center gap-3 mb-2">
//                       <div className="p-2 bg-blue-500/20 rounded-lg">
//                         <span className="text-blue-300">🔬</span>
//                       </div>
//                       <h3 className="text-blue-300 font-semibold">Texture Analysis</h3>
//                     </div>
//                     <p className="text-gray-400 text-sm">High-precision soil texture classification</p>
//                   </div>
                  
//                   <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-4 rounded-xl border border-cyan-500/20 group hover:border-cyan-500/40 transition-all duration-300">
//                     <div className="flex items-center gap-3 mb-2">
//                       <div className="p-2 bg-cyan-500/20 rounded-lg">
//                         <span className="text-cyan-300">⚗️</span>
//                       </div>
//                       <h3 className="text-cyan-300 font-semibold">Nutrient Mapping</h3>
//                     </div>
//                     <p className="text-gray-400 text-sm">NPK level estimation & deficiency detection</p>
//                   </div>
//                 </div>
                
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-4 rounded-xl border border-teal-500/20 group hover:border-teal-500/40 transition-all duration-300">
//                     <div className="flex items-center gap-3 mb-2">
//                       <div className="p-2 bg-teal-500/20 rounded-lg">
//                         <span className="text-teal-300">📊</span>
//                       </div>
//                       <h3 className="text-teal-300 font-semibold">pH & Moisture</h3>
//                     </div>
//                     <p className="text-gray-400 text-sm">Soil acidity and hydration level analysis</p>
//                   </div>
                  
//                   <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-4 rounded-xl border border-blue-400/20 group hover:border-blue-400/40 transition-all duration-300">
//                     <div className="flex items-center gap-3 mb-2">
//                       <div className="p-2 bg-blue-400/20 rounded-lg">
//                         <span className="text-blue-300">🌾</span>
//                       </div>
//                       <h3 className="text-blue-300 font-semibold">Crop Planning</h3>
//                     </div>
//                     <p className="text-gray-400 text-sm">Personalized crop suitability recommendations</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Professional Stats */}
//               <div className="grid grid-cols-3 gap-3 bg-gradient-to-r from-gray-800/60 to-gray-900/60 p-4 rounded-xl border border-gray-700/50">
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-blue-300 mb-1">95%</div>
//                   <div className="text-xs text-gray-400">Accuracy</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-cyan-300 mb-1">50+</div>
//                   <div className="text-xs text-gray-400">Soil Types</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-teal-300 mb-1">Instant</div>
//                   <div className="text-xs text-gray-400">Results</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Action Button */}
//           <button
//             onClick={() => setShowUpload(true)}
//             className="group relative w-full py-5 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 rounded-2xl font-bold text-lg overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/30 active:scale-95"
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
//             <span className="relative z-10 flex items-center justify-center gap-3">
//               <span className="text-2xl group-hover:rotate-180 transition-transform duration-700">🔬</span>
//               <span className="bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
//                 Analyze Soil Sample
//               </span>
//               <span className="group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300">✨</span>
//             </span>
//             <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-400 transform translate-x-full group-hover:translate-x-0 transition-transform duration-700 delay-100" />
//           </button>
//         </div>

//         {/* Right Image */}
//         <div className="flex justify-center items-center">
//           <div 
//             className="relative group cursor-pointer"
//             onClick={() => setShowUpload(true)}
//           >
//             <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-700" />
//             <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-teal-300 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            
//             <img
//               src="/image/soil-vision.jpg"
//               className="relative w-full h-[600px] object-cover rounded-3xl shadow-2xl border-2 border-gray-700/50 transform group-hover:scale-[1.01] transition-all duration-500 group-hover:shadow-blue-500/20 z-10"
//               alt="Soil Analysis"
//             />
            
//             {/* Overlay Effects */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             <div className="absolute bottom-6 left-6 right-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 rounded-2xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
//               <p className="text-blue-300 font-semibold text-lg">AI Soil Analysis</p>
//               <p className="text-gray-300 text-sm">Click to analyze soil composition</p>
//             </div>
//             <div className="absolute top-6 right-6 px-4 py-2 bg-black/70 backdrop-blur-sm rounded-full border border-blue-500/50 transform scale-0 group-hover:scale-100 transition-transform duration-500">
//               <span className="text-sm text-blue-300">Deep Learning</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Enhanced Upload Modal */}
//       {showUpload && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
//           {/* Animated Background Rings */}
//           <div className="absolute inset-0 overflow-hidden">
//             {[1, 2, 3].map((ring) => (
//               <div
//                 key={ring}
//                 className="absolute top-1/2 left-1/2 border border-blue-500/20 rounded-full"
//                 style={{
//                   width: `${ring * 300}px`,
//                   height: `${ring * 300}px`,
//                   transform: `translate(-50%, -50%)`,
//                   animation: `spin ${12 + ring * 4}s linear infinite`
//                 }}
//               />
//             ))}
//           </div>

//           <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 p-8 rounded-3xl w-full max-w-5xl border border-blue-500/30 shadow-2xl transform animate-scaleIn backdrop-blur-lg">
//             {/* Animated Border */}
//             <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 rounded-3xl blur opacity-30 animate-pulse" />
            
//             {/* Modal Header */}
//             <div className="flex justify-between items-center mb-8 relative z-10">
//               <div>
//                 <h2 className="text-3xl font-bold mb-2">
//                   <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//                     Soil Analysis Studio
//                   </span>
//                 </h2>
//                 <p className="text-gray-400">Upload soil image for comprehensive analysis</p>
//               </div>
//               <button
//                 onClick={() => {
//                   setShowUpload(false);
//                   setSelectedImg(null);
//                   setResult(null);
//                 }}
//                 className="p-3 hover:bg-gray-800/50 rounded-xl transition-all duration-300 group border border-gray-700 hover:border-red-400/50"
//               >
//                 <span className="text-2xl group-hover:rotate-90 transition-transform duration-300">×</span>
//               </button>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
//               {/* Upload Section */}
//               <div className="space-y-6">
//                 <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-6 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 group">
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="p-3 bg-blue-500/20 rounded-xl">
//                       <span className="text-2xl">🌍</span>
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-semibold text-blue-300">Soil Sample Capture</h3>
//                       <p className="text-sm text-gray-400">Upload clear image of soil sample</p>
//                     </div>
//                   </div>
                  
//                   <label
//                     htmlFor="soil-upload"
//                     className="block border-2 border-dashed border-gray-600 rounded-xl p-8 text-center hover:border-blue-500 transition-all duration-300 cursor-pointer group-hover:bg-gray-800/30"
//                   >
//                     <input
//                       type="file"
//                       onChange={handleFileUpload}
//                       accept="image/*"
//                       className="hidden"
//                       id="soil-upload"
//                     />
//                     <div className="text-5xl mb-4 animate-bounce-slow">🧫</div>
//                     <p className="text-gray-300 mb-2 font-medium">Click to upload soil image</p>
//                     <p className="text-sm text-gray-500">JPG, PNG, WEBP • Max 15MB</p>
//                   </label>
                  
//                   {selectedImg && (
//                     <div className="mt-6 relative group/image">
//                       <img
//                         src={selectedImg}
//                         alt="Selected soil"
//                         className="w-full h-48 object-cover rounded-xl border-2 border-gray-700 group-hover/image:border-blue-500 transition-all duration-300"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
//                     </div>
//                   )}
//                 </div>
                
//                 <button
//                   onClick={handleAnalyze}
//                   disabled={analyzing || !selectedImg}
//                   className={`analyze-btn group relative w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 overflow-hidden ${
//                     analyzing || !selectedImg
//                       ? "bg-gray-700 cursor-not-allowed"
//                       : "bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-2xl hover:shadow-blue-500/40"
//                   }`}
//                 >
//                   {analyzing ? (
//                     <span className="flex items-center justify-center gap-3">
//                       <div className="w-5 h-5 border-2 border-blue-300 border-t-transparent rounded-full animate-spin" />
//                       Analyzing Composition...
//                     </span>
//                   ) : (
//                     <>
//                       <span className="relative z-10">🧪 Analyze Soil Sample</span>
//                       <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
//                     </>
//                   )}
//                 </button>
//               </div>

//               {/* Results Section */}
//               <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-6 rounded-2xl border border-gray-700/50">
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="p-3 bg-cyan-500/20 rounded-xl">
//                     <span className="text-2xl">📊</span>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold text-cyan-300">Analysis Results</h3>
//                     <p className="text-sm text-gray-400">AI-powered soil health assessment</p>
//                   </div>
//                 </div>
                
//                 {result ? (
//                   <div className="space-y-4 animate-slideIn">
//                     {/* Primary Metrics */}
//                     <div className="grid grid-cols-2 gap-4">
//                       <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-4 rounded-xl border border-blue-500/30 group hover:border-blue-500/60 transition-all duration-300">
//                         <p className="text-sm text-gray-400 mb-1">Soil Type</p>
//                         <p className="text-xl font-bold text-blue-300 group-hover:text-blue-200">{result.soilType}</p>
//                       </div>
//                       <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-4 rounded-xl border border-cyan-500/30 group hover:border-cyan-500/60 transition-all duration-300">
//                         <p className="text-sm text-gray-400 mb-1">Confidence</p>
//                         <p className="text-xl font-bold text-cyan-300 group-hover:text-cyan-200">{result.confidence}</p>
//                       </div>
//                     </div>

//                     {/* Secondary Metrics */}
//                     <div className="grid grid-cols-3 gap-3">
//                       <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-3 rounded-xl text-center">
//                         <p className="text-sm text-gray-400">pH Level</p>
//                         <p className="text-lg font-bold text-blue-300">{result.ph}</p>
//                       </div>
//                       <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-3 rounded-xl text-center">
//                         <p className="text-sm text-gray-400">Moisture</p>
//                         <p className="text-lg font-bold text-cyan-300">{result.moisture}</p>
//                       </div>
//                       <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-3 rounded-xl text-center">
//                         <p className="text-sm text-gray-400">Organic Matter</p>
//                         <p className="text-lg font-bold text-teal-300">{result.organicMatter}</p>
//                       </div>
//                     </div>

//                     {/* Nutrient Levels */}
//                     <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-4 rounded-xl border border-cyan-500/20">
//                       <div className="flex items-center gap-2 mb-3">
//                         <span className="text-cyan-400">⚡</span>
//                         <p className="text-sm font-semibold text-gray-300">Nutrient Levels</p>
//                       </div>
//                       <div className="space-y-3">
//                         {result.nutrients.map((nutrient, i) => (
//                           <div key={i} className="space-y-1">
//                             <div className="flex justify-between text-sm">
//                               <span className="text-gray-400">{nutrient.name} Level</span>
//                               <span className={`font-medium ${
//                                 nutrient.status === 'High' ? 'text-blue-400' : 
//                                 nutrient.status === 'Medium' ? 'text-cyan-400' : 'text-red-400'
//                               }`}>
//                                 {nutrient.status}
//                               </span>
//                             </div>
//                             <div className="w-full bg-gray-700 rounded-full h-2">
//                               <div 
//                                 className={`h-2 rounded-full ${
//                                   nutrient.status === 'High' ? 'bg-gradient-to-r from-blue-500 to-cyan-400' : 
//                                   nutrient.status === 'Medium' ? 'bg-gradient-to-r from-cyan-500 to-teal-400' : 
//                                   'bg-gradient-to-r from-red-500 to-orange-400'
//                                 }`}
//                                 style={{ width: `${nutrient.level}%` }}
//                               />
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Recommendations */}
//                     <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-4 rounded-xl border border-teal-500/20">
//                       <div className="flex items-center gap-2 mb-3">
//                         <span className="text-teal-400">💡</span>
//                         <p className="text-sm font-semibold text-gray-300">AI Recommendations</p>
//                       </div>
//                       <ul className="space-y-2">
//                         {result.recommendations.map((rec, i) => (
//                           <li key={i} className="flex items-start gap-2 group">
//                             <span className="text-teal-400 mt-1 group-hover:rotate-12 transition-transform">→</span>
//                             <span className="text-gray-300 text-sm group-hover:text-gray-100">{rec}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     {/* Suitable Crops */}
//                     <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-4 rounded-xl border border-blue-500/30">
//                       <p className="text-sm text-gray-400 mb-2">Suitable Crops</p>
//                       <div className="flex flex-wrap gap-2">
//                         {result.suitableCrops.map((crop, i) => (
//                           <span 
//                             key={i} 
//                             className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-300 border border-blue-500/30"
//                           >
//                             {crop}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 ) : analyzing ? (
//                   <div className="h-full flex flex-col items-center justify-center text-center py-12">
//                     <div className="relative mb-6">
//                       <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-400 rounded-full animate-spin" />
//                       <div className="absolute inset-4 border-4 border-cyan-500/20 border-t-cyan-400 rounded-full animate-spin-reverse" />
//                     </div>
//                     <p className="text-gray-300 font-medium">Analyzing soil composition...</p>
//                     <p className="text-sm text-gray-500 mt-2">Processing texture, color, and nutrient patterns</p>
//                     <div className="mt-4 w-full bg-gray-700 rounded-full h-2">
//                       <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full animate-progress" />
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="h-full flex flex-col items-center justify-center text-center py-12">
//                     <div className="text-6xl mb-4 opacity-30 animate-float">🌱</div>
//                     <p className="text-gray-400 font-medium">Awaiting Soil Analysis</p>
//                     <p className="text-sm text-gray-500 mt-2">Upload a soil image to begin comprehensive analysis</p>
//                     <div className="mt-6 text-xs text-gray-600 space-y-1">
//                       <p>• Capture soil sample in natural light</p>
//                       <p>• Include soil texture and color reference</p>
//                       <p>• Avoid shadows and glare</p>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* CSS Animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(5deg); }
//         }
//         @keyframes float-delayed {
//           0%, 100% { transform: translateY(0px) translateX(0px); }
//           33% { transform: translateY(-15px) translateX(10px); }
//           66% { transform: translateY(10px) translateX(-10px); }
//         }
//         @keyframes spin {
//           from { transform: translate(-50%, -50%) rotate(0deg); }
//           to { transform: translate(-50%, -50%) rotate(360deg); }
//         }
//         @keyframes spin-reverse {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(-360deg); }
//         }
//         @keyframes gradient-text {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
//         @keyframes scaleIn {
//           from { transform: scale(0.95); opacity: 0; }
//           to { transform: scale(1); opacity: 1; }
//         }
//         @keyframes slideIn {
//           from { transform: translateY(20px); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
//         @keyframes progress {
//           0% { width: 0%; }
//           100% { width: 100%; }
//         }
//         @keyframes pulse {
//           0%, 100% { opacity: 0.2; }
//           50% { opacity: 0.5; }
//         }
//         @keyframes bounce-slow {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-15px); }
//         }
//         @keyframes bounce-delayed {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-10px); }
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         .animate-float-delayed {
//           animation: float-delayed 8s ease-in-out infinite;
//         }
//         .animate-gradient-text {
//           background-size: 200% 200%;
//           animation: gradient-text 3s ease infinite;
//         }
//         .animate-scaleIn {
//           animation: scaleIn 0.3s ease-out;
//         }
//         .animate-slideIn {
//           animation: slideIn 0.5s ease-out;
//         }
//         .animate-progress {
//           animation: progress 2s ease-in-out infinite;
//         }
//         .animate-bounce-slow {
//           animation: bounce-slow 2s ease-in-out infinite;
//         }
//         .animate-bounce-delayed {
//           animation: bounce-delayed 3s ease-in-out infinite;
//         }
//         .animate-spin-slow {
//           animation: spin 20s linear infinite;
//         }
//         .shake {
//           animation: shake 0.5s ease-in-out;
//         }
//         @keyframes shake {
//           0%, 100% { transform: translateX(0); }
//           25% { transform: translateX(-10px); }
//           75% { transform: translateX(10px); }
//         }
//       `}</style>
//     </div>
//   );
// };






















// import React, { useState, useEffect, useRef } from "react";

// export const SoilDiagnostics = () => {
//   const [showUpload, setShowUpload] = useState(false);
//   const [selectedImg, setSelectedImg] = useState(null);
//   const [analyzing, setAnalyzing] = useState(false);
//   const [result, setResult] = useState(null);
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);
//   const [particles, setParticles] = useState([]);
//   const containerRef = useRef(null);
//   const animationRef = useRef(null);

//   // Enhanced cursor effect
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setCursorPosition({ x: e.clientX, y: e.clientY });
      
//       // Create floating particles on movement
//       if (isHovering && Math.random() > 0.8) {
//         createSoilParticle(e.clientX, e.clientY);
//       }
//     };

//     window.addEventListener('mousemove', handleMouseMove);
    
//     // Animation for particles
//     animationRef.current = requestAnimationFrame(updateParticles);
    
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     };
//   }, [isHovering]);

//   const createSoilParticle = (x, y) => {
//     const colors = [
//       '#3b82f6', // blue-500
//       '#0ea5e9', // sky-500
//       '#06b6d4', // cyan-500
//       '#14b8a6', // teal-500
//       '#0d9488', // teal-600
//     ];
    
//     setParticles(prev => [...prev, {
//       id: Date.now() + Math.random(),
//       x,
//       y,
//       size: Math.random() * 4 + 1,
//       color: colors[Math.floor(Math.random() * colors.length)],
//       speedX: (Math.random() - 0.5) * 2,
//       speedY: (Math.random() - 0.5) * 2,
//       life: 1
//     }]);
//   };

//   const updateParticles = () => {
//     setParticles(prev => 
//       prev
//         .map(p => ({
//           ...p,
//           x: p.x + p.speedX,
//           y: p.y + p.speedY,
//           life: p.life - 0.02
//         }))
//         .filter(p => p.life > 0)
//     );
//     animationRef.current = requestAnimationFrame(updateParticles);
//   };

//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       // Create upload effect
//       const imageUrl = URL.createObjectURL(file);
//       setSelectedImg(imageUrl);
      
//       // Create particle burst
//       for (let i = 0; i < 15; i++) {
//         createSoilParticle(window.innerWidth / 2, window.innerHeight / 2);
//       }
//     }
//   };

//   const handleAnalyze = () => {
//     if (!selectedImg) {
//       // Shake animation
//       const btn = document.querySelector('.analyze-btn');
//       if (btn) {
//         btn.classList.add('shake');
//         setTimeout(() => btn.classList.remove('shake'), 500);
//       }
//       return;
//     }

//     setAnalyzing(true);
    
//     // Simulate analysis with progress
//     let progress = 0;
//     const interval = setInterval(() => {
//       progress += Math.random() * 25;
//       if (progress >= 100) {
//         clearInterval(interval);
        
//         setTimeout(() => {
//           const soilTypes = ['Alluvial', 'Black Cotton', 'Red Clay', 'Loamy', 'Sandy', 'Clay Loam'];
//           const nutrients = ['N', 'P', 'K'];
          
//           setResult({
//             soilType: soilTypes[Math.floor(Math.random() * soilTypes.length)],
//             confidence: `${Math.floor(Math.random() * 15) + 85}%`,
//             ph: (Math.random() * 3 + 5.5).toFixed(1),
//             nutrients: nutrients.map(nutrient => ({
//               name: nutrient,
//               level: Math.floor(Math.random() * 100),
//               status: ['Low', 'Medium', 'High'][Math.floor(Math.random() * 3)]
//             })),
//             moisture: `${Math.floor(Math.random() * 40) + 30}%`,
//             organicMatter: `${Math.floor(Math.random() * 5) + 2}%`,
//             recommendations: [
//               'Add compost to improve organic content',
//               'Adjust pH with lime application',
//               'Use nitrogen-fixing cover crops',
//               'Implement contour farming for erosion control',
//               'Schedule irrigation based on moisture levels'
//             ],
//             suitableCrops: ['Wheat', 'Corn', 'Soybeans', 'Lentils', 'Barley']
//           });
//           setAnalyzing(false);
          
//           // Success particles
//           for (let i = 0; i < 20; i++) {
//             setTimeout(() => {
//               createSoilParticle(window.innerWidth / 2, window.innerHeight / 2);
//             }, i * 50);
//           }
//         }, 800);
//       }
//     }, 100);
//   };

//   // Background grid effect
//   const BackgroundGrid = () => (
//     <div className="absolute inset-0 overflow-hidden opacity-10">
//       {Array.from({ length: 50 }).map((_, i) => (
//         <div
//           key={i}
//           className="absolute w-[1px] h-[1px] bg-blue-400 rounded-full"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             animation: `pulse ${3 + Math.random() * 4}s infinite alternate`
//           }}
//         />
//       ))}
//     </div>
//   );

//   return (
//     <div 
//       ref={containerRef}
//       className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4 md:px-10 pt-24 pb-20 overflow-hidden relative"
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//     >
//       {/* Custom Cursor Effect */}
//       <div
//         className="fixed pointer-events-none z-50 transition-transform duration-75"
//         style={{
//           left: `${cursorPosition.x}px`,
//           top: `${cursorPosition.y}px`,
//           transform: `translate(-50%, -50%) scale(${isHovering ? 1.3 : 1})`
//         }}
//       >
//         <div className="w-6 h-6 border-2 border-blue-400/50 rounded-full animate-ping" />
//         <div className="w-4 h-4 border border-blue-300 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
//         <div className="w-2 h-2 bg-blue-300 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
//       </div>

//       {/* Floating Particles */}
//       {particles.map(p => (
//         <div
//           key={p.id}
//           className="fixed pointer-events-none z-40 rounded-full"
//           style={{
//             left: `${p.x}px`,
//             top: `${p.y}px`,
//             width: `${p.size}px`,
//             height: `${p.size}px`,
//             backgroundColor: p.color,
//             opacity: p.life * 0.7,
//             transform: `translate(-50%, -50%)`,
//           }}
//         />
//       ))}

//       {/* Background Effects */}
//       <BackgroundGrid />
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-float" />
//         <div className="absolute bottom-32 right-32 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-float-delayed" />
//         <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl animate-pulse" />
//       </div>

//       {/* Floating Soil Icons */}
//       <div className="absolute top-10 left-10 text-3xl opacity-20 animate-bounce-slow">🌱</div>
//       <div className="absolute bottom-20 right-10 text-4xl opacity-20 animate-bounce-delayed">🧪</div>
//       <div className="absolute top-32 right-20 text-2xl opacity-15 animate-spin-slow">🌾</div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-7xl mx-auto relative z-10">
//         {/* Left Content */}
//         <div className="space-y-8">
//           {/* Main Card */}
//           <div className="relative">
//             <div className="absolute -inset-3 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-3xl blur-xl opacity-20" />
//             <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 p-8 rounded-2xl border border-gray-700/50 shadow-2xl backdrop-blur-sm relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-48 h-48 bg-gray-700/10 rounded-full blur-3xl transform translate-x-24 -translate-y-24" />
              
//               {/* Header Badge */}
//               <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-gradient-to-r from-gray-700/20 to-gray-600/20 rounded-full border border-gray-600/30">
//                 <span className="text-2xl animate-bounce-slow">🧪</span>
//                 <span className="text-sm font-bold text-gray-300 tracking-wider">SOIL VISION AI</span>
//               </div>

//               <h1 className="text-4xl md:text-5xl font-bold mb-6">
//                 <span className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 bg-clip-text text-transparent">
//                   Soil Health Intelligence
//                 </span>
//               </h1>

//               <p className="text-gray-300 leading-relaxed text-lg mb-8">
//                 Our AI-driven Soil Vision module analyzes soil images to classify soil types and assess fertility 
//                 using deep learning. The system studies visual features like texture, color, granularity, and moisture 
//                 patterns to identify soil categories including Alluvial, Red, Black, Clay, Silt, or Gravel.
//               </p>

//               {/* Features Grid - Matching the image layout */}
//               <div className="mb-6">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
//                   {/* Texture Analysis */}
//                   <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-5 rounded-xl border border-gray-700/50">
//                     <h3 className="text-lg font-semibold text-gray-200 mb-2">Texture Analysis</h3>
//                     <p className="text-gray-400 text-sm">High-precision soil texture classification</p>
//                   </div>
                  
//                   {/* pH & Moisture */}
//                   <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-5 rounded-xl border border-gray-700/50">
//                     <h3 className="text-lg font-semibold text-gray-200 mb-2">pH & Moisture</h3>
//                     <p className="text-gray-400 text-sm">Soil acidity and hydration level analysis</p>
//                   </div>
                  
//                   {/* 95% Accuracy */}
//                   <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-5 rounded-xl border border-gray-700/50">
//                     <div className="text-2xl font-bold text-gray-100 mb-1">95%</div>
//                     <p className="text-gray-400 text-sm">Accuracy</p>
//                   </div>
//                 </div>
                
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                   {/* 50+ Soil Types */}
//                   <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-5 rounded-xl border border-gray-700/50">
//                     <div className="text-2xl font-bold text-gray-100 mb-1">50+</div>
//                     <p className="text-gray-400 text-sm">Soil Types</p>
//                   </div>
                  
//                   {/* Nutrient Mapping */}
//                   <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-5 rounded-xl border border-gray-700/50">
//                     <h3 className="text-lg font-semibold text-gray-200 mb-2">Nutrient Mapping</h3>
//                     <p className="text-gray-400 text-sm">NPK level estimation & deficiency detection</p>
//                   </div>
                  
//                   {/* Crop Planning */}
//                   <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-5 rounded-xl border border-gray-700/50">
//                     <h3 className="text-lg font-semibold text-gray-200 mb-2">Crop Planning</h3>
//                     <p className="text-gray-400 text-sm">Personalized crop suitability recommendations</p>
//                   </div>
//                 </div>
                
//                 {/* Instant Results - Centered bottom row */}
//                 <div className="flex justify-center mt-4">
//                   <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-5 rounded-xl border border-gray-700/50 w-full max-w-xs">
//                     <div className="text-2xl font-bold text-gray-100 mb-1 text-center">Instant</div>
//                     <p className="text-gray-400 text-sm text-center">Results</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Divider */}
//               <div className="border-t border-gray-700/50 my-6"></div>

//               {/* AI Soil Analysis Footer */}
//               <div className="text-center">
//                 <p className="text-gray-200 font-semibold text-lg mb-1">AI Soil Analysis</p>
//                 <p className="text-gray-300 text-sm">Click to analyze soil composition</p>
//               </div>
//             </div>
//           </div>

//           {/* Action Button - Professional styling */}
//           <button
//             onClick={() => setShowUpload(true)}
//             className="group relative w-full py-5 bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl font-bold text-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-95 border border-gray-600/50"
//           >
//             <span className="relative z-10 flex items-center justify-center gap-3">
//               <span className="text-2xl">🔬</span>
//               <span className="text-gray-100">Analyze Soil Sample</span>
//             </span>
//           </button>
//         </div>

//         {/* Right Image - Professional styling */}
//         <div className="flex justify-center items-center">
//           <div 
//             className="relative cursor-pointer"
//             onClick={() => setShowUpload(true)}
//           >
//             <div className="absolute -inset-4 bg-gradient-to-r from-gray-700 to-gray-600 rounded-3xl blur-2xl opacity-10" />
            
//             <img
//               src="/image/soil-vision.jpg"
//               className="relative w-full h-[600px] object-cover rounded-3xl shadow-2xl border-2 border-gray-700/50 z-10"
//               alt="Soil Analysis"
//             />
            
//             {/* Professional Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl" />
//             <div className="absolute bottom-6 left-6 right-6 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6 rounded-2xl">
//               <p className="text-gray-100 font-semibold text-lg">AI Soil Analysis</p>
//               <p className="text-gray-300 text-sm">Click to analyze soil composition</p>
//             </div>
//             <div className="absolute top-6 right-6 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full border border-gray-600/50">
//               <span className="text-sm text-gray-300">Deep Learning</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Professional Upload Modal */}
//       {showUpload && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
//           <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl w-full max-w-5xl border border-gray-700/50 shadow-2xl transform animate-scaleIn backdrop-blur-sm">
//             {/* Modal Header */}
//             <div className="flex justify-between items-center mb-8">
//               <div>
//                 <h2 className="text-3xl font-bold mb-2 text-gray-100">
//                   Soil Analysis Studio
//                 </h2>
//                 <p className="text-gray-400">Upload soil image for comprehensive analysis</p>
//               </div>
//               <button
//                 onClick={() => {
//                   setShowUpload(false);
//                   setSelectedImg(null);
//                   setResult(null);
//                 }}
//                 className="p-3 hover:bg-gray-800 rounded-lg transition-colors duration-300 text-gray-400 hover:text-gray-200"
//               >
//                 <span className="text-2xl">×</span>
//               </button>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               {/* Upload Section */}
//               <div className="space-y-6">
//                 <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50">
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="p-3 bg-gray-700/50 rounded-xl">
//                       <span className="text-2xl text-gray-300">🌍</span>
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-semibold text-gray-200">Soil Sample Capture</h3>
//                       <p className="text-sm text-gray-400">Upload clear image of soil sample</p>
//                     </div>
//                   </div>
                  
//                   <label
//                     htmlFor="soil-upload"
//                     className="block border-2 border-dashed border-gray-700 rounded-xl p-8 text-center hover:border-gray-600 transition-all duration-300 cursor-pointer"
//                   >
//                     <input
//                       type="file"
//                       onChange={handleFileUpload}
//                       accept="image/*"
//                       className="hidden"
//                       id="soil-upload"
//                     />
//                     <div className="text-5xl mb-4 text-gray-500">🧫</div>
//                     <p className="text-gray-300 mb-2 font-medium">Click to upload soil image</p>
//                     <p className="text-sm text-gray-500">JPG, PNG, WEBP • Max 15MB</p>
//                   </label>
                  
//                   {selectedImg && (
//                     <div className="mt-6">
//                       <img
//                         src={selectedImg}
//                         alt="Selected soil"
//                         className="w-full h-48 object-cover rounded-xl border-2 border-gray-700"
//                       />
//                     </div>
//                   )}
//                 </div>
                
//                 <button
//                   onClick={handleAnalyze}
//                   disabled={analyzing || !selectedImg}
//                   className={`analyze-btn w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
//                     analyzing || !selectedImg
//                       ? "bg-gray-700 cursor-not-allowed text-gray-500"
//                       : "bg-gradient-to-r from-gray-700 to-gray-600 hover:shadow-lg text-gray-100 border border-gray-600/50"
//                   }`}
//                 >
//                   {analyzing ? (
//                     <span className="flex items-center justify-center gap-3">
//                       <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
//                       Analyzing Composition...
//                     </span>
//                   ) : (
//                     "🧪 Analyze Soil Sample"
//                   )}
//                 </button>
//               </div>

//               {/* Results Section */}
//               <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50">
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="p-3 bg-gray-700/50 rounded-xl">
//                     <span className="text-2xl text-gray-300">📊</span>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-200">Analysis Results</h3>
//                     <p className="text-sm text-gray-400">AI-powered soil health assessment</p>
//                   </div>
//                 </div>
                
//                 {result ? (
//                   <div className="space-y-4 animate-slideIn">
//                     {/* Primary Metrics */}
//                     <div className="grid grid-cols-2 gap-4">
//                       <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
//                         <p className="text-sm text-gray-400 mb-1">Soil Type</p>
//                         <p className="text-xl font-bold text-gray-100">{result.soilType}</p>
//                       </div>
//                       <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
//                         <p className="text-sm text-gray-400 mb-1">Confidence</p>
//                         <p className="text-xl font-bold text-gray-100">{result.confidence}</p>
//                       </div>
//                     </div>

//                     {/* Secondary Metrics */}
//                     <div className="grid grid-cols-3 gap-3">
//                       <div className="bg-gray-900/50 p-3 rounded-xl text-center border border-gray-700">
//                         <p className="text-sm text-gray-400">pH Level</p>
//                         <p className="text-lg font-bold text-gray-100">{result.ph}</p>
//                       </div>
//                       <div className="bg-gray-900/50 p-3 rounded-xl text-center border border-gray-700">
//                         <p className="text-sm text-gray-400">Moisture</p>
//                         <p className="text-lg font-bold text-gray-100">{result.moisture}</p>
//                       </div>
//                       <div className="bg-gray-900/50 p-3 rounded-xl text-center border border-gray-700">
//                         <p className="text-sm text-gray-400">Organic Matter</p>
//                         <p className="text-lg font-bold text-gray-100">{result.organicMatter}</p>
//                       </div>
//                     </div>

//                     {/* Nutrient Levels */}
//                     <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
//                       <div className="flex items-center gap-2 mb-3">
//                         <span className="text-gray-400">⚡</span>
//                         <p className="text-sm font-semibold text-gray-300">Nutrient Levels</p>
//                       </div>
//                       <div className="space-y-3">
//                         {result.nutrients.map((nutrient, i) => (
//                           <div key={i} className="space-y-1">
//                             <div className="flex justify-between text-sm">
//                               <span className="text-gray-400">{nutrient.name} Level</span>
//                               <span className={`font-medium ${
//                                 nutrient.status === 'High' ? 'text-green-400' : 
//                                 nutrient.status === 'Medium' ? 'text-yellow-400' : 'text-red-400'
//                               }`}>
//                                 {nutrient.status}
//                               </span>
//                             </div>
//                             <div className="w-full bg-gray-700 rounded-full h-2">
//                               <div 
//                                 className={`h-2 rounded-full ${
//                                   nutrient.status === 'High' ? 'bg-green-500' : 
//                                   nutrient.status === 'Medium' ? 'bg-yellow-500' : 'bg-red-500'
//                                 }`}
//                                 style={{ width: `${nutrient.level}%` }}
//                               />
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Recommendations */}
//                     <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
//                       <div className="flex items-center gap-2 mb-3">
//                         <span className="text-gray-400">💡</span>
//                         <p className="text-sm font-semibold text-gray-300">AI Recommendations</p>
//                       </div>
//                       <ul className="space-y-2">
//                         {result.recommendations.map((rec, i) => (
//                           <li key={i} className="flex items-start gap-2">
//                             <span className="text-gray-400 mt-1">→</span>
//                             <span className="text-gray-300 text-sm">{rec}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     {/* Suitable Crops */}
//                     <div className="bg-gray-800/30 p-4 rounded-xl border border-gray-700">
//                       <p className="text-sm text-gray-400 mb-2">Suitable Crops</p>
//                       <div className="flex flex-wrap gap-2">
//                         {result.suitableCrops.map((crop, i) => (
//                           <span 
//                             key={i} 
//                             className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 border border-gray-600"
//                           >
//                             {crop}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 ) : analyzing ? (
//                   <div className="h-full flex flex-col items-center justify-center text-center py-12">
//                     <div className="relative mb-6">
//                       <div className="w-16 h-16 border-4 border-gray-600 border-t-gray-400 rounded-full animate-spin" />
//                     </div>
//                     <p className="text-gray-300 font-medium">Analyzing soil composition...</p>
//                     <p className="text-sm text-gray-500 mt-2">Processing texture, color, and nutrient patterns</p>
//                     <div className="mt-4 w-full bg-gray-700 rounded-full h-2">
//                       <div className="bg-gray-500 h-2 rounded-full animate-progress" />
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="h-full flex flex-col items-center justify-center text-center py-12">
//                     <div className="text-6xl mb-4 opacity-30 text-gray-500">🌱</div>
//                     <p className="text-gray-400 font-medium">Awaiting Soil Analysis</p>
//                     <p className="text-sm text-gray-500 mt-2">Upload a soil image to begin comprehensive analysis</p>
//                     <div className="mt-6 text-xs text-gray-600 space-y-1">
//                       <p>• Capture soil sample in natural light</p>
//                       <p>• Include soil texture and color reference</p>
//                       <p>• Avoid shadows and glare</p>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* CSS Animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(5deg); }
//         }
//         @keyframes float-delayed {
//           0%, 100% { transform: translateY(0px) translateX(0px); }
//           33% { transform: translateY(-15px) translateX(10px); }
//           66% { transform: translateY(10px) translateX(-10px); }
//         }
//         @keyframes spin {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         @keyframes scaleIn {
//           from { transform: scale(0.95); opacity: 0; }
//           to { transform: scale(1); opacity: 1; }
//         }
//         @keyframes slideIn {
//           from { transform: translateY(20px); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
//         @keyframes progress {
//           0% { width: 0%; }
//           100% { width: 100%; }
//         }
//         @keyframes pulse {
//           0%, 100% { opacity: 0.2; }
//           50% { opacity: 0.5; }
//         }
//         @keyframes bounce-slow {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-15px); }
//         }
//         @keyframes bounce-delayed {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-10px); }
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         .animate-float-delayed {
//           animation: float-delayed 8s ease-in-out infinite;
//         }
//         .animate-scaleIn {
//           animation: scaleIn 0.3s ease-out;
//         }
//         .animate-slideIn {
//           animation: slideIn 0.5s ease-out;
//         }
//         .animate-progress {
//           animation: progress 2s ease-in-out infinite;
//         }
//         .animate-bounce-slow {
//           animation: bounce-slow 2s ease-in-out infinite;
//         }
//         .animate-bounce-delayed {
//           animation: bounce-delayed 3s ease-in-out infinite;
//         }
//         .animate-spin-slow {
//           animation: spin 20s linear infinite;
//         }
//         .shake {
//           animation: shake 0.5s ease-in-out;
//         }
//         @keyframes shake {
//           0%, 100% { transform: translateX(0); }
//           25% { transform: translateX(-10px); }
//           75% { transform: translateX(10px); }
//         }
//       `}</style>
//     </div>
//   );
// };


































import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export const SoilDiagnostics = () => {
  // State Management
  const [showUpload, setShowUpload] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedImgFile, setSelectedImgFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState("");
  const [seasonCrops, setSeasonCrops] = useState([]);
  const [city, setCity] = useState("Belagavi");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [hoverState, setHoverState] = useState({});
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [analysisCancelled, setAnalysisCancelled] = useState(false);
  const [error, setError] = useState(null);
  
  // Refs
  const abortControllerRef = useRef(null);
  const fileInputRef = useRef(null);
  const containerRef = useRef(null);
  const dragRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  // Mouse movement effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Fetch seasons on component mount
  useEffect(() => {
    fetchSeasons();
  }, []);

  const fetchSeasons = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/api/seasons");
      const data = await response.json();
      setSeasons(data.seasons || []);
    } catch (err) {
      console.error("Failed to fetch seasons:", err);
      // Fallback seasons
      setSeasons(["Kharif", "Rabi", "Zaid", "Summer", "Winter"]);
    }
  };

  // Handle file upload with drag & drop
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    if (!dragRef.current?.contains(e.relatedTarget)) {
      setIsDragging(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file) => {
    // Validate file type
    if (!file.type.match('image.*')) {
      setError("Please select an image file (JPEG, PNG, etc.)");
      return;
    }

    // Validate file size (10MB max)
    if (file.size > 10 * 1024 * 1024) {
      setError("File size too large. Please select an image under 10MB");
      return;
    }

    setError(null);
    const imageUrl = URL.createObjectURL(file);
    setSelectedImg(imageUrl);
    setSelectedImgFile(file);
    setResult(null);
    setAnalysisCancelled(false);
  };

  // Analyze soil with progress and cancel option
  const handleAnalyze = async () => {
    if (!selectedImgFile) {
      setError("Please upload an image first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedImgFile);
    formData.append("city", city);

    // Create new AbortController for cancel option
    abortControllerRef.current = new AbortController();
    setLoading(true);
    setAnalysisCancelled(false);
    setUploadProgress(0);
    setError(null);

    try {
      // Simulate progress (optional - remove if not needed)
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 10;
        });
      }, 300);

      // Make API call
      const response = await fetch("http://127.0.0.1:5000/api/soil", {
        method: "POST",
        body: formData,
        signal: abortControllerRef.current.signal,
      });

      clearInterval(progressInterval);
      setUploadProgress(100);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setResult(data);
      setSeasonCrops([]);
      
      // Reset after successful analysis
      setTimeout(() => {
        setUploadProgress(0);
      }, 1000);

    } catch (err) {
      if (err.name === 'AbortError') {
        setError("Analysis was cancelled");
        setAnalysisCancelled(true);
      } else {
        setError(err.message || "Error analyzing soil. Please try again.");
        console.error("Analysis error:", err);
      }
    } finally {
      setLoading(false);
      abortControllerRef.current = null;
    }
  };

  // Cancel analysis
  const handleCancelAnalysis = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      setLoading(false);
      setUploadProgress(0);
      setAnalysisCancelled(true);
    }
  };

  // Get season-based crops
  const handleSeasonSelect = async () => {
    if (!selectedSeason) {
      setError("Please select a season!");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("http://127.0.0.1:5000/api/crop-by-season", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ season: selectedSeason }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setSeasonCrops(data.recommended_crops || []);
    } catch (err) {
      setError("Failed to fetch season crops. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Reset everything
  const handleReset = () => {
    setSelectedImg(null);
    setSelectedImgFile(null);
    setResult(null);
    setSeasonCrops([]);
    setUploadProgress(0);
    setError(null);
    setAnalysisCancelled(false);
    
    // Clean up object URL
    if (selectedImg) {
      URL.revokeObjectURL(selectedImg);
    }
    
    // Cancel any ongoing analysis
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
  };

  // Close modal and reset
  const handleCloseModal = () => {
    setShowUpload(false);
    handleReset();
  };

  // Hover effects
  const handleMouseEnter = (element) => {
    setHoverState(prev => ({ ...prev, [element]: true }));
  };

  const handleMouseLeave = (element) => {
    setHoverState(prev => ({ ...prev, [element]: false }));
  };

  // Background effect component
  const BackgroundEffects = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(34, 197, 94, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(34, 197, 94, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }} />
    </div>
  );

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-6 md:px-10 pt-24 pb-20 overflow-hidden relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Animated Cursor Effect */}
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-75"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.2 : 1})`
        }}
      >
        <div className="w-4 h-4 bg-green-400/30 rounded-full animate-ping" />
        <div className="w-2 h-2 bg-green-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Background Effects */}
      <BackgroundEffects />

      {/* Floating Icons */}
      <div className="absolute top-10 left-10 text-3xl opacity-10 animate-bounce-slow">🌱</div>
      <div className="absolute bottom-20 right-10 text-4xl opacity-10 animate-bounce-delayed">🧪</div>
      <div className="absolute top-32 right-20 text-2xl opacity-5 animate-spin-slow">🌾</div>

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        
        {/* LEFT TEXT BLOCK */}
        <div className="space-y-8">
          {/* Main Card with Glass Effect */}
          <div className="relative group">
            <div className="absolute -inset-3 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500" />
            <div className="relative bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 shadow-2xl hover:border-green-500/30 transition-all duration-300">
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-green-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              
              <div className="relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-full border border-green-600/30">
                  <span className="text-xl animate-pulse">⚡</span>
                  <span className="text-sm font-bold text-green-300 tracking-wider">AI-POWERED ANALYSIS</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-green-300 via-emerald-200 to-teal-100 bg-clip-text text-transparent">
                    Soil Vision Prediction
                  </span>
                  <span className="ml-3 text-3xl">🧪</span>
                </h1>

                <p className="text-gray-300 leading-relaxed text-lg mb-8">
                  Our AI-driven Soil Vision module analyzes soil images to classify soil types and assess fertility 
                  using deep learning. The system studies visual features like texture, color, granularity, and moisture 
                  patterns to identify soil categories and provide precise recommendations.
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {[
                    { icon: "🔬", label: "Soil Type", value: "12+ Types" },
                    { icon: "📊", label: "Accuracy", value: "95%" },
                    { icon: "⚡", label: "Speed", value: "< 10s" },
                    { icon: "🌡️", label: "pH Analysis", value: "Precise" },
                    { icon: "🌾", label: "Crops", value: "50+ Varieties" },
                    { icon: "📈", label: "NPK Levels", value: "Detailed" },
                  ].map((feature, idx) => (
                    <div 
                      key={idx}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-4 rounded-xl border border-gray-700/50 hover:border-green-500/30 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
                      onMouseEnter={() => handleMouseEnter(`feature-${idx}`)}
                      onMouseLeave={() => handleMouseLeave(`feature-${idx}`)}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">{feature.icon}</span>
                        <span className="text-sm font-semibold text-gray-200">{feature.label}</span>
                      </div>
                      <div className="text-lg font-bold text-green-400">{feature.value}</div>
                    </div>
                  ))}
                </div>

                {/* Technology Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Deep Learning", "CNN", "Weather API", "Soil Science", "AI/ML"].map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-full text-xs text-green-300 border border-green-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => setShowUpload(true)}
            className="group relative w-full py-5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl font-bold text-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/30 active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-400/20 to-green-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <span className="relative z-10 flex items-center justify-center gap-3">
              <span className="text-2xl group-hover:animate-spin">🚀</span>
              <span className="text-gray-100">Start Soil Analysis</span>
            </span>
          </button>
        </div>

        {/* RIGHT IMAGE BLOCK */}
        <div className="flex justify-center items-center">
          <div 
            className="relative group cursor-pointer"
            onClick={() => setShowUpload(true)}
            onMouseEnter={() => handleMouseEnter('mainImage')}
            onMouseLeave={() => handleMouseLeave('mainImage')}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
            
            <div className="relative w-full h-[600px] rounded-3xl shadow-2xl border-2 border-gray-700/50 overflow-hidden group-hover:border-green-500/50 transition-all duration-500">
              <img
                src="/images/soil-vision.jpg"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="Soil Vision AI Analysis"
                onError={(e) => {
                  e.target.src = `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80`;
                }}
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6 rounded-2xl backdrop-blur-sm border border-green-500/20">
                  <p className="text-gray-100 font-semibold text-xl mb-2">AI Soil Analysis</p>
                  <p className="text-gray-300 text-sm">Click to analyze soil composition with AI</p>
                </div>
              </div>
              
              {/* Tech Badge */}
              <div className="absolute top-6 right-6 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full border border-green-600/50 group-hover:bg-green-900/30 transition-all duration-300">
                <span className="text-sm text-green-300">Deep Learning</span>
              </div>
              
              {/* Hover Indicator */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/50 backdrop-blur-sm p-6 rounded-full border-2 border-green-400/50 animate-pulse">
                  <span className="text-3xl">🔬</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL - Upload & Results */}
      {showUpload && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-black/90 backdrop-blur-sm overflow-y-auto">
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl w-full max-w-6xl border border-gray-700/50 shadow-2xl my-8">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-6 right-6 p-3 hover:bg-gray-800 rounded-xl transition-all duration-300 text-gray-400 hover:text-gray-200 hover:rotate-90 z-50"
            >
              <span className="text-2xl">×</span>
            </button>

            {/* Modal Header */}
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold mb-2">
                <span className="bg-gradient-to-r from-green-300 to-emerald-200 bg-clip-text text-transparent">
                  Soil Analysis Studio
                </span>
              </h2>
              <p className="text-gray-400">Upload soil image for comprehensive AI analysis</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* UPLOAD PANEL */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700/50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-xl border border-green-600/30">
                      <span className="text-2xl text-green-300">📸</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-200">Soil Sample Upload</h3>
                      <p className="text-sm text-gray-400">Upload clear image of soil sample</p>
                    </div>
                  </div>

                  {/* City Input */}
                  <div className="mb-6">
                    <label className="block text-gray-300 mb-2 font-medium">
                      Enter City for Weather Analysis
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all duration-300"
                      placeholder="e.g., Belagavi"
                    />
                  </div>

                  {/* Drag & Drop Area */}
                  <div
                    ref={dragRef}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 cursor-pointer
                      ${isDragging 
                        ? 'border-green-500 bg-green-900/20' 
                        : 'border-gray-700 hover:border-green-500/50 hover:bg-gray-800/30'
                      }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      onChange={handleFileUpload}
                      accept="image/*"
                      className="hidden"
                    />
                    
                    <div className={`text-6xl mb-4 transition-transform duration-300 ${isDragging ? 'scale-110' : ''}`}>
                      {isDragging ? '📂' : '📁'}
                    </div>
                    
                    <p className="text-gray-300 mb-2 font-medium">
                      {isDragging ? 'Drop soil image here' : 'Click or drag & drop to upload'}
                    </p>
                    <p className="text-sm text-gray-500">Supported: JPG, PNG • Max 10MB</p>
                    
                    <div className="mt-4 text-xs text-gray-600 space-y-1">
                      <p>• Capture soil in natural daylight</p>
                      <p>• Include scale reference if possible</p>
                      <p>• Avoid shadows and glare</p>
                    </div>
                  </div>

                  {/* Image Preview */}
                  {selectedImg && (
                    <div className="mt-6">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-gray-300 font-medium">Selected Image</span>
                        <button
                          onClick={() => {
                            URL.revokeObjectURL(selectedImg);
                            setSelectedImg(null);
                            setSelectedImgFile(null);
                          }}
                          className="text-xs text-red-400 hover:text-red-300 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                      <div className="relative group">
                        <img
                          src={selectedImg}
                          alt="Selected soil"
                          className="w-full h-48 object-cover rounded-xl border-2 border-gray-700 group-hover:border-green-500/50 transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                          <span className="text-green-300 font-medium">Click to analyze</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Error Display */}
                  {error && (
                    <div className="mt-4 p-4 bg-red-900/20 border border-red-700/50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <span className="text-red-400">⚠️</span>
                        <span className="text-red-300 text-sm">{error}</span>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="mt-6 space-y-4">
                    <button
                      onClick={handleAnalyze}
                      disabled={loading || !selectedImgFile}
                      className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 relative overflow-hidden group
                        ${loading || !selectedImgFile
                          ? "bg-gray-700 cursor-not-allowed text-gray-500"
                          : "bg-gradient-to-r from-green-600 to-emerald-600 hover:shadow-lg hover:shadow-green-500/30 text-gray-100"
                        }`}
                    >
                      {loading ? (
                        <span className="flex items-center justify-center gap-3">
                          <div className="w-5 h-5 border-2 border-gray-300 border-t-transparent rounded-full animate-spin" />
                          Analyzing... {uploadProgress}%
                        </span>
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-400/20 to-green-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                          <span className="relative z-10 flex items-center justify-center gap-3">
                            <span className="text-2xl">🔬</span>
                            Analyze Soil Sample
                          </span>
                        </>
                      )}
                    </button>

                    {/* Cancel Button */}
                    {loading && (
                      <button
                        onClick={handleCancelAnalysis}
                        className="w-full py-3 bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl font-semibold text-gray-100 hover:bg-gray-600 transition-all duration-300"
                      >
                        Cancel Analysis
                      </button>
                    )}

                    {/* Progress Bar */}
                    {loading && uploadProgress > 0 && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm text-gray-400">
                          <span>Processing</span>
                          <span>{uploadProgress}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${uploadProgress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* RESULTS PANEL */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700/50 overflow-auto max-h-[70vh]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-emerald-900/20 to-teal-900/20 rounded-xl border border-emerald-600/30">
                    <span className="text-2xl text-emerald-300">📊</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-200">Analysis Results</h3>
                    <p className="text-sm text-gray-400">AI-powered soil health assessment</p>
                  </div>
                </div>

                {analysisCancelled ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4 opacity-30">⏹️</div>
                    <p className="text-gray-300 font-medium mb-2">Analysis Cancelled</p>
                    <p className="text-gray-500 text-sm">The soil analysis was cancelled by the user.</p>
                    <button
                      onClick={() => setAnalysisCancelled(false)}
                      className="mt-4 px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg text-gray-100 font-medium hover:shadow-lg transition-all duration-300"
                    >
                      Start New Analysis
                    </button>
                  </div>
                ) : !result ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4 opacity-20 animate-pulse">🌱</div>
                    <p className="text-gray-300 font-medium mb-2">Awaiting Soil Analysis</p>
                    <p className="text-gray-500 text-sm">Upload a soil image to begin comprehensive analysis</p>
                    <div className="mt-6 text-xs text-gray-600 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        <span>Capture soil sample in natural light</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        <span>Include soil texture and color reference</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        <span>Avoid shadows and glare</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6 animate-slideIn">
                    {/* Soil Information */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-4 rounded-xl border border-green-700/30">
                        <p className="text-sm text-gray-400 mb-1">Soil Type</p>
                        <p className="text-2xl font-bold text-green-300">
                          {result.soil_info?.soil_type || "N/A"}
                        </p>
                      </div>
                      <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-4 rounded-xl border border-green-700/30">
                        <p className="text-sm text-gray-400 mb-1">pH Level</p>
                        <p className="text-2xl font-bold text-green-300">
                          {result.soil_info?.ph || "N/A"}
                        </p>
                      </div>
                    </div>

                    {/* NPK Values */}
                    <div className="bg-gray-900/30 p-4 rounded-xl border border-gray-700">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-green-400">⚡</span>
                        <p className="text-sm font-semibold text-gray-300">NPK Analysis</p>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { key: 'N', label: 'Nitrogen', color: 'from-blue-500 to-cyan-500' },
                          { key: 'P', label: 'Phosphorus', color: 'from-purple-500 to-pink-500' },
                          { key: 'K', label: 'Potassium', color: 'from-orange-500 to-red-500' },
                        ].map((nutrient, idx) => {
                          const value = result.soil_info?.npk?.[nutrient.key];
                          return (
                            <div key={idx} className="text-center">
                              <p className="text-sm text-gray-400 mb-2">{nutrient.label}</p>
                              <div className={`h-2 bg-gradient-to-r ${nutrient.color} rounded-full mb-1`} />
                              <p className="text-lg font-bold text-gray-100">{value || "N/A"}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Recommended Crops */}
                    <div className="bg-gradient-to-br from-emerald-900/10 to-teal-900/10 p-4 rounded-xl border border-emerald-700/20">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-emerald-400">🌾</span>
                        <p className="text-sm font-semibold text-gray-300">Recommended Crops</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {(Array.isArray(result.soil_info?.recommended_crops) 
                          ? result.soil_info.recommended_crops 
                          : [result.soil_info?.recommended_crops]
                        ).map((crop, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1.5 bg-gradient-to-r from-emerald-900/20 to-green-900/20 rounded-full text-sm text-emerald-300 border border-emerald-600/30"
                          >
                            {crop}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Fertilizer Recommendations */}
                    <div className="bg-gradient-to-br from-amber-900/10 to-yellow-900/10 p-4 rounded-xl border border-amber-700/20">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-amber-400">🧪</span>
                        <p className="text-sm font-semibold text-gray-300">Fertilizer Recommendations</p>
                      </div>
                      <p className="text-gray-300 text-sm">
                        {result.soil_info?.recommended_fertilizers || "N/A"}
                      </p>
                    </div>

                    {/* Weather Information */}
                    <div className="bg-gradient-to-br from-blue-900/10 to-cyan-900/10 p-4 rounded-xl border border-blue-700/20">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-blue-400">🌤️</span>
                        <p className="text-sm font-semibold text-gray-300">
                          Weather in {city}
                        </p>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="text-center">
                          <p className="text-xs text-gray-400">Temperature</p>
                          <p className="text-lg font-bold text-blue-300">
                            {result.weather?.current_temperature || "N/A"}°C
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-gray-400">Humidity</p>
                          <p className="text-lg font-bold text-blue-300">
                            {result.weather?.current_humidity || "N/A"}%
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-gray-400">Condition</p>
                          <p className="text-lg font-bold text-blue-300">
                            {result.weather?.weather_description || "N/A"}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Season-based Recommendations */}
                    <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 p-4 rounded-xl border border-purple-700/20">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-purple-400">📅</span>
                        <p className="text-sm font-semibold text-gray-300">Season Based Recommendations</p>
                      </div>
                      
                      <select
                        value={selectedSeason}
                        onChange={(e) => setSelectedSeason(e.target.value)}
                        className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-100 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a season</option>
                        {seasons.map((season) => (
                          <option key={season} value={season}>{season}</option>
                        ))}
                      </select>

                      {selectedSeason && (
                        <button
                          onClick={handleSeasonSelect}
                          disabled={loading}
                          className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-medium text-gray-100 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {loading ? "Loading..." : "Get Season Crops"}
                        </button>
                      )}

                      {seasonCrops.length > 0 && (
                        <div className="mt-4">
                          <p className="text-sm text-gray-400 mb-2">Season Crops:</p>
                          <div className="flex flex-wrap gap-2">
                            {seasonCrops.map((crop, idx) => (
                              <span 
                                key={idx}
                                className="px-3 py-1 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-full text-sm text-purple-300 border border-purple-600/30"
                              >
                                {crop}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global Styles for Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes slideIn {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes bounce-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        .animate-slideIn {
          animation: slideIn 0.5s ease-out;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .animate-bounce-delayed {
          animation: bounce-delayed 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(31, 41, 55, 0.3);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(34, 197, 94, 0.5);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(34, 197, 94, 0.7);
        }
      `}</style>
    </div>
  );
};







































