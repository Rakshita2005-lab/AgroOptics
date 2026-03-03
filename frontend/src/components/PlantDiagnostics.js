// import React, { forwardRef, useState } from "react";

// const PlantDiagnostics = forwardRef((props, ref) => {
//   const [showUpload, setShowUpload] = useState(false);
//   const [image, setImage] = useState(null);
//   const [analyzing, setAnalyzing] = useState(false);
//   const [result, setResult] = useState(null);

//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setImage(imageUrl);
//     }
//   };

//   const handleAnalyze = () => {
//     if (!image) {
//       alert("Please upload a leaf image first!");
//       return;
//     }

//     setAnalyzing(true);
//     setTimeout(() => {
//       setResult({
//         disease: "Early Blight",
//         confidence: "92%",
//         severity: "Medium",
//         symptoms: [
//           "Circular brown spots",
//           "Yellow halos around lesions",
//           "Concentric rings pattern"
//         ],
//         treatment: [
//           "Remove affected leaves",
//           "Apply copper-based fungicide",
//           "Improve air circulation",
//           "Avoid overhead watering"
//         ],
//         prevention: "Rotate crops and maintain proper spacing"
//       });
//       setAnalyzing(false);
//     }, 2000);
//   };

//   return (
//     <section
//       ref={ref}
//       className="min-h-screen relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4 py-24"
//     >
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-32 right-32 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
//         <div className="absolute bottom-32 left-32 w-80 h-80 bg-green-500 rounded-full blur-3xl" />
//       </div>

//       <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-7xl mx-auto">
//         {/* Left Image */}
//         <div className="flex items-center justify-center order-2 lg:order-1">
//           <div className="relative group">
//             <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
//             <img
//               src="/image/soil1-vision.jpg"
//               alt="Plant Disease Analysis"
//               className="w-full max-w-2xl h-auto rounded-2xl shadow-2xl border-2 border-gray-700/50 transform group-hover:scale-[1.02] transition-transform duration-500"
//             />
//             <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <p className="text-sm text-gray-200">AI-powered leaf disease detection</p>
//             </div>
//           </div>
//         </div>

//         {/* Right Content */}
//         <div className="space-y-8 order-1 lg:order-2">
//           <div className="bg-gray-900/60 backdrop-blur-lg p-8 rounded-3xl border border-gray-700/50 shadow-2xl">
//             <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-500/20 rounded-full">
//               <span className="text-2xl">🌿</span>
//               <span className="text-sm font-semibold text-blue-300">Phytopathology</span>
//             </div>

//             <h1 className="text-4xl md:text-5xl font-bold mb-6">
//               <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
//                 Plant Health Diagnostics
//               </span>
//             </h1>

//             <p className="text-gray-300 leading-relaxed text-lg mb-6">
//               In Agro-Optics, the phytopathology module identifies plant leaf diseases using AI and computer vision.
//               It analyzes color distortion, lesions, spots, and texture changes to detect diseases like rust, blight, and mildew.
//             </p>

//             <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
//               <h3 className="text-lg font-semibold text-blue-300 mb-2">Capabilities:</h3>
//               <ul className="list-disc list-inside space-y-1 text-gray-300">
//                 <li>Early disease detection</li>
//                 <li>Multiple disease classification</li>
//                 <li>Treatment recommendations</li>
//                 <li>Severity assessment</li>
//               </ul>
//             </div>
//           </div>

//           {/* Action Button */}
//           <button
//             onClick={() => setShowUpload(true)}
//             className="group relative w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl font-bold text-lg overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/30"
//           >
//             <span className="relative z-10 flex items-center justify-center gap-2">
//               <span className="group-hover:rotate-45 transition-transform duration-500">🌱</span>
//               Diagnose Plant Health
//               <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
//             </span>
//             <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
//           </button>
//         </div>
//       </div>

//       {/* Upload Modal */}
//       {showUpload && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
//           <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl w-full max-w-4xl border border-gray-700/50 shadow-2xl transform animate-scaleIn">
//             {/* Modal Header */}
//             <div className="flex justify-between items-center mb-8">
//               <h2 className="text-3xl font-bold">
//                 <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//                   Leaf Disease Analysis
//                 </span>
//               </h2>
//               <button
//                 onClick={() => {
//                   setShowUpload(false);
//                   setImage(null);
//                   setResult(null);
//                 }}
//                 className="p-2 hover:bg-gray-800 rounded-lg transition-colors duration-300"
//               >
//                 ×
//               </button>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {/* Upload Section */}
//               <div className="space-y-6">
//                 <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50">
//                   <h3 className="text-xl font-semibold text-blue-300 mb-4">Upload Leaf Image</h3>
//                   <div className="border-2 border-dashed border-gray-600 rounded-xl p-8 text-center hover:border-blue-500 transition-colors duration-300">
//                     <input
//                       type="file"
//                       onChange={handleFileUpload}
//                       accept="image/*"
//                       className="hidden"
//                       id="leaf-upload"
//                     />
//                     <label htmlFor="leaf-upload" className="cursor-pointer block">
//                       <div className="text-5xl mb-4">🍃</div>
//                       <p className="text-gray-300 mb-2">Click to upload or drag & drop</p>
//                       <p className="text-sm text-gray-500">Supports JPG, PNG, WEBP</p>
//                     </label>
//                   </div>
//                   {image && (
//                     <div className="mt-6">
//                       <img
//                         src={image}
//                         alt="Selected leaf"
//                         className="w-full h-48 object-cover rounded-xl"
//                       />
//                     </div>
//                   )}
//                 </div>
//                 <button
//                   onClick={handleAnalyze}
//                   disabled={analyzing || !image}
//                   className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
//                     analyzing || !image
//                       ? "bg-gray-700 cursor-not-allowed"
//                       : "bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-lg hover:shadow-blue-500/30 transform hover:scale-[1.02]"
//                   }`}
//                 >
//                   {analyzing ? "Analyzing Leaf..." : "Analyze Leaf Image"}
//                 </button>
//               </div>

//               {/* Results Section */}
//               <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50">
//                 <h3 className="text-xl font-semibold text-blue-300 mb-4">Diagnosis Results</h3>
//                 {result ? (
//                   <div className="space-y-4">
//                     <div className="grid grid-cols-2 gap-4">
//                       <div className="bg-gray-900/50 p-4 rounded-xl">
//                         <p className="text-sm text-gray-400">Disease Detected</p>
//                         <p className="text-lg font-semibold text-blue-300">{result.disease}</p>
//                       </div>
//                       <div className="bg-gray-900/50 p-4 rounded-xl">
//                         <p className="text-sm text-gray-400">Confidence</p>
//                         <p className="text-lg font-semibold text-blue-300">{result.confidence}</p>
//                       </div>
//                     </div>
//                     <div className="bg-gray-900/50 p-4 rounded-xl">
//                       <p className="text-sm text-gray-400 mb-2">Symptoms</p>
//                       <ul className="space-y-2">
//                         {result.symptoms.map((symptom, i) => (
//                           <li key={i} className="flex items-start gap-2">
//                             <span className="text-red-400">•</span>
//                             <span className="text-gray-300">{symptom}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                     <div className="bg-gray-900/50 p-4 rounded-xl">
//                       <p className="text-sm text-gray-400 mb-2">Recommended Treatment</p>
//                       <ul className="space-y-2">
//                         {result.treatment.map((step, i) => (
//                           <li key={i} className="flex items-start gap-2">
//                             <span className="text-green-400">✓</span>
//                             <span className="text-gray-300">{step}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                     <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-4 rounded-xl border border-blue-500/20">
//                       <p className="text-sm text-gray-400 mb-1">Prevention Tip</p>
//                       <p className="text-blue-300 font-semibold">{result.prevention}</p>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="h-full flex flex-col items-center justify-center text-center py-12">
//                     <div className="text-5xl mb-4 text-gray-600">🌿</div>
//                     <p className="text-gray-400">Upload and analyze a leaf image to see results</p>
//                     <p className="text-sm text-gray-500 mt-2">AI will identify diseases and suggest treatments</p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// });
// export default PlantDiagnostics;






























// import React, { forwardRef, useState, useEffect } from "react";
// const PlantDiagnostics = forwardRef((props, ref) => {
//   const [showUpload, setShowUpload] = useState(false);
//   const [image, setImage] = useState(null);
//   const [analyzing, setAnalyzing] = useState(false);
//   const [result, setResult] = useState(null);
//   const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

//   // 🔥 Cursor glow effect
//   useEffect(() => {
//     const handleMove = (e) => {
//       setCursorPos({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", handleMove);
//     return () => window.removeEventListener("mousemove", handleMove);
//   }, []);

//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) setImage(URL.createObjectURL(file));
//   };

//   const handleAnalyze = () => {
//     if (!image) return alert("Please upload a leaf image!");

//     setAnalyzing(true);
//     setTimeout(() => {
//       setResult({
//         disease: "Early Blight",
//         confidence: "92%",
//         severity: "Medium",
//         symptoms: [
//           "Circular brown spots",
//           "Yellow halos around lesions",
//           "Concentric rings pattern",
//         ],
//         treatment: [
//           "Remove affected leaves",
//           "Apply copper-based fungicide",
//           "Improve air circulation",
//           "Avoid overhead watering",
//         ],
//         prevention: "Rotate crops and maintain proper spacing",
//       });
//       setAnalyzing(false);
//     }, 2000);
//   };

//   return (
//     <section
//       ref={ref}
//       className="min-h-screen relative overflow-hidden bg-[#0b0f19] flex items-center justify-center px-4 py-24"
//     >
//       {/* 🔥 Cursor Glow */}
//       <div
//         className="pointer-events-none fixed w-72 h-72 rounded-full bg-blue-500/20 blur-3xl transition-all duration-300 z-10"
//         style={{ top: cursorPos.y - 150, left: cursorPos.x - 150 }}
//       />

//       {/* Background Floating Orbs */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute top-24 left-24 w-96 h-96 bg-cyan-500 rounded-full blur-[180px] opacity-40 animate-pulse" />
//         <div className="absolute bottom-24 right-24 w-96 h-96 bg-green-500 rounded-full blur-[180px] opacity-40 animate-pulse" />
//       </div>

//       <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl mx-auto">
//         {/* LEFT IMAGE */}
//         <div className="flex justify-center items-center group">
//           <div className="relative">
//             <div className="absolute -inset-6 bg-gradient-to-r from-cyan-500 to-blue-500 blur-2xl rounded-3xl opacity-20 group-hover:opacity-40 transition-all duration-700" />
//             <img
//               src="/image/soil1-vision.jpg"
//               alt="AI Plant Analysis"
//               className="w-full max-w-xl h-auto rounded-2xl shadow-[0_0_40px_rgba(0,255,255,0.15)] border border-cyan-400/20 group-hover:scale-105 transition-all duration-700"
//             />
//           </div>
//         </div>

//         {/* RIGHT CONTENT */}
//         <div className="space-y-8">
//           <div className="bg-[#121826]/70 backdrop-blur-xl p-10 rounded-3xl border border-cyan-400/10 shadow-[0_0_50px_rgba(0,255,255,0.1)]">
//             <div className="inline-flex items-center gap-3 mb-4 px-5 py-2 bg-cyan-500/20 rounded-full">
//               <span className="text-2xl">🌿</span>
//               <span className="text-sm font-semibold text-cyan-300 tracking-wide">
//                 Phytopathology Engine
//               </span>
//             </div>

//             <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//               🌱{" "}
//               <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
//                 Plant Health Diagnostics
//               </span>
//             </h1>

//             <p className="text-gray-300 text-lg mt-4">
//               Detect plant leaf diseases using AI-powered computer vision.  
//               Examine textures, lesions, and pigmentation distortions to identify plant illnesses like **blight**,  
//               **mildew**, **rust**, and more.
//             </p>

//             <div className="bg-[#0d121c] p-5 mt-6 rounded-2xl border border-cyan-400/10">
//               <h3 className="text-lg font-semibold text-cyan-300 mb-3">
//                 Features
//               </h3>
//               <ul className="space-y-2 text-gray-300">
//                 <li>⚡ Early-stage disease detection</li>
//                 <li>📊 Multi-disease classification</li>
//                 <li>💊 Treatment suggestions</li>
//                 <li>🔍 Severity measurement</li>
//               </ul>
//             </div>
//           </div>

//           {/* DIAGNOSE BUTTON */}
//           <button
//             onClick={() => setShowUpload(true)}
//             className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 font-bold text-lg text-black shadow-lg hover:shadow-cyan-500/30 relative overflow-hidden transition-all duration-500 hover:scale-[1.02]"
//           >
//             <span className="relative z-10 flex items-center justify-center gap-3">
//               <span className="text-xl">🍃</span> Diagnose Plant Health →
//             </span>
//             <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
//           </button>
//         </div>
//       </div>

//       {/* UPLOAD MODAL */}
//       {showUpload && (
//         <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4">
//           <div className="bg-[#0f1624] p-10 rounded-3xl w-full max-w-4xl border border-cyan-400/10 shadow-[0_0_60px_rgba(0,255,255,0.2)] animate-scaleIn">
//             {/* HEADER */}
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//                 Leaf Disease Analysis
//               </h2>
//               <button
//                 onClick={() => {
//                   setShowUpload(false);
//                   setImage(null);
//                   setResult(null);
//                 }}
//                 className="text-gray-400 hover:text-white text-3xl"
//               >
//                 ×
//               </button>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//               {/* UPLOAD SECTION */}
//               <div className="space-y-6">
//                 <div className="bg-[#121826] p-6 rounded-2xl border border-cyan-500/10">
//                   <h3 className="text-xl font-semibold text-cyan-300 mb-4">
//                     Upload Leaf Image
//                   </h3>

