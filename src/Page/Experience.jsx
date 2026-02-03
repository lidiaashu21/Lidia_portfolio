import React from "react";
import { motion } from "framer-motion";

import i from "../assets/i.png";
import l2 from "../assets/l2.jpg";
import photopdf from "../assets/photo.pdf";
export default function Experience({ darkMode }) {
  return (
    <>
      <section
        style={{ fontFamily: " 'inter',sans-serif" }}
        className={`px-8 sm:11 md:px-12
${
  darkMode
    ? "bg-gradient-to-br from-[#0a1a3b] via-[rgb(16,36,79)] to-[#1a1445] text-white"
    : "bg-white text-black"
}
  `}
      >
        <h2 className="text-4xl font-bold pt-28 pb-8 gap-1 text-center">
          My <span className="text-amber-400">Experiance</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 space-x-4 shadow-amber-400  ">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ viewport: false }}
            className="flex-gap-4 item-center text-center shadow-xl hover:shadow-2xl  rounded-xl p-6 w-90 max-w-1xl  md:w-100 md:max-w-2xl mb-8 "
          >
            <img
              src={i}
              alt="Experience illustration"
              className="h-54 w-90 rounded-2xl mb-6 mt-0"
            />
            <div>
              <p className="leading-relaxed  text-center w-80 mb-8">
                Professional and internship experience at GetNet Company,
                delivering a production-ready Gym Management System. Engineered
                a scalable backend with Node.js, Express, TypeORM, MySQL, and
                TypeScript, alongside a high-performance frontend built with
                Next.js and Tailwind CSS.
              </p>
              <button
                onClick={() => window.open(photopdf, "_blank")}
                className="border-2 border-amber-400 p-3 rounded-2xl  text-xl font-bold mb-5 ml-16 text-center hover:text-amber-400"
              >
                view certificate
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ viewport: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-gap-6 item-center text-center  shadow-xl hover:shadow-2xl rounded-xl p-6 w-90 max-w-1xl  md:w-100 md:max-w-2xl mb-8 md:ml-20"
          >
            <img
              src={l2}
              alt="merkeb"
              className="h-54 w-90 rounded-2xl mb-6 mt-0"
            />
            <div>
              <p className="leading-relaxed w-70 md:w-70 lg:w-80 mb-8">
                Team leadership and project management experience at Merkeb
                Technology, leading teams on real-world client projects. Oversaw
                web development, web app development, maintenance, and digital
                consultancy, ensuring quality delivery and team coordination.
              </p>
              <button
                onClick={() =>
                  window.open("https://merkebwebsite1219.vercel.app", "_blank")
                }
                className="border-2 border-amber-400 p-3 rounded-2xl  text-xl font-bold mb-5 ml-16 item-center text-center hover:text-amber-400"
              >
                show site
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
