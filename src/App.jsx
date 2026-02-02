import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Fotter from "./components/Fotter";
import About from "./Page/About";
import Experience from "./Page/Experience";
import Education from "./Page/Education";
import Home from "./Page/Home";
import Project from "./Page/Project";
import Skill from "./Page/Skill";
import Contact from "./Page/Contact";
export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#0a1a3b" : "#ffffff";
  }, [darkMode]);
  return (
    <div className={darkMode ? "bg-black text-white" : "bg-white text-black"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/about" element={<About darkMode={darkMode} />} />
        <Route
          path="/experience"
          element={<Experience darkMode={darkMode} />}
        />
        <Route path="/education" element={<Education darkMode={darkMode} />} />
        <Route path="/skill" element={<Skill darkMode={darkMode} />} />
        <Route path="/project" element={<Project darkMode={darkMode} />} />
        <Route path="/contact" element={<Contact darkMode={darkMode} />} />
      </Routes>
      <Fotter darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}