//                   <label
//                     htmlFor="leaf-upload"
//                     className="cursor-pointer border-2 border-dashed border-gray-600 hover:border-cyan-400 transition p-8 rounded-xl block text-center"
//                   >
//                     <div className="text-5xl mb-3">🍃</div>
//                     <p className="text-gray-300">Click to upload or drag & drop</p>
//                   </label>

//                   <input
//                     id="leaf-upload"
//                     type="file"
//                     accept="image/*"
//                     onChange={handleFileUpload}
//                     className="hidden"
//                   />

//                   {image && (
//                     <img
//                       src={image}
//                       alt="Uploaded Leaf"
//                       className="mt-4 rounded-xl shadow-lg"
//                     />
//                   )}
//                 </div>

//                 <button
//                   onClick={handleAnalyze}
//                   disabled={analyzing || !image}
//                   className={`w-full py-3 rounded-xl font-semibold transition-all ${
//                     analyzing || !image
//                       ? "bg-gray-700 cursor-not-allowed text-gray-400"
//                       : "bg-gradient-to-r from-cyan-500 to-blue-500 text-black hover:scale-105"
//                   }`}
//                 >
//                   {analyzing ? "Analyzing..." : "Analyze Image"}
//                 </button>
//               </div>

//               {/* RESULTS */}
//               <div className="bg-[#121826] p-6 rounded-2xl border border-cyan-500/10">
//                 <h3 className="text-xl font-semibold text-cyan-300 mb-4">
//                   Diagnosis Results
//                 </h3>

//                 {result ? (
//                   <div className="space-y-4">
//                     <div className="grid grid-cols-2 gap-4">
//                       <div className="bg-[#0d121c] p-4 rounded-xl border border-cyan-400/10">
//                         <p className="text-gray-400">Disease</p>
//                         <p className="text-xl text-cyan-300 font-semibold">
//                           {result.disease}
//                         </p>
//                       </div>

//                       <div className="bg-[#0d121c] p-4 rounded-xl border border-cyan-400/10">
//                         <p className="text-gray-400">Confidence</p>
//                         <p className="text-xl text-cyan-300 font-semibold">
//                           {result.confidence}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Symptoms */}
//                     <div className="bg-[#0d121c] p-4 rounded-xl border border-cyan-400/10">
//                       <p className="text-gray-400 mb-2">Symptoms</p>
//                       <ul className="space-y-2">
//                         {result.symptoms.map((s, idx) => (
//                           <li key={idx} className="text-gray-300 flex gap-2">
//                             <span className="text-red-400">•</span> {s}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     {/* Treatment */}
//                     <div className="bg-[#0d121c] p-4 rounded-xl border border-cyan-400/10">
//                       <p className="text-gray-400 mb-2">Treatment</p>
//                       <ul className="space-y-2">
//                         {result.treatment.map((t, idx) => (
//                           <li key={idx} className="text-gray-300 flex gap-2">
//                             <span className="text-green-400">✓</span> {t}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div className="bg-cyan-500/10 p-4 rounded-xl border border-cyan-400/20">
//                       <p className="text-gray-400 text-sm">Prevention Tip</p>
//                       <p className="text-cyan-300 font-semibold">
//                         {result.prevention}
//                       </p>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="text-center text-gray-500 py-14">
//                     <div className="text-5xl mb-4">🌿</div>
//                     Upload an image to get diagnosis.
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// });
// export default PlantDiagnostics;














// import React, { forwardRef, useState, useEffect, useRef } from "react";

// const PlantDiagnostics = forwardRef((props, ref) => {
//   const [showUpload, setShowUpload] = useState(false);
//   const [image, setImage] = useState(null);
//   const [analyzing, setAnalyzing] = useState(false);
//   const [result, setResult] = useState(null);
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);
//   const [mouseTrail, setMouseTrail] = useState([]);
//   const canvasRef = useRef(null);
//   const particlesRef = useRef([]);
//   const animationFrameRef = useRef(null);

//   // Enhanced cursor tracking
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setCursorPosition({ x: e.clientX, y: e.clientY });
      
//       // Create floating particles on move
//       if (isHovering && Math.random() > 0.7) {
//         createParticle(e.clientX, e.clientY);
//       }
      
//       // Add to mouse trail (limited to 5 points)
//       setMouseTrail(prev => {
//         const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }];
//         return newTrail.slice(-8); // Keep last 8 points
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
    
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current);
//       }
//     };
//   }, [isHovering]);

//   // Particle system
//   const createParticle = (x, y) => {
//     particlesRef.current.push({
//       x,
//       y,
//       size: Math.random() * 3 + 1,
//       speedX: Math.random() * 2 - 1,
//       speedY: Math.random() * 2 - 1,
//       life: 1,
//       color: `hsl(${Math.random() * 60 + 140}, 100%, 70%)`
//     });
//   };

//   const animateParticles = () => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     const ctx = canvas.getContext('2d');
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
    
//     particlesRef.current = particlesRef.current.filter(particle => {
//       particle.x += particle.speedX;
//       particle.y += particle.speedY;
//       particle.life -= 0.02;
      
//       ctx.globalAlpha = particle.life;
//       ctx.fillStyle = particle.color;
//       ctx.beginPath();
//       ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
//       ctx.fill();
      
//       return particle.life > 0;
//     });
    
//     animationFrameRef.current = requestAnimationFrame(animateParticles);
//   };

//   useEffect(() => {
//     if (isHovering) {
//       animateParticles();
//     }
//     return () => {
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current);
//       }
//     };
//   }, [isHovering]);

//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       // Add upload animation effect
//       const uploadBtn = document.querySelector('label[for="leaf-upload"]');
//       if (uploadBtn) {
//         uploadBtn.style.transform = 'scale(0.95)';
//         setTimeout(() => {
//           uploadBtn.style.transform = 'scale(1)';
//         }, 200);
//       }
      
//       const imageUrl = URL.createObjectURL(file);
//       setImage(imageUrl);
      
//       // Create confetti effect on successful upload
//       createUploadConfetti();
//     }
//   };

//   const createUploadConfetti = () => {
//     for (let i = 0; i < 20; i++) {
//       setTimeout(() => {
//         createParticle(
//           window.innerWidth / 2,
//           window.innerHeight / 2
//         );
//       }, i * 50);
//     }
//   };

//   const handleAnalyze = () => {
//     if (!image) {
//       // Shake animation for alert
//       const analyzeBtn = document.querySelector('button[onClick*="handleAnalyze"]');
//       if (analyzeBtn) {
//         analyzeBtn.classList.add('shake');
//         setTimeout(() => analyzeBtn.classList.remove('shake'), 500);
//       }
//       return;
//     }

//     setAnalyzing(true);
    
//     // Loading animation with progress
//     let progress = 0;
//     const interval = setInterval(() => {
//       progress += Math.random() * 20;
//       if (progress >= 100) {
//         clearInterval(interval);
        
//         // Result with animation
//         setTimeout(() => {
//           setResult({
//             disease: "Early Blight",
//             confidence: `${Math.floor(Math.random() * 10) + 85}%`,
//             severity: ["Low", "Medium", "High"][Math.floor(Math.random() * 3)],
//             symptoms: [
//               "Circular brown spots with concentric rings",
//               "Yellow halos around lesions",
//               "Premature leaf drop",
//               "Stunted plant growth"
//             ],
//             treatment: [
//               "Apply copper-based fungicide every 7-10 days",
//               "Remove and destroy infected leaves",
//               "Improve air circulation around plants",
//               "Water at the base to avoid wet leaves",
//               "Use disease-resistant plant varieties"
//             ],
//             prevention: "Practice crop rotation and maintain proper plant spacing",
//             nextSteps: [
//               "Monitor plants daily for new symptoms",
//               "Apply neem oil as organic alternative",
//               "Test soil pH and adjust if necessary"
//             ]
//           });
//           setAnalyzing(false);
          
//           // Success particles
//           for (let i = 0; i < 30; i++) {
//             setTimeout(() => {
//               createParticle(
//                 window.innerWidth / 2,
//                 window.innerHeight / 2
//               );
//             }, i * 30);
//           }
//         }, 500);
//       }
//     }, 100);
//   };

//   // Interactive background grid
//   const InteractiveGrid = () => (
//     <div className="absolute inset-0 overflow-hidden">
//       {Array.from({ length: 100 }).map((_, i) => (
//         <div
//           key={i}
//           className="absolute w-[2px] h-[2px] bg-blue-400/20 rounded-full"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             animation: `pulse ${2 + Math.random() * 3}s infinite alternate`
//           }}
//         />
//       ))}
//     </div>
//   );

//   return (
//     <section
//       ref={ref}
//       className="min-h-screen relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4 py-24 overflow-hidden"
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//     >
//       {/* Custom Cursor Effects */}
//       <div
//         className="fixed pointer-events-none z-50 transition-transform duration-100"
//         style={{
//           left: `${cursorPosition.x}px`,
//           top: `${cursorPosition.y}px`,
//           transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`
//         }}
//       >
//         <div className="w-8 h-8 border-2 border-cyan-400/50 rounded-full animate-ping" />
//         <div className="w-6 h-6 border-2 border-blue-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
//         <div className="w-2 h-2 bg-cyan-300 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
//       </div>

//       {/* Mouse Trail */}
//       {mouseTrail.map((point, i) => (
//         <div
//           key={point.id}
//           className="fixed pointer-events-none z-40 w-2 h-2 bg-blue-400/30 rounded-full"
//           style={{
//             left: `${point.x}px`,
//             top: `${point.y}px`,
//             transform: `translate(-50%, -50%) scale(${0.2 + (i / mouseTrail.length) * 0.8})`,
//             opacity: 0.3 * (i / mouseTrail.length),
//             transition: 'all 0.1s linear'
//           }}
//         />
//       ))}

//       {/* Particle Canvas */}
//       <canvas
//         ref={canvasRef}
//         className="fixed inset-0 pointer-events-none z-30"
//         width={window.innerWidth}
//         height={window.innerHeight}
//       />

//       {/* Background Effects */}
//       <InteractiveGrid />
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-32 right-32 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-float" />
//         <div className="absolute bottom-32 left-32 w-80 h-80 bg-green-500 rounded-full blur-3xl animate-float-delayed" />
//         <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
//       </div>

//       {/* Floating Icons */}
//       <div className="absolute top-20 left-10 text-4xl opacity-20 animate-bounce">🍃</div>
//       <div className="absolute bottom-20 right-10 text-4xl opacity-20 animate-bounce-delayed">🌱</div>

//       <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-7xl mx-auto">
//         {/* Left Image with Enhanced Effects */}
//         <div className="flex items-center justify-center order-2 lg:order-1">
//           <div className="relative group cursor-pointer" onClick={() => setShowUpload(true)}>
//             <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-all duration-700 animate-gradient" />
//             <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
//             <img
//               src="/image/soil1-vision.jpg"
//               alt="Plant Disease Analysis"
//               className="relative w-full max-w-2xl h-auto rounded-2xl shadow-2xl border-2 border-gray-700/50 transform group-hover:scale-[1.02] transition-all duration-500 group-hover:shadow-cyan-500/20 z-10"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 rounded-b-2xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
//               <p className="text-sm text-cyan-300 font-semibold">Click to analyze plant health</p>
//             </div>
//             <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full border border-cyan-500/50 transform scale-0 group-hover:scale-100 transition-transform duration-500">
//               <span className="text-xs text-cyan-300">AI-Powered</span>
//             </div>
//           </div>
//         </div>

//         {/* Right Content */}
//         <div className="space-y-8 order-1 lg:order-2">
//           <div className="bg-gray-900/60 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50 shadow-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-500">
//             <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl transform translate-x-16 -translate-y-16" />
//             <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-500/30">
//               <span className="text-2xl animate-spin-slow">🌿</span>
//               <span className="text-sm font-semibold text-blue-300 tracking-wider">PHYTOPATHOLOGY AI</span>
//             </div>

//             <h1 className="text-4xl md:text-5xl font-bold mb-6">
//               <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent animate-gradient-text">
//                 Advanced Plant Diagnostics
//               </span>
//             </h1>

//             <p className="text-gray-300 leading-relaxed text-lg mb-6 group-hover:text-gray-200 transition-colors duration-300">
//               Our AI-driven phytopathology module uses deep learning to detect 50+ plant diseases with 95% accuracy.
//               Real-time analysis of color patterns, lesion morphology, and texture anomalies for precise diagnosis.
//             </p>

//             <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-4 rounded-xl border border-gray-700 group-hover:border-cyan-500/30 transition-all duration-500">
//               <div className="flex items-center gap-3 mb-3">
//                 <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
//                 <h3 className="text-lg font-semibold text-blue-300">Real-time Capabilities:</h3>
//               </div>
//               <ul className="grid grid-cols-2 gap-3">
//                 {["Early Detection", "Multi-Disease ID", "Treatment Plans", "Severity Metrics"].map((item, i) => (
//                   <li key={i} className="flex items-center gap-2 text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
//                     <span className="text-cyan-400">▸</span>
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Animated Action Button */}
//           <button
//             onClick={() => setShowUpload(true)}
//             className="group relative w-full py-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 rounded-2xl font-bold text-lg overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/40 active:scale-95"
//             onMouseEnter={() => setIsHovering(true)}
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
//             <span className="relative z-10 flex items-center justify-center gap-3">
//               <span className="text-2xl group-hover:rotate-180 transition-transform duration-700">🔍</span>
//               <span className="bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
//                 Start AI Diagnosis
//               </span>
//               <span className="group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300">✨</span>
//             </span>
//             <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400 transform translate-x-full group-hover:translate-x-0 transition-transform duration-700 delay-100" />
//           </button>
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
//                 className="absolute top-1/2 left-1/2 border border-cyan-500/20 rounded-full"
//                 style={{
//                   width: `${ring * 300}px`,
//                   height: `${ring * 300}px`,
//                   transform: `translate(-50%, -50%)`,
//                   animation: `spin ${10 + ring * 5}s linear infinite`
//                 }}
//               />
//             ))}
//           </div>

