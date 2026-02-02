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
      className={`min-h-screen w-full overflow-x-hidden grid grid-cols-1 space-x-6 md:grid-cols-2 pt-24 shadow-amber-100 ${
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
        className="relative"
      >
        <h2 className="text-4xl font-bold py-9 text-center">
          About <span className="text-amber-400 ">Me</span>
        </h2>
        <p className="px-12 leading-relaxed mb-7">
          I am <span className="text-amber-400"> a Software Engineering </span>{" "}
          student at Bahir Dar University and a frontend-focused web developer
          driven by building exceptional user experiences. I craft
          high-performance, scalable interfaces using React.js, Tailwind CSS
          with deep hands-on expertise from scratch to advanced React. I have
          experience with Next.js and TypeScript, version control git, github,
          along with solid backend fundamentals in Node.js, TypeOrm, Mysql and
          Express, supporting my path toward full-stack development. As a Team
          Leader and Project Manager at Merkeb Technology, I deliver real-world
          web and digital solutions across Ethiopia.
        </p>

        <div className="relative w-full">
          <button
            className="border-2 border-amber-400 p-3 rounded-2xl text-xl font-bold mb-9 ml-40 text-center hover:text-amber-400"
            onClick={handleClickContact}
          >
            Contact Me
          </button>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative w-full"
      >
        <img
          src={l1}
          alt="profile"
          className="w-100 h-100 rounded-b-full max-w-md ml-12 md:ml-40"
        />
      </motion.div>
    </section>
  );
}
