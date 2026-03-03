// import React, { useContext } from "react";
// import { AppContext } from "../context/AppContext";

// export const UserProfilePage = () => {
//   const { user } = useContext(AppContext);

//   if (!user)
//     return <h1 className="text-white pt-40 text-center">No Profile Found</h1>;

//   return (
//     <div className="min-h-screen bg-gray-900 text-white pt-32 flex justify-center px-6">
//       <div className="bg-gray-800/60 border border-gray-700 rounded-3xl p-10 max-w-xl text-center">
//         <img src={user.photo} className="w-40 h-40 mx-auto rounded-full border-4 border-green-400 shadow-xl" alt="" />
//         <h1 className="mt-6 text-3xl font-bold">{user.name}</h1>
//         <p className="text-gray-300 mt-2">{user.email}</p>
//       </div>
//     </div>
//   );
// };










// import React, { useContext, useState } from "react";

// // Mock context since we can't import external files
// const MockAppContext = React.createContext();
// const mockUser = {
//   name: "Alex Johnson",
//   email: "alex.johnson@agro-optics.com",
//   photo: "https://i.pravatar.cc/300",
//   joinDate: "2023-08-15",
//   role: "Premium User",
//   analyses: 42,
//   accuracy: "94.7%",
// };

// export const UserProfilePage = () => {
//   const { user = mockUser } = useContext(MockAppContext) || {};
//   const [activeTab, setActiveTab] = useState("profile");
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedName, setEditedName] = useState(user?.name || "");

//   if (!user)
//     return (
//       <div style={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundColor: "#000c00",
//         color: "#ff5555",
//         fontFamily: "'Share Tech Mono', monospace",
//         padding: "2rem",
//       }}>
//         <div style={{
//           textAlign: "center",
//           padding: "3rem",
//           border: "2px solid #ff5555",
//           borderRadius: "10px",
//           boxShadow: "0 0 30px rgba(255, 85, 85, 0.3)",
//           maxWidth: "500px",
//         }}>
//           <div style={{
//             fontSize: "4rem",
//             marginBottom: "1rem",
//             textShadow: "0 0 20px rgba(255, 85, 85, 0.7)",
//           }}>
//             ⚠
//           </div>
//           <h1 style={{
//             fontSize: "2rem",
//             marginBottom: "1rem",
//             background: "linear-gradient(90deg, #ff5555, #ff9999)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//           }}>
//             ACCESS DENIED
//           </h1>
//           <p style={{
//             color: "#39ff14",
//             fontSize: "1.1rem",
//             lineHeight: "1.6",
//           }}>
//             User profile not found. Please log in to access your profile.
//           </p>
//           <button
//             onClick={() => window.location.href = "/login"}
//             style={{
//               marginTop: "2rem",
//               padding: "0.75rem 2rem",
//               backgroundColor: "rgba(57, 255, 20, 0.1)",
//               border: "2px solid #39ff14",
//               color: "#39ff14",
//               fontSize: "1rem",
//               fontWeight: "bold",
//               borderRadius: "5px",
//               cursor: "pointer",
//               transition: "all 0.3s ease",
//               fontFamily: "'Share Tech Mono', monospace",
//             }}
//             onMouseEnter={(e) => {
//               e.target.style.backgroundColor = "rgba(57, 255, 20, 0.2)";
//               e.target.style.boxShadow = "0 0 20px rgba(57, 255, 20, 0.5)";
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.backgroundColor = "rgba(57, 255, 20, 0.1)";
//               e.target.style.boxShadow = "none";
//             }}
//           >
//             GO TO LOGIN
//           </button>
//         </div>
//       </div>
//     );

//   const styles = {
//     page: {
//       minHeight: "100vh",
//       backgroundColor: "#000c00",
//       backgroundImage: `
//         radial-gradient(circle at 20% 80%, rgba(57, 255, 20, 0.03) 0%, transparent 50%),
//         radial-gradient(circle at 80% 20%, rgba(57, 255, 20, 0.02) 0%, transparent 50%),
//         linear-gradient(180deg, #000c00 0%, #001500 100%)
//       `,
//       fontFamily: "'Share Tech Mono', 'Courier New', monospace",
//       paddingTop: "120px",
//       paddingBottom: "2rem",
//       position: "relative",
//       overflow: "hidden",
//     },
//     scanlines: {
//       position: "absolute",
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       background: `
//         repeating-linear-gradient(
//           0deg,
//           rgba(0, 20, 0, 0.1) 0px,
//           rgba(0, 20, 0, 0.1) 1px,
//           transparent 1px,
//           transparent 2px
//         )
//       `,
//       pointerEvents: "none",
//       zIndex: 1,
//     },
//     container: {
//       maxWidth: "1200px",
//       margin: "0 auto",
//       padding: "0 1rem",
//       position: "relative",
//       zIndex: 2,
//     },
//     header: {
//       textAlign: "center",
//       marginBottom: "3rem",
//     },
//     headerTitle: {
//       fontSize: "3rem",
//       fontWeight: "900",
//       background: "linear-gradient(90deg, #39ff14, #7cff70, #39ff14)",
//       backgroundSize: "200% 100%",
//       WebkitBackgroundClip: "text",
//       WebkitTextFillColor: "transparent",
//       animation: "shimmer 3s infinite linear",
//       marginBottom: "0.5rem",
//       letterSpacing: "3px",
//       textShadow: "0 0 30px rgba(57, 255, 20, 0.5)",
//     },
//     headerSubtitle: {
//       color: "#7cff70",
//       fontSize: "1.2rem",
//       letterSpacing: "2px",
//       opacity: 0.8,
//     },
//     profileCard: {
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       background: "rgba(0, 20, 0, 0.4)",
//       backdropFilter: "blur(10px)",
//       borderRadius: "20px",
//       border: "2px solid #39ff14",
//       boxShadow: `
//         0 0 40px rgba(57, 255, 20, 0.2),
//         0 20px 60px rgba(0, 0, 0, 0.5),
//         inset 0 1px 0 rgba(255, 255, 255, 0.1)
//       `,
//       overflow: "hidden",
//       maxWidth: "900px",
//       margin: "0 auto",
//     },
//     profileHeader: {
//       width: "100%",
//       padding: "2rem",
//       background: "linear-gradient(90deg, rgba(57, 255, 20, 0.1), rgba(0, 30, 0, 0.3))",
//       borderBottom: "1px solid rgba(57, 255, 20, 0.3)",
//     },
//     profileImageContainer: {
//       position: "relative",
//       marginBottom: "1.5rem",
//     },
//     profileImage: {
//       width: "180px",
//       height: "180px",
//       borderRadius: "50%",
//       border: "4px solid #39ff14",
//       boxShadow: `
//         0 0 30px rgba(57, 255, 20, 0.6),
//         inset 0 0 20px rgba(57, 255, 20, 0.2)
//       `,
//       objectFit: "cover",
//       filter: "sepia(100%) hue-rotate(90deg) saturate(300%) brightness(1.1)",
//     },
//     imageRing: {
//       position: "absolute",
//       top: "-10px",
//       left: "-10px",
//       right: "-10px",
//       bottom: "-10px",
//       borderRadius: "50%",
//       border: "2px solid transparent",
//       borderTop: "2px solid #39ff14",
//       borderRight: "2px solid #7cff70",
//       animation: "spin 3s linear infinite",
//     },
//     profileInfo: {
//       textAlign: "center",
//       padding: "2rem",
//     },
//     userName: {
//       fontSize: "2.5rem",
//       fontWeight: "700",
//       color: "#39ff14",
//       marginBottom: "0.5rem",
//       letterSpacing: "1px",
//       textShadow: "0 0 15px rgba(57, 255, 20, 0.7)",
//       position: "relative",
//       display: "inline-block",
//     },
//     userEmail: {
//       fontSize: "1.2rem",
//       color: "#7cff70",
//       marginBottom: "2rem",
//       opacity: 0.9,
//       letterSpacing: "1px",
//     },
//     statsGrid: {
//       display: "grid",
//       gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//       gap: "1.5rem",
//       width: "100%",
//       padding: "2rem",
//       background: "rgba(0, 15, 0, 0.3)",
//     },
//     statCard: {
//       background: "rgba(0, 25, 0, 0.4)",
//       border: "1px solid rgba(57, 255, 20, 0.2)",
//       borderRadius: "10px",
//       padding: "1.5rem",
//       textAlign: "center",
//       transition: "all 0.3s ease",
//     },
//     statValue: {
//       fontSize: "2.5rem",
//       fontWeight: "700",
//       color: "#39ff14",
//       marginBottom: "0.5rem",
//       textShadow: "0 0 10px rgba(57, 255, 20, 0.5)",
//     },
//     statLabel: {
//       fontSize: "0.9rem",
//       color: "#7cff70",
//       textTransform: "uppercase",
//       letterSpacing: "1px",
//       opacity: 0.8,
//     },
//     tabs: {
//       display: "flex",
//       justifyContent: "center",
//       gap: "0.5rem",
//       padding: "1rem 2rem",
//       background: "rgba(0, 20, 0, 0.3)",
//       borderBottom: "1px solid rgba(57, 255, 20, 0.2)",
//     },
//     tab: {
//       padding: "0.75rem 1.5rem",
//       background: "transparent",
//       border: "1px solid rgba(57, 255, 20, 0.3)",
//       color: "#7cff70",
//       fontFamily: "'Share Tech Mono', monospace",
//       fontSize: "0.9rem",
//       fontWeight: "600",
//       letterSpacing: "1px",
//       borderRadius: "5px",
//       cursor: "pointer",
//       transition: "all 0.3s ease",
//     },
//     activeTab: {
//       background: "rgba(57, 255, 20, 0.1)",
//       border: "1px solid #39ff14",
//       color: "#39ff14",
//       boxShadow: "0 0 15px rgba(57, 255, 20, 0.3)",
//     },
//     tabContent: {
//       padding: "2rem",
//     },
//     terminalWindow: {
//       background: "rgba(0, 10, 0, 0.6)",
//       border: "1px solid rgba(57, 255, 20, 0.3)",
//       borderRadius: "10px",
//       padding: "1.5rem",
//       fontFamily: "'Courier New', monospace",
//       fontSize: "0.95rem",
//       lineHeight: "1.6",
//       color: "#39ff14",
//     },
//     terminalLine: {
//       marginBottom: "0.5rem",
//     },
//     prompt: {
//       color: "#7cff70",
//       marginRight: "0.5rem",
//     },
//     command: {
//       color: "#39ff14",
//     },
//     output: {
//       color: "#99ff99",
//       opacity: 0.9,
//     },
//     editButton: {
//       marginTop: "2rem",
//       padding: "0.75rem 2rem",
//       background: "linear-gradient(90deg, rgba(57, 255, 20, 0.1), rgba(124, 255, 112, 0.2))",
//       border: "2px solid #39ff14",
//       color: "#39ff14",
//       fontSize: "1rem",
//       fontWeight: "bold",
//       borderRadius: "5px",
//       cursor: "pointer",
//       transition: "all 0.3s ease",
//       fontFamily: "'Share Tech Mono', monospace",
//       letterSpacing: "1px",
//     },
//   };