//           <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 p-8 rounded-3xl w-full max-w-4xl border border-cyan-500/30 shadow-2xl transform animate-scaleIn backdrop-blur-lg">
//             {/* Animated Border */}
//             <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 rounded-3xl blur opacity-30 animate-pulse" />
            
//             {/* Modal Header */}
//             <div className="flex justify-between items-center mb-8 relative z-10">
//               <div>
//                 <h2 className="text-3xl font-bold mb-2">
//                   <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//                     AI Leaf Analysis
//                   </span>
//                 </h2>
//                 <p className="text-gray-400">Upload leaf image for instant diagnosis</p>
//               </div>
//               <button
//                 onClick={() => {
//                   setShowUpload(false);
//                   setImage(null);
//                   setResult(null);
//                 }}
//                 className="p-3 hover:bg-gray-800/50 rounded-xl transition-all duration-300 group border border-gray-700 hover:border-red-400/50"
//               >
//                 <span className="text-2xl group-hover:rotate-90 transition-transform duration-300">×</span>
//               </button>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
//               {/* Upload Section */}
//               <div className="space-y-6">
//                 <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-6 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 group">
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="p-2 bg-blue-500/20 rounded-lg">
//                       <span className="text-2xl">📸</span>
//                     </div>
//                     <h3 className="text-xl font-semibold text-blue-300">Capture & Upload</h3>
//                   </div>
//                   <label
//                     htmlFor="leaf-upload"
//                     className="block border-2 border-dashed border-gray-600 rounded-xl p-8 text-center hover:border-cyan-500 transition-all duration-300 cursor-pointer group-hover:bg-gray-800/30"
//                   >
//                     <input
//                       type="file"
//                       onChange={handleFileUpload}
//                       accept="image/*"
//                       className="hidden"
//                       id="leaf-upload"
//                     />
//                     <div className="text-5xl mb-4 animate-bounce-slow">🍃</div>
//                     <p className="text-gray-300 mb-2 font-medium">Click to upload leaf image</p>
//                     <p className="text-sm text-gray-500">Supports JPG, PNG, WEBP • Max 10MB</p>
//                   </label>
//                   {image && (
//                     <div className="mt-6 relative group/image">
//                       <img
//                         src={image}
//                         alt="Selected leaf"
//                         className="w-full h-48 object-cover rounded-xl border-2 border-gray-700 group-hover/image:border-cyan-500 transition-all duration-300"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
//                     </div>
//                   )}
//                 </div>
                
//                 <button
//                   onClick={handleAnalyze}
//                   disabled={analyzing || !image}
//                   className={`group relative w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 overflow-hidden ${
//                     analyzing || !image
//                       ? "bg-gray-700 cursor-not-allowed"
//                       : "bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/40"
//                   }`}
//                 >
//                   {analyzing ? (
//                     <span className="flex items-center justify-center gap-3">
//                       <span className="animate-spin">⟳</span>
//                       Analyzing Patterns...
//                     </span>
//                   ) : (
//                     <>
//                       <span className="relative z-10">🔬 Analyze with AI</span>
//                       <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
//                     </>
//                   )}
//                 </button>
//               </div>

//               {/* Results Section */}
//               <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-6 rounded-2xl border border-gray-700/50">
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="p-2 bg-green-500/20 rounded-lg">
//                     <span className="text-2xl">📊</span>
//                   </div>
//                   <h3 className="text-xl font-semibold text-green-300">Diagnosis Results</h3>
//                 </div>
                
//                 {result ? (
//                   <div className="space-y-4 animate-slideIn">
//                     {/* Stats Grid */}
//                     <div className="grid grid-cols-2 gap-4">
//                       <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-4 rounded-xl border border-blue-500/30 group hover:border-blue-500/60 transition-all duration-300">
//                         <p className="text-sm text-gray-400 mb-1">Disease</p>
//                         <p className="text-xl font-bold text-blue-300 group-hover:text-blue-200">{result.disease}</p>
//                       </div>
//                       <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-4 rounded-xl border border-green-500/30 group hover:border-green-500/60 transition-all duration-300">
//                         <p className="text-sm text-gray-400 mb-1">Confidence</p>
//                         <p className="text-xl font-bold text-green-300 group-hover:text-green-200">{result.confidence}</p>
//                       </div>
//                     </div>

//                     {/* Symptoms */}
//                     <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-4 rounded-xl border border-red-500/20">
//                       <div className="flex items-center gap-2 mb-3">
//                         <span className="text-red-400">⚠</span>
//                         <p className="text-sm font-semibold text-gray-300">Symptoms Detected</p>
//                       </div>
//                       <ul className="space-y-2">
//                         {result.symptoms.map((symptom, i) => (
//                           <li key={i} className="flex items-start gap-2 group">
//                             <span className="text-red-400 mt-1 group-hover:scale-125 transition-transform">•</span>
//                             <span className="text-gray-300 group-hover:text-gray-100">{symptom}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     {/* Treatment */}
//                     <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-4 rounded-xl border border-green-500/20">
//                       <div className="flex items-center gap-2 mb-3">
//                         <span className="text-green-400">💊</span>
//                         <p className="text-sm font-semibold text-gray-300">Recommended Treatment</p>
//                       </div>
//                       <ul className="space-y-2">
//                         {result.treatment.map((step, i) => (
//                           <li key={i} className="flex items-start gap-2 group">
//                             <span className="text-green-400 mt-1 group-hover:rotate-12 transition-transform">✓</span>
//                             <span className="text-gray-300 group-hover:text-gray-100">{step}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     {/* Next Steps */}
//                     <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-4 rounded-xl border border-cyan-500/30">
//                       <p className="text-sm text-gray-400 mb-2">Prevention Strategy</p>
//                       <p className="text-cyan-300 font-semibold">{result.prevention}</p>
//                       <div className="mt-3 pt-3 border-t border-cyan-500/20">
//                         <p className="text-xs text-gray-500">Next Steps:</p>
//                         <ul className="mt-1 space-y-1">
//                           {result.nextSteps?.map((step, i) => (
//                             <li key={i} className="text-sm text-gray-400">• {step}</li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 ) : analyzing ? (
//                   <div className="h-full flex flex-col items-center justify-center text-center py-12">
//                     <div className="relative mb-6">
//                       <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-400 rounded-full animate-spin" />
//                       <div className="absolute inset-4 border-4 border-cyan-500/20 border-t-cyan-400 rounded-full animate-spin-reverse" />
//                     </div>
//                     <p className="text-gray-300 font-medium">Analyzing leaf patterns...</p>
//                     <p className="text-sm text-gray-500 mt-2">Detecting disease markers with AI</p>
//                     <div className="mt-4 w-full bg-gray-700 rounded-full h-2">
//                       <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full animate-progress" />
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="h-full flex flex-col items-center justify-center text-center py-12">
//                     <div className="text-6xl mb-4 opacity-30 animate-float">🌿</div>
//                     <p className="text-gray-400 font-medium">Awaiting Analysis</p>
//                     <p className="text-sm text-gray-500 mt-2">Upload a leaf image to begin diagnosis</p>
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
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
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
//         @keyframes gradient {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
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
//           from { width: 0%; }
//           to { width: 100%; }
//         }
//         @keyframes pulse {
//           0%, 100% { opacity: 0.2; }
//           50% { opacity: 0.5; }
//         }
//         @keyframes bounce-slow {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-10px); }
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         .animate-float-delayed {
//           animation: float-delayed 8s ease-in-out infinite;
//         }
//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradient 4s ease infinite;
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
//     </section>
//   );
// });

// export default PlantDiagnostics;
































// import React, { forwardRef, useState, useEffect, useRef } from "react";

// const PlantDiagnostics = forwardRef((props, ref) => {
//   const [showUpload, setShowUpload] = useState(false);
//   const [image, setImage] = useState(null);
//   const [analyzing, setAnalyzing] = useState(false);
//   const [result, setResult] = useState(null);
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);
//   const [mouseTrail, setMouseTrail] = useState([]);
//   const canvasRef = useRef(null);
//   const particlesRef = useRef([]);
//   const animationFrameRef = useRef(null);

//   // Enhanced cursor tracking
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setCursorPosition({ x: e.clientX, y: e.clientY });
      
//       // Create floating particles on move
//       if (isHovering && Math.random() > 0.7) {
//         createParticle(e.clientX, e.clientY);
//       }
      
//       // Add to mouse trail (limited to 5 points)
//       setMouseTrail(prev => {
//         const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }];
//         return newTrail.slice(-8); // Keep last 8 points
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
    
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current);
//       }
//     };
//   }, [isHovering]);

//   // Particle system
//   const createParticle = (x, y) => {
//     particlesRef.current.push({
//       x,
//       y,
//       size: Math.random() * 3 + 1,
//       speedX: Math.random() * 2 - 1,
//       speedY: Math.random() * 2 - 1,
//       life: 1,
//       color: `hsl(${Math.random() * 60 + 140}, 100%, 70%)`
//     });
//   };

//   const animateParticles = () => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     const ctx = canvas.getContext('2d');
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
    
//     particlesRef.current = particlesRef.current.filter(particle => {
//       particle.x += particle.speedX;
//       particle.y += particle.speedY;
//       particle.life -= 0.02;
      
//       ctx.globalAlpha = particle.life;
//       ctx.fillStyle = particle.color;
//       ctx.beginPath();
//       ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
//       ctx.fill();
      
//       return particle.life > 0;
//     });
    
//     animationFrameRef.current = requestAnimationFrame(animateParticles);
//   };

//   useEffect(() => {
//     if (isHovering) {
//       animateParticles();
//     }
//     return () => {
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current);
//       }
//     };
//   }, [isHovering]);

//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       // Add upload animation effect
//       const uploadBtn = document.querySelector('label[for="leaf-upload"]');
//       if (uploadBtn) {
//         uploadBtn.style.transform = 'scale(0.95)';
//         setTimeout(() => {
//           uploadBtn.style.transform = 'scale(1)';
//         }, 200);
//       }
      
//       const imageUrl = URL.createObjectURL(file);
//       setImage(imageUrl);
      
//       // Create confetti effect on successful upload
//       createUploadConfetti();
//     }
//   };

//   const createUploadConfetti = () => {
//     for (let i = 0; i < 20; i++) {
//       setTimeout(() => {
//         createParticle(
//           window.innerWidth / 2,
//           window.innerHeight / 2
//         );
//       }, i * 50);
//     }
//   };

//   const handleAnalyze = () => {
//     if (!image) {
//       // Shake animation for alert
//       const analyzeBtn = document.querySelector('button[onClick*="handleAnalyze"]');
//       if (analyzeBtn) {
//         analyzeBtn.classList.add('shake');
//         setTimeout(() => analyzeBtn.classList.remove('shake'), 500);
//       }
//       return;
//     }

//     setAnalyzing(true);
    
//     // Loading animation with progress
//     let progress = 0;
//     const interval = setInterval(() => {
//       progress += Math.random() * 20;
//       if (progress >= 100) {
//         clearInterval(interval);
        
//         // Result with animation
//         setTimeout(() => {
//           setResult({
//             disease: "Early Blight",
//             confidence: `${Math.floor(Math.random() * 10) + 85}%`,
//             severity: ["Low", "Medium", "High"][Math.floor(Math.random() * 3)],
//             symptoms: [
//               "Circular brown spots with concentric rings",
//               "Yellow halos around lesions",
//               "Premature leaf drop",
//               "Stunted plant growth"
//             ],
//             treatment: [
//               "Apply copper-based fungicide every 7-10 days",
//               "Remove and destroy infected leaves",
//               "Improve air circulation around plants",
//               "Water at the base to avoid wet leaves",
//               "Use disease-resistant plant varieties"
//             ],
//             prevention: "Practice crop rotation and maintain proper plant spacing",
//             nextSteps: [
//               "Monitor plants daily for new symptoms",
//               "Apply neem oil as organic alternative",
//               "Test soil pH and adjust if necessary"
//             ]
//           });
//           setAnalyzing(false);
          
//           // Success particles
//           for (let i = 0; i < 30; i++) {
//             setTimeout(() => {
//               createParticle(
//                 window.innerWidth / 2,
//                 window.innerHeight / 2
//               );
//             }, i * 30);
//           }
//         }, 500);
//       }
//     }, 100);
//   };

//   // Interactive background grid
//   const InteractiveGrid = () => (
//     <div className="absolute inset-0 overflow-hidden">
//       {Array.from({ length: 100 }).map((_, i) => (
//         <div
//           key={i}
//           className="absolute w-[2px] h-[2px] bg-blue-400/20 rounded-full"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             animation: `pulse ${2 + Math.random() * 3}s infinite alternate`
//           }}
//         />
//       ))}
//     </div>
//   );

