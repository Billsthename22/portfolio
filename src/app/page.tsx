"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import {
  Globe,
  Github,
  Mail,
  ArrowUpRight,
  Code,
  Send,
  Cpu,
  Database,
  Layout,
  Briefcase,
} from "lucide-react";
import Image from "next/image";

const phrases = [
  "Front-End Developer",
  "Full-Stack Developer",
  "Creative Coder",
  "Software Engineer",
];

function TypingEffect() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        if (characterIndex < currentPhrase.length) {
          setText(currentPhrase.substring(0, characterIndex + 1));
          setCharacterIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (characterIndex > 0) {
          setText(currentPhrase.substring(0, characterIndex - 1));
          setCharacterIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    };

    const speed = isDeleting ? 45 : 110;
    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [characterIndex, phraseIndex, isDeleting]);

  return (
    <div className="h-16">
      <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">
        {text}
        <span className="text-purple-500 animate-pulse">_</span>
      </h2>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 80,
    });
  }, []);

  const projectList = [
    {
      title: "Selah",
      img: "/selah.png",
      description:
        "A spiritual growth platform designed to help users pause, reflect, pray, and build consistent spiritual habits through guided experiences and personalized content.",
      tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
      live: "https://selah-green-five.vercel.app",
    },
    {
      title: "Iwemi",
      img: "/iwemi.png",
      description:
        "A digital research and e-book platform featuring an AI-powered e-book generation workflow. I built the front-end experience across multiple production modules with a focus on usability and responsive design.",
      tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
      live: "https://iwemiresearch.org/ebook",
    },
    {
      title: "Impact Bakery",
      img: "/impactbakery.png",
      description:
        "A modern bakery website created to establish a strong digital presence, showcase products, and provide customers with an intuitive way to explore the bakery's offerings.",
      tech: ["React", "Next.js", "Tailwind CSS"],
      live: "https://impact-bakery.com.ng",
    },
    {
      title: "Future",
      img: "/future.png",
      description:
        "An immersive experimental web experience combining modern web development with interactive 3D elements to create a futuristic and visually engaging interface.",
      tech: ["Next.js", "TypeScript", "Three.js", "Tailwind CSS"],
      live: "https://future-coral-one.vercel.app",
    },
    {
      title: "Delacroix Apartments",
      img: "/delacroix.png",
      description:
        "A responsive apartment and property showcase website designed to present accommodation options, property information, and essential details through a clean and premium interface.",
      tech: ["TypeScript", "Next.js", "Tailwind CSS"],
      live: "https://delacroixapartments.vercel.app",
    },
    {
      title: "Fuel Smart",
      img: "/Fuelsmart.png",
      description:
        "A Nigerian fuel discovery platform that helps drivers find nearby fuel stations, compare prices, and determine whether travelling to a cheaper station is financially worthwhile.",
      tech: ["Next.js", "TypeScript", "Google Maps API", "Tailwind CSS"],
      live: "https://fuelsmart.vercel.app",
    },
    {
      title: "Deluxe Global",
      img: "/deluxeglobal.png",
      description:
        "A professional corporate website developed to give Deluxe Global a polished online presence while presenting its services and business information in a clear and accessible way.",
      tech: ["TypeScript", "Next.js", "Tailwind CSS"],
      live: "https://deluxeglobal.vercel.app",
    },
    {
      title: "Redack Nation",
      img: "/redacknation.png",
      description:
        "A custom e-commerce platform built for Redack Nation with product browsing, checkout, Paystack payment integration, order processing, and an administrative payment management system.",
      tech: [
        "Next.js",
        "TypeScript",
        "MongoDB",
        "Paystack",
        "Tailwind CSS",
      ],
      live: "https://www.redacknation.com",
    },
    {
      title: "AI Chatbot",
      img: "/chatbot.png",
      description:
        "An AI-powered conversational application that integrates OpenAI capabilities with a custom web interface to provide users with an interactive chatbot experience.",
      tech: ["Python", "Flask", "OpenAI", "HTML", "CSS"],
      live: "https://ai-chat-umis.onrender.com",
    },
  ];

  const experienceList = [
    {
      role: "Lead Front-End Developer",
      company: "Iwemi",
      period: "Apr 2026",
      desc: "Built the front-end experience for an AI-powered e-book generator using Next.js and TypeScript across multiple production modules, integrating Supabase for application state and backend functionality.",
    },
    {
      role: "Full-Stack Developer",
      company: "Redack Nation",
      period: "Contract",
      desc: "Designed and developed a custom e-commerce platform using Next.js, MongoDB, and Paystack, including product management, checkout, payment verification, order processing, and an administrative dashboard.",
    },
    {
      role: "Front-End Developer Intern",
      company: "Integrated Software Services Limited (ISSL)",
      period: "6 Months",
      desc: "Developed responsive and reusable interfaces using React, Next.js, Tailwind CSS, HTML, and JavaScript while working with backend APIs and SQL-based data systems.",
    },
    {
      role: "Clerical Intern",
      company: "Stanbic IBTC Bank",
      period: "Internship",
      desc: "Provided administrative and clerical support, assisted with document processing, data management, customer service, and general office operations.",
    },
  ];

  return (
    <div className="bg-[#050505] text-[#E4E4E7] font-sans selection:bg-purple-500/30 overflow-x-hidden">

      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/20 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center font-black italic text-sm">
              E
            </div>

            <span className="font-bold tracking-tighter text-lg hidden sm:block uppercase">
              Emioluwa
            </span>
          </div>

          <nav className="flex gap-6 lg:gap-10">
            {["About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">

          <div
            data-aos="fade-down"
            className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-purple-400">
              Software Engineer
            </span>
          </div>

          <TypingEffect />

          <p
            className="mt-6 text-gray-500 max-w-2xl mx-auto leading-relaxed text-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            I design and build modern digital experiences that combine clean
            interfaces, thoughtful user experiences, and reliable software
            engineering.
          </p>

          <div
            className="mt-10 flex flex-wrap justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-white text-black rounded-2xl font-bold text-sm hover:scale-105 transition-transform flex items-center gap-2"
            >
              View My Work
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#contact"
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold text-sm hover:bg-white/10 transition-all"
            >
              Let&apos;s Talk
            </a>
          </div>

        </div>
      </section>

      {/* Tech Marquee */}
      <div className="py-12 border-y border-white/5 bg-white/[0.01] overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee items-center gap-12">

          {[
            "JavaScript",
            "TypeScript",
            "Python",
            "React",
            "Next.js",
            "Tailwind",
            "Node.js",
            "MongoDB",
            "PostgreSQL",
            "HTML5",
            "CSS3",
          ].map((tech, i) => (
            <span
              key={i}
              className="text-4xl md:text-6xl font-black italic tracking-tighter text-white/5 hover:text-purple-500/20 transition-colors cursor-default select-none uppercase"
            >
              {tech}
            </span>
          ))}

          {[
            "JavaScript",
            "TypeScript",
            "Python",
            "React",
            "Next.js",
            "Tailwind",
            "Node.js",
            "MongoDB",
            "PostgreSQL",
            "HTML5",
            "CSS3",
          ].map((tech, i) => (
            <span
              key={`duplicate-${i}`}
              className="text-4xl md:text-6xl font-black italic tracking-tighter text-white/5 hover:text-purple-500/20 transition-colors cursor-default select-none uppercase"
            >
              {tech}
            </span>
          ))}

        </div>
      </div>

      {/* About */}
      <section id="about" className="py-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <div data-aos="fade-right">

            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-purple-500" />

              <span className="text-xs font-black uppercase tracking-[0.4em] text-purple-500">
                The Engineer
              </span>
            </div>

            <h2 className="text-4xl font-bold mb-8 tracking-tight">
              Emioluwa Gbajabiamila
            </h2>

            <div className="space-y-6 text-gray-400 leading-relaxed text-lg mb-12">

              <p>
                Software Engineering graduate from{" "}
                <span className="text-white font-medium">
                  Babcock University
                </span>{" "}
                with hands-on experience designing and developing modern web
                applications. My primary focus is front-end development, with
                strong experience using React, Next.js, TypeScript, JavaScript,
                Tailwind CSS, and modern UI libraries.
              </p>

              <p>
                I also have practical experience working across the backend,
                including Node.js, Express, MongoDB, PostgreSQL, REST APIs,
                authentication, database integration, and third-party services
                such as payment gateways. This allows me to understand and
                contribute to products beyond just the user interface.
              </p>

              <p>
                I enjoy taking ideas from concept to production — translating
                requirements into intuitive interfaces, building reusable
                components, connecting applications to APIs and databases, and
                continuously improving performance, usability, and reliability.
              </p>

              <p>
                Through internships, contract work, freelance projects, and
                personal products, I have worked on e-commerce platforms,
                business websites, productivity tools, AI-powered applications,
                mapping solutions, and interactive digital experiences.
              </p>

              <p>
                Beyond writing code, I am passionate about solving real-world
                problems through technology. I approach every project with
                curiosity, attention to detail, and a commitment to continuous
                learning. I am currently focused on growing into a stronger
                full-stack engineer while expanding my knowledge of cloud
                engineering, cybersecurity, system design, and scalable
                software architecture.
              </p>

            </div>

            {/* Skills */}
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 mb-6">
              Technical Stack
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">

              {[
                { name: "JavaScript", icon: <Code size={14} /> },
                { name: "TypeScript", icon: <Cpu size={14} /> },
                { name: "Python", icon: <Database size={14} /> },
                { name: "React", icon: <Layout size={14} /> },
                { name: "Next.js", icon: <Globe size={14} /> },
                { name: "Tailwind", icon: <Layout size={14} /> },
                { name: "Node.js", icon: <Code size={14} /> },
                { name: "MongoDB", icon: <Database size={14} /> },
                { name: "PostgreSQL", icon: <Database size={14} /> },
              ].map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors"
                >
                  <span className="text-purple-500">
                    {skill.icon}
                  </span>

                  <span className="text-xs font-bold tracking-wide">
                    {skill.name}
                  </span>
                </div>
              ))}

            </div>
          </div>

          {/* Experience */}
          <div
            data-aos="fade-left"
            className="bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] p-8"
          >

            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-purple-500" size={22} />

              <h3 className="text-xl font-bold tracking-tight uppercase italic">
                Work Experience
              </h3>
            </div>

            <div className="space-y-6">

              {experienceList.map((exp, idx) => (
                <div
                  key={idx}
                  className="border-l border-white/10 pl-6 relative pb-6 last:pb-0"
                >

                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-purple-500 rounded-full" />

                  <div className="flex justify-between items-start flex-wrap gap-2 mb-1">

                    <h4 className="font-bold text-sm text-white">
                      {exp.role}
                    </h4>

                    <span className="text-[10px] font-black uppercase text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full">
                      {exp.period}
                    </span>

                  </div>

                  <p className="text-xs text-gray-400 font-medium mb-2">
                    {exp.company}
                  </p>

                  <p className="text-xs text-gray-500 leading-relaxed">
                    {exp.desc}
                  </p>

                </div>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="py-24 bg-[#0A0A0A] border-y border-white/5"
      >
        <div className="container mx-auto px-6">

          <div className="text-center mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-600 block mb-2">
              Portfolio
            </span>

            <h2 className="text-3xl font-bold tracking-tighter italic uppercase inline-block">
              Featured Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {projectList.map((project, i) => (
              <article
                key={project.title}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="group relative bg-[#050505] rounded-[2.5rem] border border-white/5 overflow-hidden active:scale-[0.98] transition-all flex flex-col"
              >

                {/* Image */}
                <div className="h-52 relative overflow-hidden">

                  <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-transparent transition-colors z-10" />

                  <Image
                    src={project.img}
                    alt={`${project.title} project`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-50 group-hover:opacity-100"
                  />

                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">

                  <div className="flex justify-between items-start mb-4">

                    <h3 className="font-bold text-lg tracking-tight uppercase italic">
                      {project.title}
                    </h3>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title}`}
                      className="p-2 bg-white/5 rounded-full hover:bg-white text-gray-400 hover:text-black transition-all"
                    >
                      <ArrowUpRight size={16} />
                    </a>

                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-auto flex flex-wrap gap-2">

                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/[0.03] border border-white/10 rounded-full text-[9px] font-black tracking-widest text-purple-500 uppercase"
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-24 container mx-auto px-6 max-w-4xl"
      >

        <div
          className="bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 rounded-[3.5rem] p-8 md:p-20 text-center"
          data-aos="zoom-in"
        >

          <Mail
            className="mx-auto text-purple-500 mb-8"
            size={48}
          />

          <h2 className="text-4xl font-bold mb-4 tracking-tighter">
            Start a Conversation
          </h2>

          <p className="text-gray-500 mb-10 max-w-md mx-auto leading-relaxed">
            Have a project in mind, looking for a developer, or simply want to
            connect? My inbox is always open.
          </p>

          <a
            href="mailto:emioluwa@icloud.com"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:scale-105 transition-transform shadow-xl shadow-white/5"
          >
            Send Message
            <Send size={16} />
          </a>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/5 text-center px-6">

        <div className="flex justify-center gap-8 mb-10 text-gray-600">

          <a
            href="https://github.com/Billsthename22"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition-colors duration-300"
          >
            <Github size={22} />
          </a>

          <a
            href="#"
            aria-label="Website"
            className="hover:text-white transition-colors duration-300"
          >
            <Globe size={22} />
          </a>

          <a
            href="mailto:emioluwagbajabiamila@gmail.com"
            aria-label="Email"
            className="hover:text-white transition-colors duration-300"
          >
            <Mail size={22} />
          </a>

        </div>

        <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-700">
          © 2026 Emioluwa Gbajabiamila • Built with Precision
        </p>

      </footer>

      {/* Scroll Top */}
      <button
        type="button"
        aria-label="Scroll to top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-8 right-8 w-14 h-14 bg-white/10 backdrop-blur-2xl border border-white/20 text-white rounded-2xl shadow-2xl flex items-center justify-center hover:bg-white hover:text-black transition-all z-50 active:scale-90"
      >
        <ArrowUpRight
          className="-rotate-45"
          size={24}
        />
      </button>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: max-content;
        }
      `}</style>

    </div>
  );
}