//   const animationStyles = `
//     @keyframes shimmer {
//       0% { background-position: -200% 0; }
//       100% { background-position: 200% 0; }
//     }
    
//     @keyframes spin {
//       0% { transform: rotate(0deg); }
//       100% { transform: rotate(360deg); }
//     }
    
//     @keyframes pulse {
//       0%, 100% { opacity: 1; }
//       50% { opacity: 0.7; }
//     }
    
//     @keyframes blink {
//       0%, 100% { opacity: 1; }
//       50% { opacity: 0.3; }
//     }
//   `;

//   const stats = [
//     { label: "Soil Analyses", value: "42", icon: "🌱" },
//     { label: "Accuracy Rate", value: "94.7%", icon: "🎯" },
//     { label: "Plants Identified", value: "127", icon: "🌿" },
//     { label: "Days Active", value: "158", icon: "⏱️" },
//   ];

//   const handleSave = () => {
//     // In a real app, you would update the user context here
//     setIsEditing(false);
//     console.log("User name updated to:", editedName);
//   };

//   return (
//     <>
//       <style>{animationStyles}</style>
//       <div style={styles.page}>
//         <div style={styles.scanlines}></div>
        
//         <div style={styles.container}>
//           <div style={styles.header}>
//             <h1 style={styles.headerTitle}>USER TERMINAL</h1>
//             <p style={styles.headerSubtitle}>ACCESS LEVEL: PREMIUM | STATUS: ONLINE</p>
//           </div>

//           <div style={styles.profileCard}>
//             <div style={styles.profileHeader}>
//               <div style={styles.profileImageContainer}>
//                 <img
//                   src={user.photo}
//                   alt={`${user.name}'s profile`}
//                   style={styles.profileImage}
//                   onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src = "https://i.pravatar.cc/300";
//                   }}
//                 />
//                 <div style={styles.imageRing}></div>
//               </div>
//             </div>

//             <div style={styles.profileInfo}>
//               {isEditing ? (
//                 <div style={{ marginBottom: "2rem" }}>
//                   <input
//                     type="text"
//                     value={editedName}
//                     onChange={(e) => setEditedName(e.target.value)}
//                     style={{
//                       backgroundColor: "rgba(0, 20, 0, 0.5)",
//                       border: "2px solid #39ff14",
//                       color: "#39ff14",
//                       padding: "0.75rem 1rem",
//                       fontSize: "2rem",
//                       fontFamily: "'Share Tech Mono', monospace",
//                       borderRadius: "5px",
//                       width: "100%",
//                       maxWidth: "400px",
//                       textAlign: "center",
//                       outline: "none",
//                       boxShadow: "0 0 15px rgba(57, 255, 20, 0.3)",
//                     }}
//                   />
//                   <div style={{ marginTop: "1rem", display: "flex", gap: "1rem", justifyContent: "center" }}>
//                     <button
//                       onClick={handleSave}
//                       style={{
//                         ...styles.editButton,
//                         padding: "0.5rem 1.5rem",
//                         background: "rgba(57, 255, 20, 0.2)",
//                       }}
//                     >
//                       SAVE
//                     </button>
//                     <button
//                       onClick={() => setIsEditing(false)}
//                       style={{
//                         ...styles.editButton,
//                         padding: "0.5rem 1.5rem",
//                         background: "rgba(255, 85, 85, 0.1)",
//                         borderColor: "#ff5555",
//                         color: "#ff9999",
//                       }}
//                     >
//                       CANCEL
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <h2 style={styles.userName}>
//                   {user.name}
//                   <button
//                     onClick={() => setIsEditing(true)}
//                     style={{
//                       marginLeft: "1rem",
//                       background: "none",
//                       border: "none",
//                       color: "#7cff70",
//                       fontSize: "1rem",
//                       cursor: "pointer",
//                       opacity: 0.7,
//                     }}
//                     title="Edit name"
//                   >
//                     ✏️
//                   </button>
//                 </h2>
//               )}
//               <p style={styles.userEmail}>{user.email}</p>
//             </div>

//             <div style={styles.statsGrid}>
//               {stats.map((stat, index) => (
//                 <div
//                   key={index}
//                   style={styles.statCard}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.transform = "translateY(-5px)";
//                     e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.3)";
//                     e.currentTarget.style.borderColor = "rgba(57, 255, 20, 0.5)";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.transform = "translateY(0)";
//                     e.currentTarget.style.boxShadow = "none";
//                     e.currentTarget.style.borderColor = "rgba(57, 255, 20, 0.2)";
//                   }}
//                 >
//                   <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{stat.icon}</div>
//                   <div style={styles.statValue}>{stat.value}</div>
//                   <div style={styles.statLabel}>{stat.label}</div>
//                 </div>
//               ))}
//             </div>

