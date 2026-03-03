// import React from "react";

// export const Footer = () => (
//   <footer className="bg-gray-900 border-t border-gray-700 text-gray-400 py-8 text-center">
//     <p>© 2025 Agro-Optics. All rights reserved.</p>
//   </footer>
// );





// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { 
//   Leaf, Mail, Phone, MapPin, ChevronUp, 
//   Globe, Sun, Droplets, ThermometerSun,
//   Facebook, Twitter, Instagram, Linkedin, Youtube,
//   Heart, Sparkles, Shield, CloudRain, CloudSun
// } from "lucide-react";

// export const Footer = () => {
//   const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [hoverState, setHoverState] = useState({});
//   const [isVisible, setIsVisible] = useState(false);
//   const [newsletterEmail, setNewsletterEmail] = useState("");
//   const [isSubscribed, setIsSubscribed] = useState(false);
//   const [weather, setWeather] = useState(null);
//   const footerRef = useRef(null);

//   // Scroll to top
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
//   };

//   // Handle scroll visibility
//   useEffect(() => {
//     const handleScroll = () => {
//       const position = window.pageYOffset;
//       setScrollPosition(position);
//       setIsVisible(position > 300);
      
//       // Weather animation based on scroll
//       if (footerRef.current) {
//         const footerTop = footerRef.current.offsetTop;
//         const scrollPercent = Math.min((position + window.innerHeight - footerTop) / window.innerHeight, 1);
//         document.documentElement.style.setProperty('--scroll-percent', scrollPercent);
//       }
//     };

//     // Mock weather data
//     const mockWeather = {
//       temperature: 28,
//       humidity: 65,
//       condition: "Sunny",
//       icon: <Sun className="w-6 h-6 text-yellow-500" />
//     };
//     setWeather(mockWeather);

