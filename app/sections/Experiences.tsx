"use client";


import { useEffect, useRef, useState, CSSProperties } from "react";

// ============================================
// TYPES
// ============================================
interface Experience {
  role: string;
  company: string;
  duration: string;
  points: string[];
}

// ============================================
// DATA
// ============================================
const experiences: Experience[] = [
  {
    role: "Frontend Developer Intern",
    company: "Self / Freelance",
    duration: "2024 – Present",
    points: [
      "Building responsive, accessible UIs using React and Tailwind CSS with a focus on modern design patterns",
      "Creating reusable component libraries to streamline development workflows and ensure consistency",
      "Prioritizing clean UI architecture and performance optimization for seamless user experiences",
    ],
  },
  {
    role: "Student Developer",
    company: "University Projects",
    duration: "2022 – Present",
    points: [
      "Developing full-stack applications using React, Node.js, and MongoDB for academic and personal projects",
      "Practicing Data Structures & Algorithms regularly to strengthen problem-solving fundamentals",
      "Building real-world project prototypes including e-commerce platforms and portfolio applications",
    ],
  },
];




// ============================================
// COMPONENT
// ============================================
const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  // Scroll progress for timeline line fill
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const startOffset = windowHeight * 0.8;
      const scrolled = startOffset - sectionTop;
      const totalScrollable = sectionHeight + startOffset - windowHeight * 0.2;

      const progress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for card reveal
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    experiences.forEach((_, index) => {
      const card = document.getElementById(`experience-card-${index}`);
      if (!card) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => new Set([...prev, index]));
            }
          });
        },
        { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
      );

      observer.observe(card);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  // Dynamic styles
  const getCardStyle = (index: number, isLeft: boolean): CSSProperties => {
    const isVisible = visibleCards.has(index);
    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible
        ? "translateY(0) translateX(0)"
        : `translateY(30px) translateX(${isLeft ? "-20px" : "20px"})`,
      transition: "all 0.9s ease-out",
    };
  };

  const getDotProgress = (index: number) => {
    return Math.min(Math.max((scrollProgress - index * 0.4) * 2.5, 0), 1);
  };

  return (
    <main
      id="experience"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <header className="mb-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-red-50 sm:text-5xl lg:text-6xl">
            Experience
          </h1>
          <p className="mt-4 text-lg text-white/70">

            My professional journey and key contributions
          </p>
        </header>

        {/* Timeline Container */}
        <section
          ref={sectionRef}
          aria-label="Work experience timeline"
          className="relative"
        >
          {/* Center Timeline Line - Desktop */}
          <div
            className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 hidden md:block bg-violet-400/75"
            aria-hidden="true"
          >
            {/* Background line */}
            <div
              className="absolute inset-0 bg-violet-400/50"

              
            />
          {/* Filled progress line */}
<div
  className="absolute top-0 left-0 w-full transition-all duration-150 ease-out"
  style={{
    height: `${scrollProgress * 100}%`,
    background: `
      linear-gradient(
        to bottom,
        hsl(199 89% 48% / 0.18),
        hsl(199 89% 48% / 0.04)
      )
    `,
  }}
/>

            {/* Glow effect */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-4 blur-md transition-all duration-150"
              style={{
                height: `${scrollProgress * 100}%`,
                backgroundColor: `hsl(199 89% 48% / 0.08)30`,
              }}
            />
          </div>

          {/* Mobile Timeline Line */}
          <div
            className="absolute left-2 top-0 h-full w-px md:hidden"
            aria-hidden="true"
          >
            <div
              className="absolute inset-0"
              style={{ backgroundColor: "hsl(199 89% 48% / 0.08)" }}
            />
            <div
              className="absolute top-0 left-0 w-full transition-all duration-150"
              style={{
                height: `${scrollProgress * 100}%`,
                backgroundColor: "hsl(199 89% 48% / 0.08)",
              }}
            />
          </div>

          {/* Experience Cards */}
          <div className="space-y-16 md:space-y-24">
            {experiences.map((experience, index) => {
              const isLeft = index % 2 === 0;
              const dotProgress = getDotProgress(index);

              return (
                <article
                  key={index}
                  id={`experience-card-${index}`}
                  className="relative pl-8 md:pl-0"
                >
                  {/* Timeline Dot - Desktop */}
                  <div
                    className="absolute left-1/2 top-8 -translate-x-1/2 hidden md:flex flex-col items-center z-10"
                    aria-hidden="true"
                  >
                    {/* Outer ring */}
                    <div
                      className="absolute h-8 w-8 rounded-full transition-all duration-500"
                      style={{
                        border: `1px solid hsl(199 89% 48% / 0.08)50`,
                        transform: `scale(${0.8 + dotProgress * 0.4})`,
                        opacity: dotProgress * 0.5,
                      }}
                    />
                    {/* Main dot */}
                    <div
                      className="h-4 w-4 rounded-full border-2 transition-all duration-500 flex items-center justify-center"
                      style={{
                        borderColor: dotProgress > 0.5 ? "hsl(199 89% 48% / 0.08)" : "hsl(199 89% 48% / 0.08)",
                        backgroundColor: dotProgress > 0.5 ? "hsl(199 89% 48% / 0.08)" : "hsl(199 89% 48% / 0.08)",
                      }}
                    >
                      <div
                        className="h-2 w-2 rounded-full transition-all duration-500"
                        style={{
                          backgroundColor: "hsl(199 89% 48% / 0.08)",
                          transform: `scale(${dotProgress > 0.5 ? 1 : 0})`,
                          opacity: dotProgress > 0.5 ? 1 : 0,
                        }}
                      />
                    </div>
                  </div>

                  {/* Timeline Dot - Mobile */}
                  <div
                    className="absolute left-0 top-6 md:hidden"
                    aria-hidden="true"
                  >
                    <div
                      className="h-4 w-4 rounded-full border-2 transition-all duration-500"
                      style={{
                        borderColor: dotProgress > 0.3 ? "hsl(210 40% 98% / 0.08)" : "hsl(210 40% 98% / 0.08)",
                        backgroundColor: dotProgress > 0.3 ? "hsl(210 40% 98% / 0.08)" : "hsl(210 40% 98% / 0.08)",
                      }}
                    />
                  </div>

                  {/* Card Container */}
                  <div
                    className={`md:w-[calc(50%-2.5rem)] ${isLeft ? "md:mr-auto md:pr-4" : "md:ml-auto md:pl-4"}`}
                    style={getCardStyle(index, isLeft)}
                  >
                    {/* Card */}
                    <div
                      className="group relative rounded-xl p-6 lg:p-8 transition-all duration-300 ease-out hover:-translate-y-1 cursor-pointer"
                      style={{
                        backgroundColor: "hsl(210 40% 98% / 0.08)",
                        border: `1px solid ${"hsl(210 40% 98% / 0.08)"}`,
                        boxShadow: `0 4px 20px -4px ${"hsl(210 40% 98% / 0.08)"}cc`,
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget;
                        el.style.borderColor = `${"hsl(210 40% 98% / 0.08)"}60`;
                        el.style.backgroundColor = "hsl(210 40% 98% / 0.08)";
                        el.style.boxShadow = `0 8px 30px -4px ${"hsl(210 40% 98% / 0.08)"}25`;
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        el.style.borderColor = "hsl(210 40% 98% / 0.08)";
                        el.style.backgroundColor = "hsl(210 40% 98% / 0.08)";
                        el.style.boxShadow = `0 4px 20px -4px ${"hsl(210 40% 98% / 0.08)"}cc`;
                      }}
                    >
                      {/* Content */}
                      <div className="relative z-10">
                        {/* Duration Badge */}
                        <div className="mb-4">
                          <time
                            className="inline-flex rounded-full px-3 py-1 text-xs font-medium transition-colors duration-300"
                            style={{
                              backgroundColor: `${"hsl(210 40% 98% / 0.08)"}15`,
                              color: "hsl(210 40% 98% / 0.08)",
                              border: `1px solid ${"hsl(210 40% 98% / 0.08)"}30`,
                            }}
                          >
                            {experience.duration}
                          </time>
                        </div>

                        {/* Header */}
                        <header className="mb-5">
                          <h2 className="text-xl lg:text-2xl font-semibold transition-colors duration-300 group-hover:text-[hsl(0,0%,100%)]">
                            {experience.role}
                          </h2>
                          <p
                            className="mt-1 text-sm font-medium transition-colors duration-300"
                            style={{ color: "hsl(210 40% 98% / 0.08)" }}
                          >
                            {experience.company}
                          </p>
                        </header>

                        {/* Divider */}
                        <div
                          className="mb-5 h-px w-full transition-colors duration-300"
                          style={{ backgroundColor: "hsl(210 40% 98% / 0.08)"}}
                          aria-hidden="true"
                        />

                        {/* Impact Points */}
                        <ul className="space-y-3" role="list">
                          {experience.points.map((point, pointIndex) => (
                            <li
                              key={pointIndex}
                              className="flex gap-3 text-sm leading-relaxed transition-colors duration-300"
                              style={{ color: "hsl(210 40% 98% / 0.08)" }}
                            >
                              <span
                                className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full transition-transform duration-300 group-hover:scale-125"
                                style={{ backgroundColor: "hsl(210 40% 98% / 0.08)" }}
                                aria-hidden="true"
                              />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Connector line - Desktop */}
                      <div
                        className={`absolute top-10 hidden md:block h-px w-4 lg:w-8 transition-colors duration-300 ${isLeft ? "-right-4 lg:-right-8" : "-left-4 lg:-left-8"}`}
                        style={{
                          backgroundColor: dotProgress > 0.5 ? `${"hsl(210 40% 98% / 0.08)"}80` : "hsl(210 40% 98% / 0.08)",
                        }}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* End indicator */}
          <div
            className="absolute left-1/2 -bottom-8 -translate-x-1/2 hidden md:flex items-center justify-center"
            aria-hidden="true"
          >
            <div
              className="h-3 w-3 rounded-full transition-all duration-500"
              style={{
                backgroundColor: scrollProgress > 0.9 ? "hsl(210 40% 98% / 0.08)" : "hsl(210 40% 98% / 0.08)",
                boxShadow: scrollProgress > 0.9 ? `0 0 12px ${"hsl(210 40% 98% / 0.08)"}80` : "none",
              }}
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default ExperienceSection;