//   return (
//     <section
//       ref={ref}
//       className="min-h-screen relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4 py-24 overflow-hidden"
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//     >
//       {/* Custom Cursor Effects */}
//       <div
//         className="fixed pointer-events-none z-50 transition-transform duration-100"
//         style={{
//           left: `${cursorPosition.x}px`,
//           top: `${cursorPosition.y}px`,
//           transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`
//         }}
//       >
//         <div className="w-8 h-8 border-2 border-cyan-400/50 rounded-full animate-ping" />
//         <div className="w-6 h-6 border-2 border-blue-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
//         <div className="w-2 h-2 bg-cyan-300 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
//       </div>

//       {/* Mouse Trail */}
//       {mouseTrail.map((point, i) => (
//         <div
//           key={point.id}
//           className="fixed pointer-events-none z-40 w-2 h-2 bg-blue-400/30 rounded-full"
//           style={{
//             left: `${point.x}px`,
//             top: `${point.y}px`,
//             transform: `translate(-50%, -50%) scale(${0.2 + (i / mouseTrail.length) * 0.8})`,
//             opacity: 0.3 * (i / mouseTrail.length),
//             transition: 'all 0.1s linear'
//           }}
//         />
//       ))}

//       {/* Particle Canvas */}
//       <canvas
//         ref={canvasRef}
//         className="fixed inset-0 pointer-events-none z-30"
//         width={window.innerWidth}
//         height={window.innerHeight}
//       />

//       {/* Background Effects */}
//       <InteractiveGrid />
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-32 right-32 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-float" />
//         <div className="absolute bottom-32 left-32 w-80 h-80 bg-green-500 rounded-full blur-3xl animate-float-delayed" />
//         <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
//       </div>

//       {/* Floating Icons */}
//       <div className="absolute top-20 left-10 text-4xl opacity-20 animate-bounce">🍃</div>
//       <div className="absolute bottom-20 right-10 text-4xl opacity-20 animate-bounce-delayed">🌱</div>

//       <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-7xl mx-auto">
//         {/* Left Image with Enhanced Effects */}
//         <div className="flex items-center justify-center order-2 lg:order-1">
//           <div className="relative group cursor-pointer" onClick={() => setShowUpload(true)}>
//             <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-all duration-700 animate-gradient" />
//             <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
//             <img
//               src="/image/soil1-vision.jpg"
//               alt="Plant Disease Analysis"
//               className="relative w-full max-w-2xl h-auto rounded-2xl shadow-2xl border-2 border-gray-700/50 transform group-hover:scale-[1.02] transition-all duration-500 group-hover:shadow-cyan-500/20 z-10"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 rounded-b-2xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
//               <p className="text-sm text-cyan-300 font-semibold">Click to analyze plant health</p>
//             </div>
//             <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full border border-cyan-500/50 transform scale-0 group-hover:scale-100 transition-transform duration-500">
//               <span className="text-xs text-cyan-300">AI-Powered</span>
//             </div>
//           </div>
//         </div>

//         {/* Right Content */}
//         <div className="space-y-8 order-1 lg:order-2">
//           <div className="bg-gray-900/60 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50 shadow-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-500">
//             <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl transform translate-x-16 -translate-y-16" />
//             <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-500/30">
//               <span className="text-2xl animate-spin-slow">🌿</span>
//               <span className="text-sm font-semibold text-blue-300 tracking-wider">PHYTOPATHOLOGY AI</span>
//             </div>

//             <h1 className="text-4xl md:text-5xl font-bold mb-6">
//               <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent animate-gradient-text">
//                 Advanced Plant Diagnostics
//               </span>
//             </h1>

//             <p className="text-gray-300 leading-relaxed text-lg mb-6 group-hover:text-gray-200 transition-colors duration-300">
//               Our AI-driven phytopathology module uses deep learning to detect 50+ plant diseases with 95% accuracy.
//               Real-time analysis of color patterns, lesion morphology, and texture anomalies for precise diagnosis.
//             </p>

//             <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-4 rounded-xl border border-gray-700 group-hover:border-cyan-500/30 transition-all duration-500">
//               <div className="flex items-center gap-3 mb-3">
//                 <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
//                 <h3 className="text-lg font-semibold text-blue-300">Real-time Capabilities:</h3>
//               </div>
//               <ul className="grid grid-cols-2 gap-3">
//                 {["Early Detection", "Multi-Disease ID", "Treatment Plans", "Severity Metrics"].map((item, i) => (
//                   <li key={i} className="flex items-center gap-2 text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
//                     <span className="text-cyan-400">▸</span>
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Animated Action Button */}
//           <button
//             onClick={() => setShowUpload(true)}
//             className="group relative w-full py-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 rounded-2xl font-bold text-lg overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/40 active:scale-95"
//             onMouseEnter={() => setIsHovering(true)}
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
//             <span className="relative z-10 flex items-center justify-center gap-3">
//               <span className="text-2xl group-hover:rotate-180 transition-transform duration-700">🔍</span>
//               <span className="bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
//                 Start AI Diagnosis
//               </span>
//               <span className="group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300">✨</span>
//             </span>
//             <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400 transform translate-x-full group-hover:translate-x-0 transition-transform duration-700 delay-100" />
//           </button>
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
//                 className="absolute top-1/2 left-1/2 border border-cyan-500/20 rounded-full"
//                 style={{
//                   width: `${ring * 300}px`,
//                   height: `${ring * 300}px`,
//                   transform: `translate(-50%, -50%)`,
//                   animation: `spin ${10 + ring * 5}s linear infinite`
//                 }}
//               />
//             ))}
//           </div>

//           <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 p-8 rounded-3xl w-full max-w-4xl border border-cyan-500/30 shadow-2xl transform animate-scaleIn backdrop-blur-lg">
//             {/* Animated Border */}
//             <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 rounded-3xl blur opacity-30 animate-pulse" />
            
//             {/* Modal Header */}
//             <div className="flex justify-between items-center mb-8 relative z-10">
//               <div>
//                 <h2 className="text-3xl font-bold mb-2">
//                   <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//                     AI Leaf Analysis
//                   </span>
//                 </h2>
//                 <p className="text-gray-400">Upload leaf image for instant diagnosis</p>
//               </div>
//               <button
//                 onClick={() => {
//                   setShowUpload(false);
//                   setImage(null);
//                   setResult(null);
//                 }}
//                 className="p-3 hover:bg-gray-800/50 rounded-xl transition-all duration-300 group border border-gray-700 hover:border-red-400/50"
//               >
//                 <span className="text-2xl group-hover:rotate-90 transition-transform duration-300">×</span>
//               </button>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
//               {/* Upload Section */}
//               <div className="space-y-6">
//                 <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-6 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 group">
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="p-2 bg-blue-500/20 rounded-lg">
//                       <span className="text-2xl">📸</span>
//                     </div>
//                     <h3 className="text-xl font-semibold text-blue-300">Capture & Upload</h3>
//                   </div>
//                   <label
//                     htmlFor="leaf-upload"
//                     className="block border-2 border-dashed border-gray-600 rounded-xl p-8 text-center hover:border-cyan-500 transition-all duration-300 cursor-pointer group-hover:bg-gray-800/30"
//                   >
//                     <input
//                       type="file"
//                       onChange={handleFileUpload}
//                       accept="image/*"
//                       className="hidden"
//                       id="leaf-upload"
//                     />
//                     <div className="text-5xl mb-4 animate-bounce-slow">🍃</div>
//                     <p className="text-gray-300 mb-2 font-medium">Click to upload leaf image</p>
//                     <p className="text-sm text-gray-500">Supports JPG, PNG, WEBP • Max 10MB</p>
//                   </label>
//                   {image && (
//                     <div className="mt-6 relative group/image">
//                       <img
//                         src={image}
//                         alt="Selected leaf"
//                         className="w-full h-48 object-cover rounded-xl border-2 border-gray-700 group-hover/image:border-cyan-500 transition-all duration-300"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
//                     </div>
//                   )}
//                 </div>
                
//                 <button
//                   onClick={handleAnalyze}
//                   disabled={analyzing || !image}
//                   className={`group relative w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 overflow-hidden ${
//                     analyzing || !image
//                       ? "bg-gray-700 cursor-not-allowed"
//                       : "bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/40"
//                   }`}
//                 >
//                   {analyzing ? (
//                     <span className="flex items-center justify-center gap-3">
//                       <span className="animate-spin">⟳</span>
//                       Analyzing Patterns...
//                     </span>
//                   ) : (
//                     <>
//                       <span className="relative z-10">🔬 Analyze with AI</span>
//                       <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
//                     </>
//                   )}
//                 </button>
//               </div>

//               {/* Results Section */}
//               <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-6 rounded-2xl border border-gray-700/50">
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="p-2 bg-green-500/20 rounded-lg">
//                     <span className="text-2xl">📊</span>
//                   </div>
//                   <h3 className="text-xl font-semibold text-green-300">Diagnosis Results</h3>
//                 </div>
                
//                 {result ? (
//                   <div className="space-y-4 animate-slideIn">
//                     {/* Stats Grid */}
//                     <div className="grid grid-cols-2 gap-4">
//                       <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-4 rounded-xl border border-blue-500/30 group hover:border-blue-500/60 transition-all duration-300">
//                         <p className="text-sm text-gray-400 mb-1">Disease</p>
//                         <p className="text-xl font-bold text-blue-300 group-hover:text-blue-200">{result.disease}</p>
//                       </div>
//                       <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-4 rounded-xl border border-green-500/30 group hover:border-green-500/60 transition-all duration-300">
//                         <p className="text-sm text-gray-400 mb-1">Confidence</p>
//                         <p className="text-xl font-bold text-green-300 group-hover:text-green-200">{result.confidence}</p>
//                       </div>
//                     </div>

//                     {/* Symptoms */}
//                     <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-4 rounded-xl border border-red-500/20">
//                       <div className="flex items-center gap-2 mb-3">
//                         <span className="text-red-400">⚠</span>
//                         <p className="text-sm font-semibold text-gray-300">Symptoms Detected</p>
//                       </div>
//                       <ul className="space-y-2">
//                         {result.symptoms.map((symptom, i) => (
//                           <li key={i} className="flex items-start gap-2 group">
//                             <span className="text-red-400 mt-1 group-hover:scale-125 transition-transform">•</span>
//                             <span className="text-gray-300 group-hover:text-gray-100">{symptom}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     {/* Treatment */}
//                     <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-4 rounded-xl border border-green-500/20">
//                       <div className="flex items-center gap-2 mb-3">
//                         <span className="text-green-400">💊</span>
//                         <p className="text-sm font-semibold text-gray-300">Recommended Treatment</p>
//                       </div>
//                       <ul className="space-y-2">
//                         {result.treatment.map((step, i) => (
//                           <li key={i} className="flex items-start gap-2 group">
//                             <span className="text-green-400 mt-1 group-hover:rotate-12 transition-transform">✓</span>
//                             <span className="text-gray-300 group-hover:text-gray-100">{step}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     {/* Next Steps */}
//                     <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-4 rounded-xl border border-cyan-500/30">
//                       <p className="text-sm text-gray-400 mb-2">Prevention Strategy</p>
//                       <p className="text-cyan-300 font-semibold">{result.prevention}</p>
//                       <div className="mt-3 pt-3 border-t border-cyan-500/20">
//                         <p className="text-xs text-gray-500">Next Steps:</p>
//                         <ul className="mt-1 space-y-1">
//                           {result.nextSteps?.map((step, i) => (
//                             <li key={i} className="text-sm text-gray-400">• {step}</li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 ) : analyzing ? (
//                   <div className="h-full flex flex-col items-center justify-center text-center py-12">
//                     <div className="relative mb-6">
//                       <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-400 rounded-full animate-spin" />
//                       <div className="absolute inset-4 border-4 border-cyan-500/20 border-t-cyan-400 rounded-full animate-spin-reverse" />
//                     </div>
//                     <p className="text-gray-300 font-medium">Analyzing leaf patterns...</p>
//                     <p className="text-sm text-gray-500 mt-2">Detecting disease markers with AI</p>
//                     <div className="mt-4 w-full bg-gray-700 rounded-full h-2">
//                       <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full animate-progress" />
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="h-full flex flex-col items-center justify-center text-center py-12">
//                     <div className="text-6xl mb-4 opacity-30 animate-float">🌿</div>
//                     <p className="text-gray-400 font-medium">Awaiting Analysis</p>
//                     <p className="text-sm text-gray-500 mt-2">Upload a leaf image to begin diagnosis</p>
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
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
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
//         @keyframes gradient {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
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
//           from { width: 0%; }
//           to { width: 100%; }
//         }
//         @keyframes pulse {
//           0%, 100% { opacity: 0.2; }
//           50% { opacity: 0.5; }
//         }
//         @keyframes bounce-slow {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-10px); }
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         .animate-float-delayed {
//           animation: float-delayed 8s ease-in-out infinite;
//         }
//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradient 4s ease infinite;
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
//     </section>
//   );
// });

// export default PlantDiagnostics;




















// import React, { forwardRef, useState, useEffect, useRef } from "react";

// const PlantDiagnostics = forwardRef((props, ref) => {
//   const [showUpload, setShowUpload] = useState(false);
//   const [image, setImage] = useState(null);
//   const [analyzing, setAnalyzing] = useState(false);
//   const [result, setResult] = useState(null);
//   const [isHovering, setIsHovering] = useState(false);
//   const canvasRef = useRef(null);
//   const particlesRef = useRef([]);
//   const animationFrameRef = useRef(null);

//   // Particle system - toned down for subtle effects
//   const createParticle = (x, y) => {
//     particlesRef.current.push({
//       x,
//       y,
//       size: Math.random() * 2 + 0.5,
//       speedX: Math.random() * 1 - 0.5,
//       speedY: Math.random() * 1 - 0.5,
//       life: 1,
//       color: `hsla(${Math.random() * 20 + 160}, 40%, 60%, 0.3)`
//     });
//   };

//   const animateParticles = () => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     const ctx = canvas.getContext('2d');
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
    
//     particlesRef.current = particlesRef.current.filter(particle => {
//       particle.x += particle.speedX;
//       particle.y += particle.speedY;
//       particle.life -= 0.01;
      
//       ctx.globalAlpha = particle.life;
//       ctx.fillStyle = particle.color;
//       ctx.beginPath();
//       ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
//       ctx.fill();
      
//       return particle.life > 0;
//     });
    
//     animationFrameRef.current = requestAnimationFrame(animateParticles);
//   };

//   useEffect(() => {
//     if (isHovering) {
//       animateParticles();
//     }
//     return () => {
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current);
//       }
//     };
//   }, [isHovering]);