//     window.addEventListener("scroll", handleScroll);
//     setCurrentYear(new Date().getFullYear());
    
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleNewsletterSubmit = (e) => {
//     e.preventDefault();
//     if (newsletterEmail) {
//       setIsSubscribed(true);
//       setNewsletterEmail("");
//       setTimeout(() => setIsSubscribed(false), 3000);
//     }
//   };

//   const handleMouseEnter = (element) => {
//     setHoverState(prev => ({ ...prev, [element]: true }));
//   };

//   const handleMouseLeave = (element) => {
//     setHoverState(prev => ({ ...prev, [element]: false }));
//   };

//   // Footer sections data
//   const sections = {
//     company: {
//       title: "Agro-Optics AI",
//       links: [
//         { label: "About Us", to: "/about" },
//         { label: "Our Technology", to: "/technology" },
//         { label: "Research & Development", to: "/research" },
//         { label: "Careers", to: "/careers" },
//         { label: "Press & Media", to: "/press" }
//       ]
//     },
//     products: {
//       title: "Products",
//       links: [
//         { label: "Soil Vision AI", to: "/soil-diagnostics" },
//         { label: "Crop Health Scanner", to: "/crop-health" },
//         { label: "Weather Intelligence", to: "/weather" },
//         { label: "Yield Predictor", to: "/yield-predictor" },
//         { label: "Farm Management", to: "/farm-management" }
//       ]
//     },
//     resources: {
//       title: "Resources",
//       links: [
//         { label: "Documentation", to: "/docs" },
//         { label: "API Reference", to: "/api" },
//         { label: "Case Studies", to: "/case-studies" },
//         { label: "Blog", to: "/blog" },
//         { label: "Help Center", to: "/help" }
//       ]
//     },
//     legal: {
//       title: "Legal",
//       links: [
//         { label: "Privacy Policy", to: "/privacy" },
//         { label: "Terms of Service", to: "/terms" },
//         { label: "Cookie Policy", to: "/cookies" },
//         { label: "Data Security", to: "/security" },
//         { label: "Compliance", to: "/compliance" }
//       ]
//     }
//   };

//   const contactInfo = [
//     { icon: <Mail className="w-4 h-4" />, text: "support@agro-optics.com" },
//     { icon: <Phone className="w-4 h-4" />, text: "+1 (555) 123-4567" },
//     { icon: <MapPin className="w-4 h-4" />, text: "123 Farm Tech Valley, Silicon Fields, CA 94107" }
//   ];

//   const socialLinks = [
//     { icon: <Facebook className="w-5 h-5" />, label: "Facebook", url: "#", color: "hover:text-blue-600" },
//     { icon: <Twitter className="w-5 h-5" />, label: "Twitter", url: "#", color: "hover:text-sky-500" },
//     { icon: <Instagram className="w-5 h-5" />, label: "Instagram", url: "#", color: "hover:text-pink-600" },
//     { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", url: "#", color: "hover:text-blue-700" },
//     { icon: <Youtube className="w-5 h-5" />, label: "YouTube", url: "#", color: "hover:text-red-600" }
//   ];

//   const stats = [
//     { value: "50K+", label: "Happy Farmers", icon: "👨‍🌾" },
//     { value: "95%", label: "Accuracy Rate", icon: "🎯" },
//     { value: "24/7", label: "AI Monitoring", icon: "🤖" },
//     { value: "1M+", label: "Acres Covered", icon: "🌍" }
//   ];

//   return (
//     <footer 
//       ref={footerRef}
//       className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300 overflow-hidden border-t border-gray-700/50"
//     >
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden opacity-10">
//         {/* Floating Leaves */}
//         {[...Array(8)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute text-2xl opacity-20"
//             style={{
//               left: `${(i * 15) % 100}%`,
//               top: `${(i * 12) % 100}%`,
//               animation: `float ${15 + i * 2}s ease-in-out infinite`,
//               animationDelay: `${i * 0.5}s`
//             }}
//           >
//             {i % 3 === 0 ? "🌱" : i % 3 === 1 ? "🌿" : "🍃"}
//           </div>
//         ))}
        
//         {/* Grid Pattern */}
//         <div className="absolute inset-0" style={{
//           backgroundImage: `
//             linear-gradient(to right, rgba(34, 197, 94, 0.05) 1px, transparent 1px),
//             linear-gradient(to bottom, rgba(34, 197, 94, 0.05) 1px, transparent 1px)
//           `,
//           backgroundSize: '50px 50px'
//         }} />
        
//         {/* Gradient Orbs */}
//         <div className="absolute -top-20 -right-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
//         <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
//       </div>

//       {/* Weather Widget */}
//       {weather && (
//         <div className="absolute top-8 right-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-4 rounded-2xl border border-gray-700/50 shadow-xl z-20">
//           <div className="flex items-center gap-3">
//             {weather.icon}
//             <div>
//               <p className="text-sm text-gray-400">Current Weather</p>
//               <p className="text-lg font-bold text-white">{weather.temperature}°C</p>
//               <p className="text-xs text-gray-400">{weather.condition} • {weather.humidity}% Humidity</p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Scroll to Top Button */}
//       {isVisible && (
//         <button
//           onClick={scrollToTop}
//           onMouseEnter={() => handleMouseEnter('scrollTop')}
//           onMouseLeave={() => handleMouseLeave('scrollTop')}
//           className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-full shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-110 group"
//         >
//           <ChevronUp className={`w-6 h-6 transition-transform duration-300 ${hoverState.scrollTop ? '-translate-y-1' : ''}`} />
//         </button>
//       )}

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 py-16">
          
//           {/* Logo & Description Column */}
//           <div className="space-y-6">
//             <div className="flex items-center gap-3">
//               <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
//                 <Leaf className="w-8 h-8 text-white" />
//               </div>
//               <div>
//                 <h2 className="text-2xl font-bold text-white">Agro-Optics AI</h2>
//                 <p className="text-sm text-green-400 font-semibold">Revolutionizing Agriculture</p>
//               </div>
//             </div>
            
//             <p className="text-gray-400 leading-relaxed">
//               We combine cutting-edge AI with agricultural science to help farmers make data-driven decisions 
//               for sustainable and profitable farming.
//             </p>
            
//             {/* Stats */}
//             <div className="grid grid-cols-2 gap-4 pt-4">
//               {stats.map((stat, idx) => (
//                 <div 
//                   key={idx}
//                   className="text-center p-3 bg-gray-800/30 rounded-lg border border-gray-700/50 hover:border-green-500/30 transition-all duration-300"
//                   onMouseEnter={() => handleMouseEnter(`stat-${idx}`)}
//                   onMouseLeave={() => handleMouseLeave(`stat-${idx}`)}
//                 >
//                   <div className="text-2xl mb-1">{stat.icon}</div>
//                   <div className="text-xl font-bold text-white">{stat.value}</div>
//                   <div className="text-xs text-gray-400">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links Columns */}
//           {Object.entries(sections).map(([key, section], idx) => (
//             <div key={key} className="space-y-6">
//               <h3 className="text-lg font-bold text-white flex items-center gap-2">
//                 {section.title}
//                 <span className="text-green-400">{idx % 2 === 0 ? "→" : "↓"}</span>
//               </h3>
//               <ul className="space-y-3">
//                 {section.links.map((link, linkIdx) => (
//                   <li key={linkIdx}>
//                     <Link
//                       to={link.to}
//                       className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-all duration-300 group"
//                       onMouseEnter={() => handleMouseEnter(`link-${key}-${linkIdx}`)}
//                       onMouseLeave={() => handleMouseLeave(`link-${key}-${linkIdx}`)}
//                     >
//                       <span className={`w-2 h-2 rounded-full bg-gray-600 group-hover:bg-green-500 transition-all duration-300 ${
//                         hoverState[`link-${key}-${linkIdx}`] ? 'scale-125' : ''
//                       }`} />
//                       <span>{link.label}</span>
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Newsletter & Contact Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-12 border-t border-gray-700/50">
          
//           {/* Newsletter */}
//           <div className="lg:col-span-2">
//             <div className="flex items-center gap-3 mb-6">
//               <Sparkles className="w-6 h-6 text-green-400" />
//               <h3 className="text-xl font-bold text-white">Stay Updated with Agri-Tech</h3>
//             </div>
            
//             <form onSubmit={handleNewsletterSubmit} className="space-y-4">
//               <div className="flex flex-col sm:flex-row gap-3">
//                 <input
//                   type="email"
//                   value={newsletterEmail}
//                   onChange={(e) => setNewsletterEmail(e.target.value)}
//                   placeholder="Enter your email for weekly insights"
//                   className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all duration-300"
//                 />
//                 <button
//                   type="submit"
//                   disabled={isSubscribed}
//                   className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   {isSubscribed ? "Subscribed! 🎉" : "Subscribe"}
//                 </button>
//               </div>
//               <p className="text-sm text-gray-500">
//                 Join 10,000+ farmers receiving AI-powered farming tips every week
//               </p>
//             </form>
//           </div>

//           {/* Contact Info */}
//           <div className="space-y-6">
//             <h3 className="text-xl font-bold text-white flex items-center gap-3">
//               <Shield className="w-6 h-6 text-green-400" />
//               Get In Touch
//             </h3>
//             <div className="space-y-4">
//               {contactInfo.map((contact, idx) => (
//                 <div 
//                   key={idx}
//                   className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/50 hover:border-green-500/30 transition-all duration-300 group"
//                   onMouseEnter={() => handleMouseEnter(`contact-${idx}`)}
//                   onMouseLeave={() => handleMouseLeave(`contact-${idx}`)}
//                 >
//                   <div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-green-500/20 transition-colors duration-300">
//                     {contact.icon}
//                   </div>
//                   <span className="text-sm">{contact.text}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Social Media & Copyright */}
//         <div className="py-8 border-t border-gray-700/50">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
//             {/* Social Links */}
//             <div className="flex items-center gap-4">
//               <span className="text-gray-400">Follow us:</span>
//               <div className="flex gap-3">
//                 {socialLinks.map((social, idx) => (
//                   <a
//                     key={idx}
//                     href={social.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`p-3 bg-gray-800/50 rounded-xl border border-gray-700/50 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
//                     aria-label={social.label}
//                     onMouseEnter={() => handleMouseEnter(`social-${idx}`)}
//                     onMouseLeave={() => handleMouseLeave(`social-${idx}`)}
//                   >
//                     <div className={`transition-transform duration-300 ${
//                       hoverState[`social-${idx}`] ? 'scale-110' : ''
//                     }`}>
//                       {social.icon}
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Copyright */}
//             <div className="flex flex-col items-center md:items-end gap-2">
//               <div className="flex items-center gap-2">
//                 <span className="text-sm text-gray-400">Made with</span>
//                 <Heart className="w-4 h-4 text-red-500 animate-pulse" />
//                 <span className="text-sm text-gray-400">for farmers worldwide</span>
//               </div>
//               <p className="text-sm text-gray-500">
//                 © {currentYear} Agro-Optics AI. All rights reserved. 
//                 <span className="text-green-400 ml-2">•</span>
//                 <span className="ml-2">Patent Pending #US2025/AGRO-001</span>
//               </p>
//             </div>
//           </div>

