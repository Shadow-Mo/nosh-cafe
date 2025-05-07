"use client";

import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="py-[5rem] px-[7%] bg-gradient-to-b from-[#010103] to-[#13131a]">
      <h1 className="heading text-center text-white uppercase pb-[3.5rem] text-[4rem] animate-fadeIn">
        <span className="text-[#d3ad7f] uppercase">about</span> us
      </h1>

      <div className="flex flex-wrap items-center bg-[#13131a] rounded-xl overflow-hidden shadow-2xl animate-fadeIn">
        <div className="flex-1 min-w-[45rem] relative overflow-hidden group">
          <Image 
            src="/images/about-img.jpeg" 
            alt="About Us" 
            width={600} 
            height={450} 
            className="w-full transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="flex-1 min-w-[45rem] p-[3rem] animate-slideInRight">
          <h3 className="text-[3rem] text-white font-bold mb-4 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/4 after:h-1 after:bg-[#d3ad7f]">What Makes Our Coffee Special?</h3>
          <p className="text-[1.6rem] text-[#ccc] py-[1rem] leading-[1.8]">
            Our coffee beans are sourced from sustainable farms around the world, carefully selected for their exceptional quality and unique flavor profiles. We use state-of-the-art roasting techniques to bring out the distinct character of each batch.
          </p>
          <p className="text-[1.6rem] text-[#ccc] py-[1rem] leading-[1.8]">
            At Nosh Cafe, we believe in the perfect balance between tradition and innovation. Our baristas are trained in both classic methods and cutting-edge brewing technologies to create the perfect cup every time.
          </p>
          <button className="mt-[2rem] inline-block py-[1rem] px-[3rem] text-[1.7rem] text-white bg-[#d3ad7f] hover:tracking-[0.2rem] transition-all rounded-md shadow-lg hover:shadow-xl hover:bg-[#c29c6d] uppercase font-medium">
            Our Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
