export default function Home() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center">
    {/*Main card*/}
     <div className="absolute left-9 top-1/2 -translate-y-1/2 h-[700px] w-[670px] bg-sky-200/10 backdrop-blur-md rounded-xl flex flex-col">
     {/*div for profile picture and name*/}
     <div className="absolute flex flex-row gap-4 items-centre">

      <div className="w-[95px] h-[95px] m-7 rounded-xl bg-slate-100 flex items-center justify-center overflow-hidden "></div>
      {/*div for both text*/}
       <div className="flex flex-col justify-items-start py-8">
        <p className="  text-slate-300 text-[20px] font-light">Hi I'M</p>
        <h1 className=" font-serif text-white text-[50px] font-bold">Twinkle Rana</h1>
       </div>
    </div> 
     

     
     </div>
    </section>
  );
}