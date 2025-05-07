"use client";
import Image from 'next/image';

const Footer = () => {
  return (
    <section className="footer bg-[#13131a] text-center pt-[4rem] pb-[2rem]">
      <div className="container mx-auto max-w-7xl px-4 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left mb-10">
          <div className="animate-fadeIn">
            <Image src="/images/logo.png" alt="Nosh Cafe" width={150} height={150} className="mb-4" />
            <p className="text-[1.6rem] text-gray-400 mb-4">Experience premium coffee in a cozy atmosphere with expert baristas and specialty brews.</p>
            <div className="flex space-x-4">
              <a href="#" className="h-[4rem] w-[4rem] flex items-center justify-center text-[1.6rem] text-white bg-[#1e1e26] hover:bg-[#d3ad7f] transition-all duration-300 rounded-md">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="h-[4rem] w-[4rem] flex items-center justify-center text-[1.6rem] text-white bg-[#1e1e26] hover:bg-[#d3ad7f] transition-all duration-300 rounded-md">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="h-[4rem] w-[4rem] flex items-center justify-center text-[1.6rem] text-white bg-[#1e1e26] hover:bg-[#d3ad7f] transition-all duration-300 rounded-md">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div className="animate-fadeIn" style={{animationDelay: "100ms"}}>
            <h3 className="text-[2rem] text-white font-bold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/4 after:h-[2px] after:bg-[#d3ad7f]">Quick Links</h3>
            <ul className="space-y-3">
              {["home", "about", "menu", "products", "review", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} className="text-[1.6rem] text-gray-400 hover:text-[#d3ad7f] transition-colors flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-[1.2rem] text-[#d3ad7f]"></i> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="animate-fadeIn" style={{animationDelay: "200ms"}}>
            <h3 className="text-[2rem] text-white font-bold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/4 after:h-[2px] after:bg-[#d3ad7f]">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="text-[1.6rem] text-gray-400 flex justify-between">
                <span>Monday - Friday:</span> <span className="text-[#d3ad7f]">8:00am - 9:00pm</span>
              </li>
              <li className="text-[1.6rem] text-gray-400 flex justify-between">
                <span>Saturday:</span> <span className="text-[#d3ad7f]">8:00am - 10:30pm</span>
              </li>
              <li className="text-[1.6rem] text-gray-400 flex justify-between">
                <span>Sunday:</span> <span className="text-[#d3ad7f]">9:00am - 8:00pm</span>
              </li>
            </ul>
          </div>
          
          <div className="animate-fadeIn" style={{animationDelay: "300ms"}}>
            <h3 className="text-[2rem] text-white font-bold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/4 after:h-[2px] after:bg-[#d3ad7f]">Contact Us</h3>
            <ul className="space-y-4">
              <li className="text-[1.6rem] text-gray-400 flex items-start">
                <i className="fas fa-map-marker-alt text-[#d3ad7f] mt-1 mr-3"></i>
                <span>123 Coffee Street, Mumbai, Maharashtra 400047, India</span>
              </li>
              <li className="text-[1.6rem] text-gray-400 flex items-center">
                <i className="fas fa-phone text-[#d3ad7f] mr-3"></i>
                <span>+91 1234567890</span>
              </li>
              <li className="text-[1.6rem] text-gray-400 flex items-center">
                <i className="fas fa-envelope text-[#d3ad7f] mr-3"></i>
                <span>info@noshcafe.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(255,255,255,.1)] pt-6">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[1.5rem] text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} <span className="text-[#d3ad7f]">Nosh Cafe</span>. All Rights Reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[1.5rem] text-gray-400 hover:text-[#d3ad7f] transition-colors">Privacy Policy</a>
              <span className="text-[1.5rem] text-gray-500">|</span>
              <a href="#" className="text-[1.5rem] text-gray-400 hover:text-[#d3ad7f] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Footer;