//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setImage(imageUrl);
      
//       // Subtle particle effect
//       for (let i = 0; i < 8; i++) {
//         setTimeout(() => {
//           createParticle(
//             window.innerWidth / 2,
//             window.innerHeight / 2
//           );
//         }, i * 50);
//       }
//     }
//   };

//   const handleAnalyze = () => {
//     if (!image) {
//       const analyzeBtn = document.querySelector('button[onClick*="handleAnalyze"]');
//       if (analyzeBtn) {
//         analyzeBtn.classList.add('shake');
//         setTimeout(() => analyzeBtn.classList.remove('shake'), 500);
//       }
//       return;
//     }

//     setAnalyzing(true);
    
//     // Simulate analysis
//     setTimeout(() => {
//       setResult({
//         disease: "Early Blight",
//         confidence: `${Math.floor(Math.random() * 10) + 85}%`,
//         severity: ["Low", "Medium", "High"][Math.floor(Math.random() * 3)],
//         symptoms: [
//           "Circular brown spots with concentric rings",
//           "Yellow halos around lesions",
//           "Premature leaf drop",
//           "Stunted plant growth"
//         ],
//         treatment: [
//           "Apply copper-based fungicide every 7-10 days",
//           "Remove and destroy infected leaves",
//           "Improve air circulation around plants",
//           "Water at the base to avoid wet leaves",
//           "Use disease-resistant plant varieties"
//         ],
//         prevention: "Practice crop rotation and maintain proper plant spacing",
//         nextSteps: [
//           "Monitor plants daily for new symptoms",
//           "Apply neem oil as organic alternative",
//           "Test soil pH and adjust if necessary"
//         ]
//       });
//       setAnalyzing(false);
      
//       // Subtle success effect
//       for (let i = 0; i < 15; i++) {
//         setTimeout(() => {
//           createParticle(
//             window.innerWidth / 2,
//             window.innerHeight / 2
//           );
//         }, i * 30);
//       }
//     }, 1500);
//   };

//   // Subtle background grid
//   const InteractiveGrid = () => (
//     <div className="absolute inset-0 overflow-hidden">
//       {Array.from({ length: 50 }).map((_, i) => (
//         <div
//           key={i}
//           className="absolute w-[1px] h-[1px] bg-gray-600/10 rounded-full"
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
//     <section
//       ref={ref}
//       className="min-h-screen relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4 py-24 overflow-hidden"
//     >
//       {/* Subtle Particle Canvas */}
//       <canvas
//         ref={canvasRef}
//         className="fixed inset-0 pointer-events-none z-0"
//         width={window.innerWidth}
//         height={window.innerHeight}
//       />

//       {/* Background Effects */}
//       <InteractiveGrid />
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-32 right-32 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
//         <div className="absolute bottom-32 left-32 w-80 h-80 bg-green-500 rounded-full blur-3xl" />
//       </div>

//       <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-7xl mx-auto">
//         {/* Left Image */}
//         <div className="flex items-center justify-center order-2 lg:order-1">
//           <div className="relative group cursor-pointer" onClick={() => setShowUpload(true)}>
//             <div className="absolute -inset-4 bg-gray-700/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500" />
//             <img
//               src="/image/soil1-vision.jpg"
//               alt="Plant Disease Analysis"
//               className="relative w-full max-w-2xl h-auto rounded-2xl shadow-xl border border-gray-700/50 transform transition-all duration-300 group-hover:shadow-gray-600/20"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 rounded-b-2xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
//               <p className="text-sm text-gray-300 font-medium">Click to analyze plant health</p>
//             </div>
//           </div>
//         </div>

//         {/* Right Content */}
//         <div className="space-y-8 order-1 lg:order-2">
//           <div className="bg-gray-900/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/30 shadow-lg relative overflow-hidden">
//             <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
//               <span className="text-xl">🌿</span>
//               <span className="text-sm font-medium text-gray-300 tracking-wide">PHYTOPATHOLOGY AI</span>
//             </div>

//             <h1 className="text-4xl md:text-5xl font-bold mb-6">
//               <span className="text-white">
//                 Advanced Plant Diagnostics
//               </span>
//             </h1>

//             <p className="text-gray-300 leading-relaxed text-lg mb-6">
//               Our AI-driven phytopathology module uses deep learning to detect 50+ plant diseases with 95% accuracy.
//               Real-time analysis of color patterns, lesion morphology, and texture anomalies for precise diagnosis.
//             </p>

//             <div className="bg-gray-800/30 p-4 rounded-xl border border-gray-700/30">
//               <div className="flex items-center gap-3 mb-3">
//                 <div className="w-2 h-2 bg-blue-400 rounded-full" />
//                 <h3 className="text-lg font-semibold text-gray-200">Real-time Capabilities:</h3>
//               </div>
//               <ul className="grid grid-cols-2 gap-3">
//                 {["Early Detection", "Multi-Disease ID", "Treatment Plans", "Severity Metrics"].map((item, i) => (
//                   <li key={i} className="flex items-center gap-2 text-gray-300">
//                     <span className="text-blue-400">▸</span>
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Action Button */}
//           <button
//             onClick={() => setShowUpload(true)}
//             className="group relative w-full py-4 bg-gray-800/50 rounded-xl font-semibold text-lg overflow-hidden transform transition-all duration-300 hover:bg-gray-700/50 border border-gray-600 hover:border-gray-500"
//             onMouseEnter={() => setIsHovering(true)}
//             onMouseLeave={() => setIsHovering(false)}
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-gray-700/50 to-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             <span className="relative z-10 flex items-center justify-center gap-3 text-gray-100">
//               <span className="text-xl">🔍</span>
//               Start AI Diagnosis
//             </span>
//           </button>
//         </div>
//       </div>

//       {/* Upload Modal */}
//       {showUpload && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
//           <div className="relative bg-gray-900/95 p-8 rounded-2xl w-full max-w-4xl border border-gray-700/50 shadow-xl transform animate-scaleIn">
//             {/* Modal Header */}
//             <div className="flex justify-between items-center mb-8">
//               <div>
//                 <h2 className="text-2xl font-bold mb-2 text-white">
//                   AI Leaf Analysis
//                 </h2>
//                 <p className="text-gray-400">Upload leaf image for instant diagnosis</p>
//               </div>
//               <button
//                 onClick={() => {
//                   setShowUpload(false);
//                   setImage(null);
//                   setResult(null);
//                 }}
//                 className="p-3 hover:bg-gray-800/50 rounded-xl transition-all duration-300 text-gray-400 hover:text-gray-200"
//               >
//                 <span className="text-2xl">×</span>
//               </button>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {/* Upload Section */}
//               <div className="space-y-6">
//                 <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="p-2 bg-blue-500/10 rounded-lg">
//                       <span className="text-xl">📸</span>
//                     </div>
//                     <h3 className="text-lg font-semibold text-gray-200">Capture & Upload</h3>
//                   </div>
//                   <label
//                     htmlFor="leaf-upload"
//                     className="block border-2 border-dashed border-gray-600 rounded-xl p-8 text-center hover:border-gray-500 transition-all duration-300 cursor-pointer"
//                   >
//                     <input
//                       type="file"
//                       onChange={handleFileUpload}
//                       accept="image/*"
//                       className="hidden"
//                       id="leaf-upload"
//                     />
//                     <div className="text-4xl mb-4 text-gray-500">🍃</div>
//                     <p className="text-gray-300 mb-2 font-medium">Click to upload leaf image</p>
//                     <p className="text-sm text-gray-500">Supports JPG, PNG, WEBP • Max 10MB</p>
//                   </label>
//                   {image && (
//                     <div className="mt-6">
//                       <img
//                         src={image}
//                         alt="Selected leaf"
//                         className="w-full h-48 object-cover rounded-xl border border-gray-700"
//                       />
//                     </div>
//                   )}
//                 </div>
                
//                 <button
//                   onClick={handleAnalyze}
//                   disabled={analyzing || !image}
//                   className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
//                     analyzing || !image
//                       ? "bg-gray-700 text-gray-400 cursor-not-allowed"
//                       : "bg-blue-600/80 text-white hover:bg-blue-600"
//                   }`}
//                 >
//                   {analyzing ? (
//                     <span className="flex items-center justify-center gap-3">
//                       <span className="animate-spin">⟳</span>
//                       Analyzing Patterns...
//                     </span>
//                   ) : (
//                     "🔬 Analyze with AI"
//                   )}
//                 </button>
//               </div>

//               {/* Results Section */}
//               <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="p-2 bg-green-500/10 rounded-lg">
//                     <span className="text-xl">📊</span>
//                   </div>
//                   <h3 className="text-lg font-semibold text-gray-200">Diagnosis Results</h3>
//                 </div>
                
//                 {result ? (
//                   <div className="space-y-4 animate-slideIn">
//                     {/* Stats Grid */}
//                     <div className="grid grid-cols-2 gap-4">
//                       <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
//                         <p className="text-sm text-gray-400 mb-1">Disease</p>
//                         <p className="text-lg font-bold text-blue-300">{result.disease}</p>
//                       </div>
//                       <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
//                         <p className="text-sm text-gray-400 mb-1">Confidence</p>
//                         <p className="text-lg font-bold text-green-300">{result.confidence}</p>
//                       </div>
//                     </div>

//                     {/* Symptoms */}
//                     <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
//                       <div className="flex items-center gap-2 mb-3">
//                         <span className="text-red-400">⚠</span>
//                         <p className="text-sm font-semibold text-gray-300">Symptoms Detected</p>
//                       </div>
//                       <ul className="space-y-2">
//                         {result.symptoms.map((symptom, i) => (
//                           <li key={i} className="text-gray-300">• {symptom}</li>
//                         ))}
//                       </ul>
//                     </div>

//                     {/* Treatment */}
//                     <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
//                       <div className="flex items-center gap-2 mb-3">
//                         <span className="text-green-400">💊</span>
//                         <p className="text-sm font-semibold text-gray-300">Recommended Treatment</p>
//                       </div>
//                       <ul className="space-y-2">
//                         {result.treatment.map((step, i) => (
//                           <li key={i} className="text-gray-300">✓ {step}</li>
//                         ))}
//                       </ul>
//                     </div>

//                     {/* Next Steps */}
//                     <div className="bg-blue-900/20 p-4 rounded-xl border border-blue-700/30">
//                       <p className="text-sm text-gray-400 mb-2">Prevention Strategy</p>
//                       <p className="text-blue-300 font-medium">{result.prevention}</p>
//                       <div className="mt-3 pt-3 border-t border-blue-700/20">
//                         <p className="text-xs text-gray-500">Next Steps:</p>
//                         <ul className="mt-1 space-y-1">
//                           {result.nextSteps?.map((step, i) => (
//                             <li key={i} className="text-sm text-gray-400">• {step}</li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 ) : analyzing ? (
//                   <div className="h-full flex flex-col items-center justify-center text-center py-12">
//                     <div className="relative mb-6">
//                       <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-400 rounded-full animate-spin" />
//                     </div>
//                     <p className="text-gray-300 font-medium">Analyzing leaf patterns...</p>
//                     <p className="text-sm text-gray-500 mt-2">Detecting disease markers with AI</p>
//                     <div className="mt-4 w-full bg-gray-700 rounded-full h-2">
//                       <div className="bg-blue-500 h-2 rounded-full animate-progress" />
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="h-full flex flex-col items-center justify-center text-center py-12">
//                     <div className="text-5xl mb-4 opacity-20 text-gray-400">🌿</div>
//                     <p className="text-gray-400 font-medium">Awaiting Analysis</p>
//                     <p className="text-sm text-gray-500 mt-2">Upload a leaf image to begin diagnosis</p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* CSS Animations */}
//       <style jsx>{`
//         @keyframes scaleIn {
//           from { transform: scale(0.95); opacity: 0; }
//           to { transform: scale(1); opacity: 1; }
//         }
//         @keyframes slideIn {
//           from { transform: translateY(20px); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
//         @keyframes progress {
//           from { width: 0%; }
//           to { width: 100%; }
//         }
//         @keyframes pulse {
//           0%, 100% { opacity: 0.1; }
//           50% { opacity: 0.2; }
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
//         .shake {
//           animation: shake 0.5s ease-in-out;
//         }
//         @keyframes shake {
//           0%, 100% { transform: translateX(0); }
//           25% { transform: translateX(-5px); }
//           75% { transform: translateX(5px); }
//         }
//       `}</style>
//     </section>
//   );
// });

