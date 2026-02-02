import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes, FaBars, FaMoon, FaSun } from "react-icons/fa";
import Logo from "../assets/logo.png";

export default function Navbar({ darkMode, setDarkMode }) {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navigate = useNavigate();

  function handleOnClick(path) {
    setMobileMenu(false);
    navigate(path);
  }

  function toggleTheme() {
    setDarkMode(!darkMode);
  }

  return (
    <nav
      style={{ fontFamily: "'inter',sans-serif" }}
      className={`w-full mt-0 shadow-md fixed z-50 text-lg
        ${
          darkMode
            ? "bg-gradient-to-br from-[#0a1a3b] via-[rgb(16,36,79)] to-[#1a1445] text-white"
            : "bg-white text-black"
        }`}
    >
      <div className="w-full flex items-center justify-between px-8 py-2">
        {/* Logo */}
        <div className="cursor-pointer" onClick={() => handleOnClick("/")}>
          <img src={Logo} className="h-18 w-20 ml-0 rounded-2xl  " />
        </div>

        {/* Desktop Nav Links (hidden on mobile) */}
        <ul className="hidden md:flex space-x-8 justify-center flex-1 items-center">
          <li>
            <button
              onClick={() => handleOnClick("/")}
              className="hover:text-amber-300"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleOnClick("/about")}
              className="hover:text-amber-300"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => handleOnClick("/experience")}
              className="hover:text-amber-300"
            >
              Experience
            </button>
          </li>
          <li>
            <button
              onClick={() => handleOnClick("/education")}
              className="hover:text-amber-300"
            >
              Education
            </button>
          </li>
          <li>
            <button
              onClick={() => handleOnClick("/project")}
              className="hover:text-amber-300"
            >
              Project
            </button>
          </li>
          <li>
            <button
              onClick={() => handleOnClick("/skill")}
              className="hover:text-amber-300"
            >
              Skill
            </button>
          </li>
          <li>
            <button
              onClick={() => handleOnClick("/contact")}
              className="hover:text-amber-300"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Theme toggle (desktop only) */}
        <button
          className="hidden md:block text-lg hover:text-amber-300 ml-4 "
          onClick={toggleTheme}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Mobile Menu Button (hamburger) */}
        <button
          className="md:hidden text-2xl hover:text-amber-300"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden mt-2 pb-4 border-t border-amber-300">
          <ul className="flex flex-col space-y-3 px-4">
            <li>
              <button
                onClick={() => handleOnClick("/")}
                className="w-full text-left py-2 hover:text-amber-300"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleOnClick("/about")}
                className="w-full text-left py-2 hover:text-amber-300"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleOnClick("/experience")}
                className="w-full text-left py-2 hover:text-amber-300"
              >
                Experience
              </button>
            </li>
            <li>
              <button
                onClick={() => handleOnClick("/education")}
                className="w-full text-left py-2 hover:text-amber-300"
              >
                Education
              </button>
            </li>

            <li>
              <button
                onClick={() => handleOnClick("/project")}
                className="w-full text-left py-2 hover:text-amber-300"
              >
                Project
              </button>
            </li>
            <li>
              <button
                onClick={() => handleOnClick("/skill")}
                className="w-full text-left py-2 hover:text-amber-300"
              >
                Skill
              </button>
            </li>
            <li>
              <button
                onClick={() => handleOnClick("/contact")}
                className="w-full text-left py-2 hover:text-amber-300"
              >
                Contact
              </button>
            </li>
            <li>
              <button
                onClick={toggleTheme}
                className="w-full text-left py-2 text-xl hover:text-amber-300"
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
