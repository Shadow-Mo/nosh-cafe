"use client";

import Image from "next/image";

const ProductsSection = () => {
  const products = [1, 2, 3];

  return (
    <section id="products" className="py-[5rem] px-[7%] bg-[#0c0c10]">
      <h1 className="heading text-center text-white uppercase pb-[5rem] text-[4rem] animate-fadeIn relative after:content-[''] after:absolute after:h-1 after:w-[100px] after:bg-[#d3ad7f] after:bottom-[4rem] after:left-1/2 after:-translate-x-1/2">
        our <span className="text-[#d3ad7f] uppercase">products</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] px-4">
        {products.map((item) => (
          <div 
            key={item} 
            className="text-center border border-[rgba(255,255,255,.3)] p-[2rem] bg-[rgba(19,19,26,0.7)] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group animate-slideInUp"
            style={{animationDelay: `${item * 150}ms`}}
          >
            <div className="icons flex justify-center gap-3 mb-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
              <a href="#" className="h-[5rem] w-[5rem] leading-[5rem] text-[2rem] border border-[rgba(255,255,255,.3)] text-white mx-[0.3rem] hover:bg-[#d3ad7f] transition-all duration-300 rounded-full hover:scale-110">
                <i className="fas fa-shopping-cart"></i>
              </a>
              <a href="#" className="h-[5rem] w-[5rem] leading-[5rem] text-[2rem] border border-[rgba(255,255,255,.3)] text-white mx-[0.3rem] hover:bg-[#d3ad7f] transition-all duration-300 rounded-full hover:scale-110">
                <i className="fas fa-heart"></i>
              </a>
              <a href="#" className="h-[5rem] w-[5rem] leading-[5rem] text-[2rem] border border-[rgba(255,255,255,.3)] text-white mx-[0.3rem] hover:bg-[#d3ad7f] transition-all duration-300 rounded-full hover:scale-110">
                <i className="fas fa-eye"></i>
              </a>
            </div>
            <div className="p-0">
              <div className="image py-[2.5rem] relative transition-all duration-500 transform group-hover:scale-105">
                <div className="absolute inset-0 bg-[#d3ad7f]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 mx-auto w-[80%] h-[80%] top-[10%] left-[10%] blur-xl"></div>
                <Image 
                  src={`/images/product-${item}.png`} 
                  alt={`Product ${item}`} 
                  width={250} 
                  height={250} 
                  className="h-[25rem] object-contain mx-auto drop-shadow-2xl"
                />
              </div>
              <div className="content">
                <h3 className="text-white text-[2.5rem] font-semibold">{item === 1 ? "Nicaraguan Beans" : item === 2 ? "Colombian Blend" : "Peruvian Organic"}</h3>
                <div className="stars py-[1.5rem]">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={`fas fa-${i === 4 ? 'star-half-alt' : 'star'} text-[1.7rem] text-[#d3ad7f] transform transition-transform hover:scale-125 hover:rotate-12 inline-block mx-1`}></i>
                  ))}
                </div>
                <div className="price text-white text-[2.5rem]">
                  $15.99 <span className="line-through font-light text-[1.5rem]">$20.99</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