// export default PlantDiagnostics;






































// import React, { useState, useEffect, useRef } from "react";
// import { X, Upload, Leaf, AlertCircle, CheckCircle, Loader2 } from "lucide-react";

// export const PlantDiagnostics = () => {
//   const [showUpload, setShowUpload] = useState(false);
//   const [image, setImage] = useState(null);
//   const [file, setFile] = useState(null);
//   const [result, setResult] = useState({
//     status: "idle",
//     message: "Upload a leaf image to detect plant diseases",
//     data: null
//   });
//   const [isAnalyzing, setIsAnalyzing] = useState(false);
//   const abortControllerRef = useRef(null);

//   // Disable scroll when modal is open
//   useEffect(() => {
//     document.body.style.overflow = showUpload ? "hidden" : "auto";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [showUpload]);

//   // Cancel analysis
//   const cancelAnalysis = () => {
//     if (abortControllerRef.current) {
//       abortControllerRef.current.abort();
//       setIsAnalyzing(false);
//       setResult({
//         status: "cancelled",
//         message: "Analysis cancelled",
//         data: null
//       });
//     }
//   };

//   // Close modal handler
//   const closeModal = () => {
//     setShowUpload(false);
//     setImage(null);
//     setFile(null);
//     setResult({
//       status: "idle",
//       message: "Upload a leaf image to detect plant diseases",
//       data: null
//     });
//     if (isAnalyzing) cancelAnalysis();
//   };

//   // Handle file upload
//   const handleFileUpload = (e) => {
//     const selectedFile = e.target.files[0];
//     if (!selectedFile) return;

//     // Validate file type
//     const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
//     if (!validTypes.includes(selectedFile.type)) {
//       setResult({
//         status: "error",
//         message: "Please upload a valid image (JPEG, PNG, or WebP)",
//         data: null
//       });
//       return;
//     }

//     // Validate file size (max 5MB)
//     if (selectedFile.size > 5 * 1024 * 1024) {
//       setResult({
//         status: "error",
//         message: "File size should be less than 5MB",
//         data: null
//       });
//       return;
//     }

//     setFile(selectedFile);
//     setImage(URL.createObjectURL(selectedFile));
//     setResult({
//       status: "ready",
//       message: "Ready to analyze",
//       data: null
//     });
//   };

//   // Analyze leaf function
//   const analyzeLeaf = async () => {
//     if (!file) {
//       setResult({
//         status: "error",
//         message: "Please upload an image first",
//         data: null
//       });
//       return;
//     }

//     setIsAnalyzing(true);
//     setResult({
//       status: "analyzing",
//       message: "Analyzing your leaf image...",
//       data: null
//     });

//     // Create abort controller for cancelling request
//     abortControllerRef.current = new AbortController();

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const res = await fetch("http://127.0.0.1:5000/api/plant", {
//         method: "POST",
//         body: formData,
//         signal: abortControllerRef.current.signal
//       });

//       if (!res.ok) {
//         throw new Error(`Server responded with ${res.status}`);
//       }

//       const data = await res.json();

//       setResult({
//         status: "success",
//         message: "Analysis complete",
//         data: {
//           prediction: data.prediction || "Unknown",
//           confidence: data.confidence || 0,
//           solution: data.solution || "No specific solution available",
//           severity: data.severity || "moderate"
//         }
//       });
//     } catch (err) {
//       if (err.name === 'AbortError') {
//         console.log('Request was cancelled');
//       } else {
//         setResult({
//           status: "error",
//           message: "Failed to analyze image. Please try again.",
//           data: null
//         });
//         console.error("Analysis error:", err);
//       }
//     } finally {
//       setIsAnalyzing(false);
//       abortControllerRef.current = null;
//     }
//   };

//   // Render result based on status
//   const renderResult = () => {
//     switch (result.status) {
//       case "analyzing":
//         return (
//           <div className="flex flex-col items-center justify-center h-full py-12">
//             <div className="relative">
//               <Loader2 className="w-16 h-16 text-blue-500 animate-spin mb-4" />
//               <div className="absolute inset-0 rounded-full border-t-2 border-blue-500/30 animate-ping"></div>
//             </div>
//             <p className="text-gray-300 text-lg mt-4">{result.message}</p>
//             <div className="mt-8 space-y-4 w-full">
//               <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
//                 <div className="h-full bg-gradient-to-r from-blue-500 to-green-500 animate-pulse rounded-full w-3/4"></div>
//               </div>
//               <p className="text-sm text-gray-400">Processing image...</p>
//             </div>
//             <button
//               onClick={cancelAnalysis}
//               className="mt-6 px-6 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg font-medium transition-all duration-300"
//             >
//               Cancel Analysis
//             </button>
//           </div>
//         );

//       case "success":
//         return (
//           <div className="space-y-6 animate-fadeIn">
//             <div className="flex items-center space-x-3">
//               <CheckCircle className="w-6 h-6 text-green-500" />
//               <h3 className="text-xl font-bold text-white">Analysis Complete</h3>
//             </div>
            
//             <div className="space-y-4">
//               <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
//                 <p className="text-gray-400 text-sm mb-1">Disease Detected</p>
//                 <p className="text-2xl font-bold text-white">{result.data.prediction}</p>
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
//                   <p className="text-gray-400 text-sm mb-1">Confidence</p>
//                   <p className="text-xl font-bold text-green-400">
//                     {(result.data.confidence * 100).toFixed(1)}%
//                   </p>
//                 </div>
//                 <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
//                   <p className="text-gray-400 text-sm mb-1">Severity</p>
//                   <p className={`text-xl font-bold ${
//                     result.data.severity === 'low' ? 'text-green-400' :
//                     result.data.severity === 'moderate' ? 'text-yellow-400' :
//                     'text-red-400'
//                   }`}>
//                     {result.data.severity.charAt(0).toUpperCase() + result.data.severity.slice(1)}
//                   </p>
//                 </div>
//               </div>

//               <div className="bg-gray-800/30 p-4 rounded-xl border border-green-500/20">
//                 <p className="text-gray-400 text-sm mb-2">Recommended Solution</p>
//                 <p className="text-green-300 leading-relaxed">{result.data.solution}</p>
//               </div>
//             </div>
//           </div>
//         );

//       case "error":
//         return (
//           <div className="flex flex-col items-center justify-center h-full py-12">
//             <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
//             <p className="text-gray-300 text-lg text-center">{result.message}</p>
//           </div>
//         );

//       case "cancelled":
//         return (
//           <div className="flex flex-col items-center justify-center h-full py-12">
//             <AlertCircle className="w-16 h-16 text-yellow-500 mb-4" />
//             <p className="text-gray-300 text-lg text-center">{result.message}</p>
//           </div>
//         );

//       default:
//         return (
//           <div className="flex flex-col items-center justify-center h-full py-12">
//             <Leaf className="w-20 h-20 text-gray-600 mb-6" />
//             <p className="text-gray-400 text-lg text-center">{result.message}</p>
//             <p className="text-gray-500 text-sm mt-4 text-center">
//               Upload a clear image of a plant leaf for accurate diagnosis
//             </p>
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 flex items-center justify-center px-4 pt-24 pb-20">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full max-w-6xl">
        
//         {/* LEFT IMAGE SECTION */}
//         <div className="relative group">
//           <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
//           <div className="relative">
//             <img
//               src="/image/soil1-vision.jpg"
//               className="w-full h-[500px] object-cover rounded-3xl shadow-2xl border border-gray-800 group-hover:scale-[1.02] transition-transform duration-500"
//               alt="Plant Diagnostics"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent rounded-3xl"></div>
//             <div className="absolute bottom-8 left-8 right-8">
//               <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-800">
//                 <h3 className="text-2xl font-bold text-white mb-2">AI-Powered Plant Health Analysis</h3>
//                 <p className="text-gray-300">
//                   Detect diseases early with 95% accuracy using advanced computer vision
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT CONTENT SECTION */}
//         <div className="flex flex-col justify-center space-y-8">
//           <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-800 shadow-2xl hover:border-gray-700 transition-all duration-300">
//             <div className="flex items-center space-x-4 mb-6">
//               <div className="p-3 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl">
//                 <Leaf className="w-8 h-8 text-white" />
//               </div>
//               <div>
//                 <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
//                   Plant Health Scanner
//                 </h1>
//                 <p className="text-gray-400">Powered by AI Vision Technology</p>
//               </div>
//             </div>
//             <ul className="space-y-4">
//               {[
//                 "Instant disease detection",
//                 "Personalized treatment recommendations",
//                 "Early warning system for plant diseases",
//                 "95% accuracy rate"
//               ].map((item, idx) => (
//                 <li key={idx} className="flex items-center space-x-3 group cursor-pointer">
//                   <div className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
//                   <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl border border-gray-800 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
//             <button
//               onClick={() => setShowUpload(true)}
//               className="w-full group relative overflow-hidden bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold py-5 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:-translate-y-1"
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
//               <div className="flex items-center justify-center space-x-3">
//                 <Upload className="w-6 h-6" />
//                 <span>Scan Your Plant Now</span>
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* MODAL */}
//       {showUpload && (
//         <div className="fixed inset-0 z-50">
//           <div 
//             className="absolute inset-0 bg-black/70 backdrop-blur-sm"
//             onClick={closeModal}
//           ></div>
          
//           <div className="absolute inset-0 flex items-center justify-center p-4">
//             <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl w-full max-w-6xl overflow-hidden border border-gray-800 shadow-2xl animate-fadeIn">
//               {/* MODAL HEADER */}
//               <div className="flex items-center justify-between p-6 border-b border-gray-800 bg-gray-900/50">
//                 <div className="flex items-center space-x-3">
//                   <div className="p-2 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg">
//                     <Leaf className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h2 className="text-2xl font-bold text-white">Plant Diagnostics Scanner</h2>
//                     <p className="text-gray-400 text-sm">Upload a leaf image for analysis</p>
//                   </div>
//                 </div>
//                 <button
//                   onClick={closeModal}
//                   className="p-2 hover:bg-gray-800 rounded-xl transition-all duration-300 group"
//                 >
//                   <X className="w-5 h-5 text-gray-400 group-hover:text-white" />
//                 </button>
//               </div>

//               <div className="grid grid-cols-1 lg:grid-cols-2 divide-x divide-gray-800">
//                 {/* UPLOAD SECTION */}
//                 <div className="p-8">
//                   <div className="space-y-6">
//                     <div className={`relative border-2 ${!image ? 'border-dashed border-gray-700 hover:border-blue-500' : 'border-solid border-green-500/30'} rounded-2xl p-8 transition-all duration-300 group`}>
//                       <input
//                         type="file"
//                         onChange={handleFileUpload}
//                         accept="image/jpeg,image/png,image/jpg,image/webp"
//                         className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
//                         disabled={isAnalyzing}
//                       />
//                       {image ? (
//                         <div className="space-y-4">
//                           <div className="relative overflow-hidden rounded-xl">
//                             <img
//                               src={image}
//                               className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
//                               alt="Uploaded leaf"
//                             />
//                             <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
//                           </div>
//                           <div className="flex items-center justify-center space-x-2 text-green-400">
//                             <CheckCircle className="w-5 h-5" />
//                             <p className="font-medium">Image uploaded successfully</p>
//                           </div>
//                         </div>
//                       ) : (
//                         <div className="text-center py-12">
//                           <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-dashed border-gray-700 flex items-center justify-center group-hover:border-blue-500 transition-colors duration-300">
//                             <Upload className="w-8 h-8 text-gray-500 group-hover:text-blue-500 transition-colors duration-300" />
//                           </div>
//                           <p className="text-gray-300 font-medium mb-2">Click to upload leaf image</p>
//                           <p className="text-gray-500 text-sm">Supports JPG, PNG, WebP (Max 5MB)</p>
//                         </div>
//                       )}
//                     </div>

//                     <div className="flex space-x-4">
//                       <button
//                         onClick={analyzeLeaf}
//                         disabled={!file || isAnalyzing}
//                         className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform ${!file || isAnalyzing ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-y-1 hover:shadow-xl'} bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700`}
//                       >
//                         {isAnalyzing ? (
//                           <div className="flex items-center justify-center space-x-2">
//                             <Loader2 className="w-5 h-5 animate-spin" />
//                             <span>Analyzing...</span>
//                           </div>
//                         ) : (
//                           "Start Analysis"
//                         )}
//                       </button>
                      
//                       {!isAnalyzing && (
//                         <button
//                           onClick={closeModal}
//                           className="px-6 py-4 border border-gray-700 hover:bg-gray-800 rounded-xl font-medium transition-all duration-300"
//                         >
//                           Cancel
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 {/* RESULTS SECTION */}
//                 <div className="p-8 bg-gray-900/30">
//                   <div className="h-full">
//                     <div className="flex items-center space-x-3 mb-6">
//                       <div className="p-2 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-lg">
//                         <AlertCircle className="w-6 h-6 text-blue-400" />
//                       </div>
//                       <h3 className="text-xl font-bold text-white">Analysis Results</h3>
//                     </div>
//                     <div className="h-[400px] overflow-y-auto custom-scrollbar">
//                       {renderResult()}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Add custom styles for scrollbar */}
//       <style jsx>{`
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 6px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: rgba(255, 255, 255, 0.05);
//           border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: linear-gradient(to bottom, #3b82f6, #10b981);
//           border-radius: 10px;
//         }
//         @keyframes gradient-x {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
//         .animate-gradient-x {
//           background-size: 200% 200%;
//           animation: gradient-x 3s ease infinite;
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.5s ease-out;
//         }
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </div>
//   );
// };




















