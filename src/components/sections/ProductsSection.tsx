"use client";

import Image from "next/image";

const ProductsSection = () => {
  const products = [
    {
      item: 'Panner Makhni',
      image: '/images/shake.png'
    },
    {
      item: 'Panner Makhni',
      image: '/images/shake2.png'
    },
    {
      item: 'Panner Makhni',
      image: '/images/shake3.png'
    },
    {
      item: 'Panner Makhni',
      image: '/images/shake4.png'
    },
  ];

  return (
    <section id="products" className="py-[3rem] md:py-[5rem] px-[5%] sm:px-[7%] bg-[#0c0c10]">
      <h1 className="heading text-center text-white uppercase pb-[3rem] md:pb-[5rem] text-[3rem] sm:text-[3.5rem] md:text-[4rem] animate-fadeIn relative after:content-[''] after:absolute after:h-1 after:w-[80px] sm:after:w-[100px] after:bg-[#d3ad7f] after:bottom-[2rem] md:after:bottom-[4rem] after:left-1/2 after:-translate-x-1/2">
        our <span className="text-[#d3ad7f] uppercase">beverages</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] sm:gap-[2rem] md:gap-[3rem]">
        {products.map((item, index) => (
          <div
            key={index}
            className="text-center border border-[rgba(255,255,255,.3)] p-[1rem] sm:p-[1.5rem] md:p-[2rem] bg-[rgba(19,19,26,0.7)] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group animate-slideInUp"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="p-0">
              <div className="image py-[1.5rem] sm:py-[2rem] md:py-[2.5rem] relative transition-all duration-500 transform group-hover:scale-105">
                <div className="absolute inset-0 bg-[#d3ad7f]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 mx-auto w-[80%] h-[80%] top-[10%] left-[10%] blur-xl"></div>
                <Image
                  src={item.image}
                  alt={`Product ${item.item}`}
                  width={500}
                  height={500}
                  className="h-[235px] sm:h-[220px] md:h-[250px] object-contain mx-auto drop-shadow-2xl rounded-xl"
                />
              </div>
              <div className="content">
                <h3 className="text-white text-[1.8rem] sm:text-[2rem] md:text-[2.5rem] font-semibold">{item.item}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
