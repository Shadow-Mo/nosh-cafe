"use client";

import Image from "next/image";

const MenuSection = () => {
  const menuItems = [1, 2, 3, 4, 5, 6];

  return (
    <section id="menu" className="py-[5rem] px-[7%] bg-[var(--bg)]">
      <h1 className="heading text-center text-white uppercase pb-[3.5rem] text-[4rem] animate-fadeIn">
        our <span className="text-[#d3ad7f] uppercase">menu</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] px-4">
        {menuItems.map((item) => (
          <div 
            key={item} 
            className="p-[5rem] text-center border border-[rgba(255,255,255,.3)] bg-[rgba(19,19,26,0.7)] hover:bg-white group transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl animate-slideInUp"
            style={{animationDelay: `${item * 100}ms`}}
          >
            <div className="p-0">
              <Image 
                src={`/images/menu-${item}.png`} 
                alt={`Menu Item ${item}`} 
                width={100} 
                height={100} 
                className="h-[10rem] object-contain mx-auto"
              />
              <h3 className="text-white text-[2rem] py-[1rem] group-hover:text-[var(--black)] font-semibold transition-colors">
                {item === 1 ? "Espresso" : item === 2 ? "Cappuccino" : item === 3 ? "Latte Art" : item === 4 ? "Macchiato" : item === 5 ? "Mocha" : "Cold Brew"}
              </h3>
              <div className="text-white text-[2.5rem] py-[0.5rem] group-hover:text-[var(--black)] transition-colors">
                $15.99 <span className="text-[1.5rem] line-through font-light">$20.99</span>
              </div>
              <button className="mt-[1rem] inline-block py-[0.9rem] px-[3rem] text-[1.6rem] text-white bg-[#d3ad7f] hover:tracking-[0.2rem] transition-all rounded-md shadow hover:shadow-lg hover:bg-[#c29c6d] uppercase">
                add to cart
                <i className="fas fa-shopping-cart ml-2"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
