"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

// ✅ Keep phrases outside so they don’t trigger dependency warnings
const phrases = ["Front-End Developer", "Creative Coder", "Web Enthusiast"];

// ✅ TypingEffect Component
function TypingEffect() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[i];

      if (!isDeleting && j <= currentPhrase.length) {
        setText(currentPhrase.substring(0, j));
        setJ((prev) => prev + 1);
      } else if (isDeleting && j >= 0) {
        setText(currentPhrase.substring(0, j));
        setJ((prev) => prev - 1);
      }

      if (j === currentPhrase.length && !isDeleting) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && j === 0) {
        setIsDeleting(false);
        setI((prev) => (prev + 1) % phrases.length);
      }
    };

    const speed = isDeleting ? 80 : 200;
    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [j, i, isDeleting]);

  return (
    <h2 className="text-4xl font-bold mb-4 text-white">
      {text}
      <span className="animate-pulse">|</span>
    </h2>
  );
}

// ✅ Home Page
export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-gray-900 text-gray-200 font-sans relative">
      {/* Spinning Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-purple-800/10 via-indigo-700/10 to-gray-900/10 animate-spin-slow rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="bg-gray-800 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Emioluwa Gbaja-Biamila</h1>
          <nav>
            <a href="#about" className="mx-2 text-gray-300 hover:text-white transition">About</a>
            <a href="#projects" className="mx-2 text-gray-300 hover:text-white transition">Projects</a>
            <a href="#contact" className="mx-2 text-gray-300 hover:text-white transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-20 bg-gray-800 glass">
        <TypingEffect />
        <p className="text-lg text-gray-400">
          Crafting sleek, responsive, and user-friendly web experiences.
        </p>
      </section>

      {/* About */}
      <section id="about" className="py-16 container mx-auto px-4" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6 text-white underline-accent">About Me</h2>
        <p className="text-gray-400 leading-relaxed">
        Emioluwa Gbaja-Biamila is an aspiring software engineer with a strong foundation in front-end development and a growing interest in backend technologies. My passion lies in crafting user-focused digital experiences that are both functional and visually engaging.

Over time, I’ve honed my skills in HTML, CSS, Tailwind, and React while beginning to explore backend tools and frameworks that bring full-stack projects to life. I’m driven by the desire to solve real-world problems through innovative software solutions that are not only effective but also make people’s lives easier.

Currently pursuing a degree in Software Engineering at Babcock University, I’ve gained practical experience through internships at Integrated Software Services Limited (ISSL) and Stanbic IBTC. These opportunities have deepened my technical knowledge and taught me the value of collaboration, adaptability, and continuous learning.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 bg-gray-800 container mx-auto px-4" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6 text-white underline-accent">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* ✅ Project 1 */}
          <a href="https://www.redacknation.com" target="_blank" rel="noopener noreferrer"
             className="bg-gray-700 glass p-4 rounded hover:shadow-lg hover:scale-105 transition transform block">
            <Image
              src="/redacknation.png"
              alt="Redack Nation"
              width={400}
              height={160}
              className="rounded mb-3 w-full h-40 object-cover"
            />
            <h3 className="font-semibold text-lg text-white mb-2">Redack Nation</h3>
            <p className="text-gray-400">An ecommerce site for a fashion brand.</p>
          </a>

          {/* ✅ Project 2 */}
          <a href="https://expression3-0-2025.vercel.app" target="_blank" rel="noopener noreferrer"
             className="bg-gray-700 glass p-4 rounded hover:shadow-lg hover:scale-105 transition transform block">
            <Image
              src="/expression.png"
              alt="The Expression"
              width={400}
              height={160}
              className="rounded mb-3 w-full h-40 object-cover"
            />
            <h3 className="font-semibold text-lg text-white mb-2">The Expression</h3>
            <p className="text-gray-400">A worship Concert Website</p>
          </a>

          {/* ✅ Project 3 */}
          <a href="https://ai-chat-umis.onrender.com" target="_blank" rel="noopener noreferrer"
             className="bg-gray-700 glass p-4 rounded hover:shadow-lg hover:scale-105 transition transform block">
            <Image
              src="/chatbot.png"
              alt="AI Chatbot"
              width={400}
              height={160}
              className="rounded mb-3 w-full h-40 object-cover"
            />
            <h3 className="font-semibold text-lg text-white mb-2">AI Student Assistant Chatbot</h3>
            <p className="text-gray-400">A chatbot for school help built using AI APIs.</p>
          </a>

          {/* ✅ Project 4 */}
          <a href="https://greshams.vercel.app" target="_blank" rel="noopener noreferrer"
             className="bg-gray-700 glass p-4 rounded hover:shadow-lg hover:scale-105 transition transform block">
            <Image
              src="/greshamportal.png"
              alt="Gresham Portal"
              width={400}
              height={160}
              className="rounded mb-3 w-full h-40 object-cover"
            />
            <h3 className="font-semibold text-lg text-white mb-2">Gresham Investment Portal</h3>
            <p className="text-gray-400">A web app to manage and track investment portfolios.</p>
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 container mx-auto px-4" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6 text-white underline-accent">Contact Me</h2>
        <form
          action="mailto:emioluwa@icloud.com"
          method="POST"
          className="glass grid grid-cols-1 gap-4 max-w-lg mx-auto p-6 rounded"
        >
          <input type="text" name="name" placeholder="Your Name"
                 className="p-3 border border-gray-600 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                 required />
          <input type="email" name="email" placeholder="Your Email"
                 className="p-3 border border-gray-600 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                 required />
          <textarea name="message" rows={5} placeholder="Your Message"
                    className="p-3 border border-gray-600 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                    required />
          <button type="submit"
                  className="bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded transition">
            Send
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-6 text-center">
        <p>&copy; 2025 Emioluwa Gbaja-Biamila. All rights reserved.</p>
      </footer>

      {/* Back to Top */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="fixed bottom-6 right-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all z-50"
              title="Go to Top">
        ↑
      </button>
    </div>
  );
}
