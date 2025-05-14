"use client";

import Link from "next/link";

const HomeSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-[url('/images/noshbg.webp')] bg-cover bg-center bg-fixed relative overflow-hidden">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="max-w-[60rem] relative z-10 px-5 animate-fadeIn">
        <h3 className="text-[3rem] sm:text-[4rem] md:text-[6rem] uppercase text-white font-bold tracking-wider mb-2 md:mb-4 animate-slideInLeft">
          <span className="text-[#d3ad7f]">Nosh</span> <span className="block sm:inline">CAFE</span>
        </h3>
        <p className="text-[1.6rem] sm:text-[1.8rem] md:text-[2rem] font-light leading-[1.6] sm:leading-[1.8] py-[0.8rem] md:py-[1rem] text-[#eee] max-w-[45rem] animate-slideInRight">
          Experience premium coffee and cozy ambiance at Nosh Cafe. Our artisanal brews and delicious treats will elevate your coffee experience.
        </p>
        <Link href="https://drive.google.com/file/d/1pbDqZx_O3lWEpNvymUBJeQS9gjdPnbBp/view?usp=drive_link" className="mt-[1.5rem] md:mt-[2rem] inline-block py-[1rem] md:py-[1.2rem] px-[2.5rem] md:px-[3.5rem] text-[1.5rem] md:text-[1.7rem] text-white bg-[#d3ad7f] hover:tracking-[0.2rem] transition-all rounded-md shadow-lg hover:shadow-xl hover:bg-[#c29c6d] animate-fadeIn delay-300 uppercase font-medium"
          target="_blank" rel="noopener noreferrer"
        >
          VIEW MENU
        </Link>
      </div>
    </section>
  );
};

export default HomeSection;