//             <div style={styles.tabs}>
//               <button
//                 style={{
//                   ...styles.tab,
//                   ...(activeTab === "profile" ? styles.activeTab : {})
//                 }}
//                 onClick={() => setActiveTab("profile")}
//               >
//                 PROFILE
//               </button>
//               <button
//                 style={{
//                   ...styles.tab,
//                   ...(activeTab === "activity" ? styles.activeTab : {})
//                 }}
//                 onClick={() => setActiveTab("activity")}
//               >
//                 ACTIVITY
//               </button>
//               <button
//                 style={{
//                   ...styles.tab,
//                   ...(activeTab === "settings" ? styles.activeTab : {})
//                 }}
//                 onClick={() => setActiveTab("settings")}
//               >
//                 SETTINGS
//               </button>
//             </div>

//             <div style={styles.tabContent}>
//               <div style={styles.terminalWindow}>
//                 <div style={styles.terminalLine}>
//                   <span style={styles.prompt}>user@agro-optics:~$</span>
//                   <span style={styles.command}>cat profile_info.txt</span>
//                 </div>
//                 <div style={styles.terminalLine}>
//                   <span style={styles.output}>================================</span>
//                 </div>
//                 <div style={styles.terminalLine}>
//                   <span style={styles.output}>USER: {user.name}</span>
//                 </div>
//                 <div style={styles.terminalLine}>
//                   <span style={styles.output}>EMAIL: {user.email}</span>
//                 </div>
//                 <div style={styles.terminalLine}>
//                   <span style={styles.output}>ROLE: Premium Subscriber</span>
//                 </div>
//                 <div style={styles.terminalLine}>
//                   <span style={styles.output}>JOINED: August 15, 2023</span>
//                 </div>
//                 <div style={styles.terminalLine}>
//                   <span style={styles.output}>LAST LOGIN: Today, 14:32</span>
//                 </div>
//                 <div style={styles.terminalLine}>
//                   <span style={styles.output}>================================</span>
//                 </div>
//                 <div style={{ ...styles.terminalLine, marginTop: "1rem" }}>
//                   <span style={styles.prompt}>user@agro-optics:~$</span>
//                   <span style={{ ...styles.command, animation: "blink 1s infinite" }}>█</span>
//                 </div>
//               </div>
//             </div>

//             <div style={{ padding: "2rem", textAlign: "center" }}>
//               <button
//                 style={styles.editButton}
//                 onMouseEnter={(e) => {
//                   e.target.style.background = "linear-gradient(90deg, rgba(57, 255, 20, 0.2), rgba(124, 255, 112, 0.3))";
//                   e.target.style.boxShadow = "0 0 30px rgba(57, 255, 20, 0.5)";
//                   e.target.style.transform = "translateY(-3px)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.background = "linear-gradient(90deg, rgba(57, 255, 20, 0.1), rgba(124, 255, 112, 0.2))";
//                   e.target.style.boxShadow = "none";
//                   e.target.style.transform = "translateY(0)";
//                 }}
//                 onClick={() => window.location.href = "/dashboard"}
//               >
//                 ACCESS DASHBOARD
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };























// import React, { useContext, useState, useEffect } from "react";

// // Mock context since we can't import external files
// const MockAppContext = React.createContext();
// const mockUser = {
//   name: "ALEX_JOHNSON",
//   email: "root@agro-optics::user/alex_johnson",
//   photo: "https://i.pravatar.cc/300",
//   securityClearance: "LEVEL_4",
//   accessCode: "0x7A3F9B",
//   lastLogin: "2024-01-15 14:32:17 UTC",
//   terminalId: "CRT-USER-7B3F",
// };

// export const UserProfilePage = () => {
//   const { user = mockUser } = useContext(MockAppContext) || {};
//   const [activeTab, setActiveTab] = useState("profile");
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedName, setEditedName] = useState(user?.name || "");
//   const [terminalLines, setTerminalLines] = useState([]);
//   const [scanlinePosition, setScanlinePosition] = useState(0);
//   const [powerOn, setPowerOn] = useState(true);
//   const [screenGlow, setScreenGlow] = useState(1);

//   // Terminal boot sequence
//   useEffect(() => {
//     const lines = [
//       "> INITIALIZING CRT TERMINAL v3.7...",
//       "> MEMORY TEST: 64KB OK",
//       "> LOADING BIOS... SUCCESS",
//       "> MOUNTING FILE SYSTEM...",
//       "> ACCESSING USER PROFILE DATABASE...",
//       "> VERIFYING SECURITY CLEARANCE...",
//       "> WELCOME TO AGRO-OPTICS TERMINAL",
//       ">",
//     ];

//     let index = 0;
//     const interval = setInterval(() => {
//       if (index < lines.length) {
//         setTerminalLines(prev => [...prev, lines[index]]);
//         index++;
//       } else {
//         clearInterval(interval);
//       }
//     }, 100);

//     return () => clearInterval(interval);
//   }, []);

//   // Scanline animation
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setScanlinePosition(prev => (prev + 1) % 100);
//     }, 50);
//     return () => clearInterval(interval);
//   }, []);

//   // Screen glow effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setScreenGlow(prev => 0.95 + Math.random() * 0.1);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   if (!powerOn) {
//     return (
//       <div style={styles.crtOffScreen}>
//         <div style={styles.powerButton} onClick={() => setPowerOn(true)}>
//           <div style={styles.powerIndicator}></div>
//           <span style={styles.powerText}>POWER ON</span>
//         </div>
//         <div style={styles.crtLabel}>AGRO-OPTICS TERMINAL v3.7</div>
//       </div>
//     );
//   }

