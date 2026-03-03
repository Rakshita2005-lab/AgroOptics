// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";

// export const SignupPage = () => {
//   const navigate = useNavigate();
//   const { setUser } = useContext(AppContext);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [photo, setPhoto] = useState(null);

//   const handleSignup = () => {
//     if (!name || !email || !password || !photo) return alert("Fill all fields!");
//     setUser({ name, email, password, photo });
//     navigate("/profile");
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center pt-20">
//       <div className="bg-gray-800 p-8 rounded-3xl w-full max-w-md border border-gray-700">
//         <h2 className="text-3xl font-bold text-green-400 mb-4">Sign Up</h2>
//         <input className="w-full p-3 mb-3 bg-gray-700 rounded" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
//         <input className="w-full p-3 mb-3 bg-gray-700 rounded" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <input className="w-full p-3 mb-3 bg-gray-700 rounded" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <input type="file" className="w-full p-3 mb-4 bg-gray-700 rounded" onChange={(e) => setPhoto(URL.createObjectURL(e.target.files[0]))} />
//         {photo && <img src={photo} className="w-40 mx-auto mb-4 rounded-xl border border-green-300" alt="" />}
//         <button onClick={handleSignup} className="w-full py-3 bg-green-600 rounded-xl hover:bg-green-700 transition">Create Profile</button>
//       </div>
//     </div>
//   );
// };

















