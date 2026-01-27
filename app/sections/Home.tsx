'use client';

export default function Home() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-4"
    >
      {/* Main card */}
      <div className="absolute left-9 top-1/2 -translate-y-1/2 h-[700px] w-[670px] bg-gradient-to-br from-slate-500/20 via-blue-950/20 to-slate-950/20 backdrop-blur-md rounded-2xl border border-purple-100/30 shadow-2xl flex flex-col overflow-hidden">
        {/* Profile picture + name */}
        <div className="flex flex-row gap-6 items-center pt-8 px-8">
          <div className="w-[100px] h-[100px] rounded-2xl bg-gradient-to-br from-purple-400/20 to-violet-400/20 backdrop-blur-sm flex items-center justify-center overflow-hidden border border-violet-300/70 shadow-lg">
            <img 
              src="/Twinkle.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback if image fails to load
                e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%234f46e5" width="100" height="100"/%3E%3Ctext fill="%23fff" font-family="Arial" font-size="12" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3ETR%3C/text%3E%3C/svg%3E';
              }}
            />
          </div>

          <div className="flex flex-col items-start">
            <p className="text-purple-300 text-lg font-light tracking-wide">Hi I'M</p>
            <h1 className="text-white text-5xl font-bold tracking-tight">Twinkle Rana</h1>
          </div>
        </div>

        {/* GitHub Contribution Graph */}
        <div className="px-8 mt-6 mb-4">
          <div className="bg-black/30 rounded-xl p-4 border border-blue-300/20">
            <h3 className="text-purple-300 text-sm font-medium mb-3">GitHub Contributions</h3>
            <div className="flex justify-center items-center">
              <img 
                src="https://ghchart.rshah.org/a855f7/twink26"
                alt="GitHub Contribution Graph" 
                className="w-full h-auto rounded-lg opacity-90 hover:opacity-100 transition-opacity"
                style={{ filter: 'brightness(1.1) contrast(1.2)' }}
              />
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="px-8 mt-20 grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center py-4 bg-indigo-800/10 rounded-lg border border-purple-300/20">
            <p className="text-2xl font-bold text-purple-200">100+</p>
            <span className="text-purple-300/80 text-xs mt-1">Problems Solved</span>
          </div>

          <div className="flex flex-col items-center py-4 bg-indigo-900/10 rounded-lg border border-purple-300/20">
            <p className="text-2xl font-bold text-purple-200">150+ Days</p>
            <span className="text-purple-300/80 text-xs mt-1">Active on GitHub</span>
          </div>

          <div className="flex flex-col items-center py-4 bg-indigo-900/10 rounded-lg border border-purple-300/20">
            <p className="text-2xl font-bold text-purple-200">3+</p>
            <span className="text-purple-300/80 text-xs mt-1">Hackathons</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="absolute bottom-8 right-8 flex flex-row gap-3">
          <a 
            href="https://github.com/twinklerana"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-indigo-900/20 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center hover:bg-purple-900/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <img 
              src="/github.png" 
              alt="GitHub" 
              className="w-5 h-5 object-contain invert"
            />
          </a>
          <a 
            href="https://linkedin.com/in/twinklerana"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-indigo-900/20 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center hover:bg-purple-900/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <img 
              src="/linkedin.png" 
              alt="LinkedIn" 
              className="w-5 h-5 object-contain invert"
            />
          </a>
          <a 
            href="mailto:twinklerana@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-indigo-900/20 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center hover:bg-purple-900/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <img 
              src="/mail.png" 
              alt="Email" 
              className="w-5 h-5 object-contain invert"
            />
          </a>
          <a 
            href="https://x.com/twinklerana"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-indigo-900/20 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center hover:bg-purple-900/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <img 
              src="/twitter.png" 
              alt="Twitter/X" 
              className="w-5 h-5 object-contain invert"
            />
          </a>
        </div>

        {/* Resume Button */}
        <div className="absolute bottom-8 left-8">
          <a
            href="https://drive.google.com/file/d/1gZfjVoS3VA3vDQrRaVHSrUczjl0Uf4ep/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-indigo-600/20 to-violet-600/30 backdrop-blur-sm text-white rounded-xl hover:from-purple-600/40 hover:to-violet-600/40 transition-all duration-300 border border-purple-400/30 shadow-lg font-medium text-sm"
          >
            View Resume
          </a>
        </div>
      </div>

      {/* Right side card */}
      <div className="absolute left-[830px] top-1/2 -translate-y-1/2 h-[400px] w-[830px] ">
        <div className="mb-6">
          <p className="text-white/90 text-lg leading-relaxed font-light">
            I'm <span className="text-purple-300 font-medium">Twinkle Rana</span>, a Computer Science student and full-stack developer passionate about building efficient, user-focused web applications. I love exploring how technology and business come together to create real-world impact. As the founder of <span className="text-purple-300 font-medium">PRINTNOAH</span>, I combine creativity, design, and entrepreneurship to bring ideas to life.
          </p>
        </div>

        {/* Tech Stack section */}
        <div className="mt-8">
          <h3 className="text-white text-2xl font-semibold mb-6">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {/* React */}
            <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 rounded-xl border border-purple-500/30 px-4 py-3 flex flex-row items-center justify-center gap-2 hover:border-purple-400/50 hover:scale-105 transition-all duration-300 shadow-lg">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-6 h-6" />
              <span className="text-white text-sm font-medium">React</span>
            </div>

            {/* Node.js */}
            <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 rounded-xl border border-purple-500/30 px-4 py-3 flex flex-row items-center justify-center gap-2 hover:border-purple-400/50 hover:scale-105 transition-all duration-300 shadow-lg">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-6 h-6" />
              <span className="text-white text-sm font-medium">Node.js</span>
            </div>

            {/* TypeScript */}
            <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 rounded-xl border border-purple-500/30 px-4 py-3 flex flex-row items-center justify-center gap-2 hover:border-purple-400/50 hover:scale-105 transition-all duration-300 shadow-lg">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-6 h-6" />
              <span className="text-white text-sm font-medium">TypeScript</span>
            </div>

            {/* JavaScript */}
            <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 rounded-xl border border-purple-500/30 px-4 py-3 flex flex-row items-center justify-center gap-2 hover:border-purple-400/50 hover:scale-105 transition-all duration-300 shadow-lg">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-6 h-6" />
              <span className="text-white text-sm font-medium">JavaScript</span>
            </div>

            {/* MongoDB */}
            <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 rounded-xl border border-purple-500/30 px-4 py-3 flex flex-row items-center justify-center gap-2 hover:border-purple-400/50 hover:scale-105 transition-all duration-300 shadow-lg">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-6 h-6" />
              <span className="text-white text-sm font-medium">MongoDB</span>
            </div>

            {/* Git */}
            <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 rounded-xl border border-purple-500/30 px-4 py-3 flex flex-row items-center justify-center gap-2 hover:border-purple-400/50 hover:scale-105 transition-all duration-300 shadow-lg">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-6 h-6" />
              <span className="text-white text-sm font-medium">Git</span>
            </div>

            {/* Tailwind CSS */}
            <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 rounded-xl border border-purple-500/30 px-4 py-3 flex flex-row items-center justify-center gap-2 hover:border-purple-400/50 hover:scale-105 transition-all duration-300 shadow-lg">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" className="w-6 h-6" />
              <span className="text-white text-sm font-medium">Tailwind</span>
            </div>

            {/* AWS */}
            <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 rounded-xl border border-purple-500/30 px-4 py-3 flex flex-row items-center justify-center gap-2 hover:border-purple-400/50 hover:scale-105 transition-all duration-300 shadow-lg">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt="AWS" className="w-6 h-6" />
              <span className="text-white text-sm font-medium">AWS</span>
            </div>

            {/* PostgreSQL */}
            <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 rounded-xl border border-purple-500/30 px-4 py-3 flex flex-row items-center justify-center gap-2 hover:border-purple-400/50 hover:scale-105 transition-all duration-300 shadow-lg">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-6 h-6" />
              <span className="text-white text-sm font-medium">PostgreSQL</span>
            </div>

            {/* C++ */}
            <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 rounded-xl border border-purple-500/30 px-4 py-3 flex flex-row items-center justify-center gap-2 hover:border-purple-400/50 hover:scale-105 transition-all duration-300 shadow-lg">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-6 h-6" />
              <span className="text-white text-sm font-medium">C++</span>
            </div>

            {/* Python */}
            <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 rounded-xl border border-purple-500/30 px-4 py-3 flex flex-row items-center justify-center gap-2 hover:border-purple-400/50 hover:scale-105 transition-all duration-300 shadow-lg">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-6 h-6" />
              <span className="text-white text-sm font-medium">Python</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
