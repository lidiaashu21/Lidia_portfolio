import React, { useState } from "react";
import Contact from "../Page/Contact";
import a1 from "../assets/al.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Project from "./Project";
import Skill from "./Skill";
import Lidia from "../assets/Lidia.pdf";

import {
  FaGithub,
  FaTelegramPlane,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Home({ darkMode }) {
  const [clickContact, setClickContact] = useState(false);
  const navigate = useNavigate();

  function handleClickContact() {
    setClickContact(!clickContact);
    navigate("/contact");
  }

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const ContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <>
      <section
        style={{ fontFamily: "'inter',sans-serif" }}
        className={`min-h-screen pt-20 w-full ${
          darkMode
            ? "bg-gradient-to-br from-[#0a1a3b] via-[rgb(16,36,79)] to-[#1a1445] text-white"
            : "bg-white text-black"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center px-5 sm:px-10 md:px-16 lg:px-24 py-14 gap-8">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Social icons */}
            <motion.div
              className="flex flex-row space-x-4 sm:space-x-6 text-2xl sm:text-3xl pb-4"
              variants={ContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                FaTelegramPlane,
                FaGithub,
                FaLinkedin,
                FaInstagram,
                FaWhatsapp,
              ].map((Icon, i) => (
                <motion.div key={i} variants={iconVariants}>
                  <a
                    href={
                      i === 0
                        ? "https://t.me/@Lidiana2123"
                        : i === 1
                          ? "https://github.com/lidiaashu21"
                          : i === 2
                            ? "https://www.linkedin.com/in/lidia-ashenafi-315962374"
                            : i === 3
                              ? "https://www.instagram.com/lidia.ashenafi"
                              : "https://wa.me/251901171411"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon />
                  </a>
                </motion.div>
              ))}
            </motion.div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Hi, I'M <span className="text-amber-400">Lidia Ashenafi</span>
            </h2>

            {/* Subheading */}
            <p className="text-amber-400 text-base sm:text-lg md:text-xl lg:text-2xl">
              Software Engineer
            </p>

            {/* Description */}
            <p className="max-w-full sm:max-w-lg md:max-w-md lg:max-w-lg leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl">
              I’m a <span className="text-amber-400">Web Developer</span>{" "}
              focused on building fast, modern, and scalable web experiences.
              Front-End is my expertise, Full-Stack development is my passion.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button
                className="border-2 border-amber-400 p-2 sm:p-3 rounded-2xl text-sm sm:text-base md:text-lg font-bold hover:text-amber-400"
                onClick={() => window.open(Lidia, "_blank")}
              >
                View Resume
              </button>
              <button
                className="border-2 border-amber-400 p-2 sm:p-3 rounded-2xl text-sm sm:text-base md:text-lg font-bold hover:text-amber-400"
                onClick={handleClickContact}
              >
                Contact Me
              </button>
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <img
              src={a1}
              alt="profile"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-s-full rounded-b-full"
            />
          </motion.div>
        </div>
      </section>

      <About darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <Education darkMode={darkMode} />
      <Project darkMode={darkMode} />
      <Skill darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </>
  );
}