import React, { useState, useContext, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { Eye, EyeOff, Mail, Lock, User, Camera, Upload, CheckCircle, Sparkles, Shield, Zap, Leaf, Users, Target, TrendingUp, X } from "lucide-react";

export const SignupPage = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AppContext);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false
  });
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [strength, setStrength] = useState(0);
  const [particles, setParticles] = useState([]);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  const containerRef = useRef(null);
  const fileInputRef = useRef(null);
  const animationRef = useRef(null);

  // Particle animation (matching LoginPage)
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      
      if (isHovering && Math.random() > 0.85) {
        createParticle(e.clientX, e.clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    const animateParticles = () => {
      setParticles(prev => 
        prev
          .map(p => ({
            ...p,
            x: p.x + p.speedX,
            y: p.y + p.speedY,
            life: p.life - 0.015,
            size: p.size * 0.99
          }))
          .filter(p => p.life > 0.1 && p.size > 0.5)
      );
      animationRef.current = requestAnimationFrame(animateParticles);
    };
    
    animationRef.current = requestAnimationFrame(animateParticles);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovering]);

  const createParticle = (x, y) => {
    const particleColors = [
      '#3b82f6', // blue
      '#10b981', // emerald
      '#8b5cf6', // violet
      '#f59e0b', // amber
      '#ec4899', // pink
    ];
    
    setParticles(prev => [...prev.slice(-30), {
      id: Date.now() + Math.random(),
      x,
      y,
      size: Math.random() * 5 + 2,
      color: particleColors[Math.floor(Math.random() * particleColors.length)],
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
      life: 1
    }]);
  };

  // Password strength calculation
  const calculateStrength = (password) => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++;
    return score;
  };

  // Handle form changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (name === 'password') {
      setStrength(calculateStrength(value));
    }
    
    setError("");
  };

  // Handle photo upload
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      setError("Please upload a valid image (JPEG, PNG, or WebP)");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setError("Image size should be less than 2MB");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setPhoto(file);
      setPhotoPreview(reader.result);
      setError("");
    };
    reader.readAsDataURL(file);
  };

  const removePhoto = () => {
    setPhoto(null);
    setPhotoPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Validate form
  const validateForm = () => {
    const errors = [];

    if (!formData.name.trim()) errors.push("Name is required");
    if (!formData.email.trim()) errors.push("Email is required");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.push("Please enter a valid email");
    if (!formData.password) errors.push("Password is required");
    if (formData.password.length < 8) errors.push("Password must be at least 8 characters");
    if (formData.password !== formData.confirmPassword) errors.push("Passwords do not match");
    if (!formData.agreeTerms) errors.push("You must agree to the terms");
    if (!photo) errors.push("Profile photo is required");

    return errors;
  };

  // Handle signup
  const handleSignup = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (errors.length > 0) {
      setError(errors[0]);
      return;
    }

    setIsLoading(true);
    setError("");

    // Success particle burst (matching LoginPage)
    for (let i = 0; i < 20; i++) {
      createParticle(
        window.innerWidth / 2 + (Math.random() - 0.5) * 100,
        window.innerHeight / 2 + (Math.random() - 0.5) * 100
      );
    }

    // Simulate API call
    setTimeout(() => {
      setUser({ 
        name: formData.name,
        email: formData.email,
        photo: photoPreview,
        joinedDate: new Date().toLocaleDateString(),
        role: "farmer"
      });
      
      setSuccess("Account created successfully! Redirecting...");
      setIsLoading(false);
      
      setTimeout(() => {
        navigate("/profile");
      }, 1500);
    }, 1500);
  };

  // Handle demo signup
  const handleDemoSignup = () => {
    setFormData({
      name: "Demo User",
      email: "demo@farmconnect.com",
      password: "Demo@123",
      confirmPassword: "Demo@123",
      agreeTerms: true
    });
    setStrength(5);
    
    // Create a mock photo for demo
    setPhotoPreview(`https://ui-avatars.com/api/?name=Demo+User&background=3b82f6&color=fff`);
  };

  // Strength meter colors
  const getStrengthColor = () => {
    if (strength < 2) return "bg-red-500";
    if (strength < 3) return "bg-orange-500";
    if (strength < 4) return "bg-yellow-500";
    if (strength < 5) return "bg-green-500";
    return "bg-emerald-500";
  };

  const getStrengthText = () => {
    if (strength < 2) return "Very Weak";
    if (strength < 3) return "Weak";
    if (strength < 4) return "Good";
    if (strength < 5) return "Strong";
    return "Very Strong";
  };

  // Background Effects Component (matching LoginPage)
  const BackgroundEffects = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-emerald-500/10 via-transparent to-transparent" />
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl animate-pulse" />
      
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }} />
    </div>
  );

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4 py-20 relative overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Animated Cursor (matching LoginPage) */}
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-75"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.3 : 1})`
        }}
      >
        <div className="w-6 h-6 border-2 border-blue-400/50 rounded-full animate-ping" />
        <div className="w-4 h-4 border border-blue-300 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        <div className="w-2 h-2 bg-blue-300 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Floating Particles (matching LoginPage) */}
      {particles.map(p => (
        <div
          key={p.id}
          className="fixed pointer-events-none z-40 rounded-full"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            opacity: p.life * 0.7,
            transform: `translate(-50%, -50%)`,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`
          }}
        />
      ))}

      {/* Background Effects */}
      <BackgroundEffects />

      {/* Floating Icons */}
      <div className="absolute top-10 left-10 text-3xl opacity-10 animate-bounce-slow">🌱</div>
      <div className="absolute bottom-20 right-10 text-4xl opacity-10 animate-bounce-delayed">✨</div>
      <div className="absolute top-32 right-20 text-2xl opacity-5 animate-spin-slow">⚡</div>
      <div className="absolute bottom-32 left-20 text-3xl opacity-5 animate-pulse">👤</div>

      {/* Main Container */}
      <div className="relative w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Left Side - Hero Section */}
        <div className="space-y-8">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500" />
            <div className="relative bg-gray-800/40 backdrop-blur-sm p-8 lg:p-10 rounded-3xl border border-gray-700/50 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-blue-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              
              <div className="relative z-10">
                {/* Logo/Brand */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-2xl">
                    <Leaf className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-xl lg:text-2xl font-bold text-white">FarmConnect</h1>
                    <p className="text-xs lg:text-sm text-gray-400">Agricultural Intelligence</p>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6">
                  <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    Join Us Today
                  </span>
                </h1>

                <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-6 lg:mb-8">
                  Create your account and unlock the power of AI-driven farming. Get personalized 
                  soil analysis, crop recommendations, and join thousands of farmers optimizing 
                  their agricultural practices with cutting-edge technology.
                </p>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 mb-6 lg:mb-8">
                  {[
                    { icon: Shield, title: "Secure Platform", desc: "Bank-level encryption" },
                    { icon: Target, title: "AI Precision", desc: "95% accuracy rate" },
                    { icon: Users, title: "Community", desc: "10K+ farmers" },
                    { icon: TrendingUp, title: "Increase Yield", desc: "Up to 40% more" },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gray-800/30 p-3 lg:p-4 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-colors duration-300">
                      <div className="flex items-center gap-2 lg:gap-3 mb-1 lg:mb-2">
                        <div className="p-1.5 lg:p-2 bg-gray-700/50 rounded-lg">
                          <item.icon className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-blue-400" />
                        </div>
                        <h3 className="font-semibold text-white text-sm lg:text-base">{item.title}</h3>
                      </div>
                      <p className="text-xs lg:text-sm text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 lg:gap-4">
                  <div className="text-center">
                    <div className="text-xl lg:text-2xl font-bold text-blue-400">10K+</div>
                    <div className="text-xs lg:text-sm text-gray-400">Active Farmers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl lg:text-2xl font-bold text-emerald-400">95%</div>
                    <div className="text-xs lg:text-sm text-gray-400">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl lg:text-2xl font-bold text-cyan-400">24/7</div>
                    <div className="text-xs lg:text-sm text-gray-400">Expert Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-emerald-600/10 rounded-3xl blur-2xl" />
          
          <div className="relative bg-gray-800/60 backdrop-blur-sm p-6 lg:p-10 rounded-3xl border border-gray-700/50 shadow-2xl">
            {/* Form Header */}
            <div className="text-center mb-8 lg:mb-10">
              <div className="inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-2xl mb-3 lg:mb-4 shadow-lg">
                <User className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-1 lg:mb-2">Create Account</h2>
              <p className="text-gray-400 text-sm lg:text-base">Join our community of smart farmers</p>
            </div>

            {/* Success Message */}
            {success && (
              <div className="mb-4 lg:mb-6 p-3 lg:p-4 bg-emerald-900/20 border border-emerald-700/50 rounded-xl animate-fadeIn">
                <div className="flex items-center gap-2 lg:gap-3">
                  <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-emerald-400" />
                  <span className="text-emerald-300 text-xs lg:text-sm">{success}</span>
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-4 lg:mb-6 p-3 lg:p-4 bg-red-900/20 border border-red-700/50 rounded-xl animate-fadeIn">
                <div className="flex items-center gap-2 lg:gap-3">
                  <div className="w-5 h-5 lg:w-6 lg:h-6 bg-red-500/20 rounded-full flex items-center justify-center">
                    <span className="text-red-400 text-xs lg:text-sm">!</span>
                  </div>
                  <span className="text-red-300 text-xs lg:text-sm">{error}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSignup} className="space-y-4 lg:space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-xs lg:text-sm font-medium text-gray-300 mb-1 lg:mb-2">
                  Full Name
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-4 w-4 lg:h-5 lg:w-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 lg:pl-12 pr-4 py-3 lg:py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 text-sm lg:text-base"
                    placeholder="John Smith"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-xs lg:text-sm font-medium text-gray-300 mb-1 lg:mb-2">
                  Email Address
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-4 w-4 lg:h-5 lg:w-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 lg:pl-12 pr-4 py-3 lg:py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 text-sm lg:text-base"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-xs lg:text-sm font-medium text-gray-300 mb-1 lg:mb-2">
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 lg:h-5 lg:w-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 lg:pl-12 pr-10 lg:pr-12 py-3 lg:py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 text-sm lg:text-base"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 lg:h-5 lg:w-5 text-gray-500 hover:text-gray-300 transition-colors" />
                    ) : (
                      <Eye className="h-4 w-4 lg:h-5 lg:w-5 text-gray-500 hover:text-gray-300 transition-colors" />
                    )}
                  </button>
                </div>
                
                {/* Password Strength Meter */}
                {formData.password && (
                  <div className="mt-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-gray-400">Strength:</span>
                      <span className={`text-xs lg:text-sm font-medium ${getStrengthColor().replace('bg-', 'text-')}`}>
                        {getStrengthText()}
                      </span>
                    </div>
                    <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${getStrengthColor()} transition-all duration-500`}
                        style={{ width: `${(strength / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Confirm Password Field */}
              <div>
                <label className="block text-xs lg:text-sm font-medium text-gray-300 mb-1 lg:mb-2">
                  Confirm Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 lg:h-5 lg:w-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full pl-10 lg:pl-12 pr-10 lg:pr-12 py-3 lg:py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 text-sm lg:text-base"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4 lg:h-5 lg:w-5 text-gray-500 hover:text-gray-300 transition-colors" />
                    ) : (
                      <Eye className="h-4 w-4 lg:h-5 lg:w-5 text-gray-500 hover:text-gray-300 transition-colors" />
                    )}
                  </button>
                </div>
              </div>

              {/* Photo Upload */}
              <div>
                <label className="block text-xs lg:text-sm font-medium text-gray-300 mb-2 lg:mb-3">
                  Profile Photo
                </label>
                <div className="flex flex-col items-center space-y-3 lg:space-y-4">
                  {photoPreview ? (
                    <div className="relative group">
                      <div className="relative overflow-hidden rounded-2xl border-2 border-emerald-500/30 shadow-lg">
                        <img
                          src={photoPreview}
                          alt="Profile preview"
                          className="w-24 h-24 lg:w-32 lg:h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      <button
                        type="button"
                        onClick={removePhoto}
                        className="absolute -top-1.5 -right-1.5 lg:-top-2 lg:-right-2 p-1 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-colors"
                      >
                        <X className="w-3 h-3 lg:w-4 lg:h-4" />
                      </button>
                    </div>
                  ) : (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className={`w-24 h-24 lg:w-32 lg:h-32 border-2 border-dashed ${error.includes('photo') ? 'border-red-500/50' : 'border-emerald-500/30'} rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-emerald-400 hover:bg-gray-800/50 transition-all duration-300 group`}
                    >
                      <div className="p-2 lg:p-3 bg-gray-700/50 rounded-full group-hover:bg-emerald-500/20 transition-colors duration-300 mb-1 lg:mb-2">
                        <Camera className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400 group-hover:text-emerald-400" />
                      </div>
                      <p className="text-gray-400 text-xs lg:text-sm text-center px-2">
                        Upload Photo
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">Max 2MB</p>
                    </div>
                  )}

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-start space-x-2 lg:space-x-3">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="mt-0.5 lg:mt-1 h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label htmlFor="agreeTerms" className="text-xs lg:text-sm text-gray-300">
                  I agree to the{" "}
                  <Link to="/terms" className="text-blue-400 hover:text-blue-300">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-blue-400 hover:text-blue-300">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {/* Signup Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`relative w-full py-3 lg:py-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl font-bold text-base lg:text-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/30 active:scale-95 ${
                  isLoading ? 'cursor-not-allowed opacity-90' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                {isLoading ? (
                  <span className="relative z-10 flex items-center justify-center gap-2 lg:gap-3">
                    <div className="w-4 h-4 lg:w-5 lg:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span className="text-sm lg:text-base">Creating Account...</span>
                  </span>
                ) : (
                  <span className="relative z-10 flex items-center justify-center gap-2 lg:gap-3">
                    <Sparkles className="w-4 h-4 lg:w-5 lg:h-5" />
                    <span className="text-sm lg:text-base">Create Account</span>
                  </span>
                )}
              </button>

              {/* Demo Account Button */}
              <button
                type="button"
                onClick={handleDemoSignup}
                className="w-full py-2.5 lg:py-3 bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl font-medium text-gray-100 border border-gray-600 hover:bg-gray-600 transition-all duration-300 text-sm lg:text-base"
              >
                Fill Demo Credentials
              </button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-3 lg:px-4 bg-gray-800/60 text-gray-400 text-xs lg:text-sm">Already have an account?</span>
                </div>
              </div>

              {/* Sign In Link */}
              <div className="text-center pt-2 lg:pt-4">
                <p className="text-gray-400 text-xs lg:text-sm">
                  Already a member?{" "}
                  <Link 
                    to="/login" 
                    className="font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 lg:bottom-6 left-0 right-0 text-center">
        <p className="text-gray-500 text-xs lg:text-sm">
          Protected by{" "}
          <span className="text-gray-400">256-bit encryption</span> •{" "}
          <span className="text-emerald-400">ISO 27001 Certified</span>
        </p>
      </div>

      {/* CSS Animations (matching LoginPage) */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-15px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-10px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes bounce-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
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
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};