// import React, { useState, useEffect, useRef } from "react";
// import { X, Upload, Leaf, AlertCircle, CheckCircle, Loader2 } from "lucide-react";

// export const PlantDiagnostics = () => {
//   const [showUpload, setShowUpload] = useState(false);
//   const [image, setImage] = useState(null);
//   const [file, setFile] = useState(null);
//   const [result, setResult] = useState({
//     status: "idle",
//     message: "Upload a leaf image to detect plant diseases",
//     data: null
//   });
//   const [isAnalyzing, setIsAnalyzing] = useState(false);
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
//   const abortControllerRef = useRef(null);
//   const containerRef = useRef(null);

//   // Custom cursor effect
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setCursorPosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleMouseEnter = (e) => {
//       if (e.target.closest('.cursor-effect') || 
//           e.target.tagName === 'BUTTON' || 
//           e.target.tagName === 'INPUT' ||
//           e.target.closest('li')) {
//         document.body.style.cursor = 'none';
//       }
//     };

//     const handleMouseLeave = () => {
//       document.body.style.cursor = 'auto';
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mouseenter', handleMouseEnter, true);
//     document.addEventListener('mouseleave', handleMouseLeave, true);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mouseenter', handleMouseEnter, true);
//       document.removeEventListener('mouseleave', handleMouseLeave, true);
//       document.body.style.cursor = 'auto';
//     };
//   }, []);

//   // Disable scroll when modal is open
//   useEffect(() => {
//     document.body.style.overflow = showUpload ? "hidden" : "auto";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [showUpload]);

//   // Cancel analysis
//   const cancelAnalysis = () => {
//     if (abortControllerRef.current) {
//       abortControllerRef.current.abort();
//       setIsAnalyzing(false);
//       setResult({
//         status: "cancelled",
//         message: "Analysis cancelled",
//         data: null
//       });
//     }
//   };

//   // Close modal handler
//   const closeModal = () => {
//     setShowUpload(false);
//     setImage(null);
//     setFile(null);
//     setResult({
//       status: "idle",
//       message: "Upload a leaf image to detect plant diseases",
//       data: null
//     });
//     if (isAnalyzing) cancelAnalysis();
//   };

//   // Handle file upload
//   const handleFileUpload = (e) => {
//     const selectedFile = e.target.files[0];
//     if (!selectedFile) return;

//     // Validate file type
//     const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
//     if (!validTypes.includes(selectedFile.type)) {
//       setResult({
//         status: "error",
//         message: "Please upload a valid image (JPEG, PNG, or WebP)",
//         data: null
//       });
//       return;
//     }

//     // Validate file size (max 5MB)
//     if (selectedFile.size > 5 * 1024 * 1024) {
//       setResult({
//         status: "error",
//         message: "File size should be less than 5MB",
//         data: null
//       });
//       return;
//     }

//     setFile(selectedFile);
//     setImage(URL.createObjectURL(selectedFile));
//     setResult({
//       status: "ready",
//       message: "Ready to analyze",
//       data: null
//     });
//   };

//   // Analyze leaf function
//   const analyzeLeaf = async () => {
//     if (!file) {
//       setResult({
//         status: "error",
//         message: "Please upload an image first",
//         data: null
//       });
//       return;
//     }

//     setIsAnalyzing(true);
//     setResult({
//       status: "analyzing",
//       message: "Analyzing your leaf image...",
//       data: null
//     });

//     // Create abort controller for cancelling request
//     abortControllerRef.current = new AbortController();

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const res = await fetch("http://127.0.0.1:5000/api/plant", {
//         method: "POST",
//         body: formData,
//         signal: abortControllerRef.current.signal
//       });

//       if (!res.ok) {
//         throw new Error(`Server responded with ${res.status}`);
//       }

//       const data = await res.json();

//       setResult({
//         status: "success",
//         message: "Analysis complete",
//         data: {
//           prediction: data.prediction || "Unknown",
//           confidence: data.confidence || 0,
//           solution: data.solution || "No specific solution available",
//           severity: data.severity || "moderate"
//         }
//       });
//     } catch (err) {
//       if (err.name === 'AbortError') {
//         console.log('Request was cancelled');
//       } else {
//         setResult({
//           status: "error",
//           message: "Failed to analyze image. Please try again.",
//           data: null
//         });
//         console.error("Analysis error:", err);
//       }
//     } finally {
//       setIsAnalyzing(false);
//       abortControllerRef.current = null;
//     }
//   };

//   // Render result based on status
//   const renderResult = () => {
//     switch (result.status) {
//       case "analyzing":
//         return (
//           <div className="flex flex-col items-center justify-center h-full py-12">
//             <div className="relative cursor-effect">
//               <Loader2 className="w-16 h-16 text-blue-500 animate-spin mb-4" />
//               <div className="absolute inset-0 rounded-full border-t-2 border-blue-500/30 animate-ping"></div>
//             </div>
//             <p className="text-gray-300 text-lg mt-4">{result.message}</p>
//             <div className="mt-8 space-y-4 w-full">
//               <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
//                 <div className="h-full bg-gradient-to-r from-blue-500 to-green-500 animate-pulse rounded-full w-3/4"></div>
//               </div>
//               <p className="text-sm text-gray-400">Processing image...</p>
//             </div>
//             <button
//               onClick={cancelAnalysis}
//               className="mt-6 px-6 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg font-medium transition-all duration-300 cursor-effect hover:scale-105 active:scale-95"
//             >
//               Cancel Analysis
//             </button>
//           </div>
//         );

//       case "success":
//         return (
//           <div className="space-y-6 animate-fadeIn">
//             <div className="flex items-center space-x-3 cursor-effect group">
//               <CheckCircle className="w-6 h-6 text-green-500 group-hover:scale-125 transition-transform duration-300" />
//               <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">Analysis Complete</h3>
//             </div>
            
//             <div className="space-y-4">
//               <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 cursor-effect hover:scale-[1.02]">
//                 <p className="text-gray-400 text-sm mb-1">Disease Detected</p>
//                 <p className="text-2xl font-bold text-white hover:text-green-300 transition-colors duration-300">{result.data.prediction}</p>
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 cursor-effect hover:scale-[1.02]">
//                   <p className="text-gray-400 text-sm mb-1">Confidence</p>
//                   <p className="text-xl font-bold text-green-400 group-hover:scale-110 transition-transform duration-300">
//                     {(result.data.confidence * 100).toFixed(1)}%
//                   </p>
//                 </div>
//                 <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 cursor-effect hover:scale-[1.02]">
//                   <p className="text-gray-400 text-sm mb-1">Severity</p>
//                   <p className={`text-xl font-bold ${
//                     result.data.severity === 'low' ? 'text-green-400' :
//                     result.data.severity === 'moderate' ? 'text-yellow-400' :
//                     'text-red-400'
//                   } hover:scale-110 transition-transform duration-300`}>
//                     {result.data.severity.charAt(0).toUpperCase() + result.data.severity.slice(1)}
//                   </p>
//                 </div>
//               </div>

//               <div className="bg-gray-800/30 p-4 rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all duration-300 cursor-effect hover:scale-[1.02]">
//                 <p className="text-gray-400 text-sm mb-2">Recommended Solution</p>
//                 <p className="text-green-300 leading-relaxed hover:text-green-200 transition-colors duration-300">{result.data.solution}</p>
//               </div>
//             </div>
//           </div>
//         );

//       case "error":
//         return (
//           <div className="flex flex-col items-center justify-center h-full py-12 cursor-effect group">
//             <AlertCircle className="w-16 h-16 text-red-500 mb-4 group-hover:rotate-12 transition-transform duration-300" />
//             <p className="text-gray-300 text-lg text-center group-hover:text-red-300 transition-colors duration-300">{result.message}</p>
//           </div>
//         );

//       case "cancelled":
//         return (
//           <div className="flex flex-col items-center justify-center h-full py-12 cursor-effect group">
//             <AlertCircle className="w-16 h-16 text-yellow-500 mb-4 group-hover:rotate-12 transition-transform duration-300" />
//             <p className="text-gray-300 text-lg text-center group-hover:text-yellow-300 transition-colors duration-300">{result.message}</p>
//           </div>
//         );

//       default:
//         return (
//           <div className="flex flex-col items-center justify-center h-full py-12 cursor-effect group">
//             <Leaf className="w-20 h-20 text-gray-600 mb-6 group-hover:text-green-500 group-hover:rotate-12 transition-all duration-500" />
//             <p className="text-gray-400 text-lg text-center group-hover:text-gray-300 transition-colors duration-300">{result.message}</p>
//             <p className="text-gray-500 text-sm mt-4 text-center group-hover:text-gray-400 transition-colors duration-300">
//               Upload a clear image of a plant leaf for accurate diagnosis
//             </p>
//           </div>
//         );
//     }
//   };

//   return (
//     <div 
//       ref={containerRef}
//       className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 flex items-center justify-center px-4 pt-24 pb-20 relative overflow-hidden"
//     >
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//       </div>

//       {/* Custom Cursor */}
//       <div 
//         className="fixed w-8 h-8 rounded-full bg-gradient-to-r from-blue-500/20 to-green-500/20 border border-blue-500/30 pointer-events-none z-50 transition-transform duration-150 ease-out"
//         style={{
//           left: `${cursorPosition.x}px`,
//           top: `${cursorPosition.y}px`,
//           transform: 'translate(-50%, -50%)'
//         }}
//       />
//       <div 
//         className="fixed w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-green-400 pointer-events-none z-50 transition-all duration-100 ease-out"
//         style={{
//           left: `${cursorPosition.x}px`,
//           top: `${cursorPosition.y}px`,
//           transform: 'translate(-50%, -50%)'
//         }}
//       />

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full max-w-6xl relative z-10">
        
//         {/* LEFT IMAGE SECTION */}
//         <div className="relative group cursor-effect">
//           <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-gradient"></div>
//           <div className="relative overflow-hidden rounded-3xl">
//             <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent z-10"></div>
//             <img
//               src="/images/soil1-vision.jpg"
//               className="w-full h-[500px] object-cover rounded-3xl shadow-2xl border border-gray-800 group-hover:scale-110 transition-transform duration-700"
//               alt="Plant Diagnostics"
//             />
//           </div>
//         </div>

//         {/* RIGHT CONTENT SECTION */}
//         <div className="flex flex-col justify-center space-y-8">
//           <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-800 shadow-2xl hover:border-blue-500/30 transition-all duration-500 cursor-effect hover:shadow-2xl hover:shadow-blue-500/10">
//             <div className="flex items-center space-x-4 mb-6 group">
//               <div className="p-3 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
//                 <Leaf className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-500" />
//               </div>
//               <div className="overflow-hidden">
//                 <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 bg-clip-text text-transparent animate-gradient-text">
//                   Plant Health Scanner
//                 </h1>
//                 <p className="text-gray-400 mt-2 group-hover:text-gray-300 transition-colors duration-300">Powered by AI Vision Technology</p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm p-8 rounded-3xl border border-gray-800/50 shadow-2xl hover:shadow-green-500/10 transition-all duration-500 cursor-effect">
//             <button
//               onClick={() => setShowUpload(true)}
//               className="w-full group relative overflow-hidden bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 hover:from-blue-700 hover:via-green-700 hover:to-blue-700 text-white font-bold py-5 px-8 rounded-2xl text-lg transition-all duration-500 transform hover:-translate-y-1 hover:shadow-2xl"
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
//               <div className="flex items-center justify-center space-x-3 relative z-10">
//                 <Upload className="w-6 h-6 group-hover:rotate-12 transition-transform duration-500" />
//                 <span className="group-hover:scale-105 transition-transform duration-300">Scan Your Plant Now</span>
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* MODAL */}
//       {showUpload && (
//         <div className="fixed inset-0 z-50">
//           <div 
//             className="absolute inset-0 bg-black/70 backdrop-blur-sm"
//             onClick={closeModal}
//           ></div>
          
//           <div className="absolute inset-0 flex items-center justify-center p-4">
//             <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl w-full max-w-6xl overflow-hidden border border-gray-800 shadow-2xl animate-modalIn">
//               {/* MODAL HEADER */}
//               <div className="flex items-center justify-between p-6 border-b border-gray-800 bg-gray-900/50">
//                 <div className="flex items-center space-x-3 group cursor-effect">
//                   <div className="p-2 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
//                     <Leaf className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h2 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">Plant Diagnostics Scanner</h2>
//                     <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">Upload a leaf image for analysis</p>
//                   </div>
//                 </div>
//                 <button
//                   onClick={closeModal}
//                   className="p-2 hover:bg-gray-800 rounded-xl transition-all duration-300 group cursor-effect hover:scale-110 active:scale-95"
//                 >
//                   <X className="w-5 h-5 text-gray-400 group-hover:text-red-400 group-hover:rotate-90 transition-all duration-300" />
//                 </button>
//               </div>

//               <div className="grid grid-cols-1 lg:grid-cols-2 divide-x divide-gray-800">
//                 {/* UPLOAD SECTION */}
//                 <div className="p-8">
//                   <div className="space-y-6">
//                     <div className={`relative border-2 ${!image ? 'border-dashed border-gray-700 hover:border-blue-500' : 'border-solid border-green-500/30 hover:border-green-500'} rounded-2xl p-8 transition-all duration-500 group cursor-effect hover:shadow-lg ${image ? 'hover:shadow-green-500/10' : 'hover:shadow-blue-500/10'}`}>
//                       <input
//                         type="file"
//                         onChange={handleFileUpload}
//                         accept="image/jpeg,image/png,image/jpg,image/webp"
//                         className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
//                         disabled={isAnalyzing}
//                       />
//                       {image ? (
//                         <div className="space-y-4">
//                           <div className="relative overflow-hidden rounded-xl group/image">
//                             <img
//                               src={image}
//                               className="w-full h-64 object-cover rounded-xl group-hover/image:scale-110 transition-transform duration-700"
//                               alt="Uploaded leaf"
//                             />
//                             <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>
//                           </div>
//                           <div className="flex items-center justify-center space-x-2 text-green-400 group-hover:text-green-300 transition-colors duration-300">
//                             <CheckCircle className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
//                             <p className="font-medium">Image uploaded successfully</p>
//                           </div>
//                         </div>
//                       ) : (
//                         <div className="text-center py-12 group">
//                           <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-dashed border-gray-700 group-hover:border-blue-500 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
//                             <Upload className="w-8 h-8 text-gray-500 group-hover:text-blue-500 group-hover:rotate-12 transition-all duration-500" />
//                           </div>
//                           <p className="text-gray-300 font-medium mb-2 group-hover:text-white transition-colors duration-300">Click to upload leaf image</p>
//                           <p className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors duration-300">Supports JPG, PNG, WebP (Max 5MB)</p>
//                         </div>
//                       )}
//                     </div>

//                     <div className="flex space-x-4">
//                       <button
//                         onClick={analyzeLeaf}
//                         disabled={!file || isAnalyzing}
//                         className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all duration-500 transform ${!file || isAnalyzing ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-y-1 hover:shadow-2xl cursor-effect'} bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 hover:from-blue-700 hover:via-green-700 hover:to-blue-700 active:scale-95`}
//                       >
//                         {isAnalyzing ? (
//                           <div className="flex items-center justify-center space-x-2">
//                             <Loader2 className="w-5 h-5 animate-spin" />
//                             <span>Analyzing...</span>
//                           </div>
//                         ) : (
//                           "Start Analysis"
//                         )}
//                       </button>
                      
//                       {!isAnalyzing && (
//                         <button
//                           onClick={closeModal}
//                           className="px-6 py-4 border border-gray-700 hover:bg-gray-800 hover:border-red-500/30 hover:text-red-400 rounded-xl font-medium transition-all duration-300 cursor-effect hover:scale-105 active:scale-95"
//                         >
//                           Cancel
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 {/* RESULTS SECTION */}
//                 <div className="p-8 bg-gray-900/30">
//                   <div className="h-full">
//                     <div className="flex items-center space-x-3 mb-6 group cursor-effect">
//                       <div className="p-2 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
//                         <AlertCircle className="w-6 h-6 text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
//                       </div>
//                       <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">Analysis Results</h3>
//                     </div>
//                     <div className="h-[400px] overflow-y-auto custom-scrollbar pr-2">
//                       {renderResult()}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Add custom styles */}
//       <style jsx>{`
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 6px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: rgba(255, 255, 255, 0.05);
//           border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: linear-gradient(to bottom, #3b82f6, #10b981);
//           border-radius: 10px;
//           transition: all 0.3s ease;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//           background: linear-gradient(to bottom, #60a5fa, #34d399);
//         }
        
//         @keyframes gradient {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
        
//         @keyframes gradient-text {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
        
//         .animate-gradient {
//           background-size: 400% 400%;
//           animation: gradient 6s ease infinite;
//         }
        
//         .animate-gradient-text {
//           background-size: 200% auto;
//           animation: gradient-text 3s ease infinite;
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
        
//         .animate-modalIn {
//           animation: modalIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
//         }
        
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         .animate-fadeIn {
//           animation: fadeIn 0.5s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// };
























import React, { useState, useEffect, useRef } from "react";
import { X, Upload, Leaf, AlertCircle, CheckCircle, Loader2 } from "lucide-react";

export const PlantDiagnostics = () => {
  const [showUpload, setShowUpload] = useState(false);
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [result, setResult] = useState({
    status: "idle",
    message: "Upload a leaf image to detect plant diseases",
    data: null
  });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const abortControllerRef = useRef(null);

  // Disable scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = showUpload ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showUpload]);

  // Cancel analysis
  const cancelAnalysis = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      setIsAnalyzing(false);
      setResult({
        status: "cancelled",
        message: "Analysis cancelled",
        data: null
      });
    }
  };

  // Close modal handler
  const closeModal = () => {
    setShowUpload(false);
    setImage(null);
    setFile(null);
    setResult({
      status: "idle",
      message: "Upload a leaf image to detect plant diseases",
      data: null
    });
    if (isAnalyzing) cancelAnalysis();
  };

  // Handle file upload
  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
    if (!validTypes.includes(selectedFile.type)) {
      setResult({
        status: "error",
        message: "Please upload a valid image (JPEG, PNG, or WebP)",
        data: null
      });
      return;
    }

    // Validate file size (max 5MB)
    if (selectedFile.size > 5 * 1024 * 1024) {
      setResult({
        status: "error",
        message: "File size should be less than 5MB",
        data: null
      });
      return;
    }

    setFile(selectedFile);
    setImage(URL.createObjectURL(selectedFile));
    setResult({
      status: "ready",
      message: "Ready to analyze",
      data: null
    });
  };

  // Analyze leaf function
  const analyzeLeaf = async () => {
    if (!file) {
      setResult({
        status: "error",
        message: "Please upload an image first",
        data: null
      });
      return;
    }

    setIsAnalyzing(true);
    setResult({
      status: "analyzing",
      message: "Analyzing your leaf image...",
      data: null
    });

    // Create abort controller for cancelling request
    abortControllerRef.current = new AbortController();

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://127.0.0.1:5000/api/plant", {
        method: "POST",
        body: formData,
        signal: abortControllerRef.current.signal
      });

      if (!res.ok) {
        throw new Error(`Server responded with ${res.status}`);
      }

      const data = await res.json();

      setResult({
        status: "success",
        message: "Analysis complete",
        data: {
          prediction: data.prediction || "Unknown",
          confidence: data.confidence || 0,
          solution: data.solution || "No specific solution available",
          severity: data.severity || "moderate"
        }
      });
    } catch (err) {
      if (err.name === 'AbortError') {
        console.log('Request was cancelled');
      } else {
        setResult({
          status: "error",
          message: "Failed to analyze image. Please try again.",
          data: null
        });
        console.error("Analysis error:", err);
      }
    } finally {
      setIsAnalyzing(false);
      abortControllerRef.current = null;
    }
  };

  // Render result based on status
  const renderResult = () => {
    switch (result.status) {
      case "analyzing":
        return (
          <div className="flex flex-col items-center justify-center h-full py-12">
            <div className="relative">
              <Loader2 className="w-16 h-16 text-blue-500 animate-spin mb-4" />
              <div className="absolute inset-0 rounded-full border-t-2 border-blue-500/30 animate-ping"></div>
            </div>
            <p className="text-gray-300 text-lg mt-4">{result.message}</p>
            <div className="mt-8 space-y-4 w-full">
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-green-500 animate-pulse rounded-full w-3/4"></div>
              </div>
              <p className="text-sm text-gray-400">Processing image...</p>
            </div>
            <button
              onClick={cancelAnalysis}
              className="mt-6 px-6 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg font-medium transition-all duration-300"
            >
              Cancel Analysis
            </button>
          </div>
        );

      case "success":
        return (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <h3 className="text-xl font-bold text-white">Analysis Complete</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                <p className="text-gray-400 text-sm mb-1">Disease Detected</p>
                <p className="text-2xl font-bold text-white">{result.data.prediction}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                  <p className="text-gray-400 text-sm mb-1">Confidence</p>
                  <p className="text-xl font-bold text-green-400">
                    {(result.data.confidence * 100).toFixed(1)}%
                  </p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                  <p className="text-gray-400 text-sm mb-1">Severity</p>
                  <p className={`text-xl font-bold ${
                    result.data.severity === 'low' ? 'text-green-400' :
                    result.data.severity === 'moderate' ? 'text-yellow-400' :
                    'text-red-400'
                  }`}>
                    {result.data.severity.charAt(0).toUpperCase() + result.data.severity.slice(1)}
                  </p>
                </div>
              </div>

              <div className="bg-gray-800/30 p-4 rounded-xl border border-green-500/20">
                <p className="text-gray-400 text-sm mb-2">Recommended Solution</p>
                <p className="text-green-300 leading-relaxed">{result.data.solution}</p>
              </div>
            </div>
          </div>
        );

      case "error":
        return (
          <div className="flex flex-col items-center justify-center h-full py-12">
            <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
            <p className="text-gray-300 text-lg text-center">{result.message}</p>
          </div>
        );

      case "cancelled":
        return (
          <div className="flex flex-col items-center justify-center h-full py-12">
            <AlertCircle className="w-16 h-16 text-yellow-500 mb-4" />
            <p className="text-gray-300 text-lg text-center">{result.message}</p>
          </div>
        );

      default:
        return (
          <div className="flex flex-col items-center justify-center h-full py-12">
            <Leaf className="w-20 h-20 text-gray-600 mb-6" />
            <p className="text-gray-400 text-lg text-center">{result.message}</p>
            <p className="text-gray-500 text-sm mt-4 text-center">
              Upload a clear image of a plant leaf for accurate diagnosis
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 flex items-center justify-center px-4 pt-24 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full max-w-6xl">
        
        {/* LEFT IMAGE SECTION */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
          <div className="relative">
            <img
              src="/image/soil1-vision.jpg"
              className="w-full h-[500px] object-cover rounded-3xl shadow-2xl border border-gray-800 group-hover:scale-[1.02] transition-transform duration-500"
              alt="Plant Diagnostics"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent rounded-3xl"></div>
          </div>
        </div>

        {/* RIGHT CONTENT SECTION */}
        <div className="flex flex-col justify-center space-y-8">
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-800 shadow-2xl hover:border-gray-700 transition-all duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  Plant Health Scanner
                </h1>
                <p className="text-gray-400">Powered by AI Vision Technology</p>
              </div>
            </div>
            <ul className="space-y-4">
              {[
                "Instant disease detection",
                "Personalized treatment recommendations",
                "Early warning system for plant diseases",
                "95% accuracy rate"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3 group cursor-pointer">
                  <div className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl border border-gray-800 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
            <button
              onClick={() => setShowUpload(true)}
              className="w-full group relative overflow-hidden bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold py-5 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <div className="flex items-center justify-center space-x-3">
                <Upload className="w-6 h-6" />
                <span>Scan Your Plant Now</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showUpload && (
        <div className="fixed inset-0 z-50">
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
          ></div>
          
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl w-full max-w-6xl overflow-hidden border border-gray-800 shadow-2xl animate-fadeIn">
              {/* MODAL HEADER */}
              <div className="flex items-center justify-between p-6 border-b border-gray-800 bg-gray-900/50">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Plant Diagnostics Scanner</h2>
                    <p className="text-gray-400 text-sm">Upload a leaf image for analysis</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-800 rounded-xl transition-all duration-300 group"
                >
                  <X className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 divide-x divide-gray-800">
                {/* UPLOAD SECTION */}
                <div className="p-8">
                  <div className="space-y-6">
                    <div className={`relative border-2 ${!image ? 'border-dashed border-gray-700 hover:border-blue-500' : 'border-solid border-green-500/30'} rounded-2xl p-8 transition-all duration-300 group`}>
                      <input
                        type="file"
                        onChange={handleFileUpload}
                        accept="image/jpeg,image/png,image/jpg,image/webp"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        disabled={isAnalyzing}
                      />
                      {image ? (
                        <div className="space-y-4">
                          <div className="relative overflow-hidden rounded-xl">
                            <img
                              src={image}
                              className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                              alt="Uploaded leaf"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                          </div>
                          <div className="flex items-center justify-center space-x-2 text-green-400">
                            <CheckCircle className="w-5 h-5" />
                            <p className="font-medium">Image uploaded successfully</p>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center py-12">
                          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-dashed border-gray-700 flex items-center justify-center group-hover:border-blue-500 transition-colors duration-300">
                            <Upload className="w-8 h-8 text-gray-500 group-hover:text-blue-500 transition-colors duration-300" />
                          </div>
                          <p className="text-gray-300 font-medium mb-2">Click to upload leaf image</p>
                          <p className="text-gray-500 text-sm">Supports JPG, PNG, WebP (Max 5MB)</p>
                        </div>
                      )}
                    </div>

                    <div className="flex space-x-4">
                      <button
                        onClick={analyzeLeaf}
                        disabled={!file || isAnalyzing}
                        className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform ${!file || isAnalyzing ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-y-1 hover:shadow-xl'} bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700`}
                      >
                        {isAnalyzing ? (
                          <div className="flex items-center justify-center space-x-2">
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Analyzing...</span>
                          </div>
                        ) : (
                          "Start Analysis"
                        )}
                      </button>
                      
                      {!isAnalyzing && (
                        <button
                          onClick={closeModal}
                          className="px-6 py-4 border border-gray-700 hover:bg-gray-800 rounded-xl font-medium transition-all duration-300"
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* RESULTS SECTION */}
                <div className="p-8 bg-gray-900/30">
                  <div className="h-full">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="p-2 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-lg">
                        <AlertCircle className="w-6 h-6 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Analysis Results</h3>
                    </div>
                    <div className="h-[400px] overflow-y-auto custom-scrollbar">
                      {renderResult()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add custom styles for scrollbar */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #10b981);
          border-radius: 10px;
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};