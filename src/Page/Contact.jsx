import React, { useState } from "react";
import c1 from "../assets/c1.png";

export default function Contact({ darkMode }) {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const telegramUsername = "Lidiana2123"; // <-- replace with your t.me username

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!subject.trim() || !message.trim()) {
      setStatus("Please fill in both fields.");
      return;
    }

    // Encode message for Telegram URL
    const text = encodeURIComponent(`Subject: ${subject}\nMessage: ${message}`);
    const telegramURL = `https://t.me/${telegramUsername}?text=${text}`;

    // Open Telegram link in new tab
    window.open(telegramURL, "_blank");
    setStatus("sending Message...");
  };

  return (
    <section
      style={{ fontFamily: "'Inter', sans-serif'" }}
      className={`w-full min-h-screen py-26 px-4 md:px-12 ${
        darkMode
          ? "bg-gradient-to-br from-[#0a1a3b] via-[16,36,79] to-[#1a1445] text-white"
          : "bg-white text-black"
      }`}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Contact <span className="text-amber-400">Us</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="flex justify-center md:justify-start">
          <img
            src={c1}
            alt="contact illustration"
            className="w-full max-w-md h-auto rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className={`flex flex-col gap-4 w-full max-w-xl mx-auto md:mx-0 p-6 rounded-3xl shadow-lg transition-shadow duration-300 ${
            darkMode
              ? "bg-[#0b1843] border border-blue-500/40 shadow-blue-300/60"
              : "bg-white"
          }`}
        >
          <label className="text-xl md:text-2xl font-medium">Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Enter Subject"
            className="w-full p-4 text-lg bg-gray-200 text-black rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <label className="text-xl md:text-2xl font-medium">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter Message"
            className="w-full p-4 text-lg bg-gray-200 text-black rounded-xl h-48 resize-none focus:outline-none focus:ring-2 focus:ring-amber-400"
          ></textarea>

          <button
            type="submit"
            className="bg-amber-400 text-white py-3 text-lg md:text-xl rounded-xl hover:bg-amber-500 transition-colors duration-300"
          >
            Send Message
          </button>

          {status && <p className="mt-2 text-center">{status}</p>}
        </form>
      </div>
    </section>
  );
}
