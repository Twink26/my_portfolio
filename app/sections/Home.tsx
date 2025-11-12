


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

   
 

          
  

</div>

       



      </div>

        {/* Right side card */}
        <div className="absolute left-[730px] h-[720px] w-[830px] bg-sky-200/10 backdrop-blur-md rounded-xl border border-white/10 p-6">
          <p className="text-white">
            I’m Twinkle Rana, a Computer Science student and full-stack developer passionate about building efficient, user-focused web applications. I love exploring how technology and business come together to create real-world impact. As the founder of PRINTNOAH, I combine creativity, design, and entrepreneurship to bring ideas to life.
          </p>
        </div>


      
    </section>
  );
}
