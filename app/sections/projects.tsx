"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

// Types
type ProjectCategory = "All" | "Frontend" | "Backend" | "Full Stack";

interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  category: Exclude<ProjectCategory, "All">;
  liveUrl: string;
  githubUrl: string;
  image: string;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

// ✅ FIX: use /public images (NOT @/assets)
const projects: Project[] = [
  {
    id: "1",
    name: "DevFlow",
    description:
      "A real-time collaborative code editor with syntax highlighting, live cursors, and integrated chat.",
    techStack: ["Next.js", "TypeScript", "Socket.io", "MongoDB"],
    category: "Full Stack",
    liveUrl: "#",
    githubUrl: "#",
    image: "/project-devflow.png",
  },
  {
    id: "2",
    name: "CloudVault API",
    description:
      "Secure file storage API with encryption, chunked uploads, and S3-compatible storage.",
    techStack: ["Node.js", "Express", "PostgreSQL"],
    category: "Backend",
    liveUrl: "#",
    githubUrl: "#",
    image: "/project-cloudvault.png",
  },
];

const categories: ProjectCategory[] = ["All", "Frontend", "Backend", "Full Stack"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      particles = Array.from({ length: 80 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.9) * 0.9,
        speedY: (Math.random() - 0.9) * 0.9,
        opacity: Math.random() * 0.4 + 0.9,
      }));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34,197,94,${p.opacity})`;
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.y < 0) p.y = canvas.height;
        if (p.x > canvas.width) p.x = 0;
        if (p.y > canvas.height) p.y = 0;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    initParticles();
    animate();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section id="projects" className="relative min-h-screen py-9">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10 opacity-60"
      />

      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-white mb-4">
          Projects<span className="text-green-400">.</span>
        </h2>
        <p className="text-center text-white/70 mb-12">
          Things I’ve built while learning and experimenting.
        </p>

        {/* Filters */}
        <div className="flex justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveFilter(c)}
              className={`px-4 py-2 rounded-lg text-sm ${
                activeFilter === c
                  ? "bg-green-500 text-black"
                  : "bg-white/10 text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="project-card"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-40 object-cover"
                />

                <div className="p-4">
                  <h3 className="text-white font-semibold mb-2">
                    {project.name}
                  </h3>
                  <p className="text-white/70 text-sm mb-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-white/10 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      className="flex items-center gap-1 text-sm text-green-400"
                    >
                      <ExternalLink size={14} /> Live
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="flex items-center gap-1 text-sm text-white"
                    >
                      <Github size={14} /> GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
