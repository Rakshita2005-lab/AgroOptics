// import { TestAPI } from "./components/TestAPI";
// import React, { useRef } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AppProvider } from "./context/AppContext";
// import { ScrollToTop } from "./components/ScrollToTop";
// import { Navbar } from "./components/Navbar";
// import { Landing } from "./components/Landing";
// import { SignupPage } from "./pages/SignupPage";
// import { UserProfilePage } from "./pages/UserProfilePage";
// import { DeveloperSection } from './components/DeveloperSection';


// export default function App() {
//   const sections = {
//     home: useRef(null),
//     soil: useRef(null),
//     plant: useRef(null),
//     developers: useRef(null),
//   };

//   return (
//     <AppProvider>
//       <Router>
//         <ScrollToTop />
//         <Navbar sections={sections} />
//         <Routes>
//   <Route path="/" element={<Landing sections={sections} />} />
//   <Route path="/signup" element={<SignupPage />} />
//   <Route path="/login" element={<LoginPage />} />
//   <Route path="/profile" element={<UserProfilePage />} />
//   <Route path="/test-api" element={<TestAPI />} />  {/* <-- ADD THIS */}
//   <Route path="*" element={<Landing sections={sections} />} />
// </Routes>

//       </Router>
//     </AppProvider>
//   );
// }


import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import { ScrollToTop } from "./components/ScrollToTop";
import { Navbar }  from "./components/Navbar";
import { Landing } from "./components/Landing";
import { SignupPage }  from "./pages/SignupPage";
import { LoginPage } from "./pages/LoginPage";       // <-- IMPORTANT
import { UserProfilePage } from "./pages/UserProfilePage";
import { DeveloperSection } from "./components/DeveloperSection";
//  DO NOT IMPORT TestAPI (file does not exist)
//  DO NOT IMPORT CustomCursor or ParticleBackground

export default function App() {
  const sections = {
    home: useRef(null),
    soil: useRef(null),
    plant: useRef(null),
    developers: useRef(null),
  };

  return (
    <AppProvider>
      <Router>
        <ScrollToTop />
        <Navbar sections={sections} />
        <Routes>
          <Route path="/" element={<Landing sections={sections} />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          {/* ❌ Remove TestAPI route — file doesn't exist */}
          <Route path="*" element={<Landing sections={sections} />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}
