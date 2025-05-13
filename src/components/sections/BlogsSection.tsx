"use client";

import Image from "next/image";

const BlogsSection = () => {
  const blogs = [1, 2, 3];

  return (
    <section id="blogs" className="py-[3rem] md:py-[5rem] px-[5%] sm:px-[7%] bg-gradient-to-b from-[#13131a] to-[#010103]">
      <h1 className="heading text-center text-white uppercase pb-[3rem] md:pb-[5rem] text-[3rem] sm:text-[3.5rem] md:text-[4rem] animate-fadeIn relative after:content-[''] after:absolute after:h-1 after:w-[80px] sm:after:w-[100px] after:bg-[#d3ad7f] after:bottom-[2rem] md:after:bottom-[4rem] after:left-1/2 after:-translate-x-1/2">
        our <span className="text-[#d3ad7f] uppercase">blogs</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] sm:gap-[2rem] md:gap-[2.5rem]">
        {blogs.map((blog) => (
          <div 
            key={blog} 
            className="border border-[rgba(255,255,255,.3)] bg-[rgba(19,19,26,0.6)] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group animate-slideInUp transform hover:-translate-y-2"
            style={{animationDelay: `${blog * 150}ms`}}
          >
            <div className="image h-[18rem] sm:h-[20rem] md:h-[25rem] overflow-hidden w-full relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10"></div>
              <Image 
                src={`/images/blog-${blog}.jpeg`} 
                alt={`Blog ${blog}`} 
                width={400} 
                height={300} 
                className="h-full object-cover w-full transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-[#d3ad7f] text-white text-xs sm:text-sm py-1 px-2 sm:px-3 rounded-full uppercase z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">Coffee Culture</span>
            </div>
            <div className="p-[1.5rem] sm:p-[2rem] md:p-[2.5rem]">
              <a href="#" className="title text-[1.8rem] sm:text-[2rem] md:text-[2.2rem] leading-[1.4] sm:leading-[1.5] text-white hover:text-[#d3ad7f] transition-colors font-semibold block">
                {blog === 1 ? "The Art of Coffee Cupping" : blog === 2 ? "Bean to Cup: Our Journey" : "Brewing Techniques Mastery"}
              </a>
              <span className="flex flex-wrap items-center text-[#d3ad7f] pt-[0.8rem] md:pt-[1rem] text-[1.3rem] sm:text-[1.4rem] md:text-[1.6rem] gap-1 sm:gap-2">
                <i className="fas fa-user-circle"></i> by admin <span className="mx-1 sm:mx-2">|</span> <i className="far fa-calendar-alt"></i> 21st May, 2025
              </span>
              <p className="text-[1.3rem] sm:text-[1.4rem] md:text-[1.6rem] leading-[1.6] sm:leading-[1.8] text-[#ccc] py-[1rem] sm:py-[1.5rem] border-b border-[rgba(255,255,255,.1)] mb-[1rem] sm:mb-[1.5rem]">
                {blog === 1 ? "Discover the sensory experience of professional coffee tasting and how it enhances your appreciation." : 
                 blog === 2 ? "Follow our sustainable sourcing story from family farms to your morning cup." : 
                 "Learn expert techniques from our master baristas to create perfect coffee at home."}
              </p>
              <button className="inline-flex items-center py-[0.7rem] sm:py-[0.9rem] px-[1.5rem] sm:px-[2.5rem] text-[1.4rem] sm:text-[1.6rem] text-white bg-[#d3ad7f] hover:tracking-[0.1rem] transition-all rounded-lg shadow hover:shadow-lg hover:bg-[#c29c6d]">
                Read More
                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogsSection;
