"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { Globe, Github, Mail, ArrowUpRight, Code,  Send, Cpu, Database, Layout } from "lucide-react";
import Image from "next/image";
const phrases = ["Front-End Developer", "Creative Coder", "Web Enthusiast"];

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
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && j === 0) {
        setIsDeleting(false);
        setI((prev) => (prev + 1) % phrases.length);
      }
    };
    const speed = isDeleting ? 40 : 120;
    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [j, i, isDeleting]);

  return (
    <div className="h-16">
      <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">
        {text}<span className="text-purple-500 animate-pulse">_</span>
      </h2>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // ✅ Updated Project List with your specific tech stacks
  const projectList = [
    { 
      title: "Future", 
      img: "/future.png", 
      tech: ["3D", "TypeScript", "Next.js", "Tailwind"], 
      live: "https://future-coral-one.vercel.app" 
    },
    { 
      title: "Delacroix Apartments", 
      img: "/delacroix.png", 
      tech: ["TypeScript", "Next.js", "Tailwind"], 
      live: "https://delacroixapartments.vercel.app" 
    },
    { 
      title: "Fuel Smart", 
      img: "/Fuelsmart.png", 
      tech: ["Next.js", "Maps API", "Tailwind"], 
      live: "https://fuelsmart.vercel.app" 
    },
    { 
      title: "Deluxe Global", 
      img: "/deluxeglobal.png", 
      tech: ["TypeScript", "Next.js", "Tailwind"], 
      live: "https://deluxeglobal.vercel.app" 
    },
  
    { 
      title: "Redack Nation", 
      img: "/redacknation.png", 
      tech: ["Next.js", "Stripe", "Tailwind"], 
      live: "https://www.redacknation.com" 
    },
    { 
      title: "AI Chatbot", 
      img: "/chatbot.png", 
      tech: ["Python", "OpenAI", "Flask"], 
      live: "https://ai-chat-umis.onrender.com" 
    },
  ];

  return (
    <div className="bg-[#050505] text-[#E4E4E7] font-sans selection:bg-purple-500/30 overflow-x-hidden">
      
      {/* Dynamic Background Noise/Glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/20 blur-[120px] rounded-full" />
      </div>

      {/* Modern Navigation */}
      <header className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center font-black italic text-sm">E</div>
            <span className="font-bold tracking-tighter text-lg hidden sm:block uppercase">Emioluwa</span>
          </div>
          <nav className="flex gap-6 lg:gap-10">
            {['About', 'Projects', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div data-aos="fade-down" className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-purple-400">Software Engineer</span>
          </div>
          <TypingEffect />
          <p className="mt-6 text-gray-500 max-w-xl mx-auto leading-relaxed text-lg" data-aos="fade-up" data-aos-delay="200">
            Crafting sleek, responsive, and user-focused digital experiences through modern software engineering.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="400">
             <a href="#projects" className="px-8 py-4 bg-white text-black rounded-2xl font-bold text-sm hover:scale-105 transition-transform flex items-center gap-2">
               View My Work <ArrowUpRight size={18} />
             </a>
             <a href="#contact" className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold text-sm hover:bg-white/10 transition-all">
               Let&apos;s Talk
             </a>
          </div>
        </div>
      </section>

      {/* Language Marquee */}
      <div className="py-12 border-y border-white/5 bg-white/[0.01] overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee items-center gap-12">
          {["JavaScript", "TypeScript", "Python", "React", "Next.js", "Tailwind", "Flask", "PostgreSQL", "HTML5", "CSS3"].map((tech, i) => (
            <span key={i} className="text-4xl md:text-6xl font-black italic tracking-tighter text-white/5 hover:text-purple-500/20 transition-colors cursor-default select-none uppercase">
              {tech}
            </span>
          ))}
          {["JavaScript", "TypeScript", "Python", "React", "Next.js", "Tailwind", "Flask", "PostgreSQL", "HTML5", "CSS3"].map((tech, i) => (
            <span key={i + 'dup'} className="text-4xl md:text-6xl font-black italic tracking-tighter text-white/5 hover:text-purple-500/20 transition-colors cursor-default select-none uppercase">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div data-aos="fade-right">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-purple-500" />
              <span className="text-xs font-black uppercase tracking-[0.4em] text-purple-500">The Engineer</span>
            </div>
            <h2 className="text-4xl font-bold mb-8 tracking-tight">Emioluwa Gbaja-Biamila</h2>
            <div className="space-y-6 text-gray-400 leading-relaxed text-lg mb-12">
              <p>
                Aspiring software engineer at <span className="text-white font-medium">Babcock University</span> with a foundation in 
                frontend development and a curiosity for full-stack systems.
              </p>
              <p>
                Having interned at <span className="text-white font-medium">Stanbic IBTC</span> and <span className="text-white font-medium">ISSL</span>, 
                I focus on solving real-world problems with effective and aesthetically pleasing code.
              </p>
            </div>

            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 mb-6">Technical Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { name: "JavaScript", icon: <Code size={14}/> },
                { name: "TypeScript", icon: <Cpu size={14}/> },
                { name: "Python", icon: <Database size={14}/> },
                { name: "React", icon: <Layout size={14}/> },
                { name: "Next.js", icon: <Globe size={14}/> },
                { name: "Tailwind", icon: <Layout size={14}/> },
              ].map((skill, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors">
                  <span className="text-purple-500">{skill.icon}</span>
                  <span className="text-xs font-bold tracking-wide">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group lg:mt-20" data-aos="fade-left">
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/20 to-transparent blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="aspect-video lg:aspect-square rounded-[3rem] bg-[#0A0A0A] border border-white/10 flex items-center justify-center relative overflow-hidden">
               <div className="text-7xl font-black text-white/5 select-none rotate-12 uppercase tracking-tighter">Stack</div>
               <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-[#0A0A0A] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
             <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-600 block mb-2">Portfolio</span>
            <h2 className="text-3xl font-bold tracking-tighter italic uppercase inline-block">Featured Work</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectList.map((p, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="group relative bg-[#050505] rounded-[2.5rem] border border-white/5 overflow-hidden active:scale-[0.98] transition-all flex flex-col">
                <div className="h-48 relative overflow-hidden">
                  <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-transparent transition-colors z-10" />
                  <Image 
  src={p.img} 
  alt={p.title} 
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-40 group-hover:opacity-100" 
/>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="font-bold text-lg tracking-tight uppercase italic">{p.title}</h3>
                    <a href={p.live} target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-white text-gray-400 hover:text-black transition-all">
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                  
                  {/* Programming Languages Chips */}
                  <div className="mt-auto flex flex-wrap gap-2">
                    {p.tech.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/[0.03] border border-white/10 rounded-full text-[9px] font-black tracking-widest text-purple-500 uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 container mx-auto px-6 max-w-4xl">
        <div className="bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 rounded-[3.5rem] p-8 md:p-20 text-center" data-aos="zoom-in">
          <Mail className="mx-auto text-purple-500 mb-8" size={48} />
          <h2 className="text-4xl font-bold mb-4 tracking-tighter">Start a Conversation</h2>
          <p className="text-gray-500 mb-10 max-w-md mx-auto leading-relaxed">Have a project in mind or just want to say hi? My inbox is always open.</p>
          <a href="mailto:emioluwa@icloud.com" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:scale-105 transition-transform shadow-xl shadow-white/5">
            Send Message <Send size={16} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/5 text-center px-6">
        <div className="flex justify-center gap-8 mb-10 text-gray-600">
           {/* GitHub Link */}
           <Link 
             href="https://github.com/Billsthename22" 
             target="_blank" 
             className="hover:text-white transition-colors duration-300"
           >
             <Github size={22} />
           </Link>

           {/* Personal Website or LinkedIn Link */}
           <Link 
             href="#" 
             className="hover:text-white transition-colors duration-300"
           >
             <Globe size={22} />
           </Link>

           {/* Mail Link */}
           <Link 
             href="mailto:emioluwagbajabiamila@gmail.com" 
             className="hover:text-white transition-colors duration-300"
           >
             <Mail size={22} />
           </Link>
        </div>
        <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-700">
          &copy; 2026 Emioluwa Gbaja-Biamila • Built with Precision
        </p>
      </footer>

      {/* Scroll Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-white/10 backdrop-blur-2xl border border-white/20 text-white rounded-2xl shadow-2xl flex items-center justify-center hover:bg-white hover:text-black transition-all z-50 active:scale-90"
      >
        <ArrowUpRight className="-rotate-45" size={24} />
      </button>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: max-content;
        }
      `}</style>
    </div>
  );
}