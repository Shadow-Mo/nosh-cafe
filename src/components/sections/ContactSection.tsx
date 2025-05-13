"use client";

const ContactSection = () => {
  return (
    <section id="contact" className="py-[3rem] md:py-[5rem] px-[5%] sm:px-[7%] bg-gradient-to-b from-[#0c0c10] to-[#13131a]">
      <h1 className="heading text-center text-white uppercase pb-[2rem] md:pb-[3.5rem] text-[3rem] sm:text-[3.5rem] md:text-[4rem] animate-fadeIn">
        <span className="text-[#d3ad7f] uppercase">contact</span> us
      </h1>

      <div className="flex flex-wrap gap-4 sm:gap-6 bg-[#13131a] rounded-xl overflow-hidden shadow-xl animate-fadeIn">
        <div className="w-full lg:flex-1 h-[25rem] sm:h-[30rem] md:h-auto overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.4045695985856!2d73.80492617477847!3d18.553297582546655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfd4ffbbbd83%3A0x609db9da1465623!2sCafe%20Nosh!5e1!3m2!1sen!2sin!4v1747077176089!5m2!1sen!2sin" 
            allowFullScreen 
            loading="lazy" 
            className="w-full h-full filter transition-all duration-500"
          ></iframe>
        </div>

        <form className="w-full lg:flex-1 p-[2rem] sm:p-[3rem] md:p-[5rem] text-center animate-slideInRight">
          <h3 className="uppercase text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] text-white font-bold mb-4 sm:mb-6 md:mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-1 after:bg-[#d3ad7f]">get in touch</h3>
          
          <div className="flex items-center mt-[1.5rem] sm:mt-[2rem] mb-[1.5rem] sm:mb-[2rem] bg-[rgba(1,1,3,0.6)] border border-[rgba(255,255,255,.2)] rounded-lg overflow-hidden transition-all duration-300 hover:border-[#d3ad7f] hover:shadow-md group">
            <span className="text-white text-[1.6rem] sm:text-[1.8rem] md:text-[2rem] pl-[1.5rem] sm:pl-[2rem] group-hover:text-[#d3ad7f] transition-colors">
              <i className="fas fa-user"></i>
            </span>
            <input 
              type="text" 
              placeholder="name" 
              className="w-full p-[1.5rem] sm:p-[2rem] text-[1.5rem] sm:text-[1.7rem] text-white bg-transparent border-none outline-none focus:ring-0 placeholder:opacity-50 group-hover:placeholder:opacity-70"
            />
          </div>
          
          <div className="flex items-center mt-[1.5rem] sm:mt-[2rem] mb-[1.5rem] sm:mb-[2rem] bg-[rgba(1,1,3,0.6)] border border-[rgba(255,255,255,.2)] rounded-lg overflow-hidden transition-all duration-300 hover:border-[#d3ad7f] hover:shadow-md group">
            <span className="text-white text-[1.6rem] sm:text-[1.8rem] md:text-[2rem] pl-[1.5rem] sm:pl-[2rem] group-hover:text-[#d3ad7f] transition-colors">
              <i className="fas fa-envelope"></i>
            </span>
            <input 
              type="email" 
              placeholder="email" 
              className="w-full p-[1.5rem] sm:p-[2rem] text-[1.5rem] sm:text-[1.7rem] text-white bg-transparent border-none outline-none"
            />
          </div>
          
          <div className="flex items-center mt-[1.5rem] sm:mt-[2rem] mb-[1.5rem] sm:mb-[2rem] bg-[rgba(1,1,3,0.6)] border border-[rgba(255,255,255,.2)] rounded-lg overflow-hidden transition-all duration-300 hover:border-[#d3ad7f] hover:shadow-md group">
            <span className="text-white text-[1.6rem] sm:text-[1.8rem] md:text-[2rem] pl-[1.5rem] sm:pl-[2rem] group-hover:text-[#d3ad7f] transition-colors">
              <i className="fas fa-phone"></i>
            </span>
            <input 
              type="number" 
              placeholder="number" 
              className="w-full p-[1.5rem] sm:p-[2rem] text-[1.5rem] sm:text-[1.7rem] text-white bg-transparent border-none outline-none"
            />
          </div>
          
          <button type="submit" className="w-full mt-[2rem] sm:mt-[3rem] py-[1rem] sm:py-[1.2rem] text-[1.5rem] sm:text-[1.7rem] text-white bg-[#d3ad7f] hover:tracking-[0.2rem] transition-all rounded-lg shadow-lg hover:shadow-xl hover:bg-[#c29c6d] uppercase font-medium">
            Send Message
            <i className="fas fa-paper-plane ml-2 sm:ml-3"></i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
