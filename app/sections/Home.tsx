


export default function Home() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center"
    >
      {/* Main card */}
      <div className="absolute left-9 top-1/2 -translate-y-1/2 h-[700px] w-[670px] bg-sky-200/10 backdrop-blur-md rounded-xl flex flex-col">

        {/* Profile picture + name */}
        <div className="absolute flex flex-row gap-4 items-center">
          <div className="w-[95px] h-[95px] m-7 rounded-xl bg-slate-100 flex items-center justify-center overflow-hidden">
            <img src="/Twinkle.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col items-start py-8">
            <p className="text-slate-300 text-[20px] font-light">Hi I'M</p>
            <h1 className="font-serif text-white text-[50px] font-bold">Twinkle Rana</h1>
          </div>
          
        </div>
        {/* Stats row */}
<div className="mt-40 px-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
  <div className="flex flex-col py-10 ">
    <p className="text-xl font-bold text-white">100+</p>
    <span className="text-slate-300 text-sm">Problems Solved</span>
  </div>

  <div className="flex flex-col  py-10 ">
    <p className="text-xl font-bold text-white">90 Days</p>
    <span className="text-slate-300 text-sm">Active on GitHub</span>
  </div>

  <div className="flex flex-col py-10 ">
    <p className="text-xl font-bold text-white">3+</p>
    <span className="text-slate-300 text-sm">Hackathons</span>
  </div>

  {/* Social Links */}
  <div className="absolute bottom-8 right-8 flex flex-row gap-4">
  <a 
    href="https://github.com/twinklerana"
    target="_blank"
    rel="noopener noreferrer"
    className="w-15 h-15 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
  >
    <img 
      src="/github.png" 
      alt="GitHub" 
      className="w-5 h-5 object-contain invert"
    />
  </a>
  <a 
    href="https://linkdin.com/twinklerana"
    target="_blank"
    rel="noopener noreferrer"
    className="w-15 h-15 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
  >
    <img 
      src="/linkedin.png" 
      alt="linkedin" 
      className="w-5 h-5 object-contain invert"
    />
  </a>
    <a 
    href="https://mail.com/twinklerana"
    target="_blank"
    rel="noopener noreferrer"
    className="w-15 h-15 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
  >
    <img 
      src="/mail.png" 
      alt="mail" 
      className="w-5 h-5 object-contain invert"
    />
  </a>
   <a 
    href="https://x.com/twinklerana"
    target="_blank"
    rel="noopener noreferrer"
    className="w-15 h-15 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
  >
    <img 
      src="/twitter.png" 
      alt="x" 
      className="w-5 h-5 object-contain invert"
    />
  </a>


</div>
{/* Resume Button */}
<div className="absolute bottom-8 left-8">
  <a
    href="/Twinkle_Rana_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="px-5 py-2 bg-white/10 backdrop-blur-sm text-white rounded-sm hover:bg-white/20 transition-colors border border-white/20"
  >
    View Resume
  </a>
</div>
</div>

       



      </div>

        {/* Right side card */}
        <div className="absolute left-[730px] h-[720px] w-[830px] rounded-xl p-6">
          <p className="text-white ">
            I’m Twinkle Rana, a Computer Science student and full-stack developer passionate about building efficient, user-focused web applications. I love exploring how technology and business come together to create real-world impact. As the founder of PRINTNOAH, I combine creativity, design, and entrepreneurship to bring ideas to life.
          </p>
          {/* Tech Stack section */}
{/* Tech Stack section */}
<div className="absolute left-[1px] top-[400px] w-[830px] flex-row md:flex-row p-6">
  <h3 className="text-white text-xl font-semibold mb-4">Tech Stack</h3>
  <div className="flex flex-wrap md:flex-row gap-4">

    {/* React */}
    <div className="bg-gray-900/60 rounded-md outline-2 outline-zinc-400/70 p-8 flex flex-row items-center justify-center w-27 h-14">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-6 h-6" />
      <span className="text-white p-2 text-[15px] mt-2">React</span>
    </div>

    {/* Node.js */}
    <div className="bg-gray-900/60 rounded-md outline-2 outline-zinc-400/70 p-8 flex flex-row items-center justify-center w-27 h-14">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-6 h-6" />
      <span className="text-white text-[15px] p-2 mt-2">Node.js</span>
    </div>

    {/* TypeScript */}
    <div className="bg-gray-900/60 rounded-md outline-2 outline-zinc-400/70 p-8 flex flex-row items-center justify-center w-30 h-12">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-6 h-6" />
      <span className="text-white text-[15px] p-2 mt-2">TypeScript</span>
    </div>

    {/* JavaScript */}
    <div className="bg-gray-900/60 rounded-md outline-2 outline-zinc-400/70 p-8 flex flex-row items-center justify-center w-30 h-12">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-6 h-6" />
      <span className="text-white text-[15px] p-2 mt-2">JavaScript</span>
    </div>

    {/* MongoDB */}
    <div className="bg-gray-900/60 rounded-md outline-2 outline-zinc-400/70 p-8 flex flex-row items-center justify-center w-27 h-14">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-6 h-6" />
      <span className="text-white text-[15px] p-2 mt-2">MongoDB</span>
    </div>

    {/* Git */}
    <div className="bg-gray-900/60 rounded-md outline-2 outline-zinc-400/70 p-8 flex flex-row items-center justify-center w-20 h-14">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-6 h-6" />
      <span className="text-white text-[15px] p-2 mt-2">Git</span>
    </div>

    {/* Tailwind CSS */}
    <div className="bg-gray-900/60 rounded-md outline-2 outline-zinc-400/70 p-8 flex flex-row items-center justify-center w-27 h-14">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" className="w-6 h-6" />
      <span className="text-white text-[15px] p-2 mt-2">Tailwind</span>
    </div>

    {/* AWS */}
    <div className="bg-gray-900/60 rounded-md outline-2 outline-zinc-400/70 p-8 flex flex-row items-center justify-center w-27 h-14">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt="AWS" className="w-6 h-6" />
      <span className="text-white text-[15px] p-2 mt-2">AWS</span>
    </div>

    {/* PostgreSQL */}
    <div className="bg-gray-900/60 rounded-md outline-2 outline-zinc-400/70 p-8 flex flex-row items-center justify-center w-30 h-14">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-6 h-6" />
      <span className="text-white text-[15px] p-2 mt-2">PostgreSQL</span>
    </div>

    {/* C++ */}
    <div className="bg-gray-900/60 rounded-md outline-2 outline-zinc-400/70 p-8 flex flex-row items-center justify-center w-20 h-14">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-6 h-6" />
      <span className="text-white text-[15px] p-2 mt-2">C++</span>
    </div>

  </div>
</div>

        </div>


      
    </section>
  );
}