//   const styles = {
//     crtContainer: {
//       minHeight: "100vh",
//       backgroundColor: "#0a0a0a",
//       backgroundImage: `
//         radial-gradient(ellipse at 50% 50%, rgba(0, 255, 0, 0.05) 0%, transparent 70%),
//         repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.15) 0px, rgba(0, 0, 0, 0.15) 1px, transparent 1px, transparent 2px)
//       `,
//       fontFamily: "'VT323', 'Courier New', monospace",
//       color: "#0f0",
//       padding: "20px",
//       position: "relative",
//       overflow: "hidden",
//       filter: `brightness(${screenGlow})`,
//     },
//     crtScreen: {
//       backgroundColor: "#001a00",
//       borderRadius: "20px 20px 50px 50px",
//       border: "30px solid #333",
//       borderTop: "40px solid #333",
//       borderBottom: "50px solid #333",
//       maxWidth: "900px",
//       margin: "40px auto",
//       position: "relative",
//       boxShadow: `
//         0 0 100px rgba(0, 255, 0, 0.3),
//         inset 0 0 200px rgba(0, 100, 0, 0.5),
//         0 20px 60px rgba(0, 0, 0, 0.8)
//       `,
//       overflow: "hidden",
//     },
//     crtBezel: {
//       position: "absolute",
//       top: "-40px",
//       left: "-30px",
//       right: "-30px",
//       bottom: "-50px",
//       background: `
//         linear-gradient(to bottom, 
//           #222 0%, 
//           #111 10%, 
//           #000 20%, 
//           #111 30%, 
//           #222 100%
//         )
//       `,
//       borderRadius: "40px",
//       zIndex: -1,
//     },
//     crtLabel: {
//       position: "absolute",
//       bottom: "-40px",
//       left: "50%",
//       transform: "translateX(-50%)",
//       color: "#666",
//       fontSize: "12px",
//       letterSpacing: "2px",
//       textTransform: "uppercase",
//     },
//     screenContent: {
//       padding: "30px",
//       minHeight: "600px",
//       position: "relative",
//       background: `
//         repeating-linear-gradient(
//           0deg,
//           rgba(0, 30, 0, 0.1) 0px,
//           rgba(0, 30, 0, 0.1) 1px,
//           transparent 1px,
//           transparent 2px
//         )
//       `,
//     },
//     scanline: {
//       position: "absolute",
//       top: `${scanlinePosition}%`,
//       left: 0,
//       right: 0,
//       height: "2px",
//       background: "rgba(0, 255, 0, 0.2)",
//       boxShadow: "0 0 10px rgba(0, 255, 0, 0.5)",
//       zIndex: 1,
//       pointerEvents: "none",
//     },
//     terminalHeader: {
//       borderBottom: "2px solid #0f0",
//       paddingBottom: "10px",
//       marginBottom: "20px",
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//     },
//     terminalTitle: {
//       fontSize: "24px",
//       color: "#0f0",
//       textShadow: "0 0 10px rgba(0, 255, 0, 0.7)",
//       letterSpacing: "2px",
//     },
//     terminalStatus: {
//       fontSize: "12px",
//       color: "#0f0",
//       opacity: 0.7,
//       display: "flex",
//       gap: "10px",
//     },
//     statusLed: {
//       display: "inline-block",
//       width: "8px",
//       height: "8px",
//       borderRadius: "50%",
//       backgroundColor: "#0f0",
//       animation: "pulse 2s infinite",
//     },
//     userGrid: {
//       display: "grid",
//       gridTemplateColumns: "1fr 2fr",
//       gap: "30px",
//       marginBottom: "30px",
//     },
//     userPortrait: {
//       border: "3px solid #0f0",
//       padding: "5px",
//       background: "rgba(0, 20, 0, 0.5)",
//       boxShadow: "inset 0 0 20px rgba(0, 255, 0, 0.3)",
//     },
//     userImage: {
//       width: "100%",
//       height: "200px",
//       objectFit: "cover",
//       filter: "sepia(1) hue-rotate(90deg) saturate(2) contrast(1.2)",
//       border: "1px solid #0f0",
//     },
//     userInfo: {
//       border: "1px solid #0f0",
//       padding: "20px",
//       background: "rgba(0, 20, 0, 0.3)",
//     },
//     infoLine: {
//       marginBottom: "10px",
//       fontSize: "16px",
//       display: "flex",
//     },
//     infoLabel: {
//       color: "#0f0",
//       minWidth: "150px",
//       textShadow: "0 0 5px rgba(0, 255, 0, 0.5)",
//     },
//     infoValue: {
//       color: "#9f9",
//       fontFamily: "'Courier New', monospace",
//     },
//     terminalWindow: {
//       border: "2px solid #0f0",
//       background: "rgba(0, 10, 0, 0.8)",
//       padding: "20px",
//       marginBottom: "20px",
//       height: "200px",
//       overflow: "hidden",
//       position: "relative",
//       boxShadow: "inset 0 0 30px rgba(0, 255, 0, 0.2)",
//     },
//     terminalOutput: {
//       fontFamily: "'Courier New', monospace",
//       fontSize: "14px",
//       lineHeight: "1.4",
//       color: "#9f9",
//     },
//     terminalLine: {
//       marginBottom: "5px",
//       whiteSpace: "pre-wrap",
//     },
//     cursor: {
//       display: "inline-block",
//       width: "8px",
//       height: "16px",
//       backgroundColor: "#0f0",
//       animation: "blink 1s infinite",
//       marginLeft: "2px",
//     },
//     controlPanel: {
//       display: "grid",
//       gridTemplateColumns: "repeat(3, 1fr)",
//       gap: "10px",
//       marginTop: "20px",
//     },
//     crtButton: {
//       padding: "10px",
//       background: "rgba(0, 30, 0, 0.5)",
//       border: "2px solid #0f0",
//       color: "#0f0",
//       fontFamily: "'VT323', monospace",
//       fontSize: "14px",
//       cursor: "pointer",
//       textTransform: "uppercase",
//       letterSpacing: "1px",
//       position: "relative",
//       overflow: "hidden",
//       transition: "all 0.2s",
//     },
//     buttonGlow: {
//       position: "absolute",
//       top: "0",
//       left: "-100%",
//       width: "100%",
//       height: "100%",
//       background: "linear-gradient(90deg, transparent, rgba(0, 255, 0, 0.2), transparent)",
//       transition: "left 0.5s",
//     },
//     crtOffScreen: {
//       minHeight: "100vh",
//       backgroundColor: "#000",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       flexDirection: "column",
//       position: "relative",
//     },
//     powerButton: {
//       width: "100px",
//       height: "100px",
//       borderRadius: "50%",
//       background: "linear-gradient(145deg, #222, #000)",
//       border: "5px solid #333",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       flexDirection: "column",
//       cursor: "pointer",
//       boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
//       transition: "all 0.3s",
//     },
//     powerIndicator: {
//       width: "40px",
//       height: "40px",
//       borderRadius: "50%",
//       background: "#300",
//       marginBottom: "10px",
//       boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)",
//     },
//     powerText: {
//       color: "#666",
//       fontSize: "12px",
//       letterSpacing: "2px",
//     },
//     crtTubeEffect: {
//       position: "absolute",
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       background: `
//         radial-gradient(ellipse at center, transparent 30%, rgba(0, 30, 0, 0.3) 100%)
//       `,
//       pointerEvents: "none",
//     },
//     editInput: {
//       background: "rgba(0, 20, 0, 0.5)",
//       border: "1px solid #0f0",
//       color: "#0f0",
//       fontFamily: "'VT323', monospace",
//       fontSize: "16px",
//       padding: "5px",
//       width: "100%",
//       outline: "none",
//     },
//   };

//   const crtCSS = `
//     @keyframes blink {
//       0%, 100% { opacity: 1; }
//       50% { opacity: 0; }
//     }
    
//     @keyframes pulse {
//       0%, 100% { opacity: 1; }
//       50% { opacity: 0.5; }
//     }
    
//     @keyframes flicker {
//       0% { opacity: 0.97; }
//       5% { opacity: 0.9; }
//       10% { opacity: 0.87; }
//       15% { opacity: 0.95; }
//       20% { opacity: 1; }
//       100% { opacity: 1; }
//     }
    
//     @keyframes textShadow {
//       0% { text-shadow: 0 0 10px #0f0; }
//       50% { text-shadow: 0 0 5px #0f0; }
//       100% { text-shadow: 0 0 10px #0f0; }
//     }
    
//     .crt-button:hover .button-glow {
//       left: 100%;
//     }
    
//     .crt-button:hover {
//       box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
//       background: rgba(0, 40, 0, 0.6);
//     }
    
//     .power-button:hover {
//       transform: scale(1.1);
//     }
    
//     .power-button:hover .power-indicator {
//       background: #f00;
//       box-shadow: 0 0 20px rgba(255, 0, 0, 0.7);
//     }
    
//     .crt-screen {
//       animation: flicker 0.15s infinite;
//     }
//   `;

//   const handleButtonHover = (e) => {
//     const glow = e.currentTarget.querySelector('.button-glow');
//     if (glow) {
//       glow.style.left = '100%';
//       setTimeout(() => {
//         glow.style.left = '-100%';
//       }, 500);
//     }
//   };

//   return (
//     <>
//       <style>{crtCSS}</style>
//       <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
      
//       <div style={styles.crtContainer}>
//         <div style={styles.crtScreen} className="crt-screen">
//           <div style={styles.crtBezel}></div>
//           <div style={styles.scanline}></div>
//           <div style={styles.crtTubeEffect}></div>
          
//           <div style={styles.screenContent}>
//             <div style={styles.terminalHeader}>
//               <div style={styles.terminalTitle}>
//                 AGRO-OPTICS TERMINAL v3.7
//               </div>
//               <div style={styles.terminalStatus}>
//                 <span style={styles.statusLed}></span>
//                 ONLINE
//                 <span style={{marginLeft: '20px'}}>{new Date().toLocaleTimeString()}</span>
//               </div>
//             </div>

//             <div style={styles.userGrid}>
//               <div style={styles.userPortrait}>
//                 <img
//                   src={user.photo}
//                   alt="USER PORTRAIT"
//                   style={styles.userImage}
//                   onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src = "https://i.pravatar.cc/300";
//                   }}
//                 />
//                 <div style={{textAlign: 'center', marginTop: '10px', fontSize: '12px'}}>
//                   IDENT: {user.terminalId}
//                 </div>
//               </div>