//           {/* Additional Info */}
//           <div className="mt-8 pt-8 border-t border-gray-700/30">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
//               <div className="flex items-center justify-center md:justify-start gap-2">
//                 <Globe className="w-4 h-4 text-green-400" />
//                 <span className="text-sm text-gray-400">Serving farmers in 50+ countries</span>
//               </div>
//               <div className="flex items-center justify-center gap-2">
//                 <CloudSun className="w-4 h-4 text-blue-400" />
//                 <span className="text-sm text-gray-400">Real-time weather integration</span>
//               </div>
//               <div className="flex items-center justify-center md:justify-end gap-2">
//                 <Droplets className="w-4 h-4 text-cyan-400" />
//                 <span className="text-sm text-gray-400">Water conservation optimized</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Certification Badges */}
//         <div className="py-6 border-t border-gray-700/30">
//           <div className="flex flex-wrap justify-center gap-6">
//             {[
//               { label: "ISO 9001:2025", color: "from-blue-500 to-cyan-500" },
//               { label: "GDPR Compliant", color: "from-green-500 to-emerald-500" },
//               { label: "AI Ethics Certified", color: "from-purple-500 to-pink-500" },
//               { label: "Sustainable Farming", color: "from-yellow-500 to-orange-500" },
//               { label: "24/7 Support", color: "from-red-500 to-rose-500" }
//             ].map((badge, idx) => (
//               <div
//                 key={idx}
//                 className={`px-4 py-2 bg-gradient-to-r ${badge.color} rounded-full text-xs font-semibold text-white shadow-lg`}
//               >
//                 {badge.label}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Animated Progress Bar */}
//       <div 
//         className="h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 opacity-50"
//         style={{
//           transform: `scaleX(${scrollPosition / (document.body.scrollHeight - window.innerHeight)})`,
//           transformOrigin: 'left'
//         }}
//       />

