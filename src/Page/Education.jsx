import React from "react";
import bdu from "../assets/bdu.jpg";

export default function Education({ darkMode }) {
  return (
    <section
      style={{ fontFamily: "'inter',sans-serif'" }}
      className={`w-full mb-40 px-4 sm:px-8 md:px-16 lg:px-24 ${
        darkMode
          ? "bg-gradient-to-br from-[#0a1a3b] via-[rgb(16,36,79)] to-[#1a1445] text-white"
          : "bg-white text-black"
      }`}
    >
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold pt-24 pb-8 text-center">
        My <span className="text-amber-400">Education</span>
      </h2>

      {/* Content */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Image */}
        <img
          src={bdu}
          alt="bdu logo"
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full mb-6"
        />

        {/* Text */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
          Bachelor of Science in{" "}
          <span className="text-amber-400">Software Engineering</span>
        </h3>

        <p className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
          Bahir Dar University
        </p>

        <p className="text-lg md:text-xl font-bold text-amber-400 mb-6">
          2023 GC – Present
        </p>

        <p className="text-sm sm:text-base md:text-lg font-medium max-w-3xl">
          Relevant Coursework: Data Structures, Algorithms, Operating Systems,
          Web Development, Java, Database
        </p>
      </div>
    </section>
  );
}
