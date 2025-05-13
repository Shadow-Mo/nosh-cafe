"use client";

import Image from "next/image";

const MenuSection = () => {
  const menuItems = [
    {
      item: 'Panner Makhni',
      image: '/images/nosh2.webp'
    },
    {
      item: 'Panner Makhni',
      image: '/images/nosh3.webp'
    },
    {
      item: 'Panner Makhni',
      image: '/images/nosh4.webp'
    },
    {
      item: 'Panner Makhni',
      image: '/images/sandwich.jpg'
    },
    {
      item: 'Panner Makhni',
      image: '/images/burger.jpg'
    },
    {
      item: 'Panner Makhni',
      image: '/images/rice.png'
    },
    {
      item: 'Panner Makhni',
      image: '/images/nosh6.jpg'
    },
    {
      item: 'Panner Makhni',
      image: '/images/nosh7.jpg'
    },
    {
      item: 'Panner Makhni',
      image: '/images/nosh8.jpg'
    },
  ];

  return (
    <section id="menu" className="py-[3rem] md:py-[5rem] px-[5%] sm:px-[7%] bg-[var(--bg)]">
      <h1 className="heading text-center text-white uppercase pb-[2rem] md:pb-[3.5rem] text-[3rem] sm:text-[3.5rem] md:text-[4rem] animate-fadeIn">
        our <span className="text-[#d3ad7f] uppercase">menu</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] sm:gap-[2rem]">
        {menuItems.map((item, index) => (
          <div 
            key={index} 
            className="p-[1rem] sm:p-[1.5rem] md:p-[2rem] text-center border border-[rgba(255,255,255,.3)] bg-[rgba(19,19,26,0.7)] hover:bg-white group transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl animate-slideInUp"
            style={{animationDelay: `${index * 100}ms`}}
          >
            <div className="p-0">
              <Image 
                src={item.image} 
                alt={`Menu Item ${item.item}`} 
                width={800} 
                height={800} 
                className="h-[24rem] sm:h-[20rem] md:h-[25rem] object-contain mx-auto rounded-xl"
              />
              <h3 className="text-white text-[1.6rem] sm:text-[1.8rem] md:text-[2rem] py-[0.8rem] md:py-[1rem] group-hover:text-[var(--black)] font-semibold transition-colors">
                {item.item}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
