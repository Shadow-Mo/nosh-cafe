"use client";
import Image from 'next/image';

const Footer = () => {
  return (
    <section className="footer bg-[#13131a] justify-between items-center pt-[3rem] md:pt-[4rem] pb-[1.5rem] md:pb-[2rem]">
      <div className="container mx-auto max-w-9xl px-4 mb-6 md:mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-left mb-6 md:mb-10">
          <div className="animate-fadeIn">
            <Image src="/images/logo.png" alt="Nosh Cafe" width={120} height={120} className="mb-3 md:mb-4 w-[100px] sm:w-[120px] md:w-[150px] h-auto" />
            <p className="text-[1.4rem] sm:text-[1.5rem] md:text-[1.6rem] text-gray-400 mb-3 md:mb-4">Experience premium coffee in a cozy atmosphere with expert baristas and specialty brews.</p>
            <div className="flex space-x-3 md:space-x-4">
              <a href="#" className="h-[3.5rem] w-[3.5rem] md:h-[4rem] md:w-[4rem] flex items-center justify-center text-[1.4rem] md:text-[1.6rem] text-white bg-[#1e1e26] hover:bg-[#d3ad7f] transition-all duration-300 rounded-md">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="h-[3.5rem] w-[3.5rem] md:h-[4rem] md:w-[4rem] flex items-center justify-center text-[1.4rem] md:text-[1.6rem] text-white bg-[#1e1e26] hover:bg-[#d3ad7f] transition-all duration-300 rounded-md">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="h-[3.5rem] w-[3.5rem] md:h-[4rem] md:w-[4rem] flex items-center justify-center text-[1.4rem] md:text-[1.6rem] text-white bg-[#1e1e26] hover:bg-[#d3ad7f] transition-all duration-300 rounded-md">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div className="animate-fadeIn" style={{animationDelay: "100ms"}}>
            <h3 className="text-[1.8rem] sm:text-[1.9rem] md:text-[2rem] text-white font-bold mb-4 md:mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/4 after:h-[2px] after:bg-[#d3ad7f]">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3">
              {["home", "about", "menu", "products", "review", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} className="text-[1.4rem] sm:text-[1.5rem] md:text-[1.6rem] text-gray-400 hover:text-[#d3ad7f] transition-colors flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] text-[#d3ad7f]"></i> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="animate-fadeIn" style={{animationDelay: "200ms"}}>
            <h3 className="text-[1.8rem] sm:text-[1.9rem] md:text-[2rem] text-white font-bold mb-4 md:mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/4 after:h-[2px] after:bg-[#d3ad7f]">Opening Hours</h3>
            <ul className="space-y-1 md:space-y-2">
              <li className="text-[1.4rem] sm:text-[1.5rem] md:text-[1.6rem] text-gray-400 flex flex-col">
                <span>Monday, 9:30 am–11:30 pm</span>
                <span>Tuesday, 9:30 am–11:30 pm</span>
                <span>Wednesday, 9:30 am–11:30 pm</span>
                <span>Thursday, 9:30 am–11:30 pm</span>
                <span>Friday, 9:30 am–11:30 pm</span>
                <span>Saturday, 9:30 am–11:30 pm</span>
                <span>Sunday, 9:30 am–11:30 pm</span>
              </li>
            </ul>
          </div>
          
          <div className="animate-fadeIn" style={{animationDelay: "300ms"}}>
            <h3 className="text-[1.8rem] sm:text-[1.9rem] md:text-[2rem] text-white font-bold mb-4 md:mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/4 after:h-[2px] after:bg-[#d3ad7f]">Contact Us</h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="text-[1.4rem] sm:text-[1.5rem] md:text-[1.6rem] text-gray-400 flex items-start">
                <i className="fas fa-map-marker-alt text-[#d3ad7f] mt-1 mr-2 md:mr-3"></i>
                <span>Hotel, Shop 127/2 Chaitraban Residency, Opp Gold's Gym, Sarjaa, Road, Aundh, Pune, Maharashtra 411067</span>
              </li>
              <li className="text-[1.4rem] sm:text-[1.5rem] md:text-[1.6rem] text-gray-400 flex items-center">
                <i className="fas fa-phone text-[#d3ad7f] mr-2 md:mr-3"></i>
                <span>+91 9623863495</span>
              </li>
              <li className="text-[1.4rem] sm:text-[1.5rem] md:text-[1.6rem] text-gray-400 flex items-center">
                <i className="fas fa-envelope text-[#d3ad7f] mr-2 md:mr-3"></i>
                <span>info@noshcafe.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(255,255,255,.1)] pt-4 md:pt-6">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[1.3rem] sm:text-[1.4rem] md:text-[1.5rem] text-gray-400 mb-3 md:mb-0 text-center md:text-left">
              © {new Date().getFullYear()} <span className="text-[#d3ad7f]">Nosh Cafe</span>. All Rights Reserved.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              <a href="#" className="text-[1.3rem] sm:text-[1.4rem] md:text-[1.5rem] text-gray-400 hover:text-[#d3ad7f] transition-colors">Privacy Policy</a>
              <span className="text-[1.3rem] sm:text-[1.4rem] md:text-[1.5rem] text-gray-500">|</span>
              <a href="#" className="text-[1.3rem] sm:text-[1.4rem] md:text-[1.5rem] text-gray-400 hover:text-[#d3ad7f] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
