import React from "react";

export default function Fotter({ darkMode }) {
  return (
    <section
      style={{ fontFamily: "'Inter', sans-serif" }}
      className={`w-full h-auto  overflow-x-hidden py-8 px-4 flex flex-col items-center text-center
    ${
      darkMode
        ? "bg-gradient-to-br from-[#0a1a3b] via-[rgb(16,36,79)] to-[#1a1445] text-white"
        : "bg-white text-black"
    }
  `}
    >
      <h2 className="text-xl md:text-2xl font-semibold mb-2">
        Lidia Ashenafi — Website Developer
      </h2>
      <p className="text-sm md:text-base max-w-2xl mb-2 leading-relaxed">
        I specialize in building dynamic, high-performance frontend interfaces
        that provide seamless user experiences. With backend expertise, I ensure
        fully integrated, end-to-end web solutions, bridging design and
        functionality with precision and efficiency.
      </p>
      <p className="text-xs md:text-sm mt-2">© 2026. All rights reserved.</p>
    </section>
  );
}
