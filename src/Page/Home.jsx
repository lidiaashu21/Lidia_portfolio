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
    /*Home <section></section*/
    <>
      <section
        style={{ fontFamily: "'inter',sans-serif" }}
        className={`min-h-screen pt-24 w-full  shadow-amber-100  ${
          darkMode
            ? "bg-gradient-to-br from-[#0a1a3b] via-[rgb(16,36,79)] to-[#1a1445] text-white"
            : "bg-white text-black"
        }`}
      >
        <div className=" grid grid-cols-1 md:grid-cols-2  items-center px-10">
          {/*Left part */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-x-6 "
          >
            <motion.div
              className="flex space-x-6 text-3xl pb-8 pt-6"
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

            <h2 className="text-4xl font-bold">
              Hi, I'M
              <span className="text-amber-400 mb-3"> Lidia Ashenafi</span>{" "}
            </h2>

            <p className="text-amber-400 text-xl mb-3"> Software Engineer </p>
            <p className="max-w-xl leading-relaxed mb-4 md:mb-8">
              I’m a <span className="text-amber-400">Web Developer</span>{" "}
              focused on building fast, modern, and scalable web experiences.
              Front-End is my expertise, Full-Stack development is my passion
            </p>
            <div className="space-x-8">
              <button
                className="border-2 border-amber-400 p-3 rounded-2xl  text-xl font-bold hover:text-amber-400"
                onClick={() => window.open(Lidia, "_blank")}
              >
                View Resume
              </button>
              <button
                className="border-2 border-amber-400 p-3 rounded-2xl  text-xl font-bold hover:text-amber-400 "
                onClick={handleClickContact}
              >
                Contact Me
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={a1}
              alt="profile"
              className="w-200 h-100 py-8 md:h-120 py-12 max-w-md  md:ml-30  rounded-s-full rounded-b-full"
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