//               <div style={styles.userInfo}>
//                 <div style={styles.infoLine}>
//                   <span style={styles.infoLabel}>USER:</span>
//                   {isEditing ? (
//                     <input
//                       type="text"
//                       value={editedName}
//                       onChange={(e) => setEditedName(e.target.value)}
//                       style={styles.editInput}
//                       onKeyDown={(e) => {
//                         if (e.key === 'Enter') {
//                           setIsEditing(false);
//                           console.log("User updated to:", editedName);
//                         }
//                         if (e.key === 'Escape') setIsEditing(false);
//                       }}
//                     />
//                   ) : (
//                     <span style={styles.infoValue}>{user.name}</span>
//                   )}
//                 </div>
//                 <div style={styles.infoLine}>
//                   <span style={styles.infoLabel}>ACCESS:</span>
//                   <span style={styles.infoValue}>{user.securityClearance}</span>
//                 </div>
//                 <div style={styles.infoLine}>
//                   <span style={styles.infoLabel}>EMAIL:</span>
//                   <span style={styles.infoValue}>{user.email}</span>
//                 </div>
//                 <div style={styles.infoLine}>
//                   <span style={styles.infoLabel}>LAST LOGIN:</span>
//                   <span style={styles.infoValue}>{user.lastLogin}</span>
//                 </div>
//                 <div style={styles.infoLine}>
//                   <span style={styles.infoLabel}>ACCESS CODE:</span>
//                   <span style={{...styles.infoValue, color: '#ff0'}}>{user.accessCode}</span>
//                 </div>
//               </div>
//             </div>

//             <div style={styles.terminalWindow}>
//               <div style={styles.terminalOutput}>
//                 {terminalLines.map((line, index) => (
//                   <div key={index} style={styles.terminalLine}>
//                     {line}
//                   </div>
//                 ))}
//                 <div style={styles.terminalLine}>
//                   <span style={{color: '#0f0'}}>{'>'} PROFILE LOADED SUCCESSFULLY</span>
//                   <div style={styles.cursor}></div>
//                 </div>
//               </div>
//             </div>

//             <div style={styles.controlPanel}>
//               <button
//                 className="crt-button"
//                 style={styles.crtButton}
//                 onMouseEnter={handleButtonHover}
//                 onClick={() => setIsEditing(!isEditing)}
//               >
//                 <div className="button-glow" style={styles.buttonGlow}></div>
//                 {isEditing ? "SAVE PROFILE" : "EDIT PROFILE"}
//               </button>
              
//               <button
//                 className="crt-button"
//                 style={styles.crtButton}
//                 onMouseEnter={handleButtonHover}
//                 onClick={() => setPowerOn(false)}
//               >
//                 <div className="button-glow" style={styles.buttonGlow}></div>
//                 POWER OFF
//               </button>
              
//               <button
//                 className="crt-button"
//                 style={styles.crtButton}
//                 onMouseEnter={handleButtonHover}
//                 onClick={() => window.location.href = "/dashboard"}
//               >
//                 <div className="button-glow" style={styles.buttonGlow}></div>
//                 ACCESS MAINFRAME
//               </button>
//             </div>
//           </div>
//         </div>
        
//         <div style={styles.crtLabel}>
//           AGRO-OPTICS INDUSTRIES | PROPRIETARY SYSTEM
//         </div>
//       </div>
//     </>
//   );
// };
















import React, { useContext, useState, useEffect, useRef } from "react";

// Mock context since we can't import external files
const MockAppContext = React.createContext();
const mockUser = {
  name: "ALEX_JOHNSON",
  email: "root@agro-optics::user/alex_johnson",
  photo: "https://i.pravatar.cc/300",
  securityClearance: "LEVEL_4",
  accessCode: "0x7A3F9B",
  lastLogin: "2024-01-15 14:32:17 UTC",
  terminalId: "CRT-USER-7B3F",
  cpuUsage: "47%",
  memory: "3.2GB/8GB",
  networkStatus: "SECURE",
  uptime: "14d 7h 32m"
};

