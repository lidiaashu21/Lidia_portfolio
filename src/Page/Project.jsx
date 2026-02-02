import React from "react";
import { motion } from "framer-motion";
import gymhom from "../assets/gymhom.png";
import weather from "../assets/weather.png";
import calculator from "../assets/calculator.png";
import blog from "../assets/blog.png";
import menu from "../assets/menu.png";
import note from "../assets/note.jpg";
import quiz from "../assets/quiz.jpg";
import pig from "../assets/pig.png";
import todo from "../assets/todo.png";

export default function Project({ darkMode }) {
  return (
    <section
      style={{ fontFamily: " 'inter',sans-serif" }}
      className={`px-12
${
  darkMode
    ? "bg-gradient-to-br from-[#0a1a3b] via-[rgb(16,36,79)] to-[#1a1445] text-white"
    : "bg-white text-black"
}
  `}
    >
      <h2 className="text-4xl font-bold pt-28 pb-8 gap-1 text-center">
        <span className="text-amber-400">Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 space-x-8 shadow-amber-400  ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
          className="flex-gap-6 item-center text-center  shadow-xl hover:shadow-2xl space-x-40 rounded-xl p-6  w-100 md:w-80 max-w-2xl mb-8 object-contain "
        >
          <img
            src={gymhom}
            alt="gym image"
            className="h-54 w-94 rounded-2xl mb-6 mt-0"
          />
          <div>
            <p className="leading-relaxed w-80 md:w-60 mb-8">
              A Gym Management System backend built with Node.js, Express,
              TypeScript, TypeORM, and MySQL delivers secure, scalable APIs
              using a clean, type-safe architecture.
            </p>
            <button
              onClick={() =>
                window.open("https://github.com/lidiaashu21", "_blank")
              }
              className="border-2 border-amber-400 p-2 rounded-2xl  text-lg font-semibold mb-5 mr-10 text-center hover:text-amber-400"
            >
              ↗️ Open in GitHub
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
          className="flex-gap-6 item-center  shadow-xl hover:shadow-2xl  rounded-xl p-6  w-100 md:w-80 max-w-2xl mb-8 "
        >
          <img
            src={weather}
            alt="weather image"
            className="h-54 w-90 rounded-2xl mb-6 mt-0"
          />
          <div>
            <p className="leading-relaxed w-80 md:w-60 mb-14">
              A Weather App built with HTML, CSS, and JavaScript delivers
              real-time weather data through a clean, responsive, and
              user-friendly interface.
            </p>
            <button
              onClick={() =>
                window.open("https://github.com/lidiaashu21", "_blank")
              }
              className="border-2 border-amber-400 p-2 rounded-2xl  text-lg font-semibold mb-5 mr-10 text-center hover:text-amber-400"
            >
              ↗️ Open in GitHub
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
          className="flex-gap-6 item-center  shadow-xl hover:shadow-2xl  rounded-xl p-6  w-100 md:w-80 max-w-2xl mb-8 "
        >
          <img
            src={calculator}
            alt="calculator image"
            className="h-54 w-90 rounded-2xl mb-6 mt-0"
          />
          <div>
            <p className="leading-relaxed w-80 md:w-60 mb-14">
              A Calculator App built with HTML, CSS, and JavaScript performs
              fast, accurate calculations through a clean and intuitive user
              interface.
            </p>
            <button
              onClick={() =>
                window.open("https://github.com/lidiaashu21", "_blank")
              }
              className="border-2 border-amber-400 p-2 rounded-2xl  text-lg font-semibold mb-5 mr-10 text-center hover:text-amber-400"
            >
              ↗️ Open in GitHub
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
          className="flex-gap-6 item-center  shadow-xl hover:shadow-2xl  rounded-xl p-6  w-100 md:w-80 max-w-2xl mb-8 "
        >
          <img
            src={blog}
            alt="blog image"
            className="h-54 w-90 rounded-2xl mb-6 mt-0"
          />
          <div>
            <p className="leading-relaxed w-80 md:w-60 mb-12">
              A Blog App built with React delivers dynamic, responsive content
              with smooth navigation and a modern, interactive user interface.
            </p>
            <button
              onClick={() =>
                window.open("https://github.com/lidiaashu21", "_blank")
              }
              className="border-2 border-amber-400 p-2 rounded-2xl  text-lg font-semibold mb-5 mr-10 text-center hover:text-amber-400"
            >
              ↗️ Open in GitHub
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
          className="flex-gap-6 item-center  shadow-xl hover:shadow-2xl  rounded-xl p-6  w-100 md:w-80 max-w-2xl mb-8 "
        >
          <img
            src={menu}
            alt="menu"
            className="h-54 w-90 rounded-2xl mb-6 mt-0"
          />
          <div>
            <p className="leading-relaxed w-80 md:w-60 mb-8">
              A Digital Menu built with HTML and Tailwind CSS provides a sleek,
              responsive interface for easy browsing of items and seamless user
              interaction.
            </p>
            <button
              onClick={() =>
                window.open("https://github.com/lidiaashu21", "_blank")
              }
              className="border-2 border-amber-400 p-2 rounded-2xl  text-lg font-semibold mb-5 mr-10 text-center hover:text-amber-400"
            >
              ↗️ Open in GitHub
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
          className="flex-gap-6 item-center  shadow-xl hover:shadow-2xl  rounded-xl p-6  w-100 md:w-80 max-w-2xl mb-8 "
        >
          <img
            src={note}
            alt="note"
            className="h-54 w-90 rounded-2xl mb-6 mt-0"
          />
          <div>
            <p className="leading-relaxed w-80 md:w-60 mb-8">
              A Note App built with React enables users to create, edit, and
              organize notes through a dynamic, responsive, and user-friendly
              interface.
            </p>
            <button
              onClick={() =>
                window.open("https://github.com/lidiaashu21", "_blank")
              }
              className="border-2 border-amber-400 p-2 rounded-2xl  text-lg font-semibold mb-5 mr-10 text-center hover:text-amber-400"
            >
              ↗️ Open in GitHub
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
          className="flex-gap-6 item-center  shadow-xl hover:shadow-2xl  rounded-xl p-6  w-100 md:w-80 max-w-2xl mb-8 "
        >
          <img
            src={quiz}
            alt="quiz"
            className="h-54 w-90 rounded-2xl mb-6 mt-0"
          />
          <div>
            <p className="leading-relaxed w-80 md:w-60 mb-8">
              A Quiz App built with HTML, CSS, and JavaScript delivers
              interactive quizzes with real-time scoring through a clean and
              responsive interface.
            </p>
            <button
              onClick={() =>
                window.open("https://github.com/lidiaashu21", "_blank")
              }
              className="border-2 border-amber-400 p-2 rounded-2xl  text-lg font-semibold mb-5 mr-10 text-center hover:text-amber-400"
            >
              ↗️ Open in GitHub
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
          className="flex-gap-6 item-center  shadow-xl hover:shadow-2xl  rounded-xl p-6  w-100 md:w-80 max-w-2xl mb-8 "
        >
          <img
            src={pig}
            alt="pig"
            className="h-54 w-90 rounded-2xl mb-6 mt-0"
          />
          <div>
            <p className="leading-relaxed w-80 md:w-60 mb-8">
              A Pig Game built with HTML, CSS, and JavaScript offers an
              interactive, turn-based dice game with dynamic visuals and
              responsive gameplay.
            </p>
            <button
              onClick={() =>
                window.open("https://github.com/lidiaashu21", "_blank")
              }
              className="border-2 border-amber-400 p-2 rounded-2xl  text-lg font-semibold mb-5 mr-10 text-center hover:text-amber-400"
            >
              ↗️ Open in GitHub
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
          className="flex-gap-6 item-center  shadow-xl hover:shadow-2xl rounded-xl p-6  w-100 md:w-80 max-w-2xl mb-8"
        >
          <img
            src={todo}
            alt="todo image"
            className="h-54 w-90 rounded-2xl mb-6 mt-0"
          />
          <div>
            <p className="leading-relaxed w-80 md:w-60 mb-8">
              A To-Do List App built with HTML, CSS, and JavaScript lets users
              add, edit, and manage tasks through a simple, responsive, and
              interactive interface.
            </p>
            <button
              onClick={() =>
                window.open("https://github.com/lidiaashu21", "_blank")
              }
              className="border-2 border-amber-400 p-2 rounded-2xl  text-lg font-semibold mb-5 mr-10 text-center hover:text-amber-400"
            >
              ↗️ Open in GitHub
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
