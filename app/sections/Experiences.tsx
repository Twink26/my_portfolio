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
    role: "fullstack developer",
    company: "Self / Freelance",
    duration: "2025 – Present",
    points: [
      "Translating complex business requirements into intuitive user interfaces, helping clients increase user engagement by focusing on conversion-centric design",
      
    ],
  },
  {
    role: "UI/UX Designer",
    company: "Stepnex",
    duration: "sep 2024 – oct 2024",
    points: [
      "Executed the full design process, from user research and persona development to high-fidelity wireframing and interactive prototyping using Figma.",
      "Developed and maintained a design system including typography, color palettes, and reusable UI components to ensure brand consistency across products",
      
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
          <h1 className="text-4xl font-bold tracking-tight text-purple-200 sm:text-5xl lg:text-6xl">
            Experience
          </h1>
          <p className="mt-4 text-lg text-purple-300/80 font-light">

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
            className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 hidden md:block bg-purple-400/40"
            aria-hidden="true"
          >
            {/* Background line */}
            <div
              className="absolute inset-0 bg-purple-400/20"
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
            className="absolute left-2 top-0 h-full w-px md:hidden bg-purple-400/20"
            aria-hidden="true"
          >
            <div
              className="absolute top-0 left-0 w-full transition-all duration-150 bg-purple-400/40"
              style={{
                height: `${scrollProgress * 100}%`,
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
                      className={`h-4 w-4 rounded-full border-2 transition-all duration-500 flex items-center justify-center ${dotProgress > 0.5 ? "border-purple-400 bg-purple-400/30" : "border-purple-400/40 bg-transparent"}`}
                    >
                      <div
                        className={`h-2 w-2 rounded-full transition-all duration-500 bg-purple-400 ${dotProgress > 0.5 ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
                      />
                    </div>
                  </div>

                  {/* Timeline Dot - Mobile */}
                  <div
                    className="absolute left-0 top-6 md:hidden"
                    aria-hidden="true"
                  >
                    <div
                      className={`h-4 w-4 rounded-full border-2 transition-all duration-500 ${dotProgress > 0.3 ? "border-purple-400 bg-purple-400/30" : "border-purple-400/40 bg-transparent"}`}
                    />
                  </div>

                  {/* Card Container */}
                  <div
                    className={`md:w-[calc(50%-2.5rem)] ${isLeft ? "md:mr-auto md:pr-4" : "md:ml-auto md:pl-4"}`}
                    style={getCardStyle(index, isLeft)}
                  >
                    {/* Card */}
                    <div
                      className="group relative rounded-xl p-6 lg:p-8 transition-all duration-300 ease-out hover:-translate-y-1 cursor-pointer bg-white/5 border border-purple-400/20 hover:border-purple-400/40 hover:bg-white/8 shadow-lg hover:shadow-purple-500/10"
                    >
                      {/* Content */}
                      <div className="relative z-10">
                        {/* Duration Badge */}
                        <div className="mb-4">
                          <time
                            className="inline-flex rounded-full px-3 py-1 text-xs font-medium text-purple-200 bg-purple-500/20 border border-purple-400/30 transition-colors duration-300 group-hover:bg-purple-500/30 group-hover:border-purple-400/50"
                          >
                            {experience.duration}
                          </time>
                        </div>

                        {/* Header */}
                        <header className="mb-5">
                          <h2 className="text-xl lg:text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-purple-300">
                            {experience.role}
                          </h2>
                          <p
                            className="mt-1 text-sm font-medium text-purple-300/70 transition-colors duration-300 group-hover:text-purple-300/90"
                          >
                            {experience.company}
                          </p>
                        </header>

                        {/* Divider */}
                        <div
                          className="mb-5 h-px w-full bg-purple-400/20 transition-colors duration-300 group-hover:bg-purple-400/30"
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
                        className={`absolute top-10 hidden md:block h-px w-4 lg:w-8 transition-colors duration-300 ${isLeft ? "-right-4 lg:-right-8" : "-left-4 lg:-left-8"} ${dotProgress > 0.5 ? "bg-purple-400/60" : "bg-purple-400/20"}`}
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
              className={`h-3 w-3 rounded-full transition-all duration-500 ${scrollProgress > 0.9 ? "bg-purple-400 shadow-[0_0_12px_rgba(192,132,252,0.5)]" : "bg-purple-400/40"}`}
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default ExperienceSection;
