import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
const List = [
  {
    name: "HTML",
    percent: 95,
    color: "#f97316",
  },
  {
    name: "CSS",
    percent: 90,
    color: "#0ea5e9",
  },

  {
    name: "React",
    percent: 95,
    color: "#f59e0b",
  },
  {
    name: "Next-js",
    percent: 89,
    color: "#3b82f6",
  },
  {
    name: "JavaScript",
    percent: 95,
    color: "#e11d48",
  },
  {
    name: "Node.js",
    percent: 40,
    color: "#22c55e",
  },
  {
    name: "Tailwind",
    percent: 80,
    color: "#14b8a6",
  },
  {
    name: "TypeScript",
    percent: 60,
    color: "#3178C6",
  },
  {
    name: "Express",
    percent: 40,
    color: "#111827",
  },
  {
    name: "TypeORM",
    percent: 40,
    color: "#E83524",
  },
  {
    name: "MYSQL",
    percent: 30,
    color: "#00758F",
  },
  {
    name: "java",
    percent: 50,
    color: "#00458F",
  },
  {
    name: "version control (Git)",
    percent: 80,
    color: "#11458F",
  },
  {
    name: "C++",
    percent: 60,
    color: "#11bb8F",
  },
];

const chunkSkills = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};
const slides = chunkSkills(List, 4);
function SkillCircle({ name, percent, color, darkMode }) {
  const radius = 65;
  const strokeWidth = 24;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;
  return (
    <div
      className={`flex flex-col item-center text-center relative ${
        darkMode
          ? "bg-gradient-to-br from-[#0a1a3b] via-[rgb(16,36,79)] to-[#1a1445] text-white"
          : "bg-white text-black"
      } `}
    >
      <svg width="160" height="160">
        <g transform="rotate(-90 80 80)">
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-1000"
          />
        </g>
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-xl font-bold fill-current drop-shadow-sm "
        >
          {percent}%
        </text>
      </svg>

      <p className="mt-4 text-2xl font-semibold">{name}</p>
    </div>
  );
}

export default function Skill({ darkMode }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section
      style={{ fontFamily: " 'inter',sans-serif" }}
      className={`px-12 mb-20
${
  darkMode
    ? "bg-gradient-to-br from-[#0a1a3b] via-[rgb(16,36,79)] to-[#1a1445] text-white"
    : "bg-white text-black"
}
  `}
    >
      <h2 className="text-4xl font-bold pt-28 pb-8 gap-1 text-center">
        My <span className="text-amber-400 drop-shadow-sm">Skill</span>
      </h2>
      <div className="relative max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 place-items-center"
          >
            {slides[index].map((list, i) => (
              <SkillCircle key={i} {...list} darkMode={darkMode} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex justify-center mt-10 gap-3">
        {slides.map((__, i) => (
          <span
            key={i}
            className={`w-4 h-4 rounded-full ${
              i === index ? "bg-blue-500" : "bg-gray-400"
            }
    `}
          />
        ))}
      </div>
    </section>
  );
}
