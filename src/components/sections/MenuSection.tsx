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
    <section id="menu" className="py-[5rem] px-[7%] bg-[var(--bg)]">
      <h1 className="heading text-center text-white uppercase pb-[3.5rem] text-[4rem] animate-fadeIn">
        our <span className="text-[#d3ad7f] uppercase">menu</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] px-4">
        {menuItems.map((item) => (
          <div 
            key={item} 
            className="p-[2rem] text-center border border-[rgba(255,255,255,.3)] bg-[rgba(19,19,26,0.7)] hover:bg-white group transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl animate-slideInUp"
            style={{animationDelay: `${item * 100}ms`}}
          >
            <div className="p-0">
              <Image 
                src={item.image} 
                alt={`Menu Item ${item}`} 
                width={800} 
                height={800} 
                className="h-[25rem] object-contain mx-auto rounded-xl"
              />
              <h3 className="text-white text-[2rem] py-[1rem] group-hover:text-[var(--black)] font-semibold transition-colors">
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
