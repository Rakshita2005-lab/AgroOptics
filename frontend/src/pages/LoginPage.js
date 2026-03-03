// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";

// export const LoginPage = () => {
//   const navigate = useNavigate();
//   const { user } = useContext(AppContext);

//   const handleLogin = () => {
//     if (user) navigate("/profile");
//     else alert("No user found. Please sign up.");
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center pt-20">
//       <div className="bg-gray-800 p-8 rounded-3xl w-full max-w-md border border-gray-700">
//         <h2 className="text-3xl font-bold text-blue-400 mb-4">Login</h2>
//         <input className="w-full p-3 mb-3 bg-gray-700 rounded" placeholder="Email / Name" />
//         <input className="w-full p-3 mb-4 bg-gray-700 rounded" placeholder="Password" type="password" />
//         <button onClick={handleLogin} className="w-full py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition">Login</button>
//       </div>
//     </div>
//   );
// };










import React, { useState, useContext, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { Eye, EyeOff, Mail, Lock, User, Leaf, Sparkles } from "lucide-react";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { user, login } = useContext(AppContext);
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [particles, setParticles] = useState([]);
  const [hoverState, setHoverState] = useState({});
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  // Particle animation
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      
      // Create particles on movement
      if (isHovering && Math.random() > 0.85) {
        createParticle(e.clientX, e.clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Animation loop
    animationRef.current = requestAnimationFrame(updateParticles);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovering]);

  const createParticle = (x, y) => {
    const colors = [
      '#3b82f6', // blue
      '#8b5cf6', // violet
      '#10b981', // emerald
      '#f59e0b', // amber
      '#ec4899', // pink
    ];
    
    setParticles(prev => [...prev.slice(-30), {
      id: Date.now() + Math.random(),
      x,
      y,
      size: Math.random() * 5 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
      life: 1
    }]);
  };

  const updateParticles = () => {
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
    animationRef.current = requestAnimationFrame(updateParticles);
  };

  // Auto login if user exists
  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate API call
    setTimeout(async () => {
      try {
        // Replace with actual login API call
        if (formData.email && formData.password) {
          // Mock successful login
          const mockUser = {
            id: "1",
            name: formData.email.split("@")[0],
            email: formData.email,
            avatar: `https://ui-avatars.com/api/?name=${formData.email.split("@")[0]}&background=3b82f6&color=fff`,
            role: "farmer"
          };
          
          if (login) {
            login(mockUser);
          }
          
          // Success particle burst
          for (let i = 0; i < 20; i++) {
            createParticle(
              window.innerWidth / 2 + (Math.random() - 0.5) * 100,
              window.innerHeight / 2 + (Math.random() - 0.5) * 100
            );
          }
          
          navigate("/profile");
        } else {
          setError("Please fill in all fields");
        }
      } catch (err) {
        setError(err.message || "Login failed. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }, 1500);
  };

  // Demo login
  const handleDemoLogin = () => {
    setFormData({
      email: "demo@farmconnect.com",
      password: "demo123",
      rememberMe: true
    });
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
      {/* Animated gradients */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-emerald-500/10 via-transparent to-transparent" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl animate-pulse" />
      
      {/* Grid lines */}
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
      {/* Animated Cursor */}
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

      {/* Floating Particles */}
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
      <div className="absolute bottom-20 right-10 text-4xl opacity-10 animate-bounce-delayed">🔐</div>
      <div className="absolute top-32 right-20 text-2xl opacity-5 animate-spin-slow">⚡</div>
      <div className="absolute bottom-32 left-20 text-3xl opacity-5 animate-pulse">🌾</div>

      {/* Main Container */}
      <div className="relative w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Hero Section */}
        <div className="space-y-8">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500" />
            <div className="relative bg-gray-800/40 backdrop-blur-sm p-10 rounded-3xl border border-gray-700/50 shadow-2xl overflow-hidden">
              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-blue-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              
              <div className="relative z-10">
                {/* Logo/Brand */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-2xl">
                    <Leaf className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-white">FarmConnect</h1>
                    <p className="text-sm text-gray-400">Agricultural Intelligence</p>
                  </div>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    Welcome Back
                  </span>
                </h1>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Access your personalized dashboard with AI-powered soil analysis, 
                  crop recommendations, and smart farming insights. Join thousands of 
                  farmers optimizing their yield with technology.
                </p>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {[
                    { icon: "🌱", text: "AI Soil Analysis & Prediction" },
                    { icon: "📊", text: "Real-time Crop Monitoring" },
                    { icon: "🌧️", text: "Weather-based Irrigation Planning" },
                    { icon: "🤖", text: "Smart Farming Recommendations" },
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-900/30 to-emerald-900/30 rounded-xl flex items-center justify-center border border-blue-700/30">
                        <span className="text-xl">{feature.icon}</span>
                      </div>
                      <span className="text-gray-300">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">10K+</div>
                    <div className="text-sm text-gray-400">Farmers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">95%</div>
                    <div className="text-sm text-gray-400">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">24/7</div>
                    <div className="text-sm text-gray-400">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-emerald-600/10 rounded-3xl blur-2xl" />
          
          <div className="relative bg-gray-800/60 backdrop-blur-sm p-10 rounded-3xl border border-gray-700/50 shadow-2xl">
            {/* Form Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-2xl mb-4 shadow-lg">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
              <p className="text-gray-400">Sign in to your account</p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-900/20 border border-red-700/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center">
                    <span className="text-red-400 text-sm">!</span>
                  </div>
                  <span className="text-red-300 text-sm">{error}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Password
                  </label>
                  <Link 
                    to="/forgot-password" 
                    className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    onMouseEnter={() => handleMouseEnter('forgotPassword')}
                    onMouseLeave={() => handleMouseLeave('forgotPassword')}
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-12 pr-12 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-500 hover:text-gray-300 transition-colors" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-500 hover:text-gray-300 transition-colors" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-300">
                  Remember me for 30 days
                </label>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`relative w-full py-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl font-bold text-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/30 active:scale-95 ${
                  isLoading ? 'cursor-not-allowed opacity-90' : ''
                }`}
                onMouseEnter={() => handleMouseEnter('loginButton')}
                onMouseLeave={() => handleMouseLeave('loginButton')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-400/20 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                {isLoading ? (
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Signing In...
                  </span>
                ) : (
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <Sparkles className="w-5 h-5" />
                    Sign In
                  </span>
                )}
              </button>

              {/* Demo Login Button */}
              <button
                type="button"
                onClick={handleDemoLogin}
                className="w-full py-3 bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl font-medium text-gray-100 border border-gray-600 hover:bg-gray-600 transition-all duration-300"
              >
                Try Demo Account
              </button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-gray-800/60 text-gray-400">Or continue with</span>
                </div>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 py-3 bg-gray-900/50 border border-gray-700 rounded-xl hover:bg-gray-800 transition-all duration-300 group"
                  onMouseEnter={() => handleMouseEnter('google')}
                  onMouseLeave={() => handleMouseLeave('google')}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  <span className="text-gray-300 group-hover:text-white">Google</span>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 py-3 bg-gray-900/50 border border-gray-700 rounded-xl hover:bg-gray-800 transition-all duration-300 group"
                  onMouseEnter={() => handleMouseEnter('github')}
                  onMouseLeave={() => handleMouseLeave('github')}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span className="text-gray-300 group-hover:text-white">GitHub</span>
                </button>
              </div>

              {/* Sign Up Link */}
              <div className="text-center pt-6">
                <p className="text-gray-400">
                  Don't have an account?{" "}
                  <Link 
                    to="/signup" 
                    className="font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                    onMouseEnter={() => handleMouseEnter('signup')}
                    onMouseLeave={() => handleMouseLeave('signup')}
                  >
                    Sign up now
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <p className="text-gray-500 text-sm">
          By continuing, you agree to our{" "}
          <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
            Terms
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </p>
      </div>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-15px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-10px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
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
        
        /* Smooth transitions */
        * {
          transition: background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
        }
      `}</style>
    </div>
  );
};