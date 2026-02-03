import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import l1 from "../assets/l1.jpg";
import Contact from "../Page/Contact";

export default function About({ darkMode }) {
  const [clickContact, setClickContact] = useState(false);
  const navigate = useNavigate();

  function handleClickContact() {
    setClickContact(!clickContact);
    navigate("/contact");
  }

  return (
    <section
      style={{ fontFamily: "'inter',sans-serif'" }}
      className={`min-h-screen w-full overflow-x-hidden grid grid-cols-1 md:grid-cols-2 gap-6 pt-24 px-5 sm:px-10 md:px-16 lg:px-24 ${
        darkMode
          ? "bg-gradient-to-br from-[#0a1a3b] via-[rgb(16,36,79)] to-[#1a1445] text-white"
          : "bg-white text-black"
      }`}
    >
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center items-start space-y-6 py-12"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-left">
          About <span className="text-amber-400">Me</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-justify">
          I am a <span className="text-amber-400">Software Engineering</span>{" "}
          student at Bahir Dar University and a frontend-focused web developer
          driven by building exceptional user experiences. I craft
          high-performance, scalable interfaces using React.js, Tailwind CSS
          with deep hands-on expertise from scratch to advanced React. I have
          experience with Next.js and TypeScript, version control git, github,
          along with solid backend fundamentals in Node.js, TypeORM, MySQL, and
          Express, supporting my path toward full-stack development. As a Team
          Leader and Project Manager at Merkeb Technology, I deliver real-world
          web and digital solutions across Ethiopia.
        </p>
        <button
          className="border-2 border-amber-400 p-3 rounded-2xl  text-lg md:text-xl font-bold mb-5 ml-38 text-center hover:text-amber-400"
          onClick={handleClickContact}
        >
          Contact Me
        </button>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex justify-center md:justify-end items-center"
      >
        <img
          src={l1}
          alt="profile"
          className="w-80 h-68 sm:w-80 sm:h-80 md:w-80 md:h-80 lg:w-90 lg:h-90 rounded-b-full"
        />
      </motion.div>
    </section>
  );
}
