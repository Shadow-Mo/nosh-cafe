"use client";

const HomeSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-[url('/images/noshbg.webp')] bg-cover bg-center bg-fixed relative overflow-hidden">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="max-w-[60rem] relative z-10 px-5 animate-fadeIn">
        <h3 className="text-[4rem] md:text-[6rem] uppercase text-white font-bold tracking-wider mb-4 animate-slideInLeft">
          <span className="text-[#d3ad7f]">Nosh</span> Cafe
        </h3>
        <p className="text-[1.8rem] md:text-[2rem] font-light leading-[1.8] py-[1rem] text-[#eee] max-w-[45rem] animate-slideInRight">
          Experience premium coffee and cozy ambiance at Nosh Cafe. Our artisanal brews and delicious treats will elevate your coffee experience.
        </p>
        <button className="mt-[2rem] inline-block py-[1.2rem] px-[3.5rem] text-[1.7rem] text-white bg-[#d3ad7f] hover:tracking-[0.2rem] transition-all rounded-md shadow-lg hover:shadow-xl hover:bg-[#c29c6d] animate-fadeIn delay-300 uppercase font-medium">
          Visit Us Today
        </button>
      </div>
    </section>
  );
};

export default HomeSection;
