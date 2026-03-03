import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export const Navbar = ({ sections }) => {
  const navigate = useNavigate();
  const { user } = useContext(AppContext);
  const [active, setActive] = useState("home");

  const handleNav = (target) => {
    setActive(target);
    if (sections[target]?.current) {
      sections[target].current.scrollIntoView({ behavior: "smooth" });
      return;
    }
    navigate(`/${target}`);
  };

  return (
    <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-xl border-b border-gray-700 shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div
          className="flex items-center gap-3 cursor-pointer hover:scale-105 transition"
          onClick={() => handleNav("home")}
        >
          <img
            src="/images/logo1.png"
            alt="Agro Optics Logo"
            className="w-10 h-10 rounded-full border-2 border-black shadow-md"
          />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent">
            Agro-Optics
          </h1>
        </div>

        <div className="flex gap-6 items-center text-gray-200">
          {["home", "soil", "plant", "developers"].map((section) => (
            <button
              key={section}
              onClick={() => handleNav(section)}
              className={`relative px-2 py-1 font-semibold hover:text-green-300 transition ${
                active === section
                  ? "text-green-400 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-green-400 after:rounded-full"
                  : ""
              }`}
            >
              {section === "home"
                ? "Home"
                : section === "soil"
                ? "Pedology"
                : section === "plant"
                ? "Phytopathology"
                : "Developers"}
            </button>
          ))}

          {!user ? (
            <>
              <button
                onClick={() => navigate("/login")}
                className="px-4 py-2 bg-green-600 rounded-xl hover:bg-green-700 transition"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="px-4 py-2 bg-white text-black rounded-xl hover:bg-gray-100 transition"
              >
                Sign Up
              </button>
            </>
          ) : (
            <button
              onClick={() => navigate("/profile")}
              className="flex items-center gap-2 px-3 py-1 bg-gray-800 rounded-xl border border-gray-600 hover:scale-105 transition"
            >
              <img
                src={user.photo}
                alt=""
                className="w-8 h-8 rounded-full border border-green-400"
              />
              <span>{user.name}</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};


















