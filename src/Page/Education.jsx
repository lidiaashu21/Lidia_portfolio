import React from "react";
import bdu from "../assets/bdu.jpg";
export default function Education({ darkMode }) {
  return (
    <section
      style={{ fontFamily: " 'inter',sans-serif" }}
      className={` w-full max-h-screen mb-40
${
  darkMode
    ? "bg-gradient-to-br from-[#0a1a3b] via-[rgb(16,36,79)] to-[#1a1445] text-white"
    : "bg-white text-black"
}
  `}
    >
      <h2 className="text-4xl font-bold pt-30 pb-4  text-center ml-12 md: mr-20">
        My <span className="text-amber-400">Education</span>
      </h2>
      <div className="w-2xl md:w-5xl flex flex-col item-center text-center   ">
        <img
          src={bdu}
          alt="bdu logo"
          className="w-60 h-60 rounded-full ml-50 md:ml-100 mb-4 "
        />
        <div>
          <h3 className=" text-2xl mr-16 md:text-3xl font-bold mb-3">
            Bachelor of Science in{" "}
            <span className="text-amber-400">Software Engineering</span>
          </h3>
          <p className=" text-2xl mr-2.5 md:text-3xl font-bold mb-4">
            Bahirdar University
          </p>
          <p className="  text-2xl md:text-2xl font-bold text-amber-400 mb-6 mr-10">
            2023 GC- Present
          </p>
          <h2 className=" mr-20   md:text-2xl font-medium ">
            Relevant Coursework: Data Structures, Algorithms, Operating Systems,
            Web Development,Java,DataBase
          </h2>
        </div>
      </div>
    </section>
  );
}