//       {/* CSS Animations */}
//       <style jsx global>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(5deg); }
//         }
//         @keyframes pulse {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0.5; }
//         }
        
//         :root {
//           --scroll-percent: 0;
//         }
        
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
        
//         /* Weather animation based on scroll */
//         .weather-widget {
//           transform: translateY(calc(100% * var(--scroll-percent)));
//           opacity: calc(1 - var(--scroll-percent));
//         }
//       `}</style>
//     </footer>
//   );
// };





















import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Leaf, TestTube, TestTube2, Sprout, Bug, 
  Microscope, Droplet, Thermometer, Brain,
  Database, Cpu, Zap, Mail, MapPin, Phone,
  ArrowRight, Sparkles, Target, Shield, AlertTriangle,
  Facebook, Twitter, Instagram, Linkedin, Globe,
  ChevronUp, Cloud, Sun, Wind, FlaskConical
} from "lucide-react";

export const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeStats, setActiveStats] = useState([0, 0, 0, 0]);

  // Animate stats on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveStats([98.7, 94.3, 5000, 2.4]);
    }, 500);

    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const soilAnalysisData = [
    { label: "Nitrogen (N)", value: "20-50 ppm", icon: <TestTube className="w-4 h-4" /> },
    { label: "Phosphorus (P)", value: "10-40 ppm", icon: <TestTube2 className="w-4 h-4" /> },
    { label: "Potassium (K)", value: "100-200 ppm", icon: <Zap className="w-4 h-4" /> },
    { label: "pH Range", value: "6.0-7.5", icon: <Thermometer className="w-4 h-4" /> }
  ];

  const diseaseDetectionData = [
    { label: "Bacterial Blight", treatment: "Copper fungicide", icon: <Bug className="w-4 h-4" /> },
    { label: "Powdery Mildew", treatment: "Sulfur spray", icon: <Sprout className="w-4 h-4" /> },
    { label: "Leaf Spot", treatment: "Neem oil", icon: <AlertTriangle className="w-4 h-4" /> },
    { label: "Root Rot", treatment: "Proper drainage", icon: <Sprout className="w-4 h-4" /> }
  ];

  const aiModels = [
    { name: "CNN + ResNet50", purpose: "Disease Detection", accuracy: "94.3%" },
    { name: "Random Forest", purpose: "Soil Analysis", accuracy: "98.7%" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-950 text-gray-300">
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 opacity-95" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(90deg, #22c55e 1px, transparent 1px), linear-gradient(180deg, #22c55e 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-600/10">
              <Leaf className="w-8 h-8 text-green-400" />
            </div>
            <div className="text-left">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                AgroVision AI
              </h2>
              <p className="text-sm text-gray-400">Intelligent Agricultural Analysis System</p>
            </div>
          </div>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Advanced AI-powered soil nutrient analysis and plant disease detection system 
            providing real-time insights for precision agriculture.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { value: `${activeStats[0]}%`, label: "Soil Analysis Accuracy", icon: <Brain className="w-6 h-6" /> },
            { value: `${activeStats[1]}%`, label: "Disease Detection Rate", icon: <Target className="w-6 h-6" /> },
            { value: `${activeStats[2]}+`, label: "Samples Analyzed", icon: <Database className="w-6 h-6" /> },
            { value: `${activeStats[3]}s`, label: "Processing Time", icon: <Cpu className="w-6 h-6" /> }
          ].map((stat, idx) => (
            <div key={idx} className="text-center group cursor-pointer">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-600/10 mb-3 group-hover:from-green-500/20 group-hover:to-emerald-600/20 transition-all duration-300">
                <div className="text-green-400">{stat.icon}</div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Soil Analysis */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
                <TestTube className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Soil Analysis Parameters</h3>
            </div>
            
            <div className="space-y-4">
              {soilAnalysisData.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between py-3 border-b border-gray-800/50 last:border-0 group">
                  <div className="flex items-center gap-3">
                    <div className="text-blue-400">{item.icon}</div>
                    <span className="text-sm text-gray-300">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-white">{item.value}</span>
                    <ArrowRight className="w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Disease Detection */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-red-500/10 to-rose-500/10">
                <Bug className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Disease Detection</h3>
            </div>
            
            <div className="space-y-4">
              {diseaseDetectionData.map((item, idx) => (
                <div key={idx} className="group py-3 border-b border-gray-800/50 last:border-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-red-400">{item.icon}</div>
                    <span className="text-sm font-medium text-white">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-2 pl-8">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span className="text-xs text-gray-400">Treatment: {item.treatment}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Models & Contact */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">AI Models</h3>
              <div className="space-y-4">
                {aiModels.map((model, idx) => (
                  <div key={idx} className="relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-900/50 to-gray-800/50 p-4 backdrop-blur-sm">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="text-sm font-medium text-white">{model.name}</div>
                        <div className="text-xs text-gray-400">{model.purpose}</div>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-600/20">
                        <span className="text-xs font-semibold text-green-300">{model.accuracy}</span>
                      </div>
                    </div>
                    <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"
                        style={{ width: model.accuracy }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span>research@agrovision-ai.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Copyright & Links */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-4 mb-3">
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-500">
              © {currentYear} AgroVision AI. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 mt-2 text-xs text-gray-500">
              <Link to="/privacy" className="hover:text-green-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-green-400 transition-colors">Terms of Service</Link>
              <Link to="/api" className="hover:text-green-400 transition-colors">API Documentation</Link>
              <Link to="/research" className="hover:text-green-400 transition-colors">Research Papers</Link>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="text-center md:text-right">
            <div className="flex flex-wrap justify-center md:justify-end gap-4 mb-3">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-xs text-gray-400">ISO 9001:2023</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-400" />
                <span className="text-xs text-gray-400">50+ Countries</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-purple-400" />
                <span className="text-xs text-gray-400">GDPR Compliant</span>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              Powered by TensorFlow • PyTorch • React • Node.js
            </p>
          </div>
        </div>

        {/* Environmental Impact */}
        <div className="mt-8 pt-8 border-t border-gray-800/50">
          <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <Cloud className="w-4 h-4 text-blue-400" />
              <span>Real-time weather integration</span>
            </div>
            <div className="flex items-center gap-2">
              <Droplet className="w-4 h-4 text-cyan-400" />
              <span>Water optimization algorithms</span>
            </div>
            <div className="flex items-center gap-2">
              <Sun className="w-4 h-4 text-amber-400" />
              <span>Solar pattern analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <Wind className="w-4 h-4 text-emerald-400" />
              <span>Climate adaptive models</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-110 group"
        >
          <ChevronUp className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform" />
        </button>
      )}

      {/* Floating Elements */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      </div>
    </footer>
  );
};