export const UserProfilePage = () => {
  const { user = mockUser } = useContext(MockAppContext) || {};
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(user?.name || "");
  const [terminalLines, setTerminalLines] = useState([]);
  const [scanlinePosition, setScanlinePosition] = useState(0);
  const [powerOn, setPowerOn] = useState(true);
  const [screenGlow, setScreenGlow] = useState(1);
  const [commandInput, setCommandInput] = useState("");
  const [systemMetrics, setSystemMetrics] = useState({
    cpu: 47,
    memory: 3.2,
    temperature: 42,
    network: 87
  });
  const [activeConnections, setActiveConnections] = useState(3);
  const terminalEndRef = useRef(null);

  // Terminal boot sequence
  useEffect(() => {
    const bootSequence = [
      "> INITIALIZING AGRO-OPTICS TERMINAL v4.2.1...",
      "> MEMORY TEST: 64KB OK",
      "> LOADING BIOS... SUCCESS",
      "> MOUNTING FILE SYSTEM...",
      "> ACCESSING USER PROFILE DATABASE...",
      "> VERIFYING SECURITY CLEARANCE...",
      "> ENCRYPTION: AES-256 ACTIVE",
      "> NETWORK: SECURE TUNNEL ESTABLISHED",
      "> WELCOME TO AGRO-OPTICS MAINFRAME",
      "> TYPE 'HELP' FOR AVAILABLE COMMANDS",
      ">",
      `> USER: ${user.name} AUTHENTICATED`,
      `> CLEARANCE: ${user.securityClearance}`,
      `> TERMINAL: ${user.terminalId}`,
      "> SYSTEM READY",
      ""
    ];

    let index = 0;
    const interval = setInterval(() => {
      if (index < bootSequence.length) {
        setTerminalLines(prev => [...prev, bootSequence[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [user]);

  // Scanline animation
  useEffect(() => {
    const interval = setInterval(() => {
      setScanlinePosition(prev => (prev + 1.5) % 100);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  // Screen effects
  useEffect(() => {
    const interval = setInterval(() => {
      setScreenGlow(prev => 0.95 + Math.random() * 0.15);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // System metrics animation
  useEffect(() => {
    const interval = setInterval(() => {
      setSystemMetrics(prev => ({
        cpu: Math.min(100, Math.max(10, prev.cpu + (Math.random() * 10 - 5))),
        memory: Math.min(8, Math.max(2.5, prev.memory + (Math.random() * 0.5 - 0.25))),
        temperature: Math.min(80, Math.max(35, prev.temperature + (Math.random() * 4 - 2))),
        network: Math.min(100, Math.max(50, prev.network + (Math.random() * 10 - 5)))
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Active connections animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveConnections(prev => {
        const change = Math.random() > 0.7 ? (Math.random() > 0.5 ? 1 : -1) : 0;
        return Math.max(1, Math.min(10, prev + change));
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const executeCommand = (cmd) => {
    const commands = {
      help: "AVAILABLE COMMANDS: HELP, CLEAR, STATUS, METRICS, SCAN, REBOOT, LOGOUT",
      clear: () => {
        setTerminalLines([]);
        return "TERMINAL CLEARED";
      },
      status: "SYSTEM STATUS: ONLINE | CPU: 47% | MEM: 3.2GB | TEMP: 42°C",
      metrics: `SYSTEM METRICS:\nCPU: ${systemMetrics.cpu.toFixed(1)}%\nMEM: ${systemMetrics.memory.toFixed(1)}GB\nTEMP: ${systemMetrics.temperature.toFixed(1)}°C\nNET: ${systemMetrics.network.toFixed(1)}%`,
      scan: "SCANNING NETWORK... 3 ACTIVE CONNECTIONS DETECTED",
      reboot: "INITIATING SYSTEM REBOOT...",
      logout: "LOGGING OUT USER...",
      whoami: `USER: ${user.name}\nCLEARANCE: ${user.securityClearance}\nTERMINAL: ${user.terminalId}`,
      date: new Date().toLocaleString() + " UTC",
      echo: cmd.split(' ').slice(1).join(' ') || "ECHO: NO INPUT PROVIDED"
    };

    const normalizedCmd = cmd.toLowerCase().trim();
    const baseCmd = normalizedCmd.split(' ')[0];
    
    if (commands[baseCmd]) {
      if (typeof commands[baseCmd] === 'function') {
        return commands[baseCmd]();
      }
      return commands[baseCmd];
    }
    return `COMMAND NOT FOUND: ${cmd.toUpperCase()}\nTYPE 'HELP' FOR AVAILABLE COMMANDS`;
  };

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    if (!commandInput.trim()) return;
    
    const output = executeCommand(commandInput);
    if (commandInput.toLowerCase().trim() === 'reboot') {
      setTimeout(() => {
        setTerminalLines([]);
        setCommandInput("");
        // Re-run boot sequence
        const rebootSeq = [
          "> REBOOTING SYSTEM...",
          "> SHUTTING DOWN SERVICES...",
          "> REINITIALIZING KERNEL...",
          "> SYSTEM BOOT COMPLETE",
          "> WELCOME BACK"
        ];
        rebootSeq.forEach((line, i) => {
          setTimeout(() => {
            setTerminalLines(prev => [...prev, line]);
          }, i * 200);
        });
      }, 1000);
    } else if (commandInput.toLowerCase().trim() === 'logout') {
      setTimeout(() => setPowerOn(false), 1000);
    } else {
      setTerminalLines(prev => [...prev, `$ ${commandInput}`, output]);
      setCommandInput("");
    }
  };

  if (!powerOn) {
    return (
      <div style={styles.crtOffScreen}>
        <div style={styles.crtStatic}>
          <div style={styles.staticNoise}></div>
        </div>
        <div style={styles.powerButton} onClick={() => {
          setPowerOn(true);
          setTerminalLines([]);
        }}>
          <div style={styles.powerIndicatorOff}></div>
          <div style={styles.powerIndicatorOn}></div>
          <span style={styles.powerText}>ACTIVATE TERMINAL</span>
        </div>
        <div style={styles.offScreenText}>
          <div style={styles.glitchText} data-text="AGRO-OPTICS TERMINAL">AGRO-OPTICS TERMINAL</div>
          <div style={styles.offScreenSubtext}>SYSTEM OFFLINE</div>
        </div>
        <div style={styles.crtLabel}>AGRO-OPTICS INDUSTRIES | PROPRIETARY SYSTEM</div>
      </div>
    );
  }

  const styles = {
    crtContainer: {
      minHeight: "100vh",
      backgroundColor: "#000",
      backgroundImage: `
        radial-gradient(circle at 20% 50%, rgba(0, 80, 0, 0.2) 0%, transparent 50%),
        radial-gradient(circle at 80% 50%, rgba(0, 40, 0, 0.1) 0%, transparent 50%)
      `,
      fontFamily: "'VT323', 'Courier New', monospace",
      color: "#0f0",
      padding: "20px",
      position: "relative",
      overflow: "hidden",
      filter: `brightness(${screenGlow}) contrast(1.2)`,
    },
    crtScreen: {
      backgroundColor: "#001a00",
      borderRadius: "15px 15px 40px 40px",
      border: "20px solid #1a1a1a",
      borderTop: "30px solid #1a1a1a",
      borderBottom: "40px solid #1a1a1a",
      maxWidth: "1000px",
      margin: "40px auto",
      position: "relative",
      boxShadow: `
        0 0 150px rgba(0, 255, 0, 0.4),
        inset 0 0 100px rgba(0, 80, 0, 0.7),
        0 20px 80px rgba(0, 0, 0, 0.9),
        inset 0 0 0 2px rgba(0, 255, 0, 0.1)
      `,
      overflow: "hidden",
      transform: "perspective(1000px) rotateX(2deg)",
    },
    crtBezel: {
      position: "absolute",
      top: "-30px",
      left: "-20px",
      right: "-20px",
      bottom: "-40px",
      background: `
        linear-gradient(135deg, 
          #111 0%, 
          #000 20%, 
          #111 40%, 
          #222 60%, 
          #111 80%, 
          #000 100%
        )
      `,
      borderRadius: "25px",
      zIndex: -1,
    },
    crtCurvature: {
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      background: `
        radial-gradient(ellipse at center, 
          transparent 30%, 
          rgba(0, 40, 0, 0.4) 60%,
          rgba(0, 20, 0, 0.7) 100%
        )
      `,
      borderRadius: "15px",
      pointerEvents: "none",
    },
    crtLabel: {
      position: "absolute",
      bottom: "-35px",
      left: "50%",
      transform: "translateX(-50%)",
      color: "#444",
      fontSize: "11px",
      letterSpacing: "3px",
      textTransform: "uppercase",
      textShadow: "0 0 5px rgba(0, 255, 0, 0.3)",
    },
    screenContent: {
      padding: "25px",
      minHeight: "650px",
      position: "relative",
      background: `
        repeating-linear-gradient(
          0deg,
          rgba(0, 40, 0, 0.15) 0px,
          rgba(0, 40, 0, 0.15) 1px,
          transparent 1px,
          transparent 2px
        ),
        repeating-linear-gradient(
          90deg,
          rgba(0, 30, 0, 0.05) 0px,
          rgba(0, 30, 0, 0.05) 1px,
          transparent 1px,
          transparent 2px
        )
      `,
    },
    scanline: {
      position: "absolute",
      top: `${scanlinePosition}%`,
      left: "0",
      right: "0",
      height: "3px",
      background: "linear-gradient(90deg, transparent, rgba(0, 255, 0, 0.3), transparent)",
      boxShadow: "0 0 15px rgba(0, 255, 0, 0.5)",
      zIndex: 1,
      pointerEvents: "none",
    },
    terminalHeader: {
      borderBottom: "2px solid #0f0",
      paddingBottom: "15px",
      marginBottom: "25px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "relative",
    },
    terminalTitle: {
      fontSize: "28px",
      color: "#0f0",
      textShadow: `
        0 0 15px rgba(0, 255, 0, 0.8),
        0 0 30px rgba(0, 255, 0, 0.4)
      `,
      letterSpacing: "3px",
      fontVariant: "small-caps",
    },
    terminalStatus: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
    },
    statusIndicator: {
      display: "flex",
      alignItems: "center",
      gap: "5px",
      fontSize: "14px",
    },
    statusLed: {
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      backgroundColor: "#0f0",
      animation: "pulse 2s infinite",
      boxShadow: "0 0 10px rgba(0, 255, 0, 0.7)",
    },
    systemInfo: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "20px",
      marginBottom: "25px",
    },
    infoPanel: {
      border: "2px solid #0f0",
      padding: "15px",
      background: "rgba(0, 20, 0, 0.4)",
      position: "relative",
      overflow: "hidden",
    },
    infoHeader: {
      color: "#0f0",
      fontSize: "14px",
      marginBottom: "10px",
      textTransform: "uppercase",
      letterSpacing: "1px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    infoValue: {
      fontSize: "24px",
      color: "#9f9",
      fontFamily: "'Courier New', monospace",
      textShadow: "0 0 10px rgba(159, 255, 159, 0.5)",
    },
    infoSubtext: {
      fontSize: "12px",
      color: "#6c6",
      marginTop: "5px",
    },
    progressBar: {
      height: "8px",
      background: "rgba(0, 30, 0, 0.5)",
      borderRadius: "4px",
      marginTop: "10px",
      overflow: "hidden",
    },
    progressFill: {
      height: "100%",
      background: "linear-gradient(90deg, #0f0, #9f0)",
      borderRadius: "4px",
      transition: "width 0.5s ease",
    },
    userGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1.5fr",
      gap: "25px",
      marginBottom: "30px",
    },
    userPortrait: {
      border: "3px solid #0f0",
      padding: "8px",
      background: "rgba(0, 25, 0, 0.6)",
      boxShadow: `
        inset 0 0 30px rgba(0, 255, 0, 0.4),
        0 0 30px rgba(0, 255, 0, 0.2)
      `,
      position: "relative",
      overflow: "hidden",
    },
    userImage: {
      width: "100%",
      height: "180px",
      objectFit: "cover",
      filter: `
        sepia(1) 
        hue-rotate(90deg) 
        saturate(3) 
        contrast(1.3)
        brightness(0.9)
      `,
      border: "1px solid #0f0",
    },
    imageOverlay: {
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      background: "linear-gradient(45deg, transparent 40%, rgba(0, 255, 0, 0.1) 50%, transparent 60%)",
      animation: "glitchScan 3s infinite linear",
    },
    terminalWindow: {
      border: "2px solid #0f0",
      background: "rgba(0, 15, 0, 0.85)",
      padding: "15px",
      marginBottom: "20px",
      height: "250px",
      overflowY: "auto",
      position: "relative",
      boxShadow: `
        inset 0 0 40px rgba(0, 255, 0, 0.3),
        0 0 20px rgba(0, 255, 0, 0.1)
      `,
    },
    terminalOutput: {
      fontFamily: "'Courier New', monospace",
      fontSize: "15px",
      lineHeight: "1.4",
      color: "#9f9",
    },
    terminalLine: {
      marginBottom: "8px",
      whiteSpace: "pre-wrap",
      textShadow: "0 0 5px rgba(159, 255, 159, 0.3)",
    },
    prompt: {
      color: "#0f0",
      marginRight: "10px",
    },
    commandInput: {
      display: "flex",
      alignItems: "center",
      marginTop: "15px",
    },
    inputPrompt: {
      color: "#0f0",
      marginRight: "10px",
      fontSize: "15px",
    },
    commandField: {
      flex: 1,
      background: "transparent",
      border: "none",
      color: "#9f9",
      fontFamily: "'Courier New', monospace",
      fontSize: "15px",
      outline: "none",
      caretColor: "#0f0",
      textShadow: "0 0 5px rgba(159, 255, 159, 0.3)",
    },
    cursor: {
      display: "inline-block",
      width: "9px",
      height: "18px",
      backgroundColor: "#0f0",
      animation: "blink 1s infinite",
      marginLeft: "2px",
      boxShadow: "0 0 10px rgba(0, 255, 0, 0.7)",
    },
    controlPanel: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "12px",
      marginTop: "25px",
    },
    crtButton: {
      padding: "12px 8px",
      background: "rgba(0, 30, 0, 0.6)",
      border: "2px solid #0f0",
      color: "#0f0",
      fontFamily: "'VT323', monospace",
      fontSize: "16px",
      cursor: "pointer",
      textTransform: "uppercase",
      letterSpacing: "1px",
      position: "relative",
      overflow: "hidden",
      transition: "all 0.3s ease",
      textShadow: "0 0 5px rgba(0, 255, 0, 0.5)",
    },
    buttonGlow: {
      position: "absolute",
      top: "0",
      left: "-100%",
      width: "100%",
      height: "100%",
      background: "linear-gradient(90deg, transparent, rgba(0, 255, 0, 0.3), transparent)",
    },
    crtOffScreen: {
      minHeight: "100vh",
      backgroundColor: "#000",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      position: "relative",
      overflow: "hidden",
    },
    crtStatic: {
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      background: "linear-gradient(45deg, #000 25%, #111 25%, #111 50%, #000 50%, #000 75%, #111 75%, #111)",
      backgroundSize: "10px 10px",
      opacity: "0.1",
      animation: "static 0.1s infinite",
    },
    staticNoise: {
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      background: "radial-gradient(circle, transparent 20%, #000 100%)",
    },
    powerButton: {
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      background: "linear-gradient(145deg, #111, #000)",
      border: "6px solid #222",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      cursor: "pointer",
      boxShadow: "0 15px 40px rgba(0, 0, 0, 0.7)",
      transition: "all 0.4s ease",
      position: "relative",
      zIndex: "2",
    },
    powerIndicatorOff: {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      background: "#300",
      marginBottom: "10px",
      boxShadow: "inset 0 0 15px rgba(0, 0, 0, 0.8)",
    },
    powerIndicatorOn: {
      position: "absolute",
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      background: "#f00",
      boxShadow: "0 0 30px rgba(255, 0, 0, 0.8)",
      opacity: "0",
      animation: "powerPulse 2s infinite",
    },
    powerText: {
      color: "#666",
      fontSize: "11px",
      letterSpacing: "3px",
      textTransform: "uppercase",
      transition: "all 0.3s ease",
    },
    offScreenText: {
      position: "relative",
      zIndex: "2",
      textAlign: "center",
      marginTop: "40px",
    },
    glitchText: {
      fontSize: "48px",
      color: "#0f0",
      textTransform: "uppercase",
      letterSpacing: "5px",
      position: "relative",
      animation: "glitch 3s infinite",
    },
    offScreenSubtext: {
      fontSize: "18px",
      color: "#666",
      marginTop: "20px",
      letterSpacing: "2px",
    },
    particleContainer: {
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      pointerEvents: "none",
      zIndex: "1",
    },
    particle: {
      position: "absolute",
      width: "2px",
      height: "2px",
      backgroundColor: "#0f0",
      boxShadow: "0 0 5px #0f0",
    },
    crtReflection: {
      position: "absolute",
      top: "10%",
      left: "10%",
      right: "10%",
      bottom: "10%",
      background: "linear-gradient(135deg, transparent 30%, rgba(255, 255, 255, 0.05) 50%, transparent 70%)",
      borderRadius: "15px",
      pointerEvents: "none",
    },
  };

  const crtCSS = `
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 1; box-shadow: 0 0 10px rgba(0, 255, 0, 0.7); }
      50% { opacity: 0.7; box-shadow: 0 0 20px rgba(0, 255, 0, 0.9); }
    }
    
    @keyframes flicker {
      0% { opacity: 0.98; }
      2% { opacity: 0.9; }
      4% { opacity: 0.87; }
      6% { opacity: 0.95; }
      8% { opacity: 1; }
      100% { opacity: 1; }
    }
    
    @keyframes glitch {
      0% { transform: translate(0); }
      20% { transform: translate(-2px, 2px); }
      40% { transform: translate(-2px, -2px); }
      60% { transform: translate(2px, 2px); }
      80% { transform: translate(2px, -2px); }
      100% { transform: translate(0); }
    }
    
    @keyframes static {
      0% { opacity: 0.1; }
      50% { opacity: 0.15; }
      100% { opacity: 0.1; }
    }
    
    @keyframes powerPulse {
      0%, 100% { opacity: 0; transform: scale(0.8); }
      50% { opacity: 0.5; transform: scale(1); }
    }
    
    @keyframes glitchScan {
      0% { transform: translateY(-100%) rotate(45deg); }
      100% { transform: translateY(100%) rotate(45deg); }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }
    
    .crt-screen {
      animation: flicker 0.15s infinite;
    }
    
    .crt-button:hover {
      background: rgba(0, 50, 0, 0.7);
      box-shadow: 0 0 25px rgba(0, 255, 0, 0.4);
      transform: translateY(-2px);
    }
    
    .crt-button:active {
      transform: translateY(0);
      box-shadow: 0 0 15px rgba(0, 255, 0, 0.3);
    }
    
    .power-button:hover {
      transform: scale(1.1);
      border-color: #333;
    }
    
    .power-button:hover .power-text {
      color: #888;
    }
    
    .power-button:hover .power-indicator-off {
      box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.9);
    }
    
    .glitch-text::before,
    .glitch-text::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    
    .glitch-text::before {
      left: 2px;
      text-shadow: -2px 0 #f00;
      animation: glitch 3s infinite linear alternate-reverse;
      clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
    }
    
    .glitch-text::after {
      left: -2px;
      text-shadow: 2px 0 #00f;
      animation: glitch 2s infinite linear alternate-reverse;
      clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
    }
  `;

  const handleButtonHover = (e) => {
    const glow = e.currentTarget.querySelector('.button-glow');
    if (glow) {
      glow.style.transition = 'none';
      glow.style.left = '-100%';
      setTimeout(() => {
        glow.style.transition = 'left 0.5s ease';
        glow.style.left = '100%';
      }, 10);
    }
  };

  const handleCommandKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setCommandInput("HELP");
    }
  };

  return (
    <>
      <style>{crtCSS}</style>
      <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
      
      <div style={styles.crtContainer}>
        <div style={styles.crtScreen} className="crt-screen">
          <div style={styles.crtBezel}></div>
          <div style={styles.crtCurvature}></div>
          <div style={styles.scanline}></div>
          <div style={styles.crtReflection}></div>
          
          <div style={styles.screenContent}>
            <div style={styles.terminalHeader}>
              <div style={styles.terminalTitle}>
                {"[ AGRO-OPTICS TERMINAL v4.2.1 ]"}
              </div>
              <div style={styles.terminalStatus}>
                <div style={styles.statusIndicator}>
                  <div style={styles.statusLed}></div>
                  <span>ONLINE</span>
                </div>
                <div style={{color: '#6c6', fontSize: '14px'}}>
                  {new Date().toLocaleTimeString([], {hour12: false})}
                </div>
              </div>
            </div>

            <div style={styles.systemInfo}>
              <div style={styles.infoPanel}>
                <div style={styles.infoHeader}>
                  <span>SYSTEM METRICS</span>
                  <span style={{color: '#6c6', fontSize: '12px'}}>LIVE</span>
                </div>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px'}}>
                  <div>
                    <div style={styles.infoValue}>{systemMetrics.cpu.toFixed(1)}%</div>
                    <div style={styles.infoSubtext}>CPU LOAD</div>
                    <div style={styles.progressBar}>
                      <div style={{...styles.progressFill, width: `${systemMetrics.cpu}%`}}></div>
                    </div>
                  </div>
                  <div>
                    <div style={styles.infoValue}>{systemMetrics.memory.toFixed(1)}GB</div>
                    <div style={styles.infoSubtext}>MEMORY</div>
                    <div style={styles.progressBar}>
                      <div style={{...styles.progressFill, width: `${(systemMetrics.memory/8)*100}%`}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={styles.infoPanel}>
                <div style={styles.infoHeader}>
                  <span>NETWORK STATUS</span>
                  <span style={{color: '#6c6', fontSize: '12px'}}>SECURE</span>
                </div>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px'}}>
                  <div>
                    <div style={styles.infoValue}>{activeConnections}</div>
                    <div style={styles.infoSubtext}>CONNECTIONS</div>
                  </div>
                  <div>
                    <div style={styles.infoValue}>{systemMetrics.network.toFixed(1)}%</div>
                    <div style={styles.infoSubtext}>BANDWIDTH</div>
                    <div style={styles.progressBar}>
                      <div style={{...styles.progressFill, width: `${systemMetrics.network}%`}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={styles.userGrid}>
              <div style={styles.userPortrait}>
                <img
                  src={user.photo}
                  alt="USER PORTRAIT"
                  style={styles.userImage}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://i.pravatar.cc/300";
                  }}
                />
                <div style={styles.imageOverlay}></div>
                <div style={{textAlign: 'center', marginTop: '15px', fontSize: '14px', color: '#6c6'}}>
                  TERMINAL: {user.terminalId}
                </div>
              </div>

              <div style={styles.infoPanel}>
                <div style={styles.infoHeader}>
                  <span>USER PROFILE</span>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    style={{
                      background: 'none',
                      border: '1px solid #0f0',
                      color: '#0f0',
                      fontFamily: "'VT323', monospace",
                      fontSize: '12px',
                      padding: '2px 8px',
                      cursor: 'pointer',
                    }}
                  >
                    {isEditing ? 'SAVE' : 'EDIT'}
                  </button>
                </div>
                <div style={{marginBottom: '15px'}}>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                      style={{
                        background: 'rgba(0, 20, 0, 0.5)',
                        border: '1px solid #0f0',
                        color: '#0f0',
                        fontFamily: "'VT323', monospace",
                        fontSize: '20px',
                        padding: '5px',
                        width: '100%',
                        outline: 'none',
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') setIsEditing(false);
                        if (e.key === 'Escape') setIsEditing(false);
                      }}
                    />
                  ) : (
                    <div style={{...styles.infoValue, fontSize: '22px'}}>{user.name}</div>
                  )}
                </div>
                <div style={{color: '#9f9', marginBottom: '10px'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '5px'}}>
                    <span>CLEARANCE:</span>
                    <span style={{color: '#ff0'}}>{user.securityClearance}</span>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '5px'}}>
                    <span>EMAIL:</span>
                    <span>{user.email}</span>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '5px'}}>
                    <span>LAST LOGIN:</span>
                    <span>{user.lastLogin}</span>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <span>ACCESS CODE:</span>
                    <span style={{color: '#f90'}}>{user.accessCode}</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={styles.terminalWindow}>
              <div style={styles.terminalOutput} ref={terminalEndRef}>
                {terminalLines.map((line, index) => (
                  <div key={index} style={styles.terminalLine}>
                    <span style={styles.prompt}>{line.startsWith('>') ? '>' : line.startsWith('$') ? '$' : ''}</span>
                    {line}
                  </div>
                ))}
              </div>
              <form style={styles.commandInput} onSubmit={handleCommandSubmit}>
                <span style={styles.inputPrompt}>$</span>
                <input
                  type="text"
                  value={commandInput}
                  onChange={(e) => setCommandInput(e.target.value.toUpperCase())}
                  onKeyDown={handleCommandKeyDown}
                  style={styles.commandField}
                  placeholder="TYPE COMMAND..."
                  autoFocus
                />
                <div style={styles.cursor}></div>
              </form>
            </div>

            <div style={styles.controlPanel}>
              <button
                className="crt-button"
                style={styles.crtButton}
                onMouseEnter={handleButtonHover}
                onClick={() => window.location.href = "/dashboard"}
              >
                <div className="button-glow" style={styles.buttonGlow}></div>
                MAINFRAME
              </button>
              
              <button
                className="crt-button"
                style={styles.crtButton}
                onMouseEnter={handleButtonHover}
                onClick={() => {
                  setTerminalLines(prev => [...prev, "$ CLEAR"]);
                  setTimeout(() => setTerminalLines([]), 100);
                }}
              >
                <div className="button-glow" style={styles.buttonGlow}></div>
                CLEAR
              </button>
              
              <button
                className="crt-button"
                style={styles.crtButton}
                onMouseEnter={handleButtonHover}
                onClick={() => {
                  setTerminalLines(prev => [...prev, "$ REBOOT"]);
                  setTimeout(() => {
                    setTerminalLines([]);
                    const rebootSeq = [
                      "> REBOOTING SYSTEM...",
                      "> SHUTTING DOWN SERVICES...",
                      "> REINITIALIZING KERNEL...",
                      "> SYSTEM BOOT COMPLETE",
                      "> WELCOME BACK"
                    ];
                    rebootSeq.forEach((line, i) => {
                      setTimeout(() => {
                        setTerminalLines(prev => [...prev, line]);
                      }, i * 200);
                    });
                  }, 1000);
                }}
              >
                <div className="button-glow" style={styles.buttonGlow}></div>
                REBOOT
              </button>
              
              <button
                className="crt-button"
                style={styles.crtButton}
                onMouseEnter={handleButtonHover}
                onClick={() => setPowerOn(false)}
              >
                <div className="button-glow" style={styles.buttonGlow}></div>
                POWER OFF
              </button>
            </div>
          </div>
        </div>
        
        <div style={styles.crtLabel}>
          {"[ AGRO-OPTICS INDUSTRIES | PROPRIETARY SYSTEM v4.2.1 ]"}
        </div>
      </div>
    </>
  );
};