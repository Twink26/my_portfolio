"use client";

import { useState, useMemo } from "react";
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

// ✅ FIX: use /public images (NOT @/assets)
const projects: Project[] = [
  {
    id: "1",
    name: "Tenzies-game",
    description:
      "A simple and fun React-based dice game where the goal is to roll until all dice show the same value. ",
    techStack: ["React.js ", "CSS", "nanoid for unique IDs"],
    category: "Full Stack",
    liveUrl: "https://tenzies-game-seven-delta.vercel.app/",
    githubUrl: "https://github.com/Twink26/Tenzies-game",
    image: "/tenzies.png",
  },
  {
    id: "2",
    name: "Monster Energy",
    description:
      "A website for Monster Energy.",
    techStack: ["Next.js", "React", "Typescript", "Tailwind CSS", "Three.js", "Postcss", "GSAP"],
    category: "Frontend",
    liveUrl: "https://monsterenergy-opal.vercel.app/",
    githubUrl: "https://github.com/Twink26/Monster",
    image: "/monster.png",
  },
];

const categories: ProjectCategory[] = ["All", "Frontend", "Backend", "Full Stack"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="relative min-h-screen py-9">

      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-white mb-4">
          Projects
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
                  onError={(e) => {
                        // Fallback placeholder if image fails to load
                        e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="200"%3E%3Crect fill="%231a1a2e" width="400" height="200"/%3E%3Ctext fill="%23fff" font-family="Arial" font-size="16" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage not found%3C/text%3E%3C/svg%3E';
                      }}
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
                        className="text-xs bg-blue-300/50 px-2 py-1 rounded"
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
