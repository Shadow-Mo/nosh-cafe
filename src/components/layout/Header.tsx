"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsCartOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    setIsSearchOpen(false);
  };

  return (
    <header className="bg-[rgba(1,1,3,0.9)] backdrop-blur-sm flex items-center justify-between px-[7%] py-[1.5rem] border-b border-[var(--border)] fixed top-0 left-0 right-0 z-50 shadow-md">
      <Link href="/" className="logo transition-transform hover:scale-105">
        <Image src="/images/logo.png" alt="Nosh Cafe" width={60} height={60} className="drop-shadow-lg" />
      </Link>

      <nav className="hidden md:flex">
        {["home", "about", "menu", "products", "review", "contact", "blogs"].map((item) => (
          <Link
            key={item}
            href={`#${item}`}
            className="mx-[1rem] text-[1.6rem] text-white hover:text-[var(--main-color)] hover:border-b hover:border-[var(--main-color)] hover:pb-[0.5rem]"
          >
            <span className="relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-[#d3ad7f] after:transition-all hover:after:w-full">{item}</span>
          </Link>
        ))}
      </nav>

      <div className="flex items-center">
        <div 
          className="text-white cursor-pointer text-[2.5rem] ml-[2rem] hover:text-[#d3ad7f] transition-all transform hover:rotate-12" 
          onClick={toggleSearch}
        >
          <i className="fas fa-search" />
        </div>
        <div 
          className="text-white cursor-pointer text-[2.5rem] ml-[2rem] hover:text-[#d3ad7f] transition-all transform hover:scale-110 relative"
          onClick={toggleCart}
        >
          <i className="fas fa-shopping-cart" />
          <span className="absolute -top-2 -right-2 bg-[#d3ad7f] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">4</span>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <div className="text-white cursor-pointer text-[2.5rem] ml-[2rem] hover:text-[var(--main-color)] md:hidden">
              <i className="fas fa-bars" />
            </div>
          </SheetTrigger>
          <SheetContent side="right" className="bg-white p-0 w-[30rem]">
            <div className="flex flex-col h-full">
              {["home", "about", "menu", "products", "review", "contact", "blogs"].map((item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  className="text-[var(--black)] block m-[1.5rem] p-[0.5rem] text-[2rem] hover:text-[var(--main-color)]"
                >
                  {item}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Search Form */}
      <div className={`absolute top-[115%] right-[7%] bg-white w-[50rem] h-[5rem] flex items-center transform origin-top ${isSearchOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'} transition-all duration-300 rounded-md shadow-lg`}>
        <input
          type="search"
          placeholder="search here..."
          className="h-full w-full text-[1.6rem] text-[var(--black)] p-[1rem] lowercase"
        />
        <label className="cursor-pointer text-[2.2rem] mr-[1.5rem] text-[var(--black)] hover:text-[var(--main-color)]">
          <i className="fas fa-search" />
        </label>
      </div>

      {/* Cart Items Container */}
      <div className={`absolute top-[100%] ${isCartOpen ? 'right-0' : 'right-[-100%]'} h-[calc(100vh-9.5rem)] w-[35rem] bg-white p-0 px-[1.5rem] transition-all duration-300 shadow-lg overflow-y-auto`}>
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="relative my-[2rem] flex items-center gap-[1.5rem]">
            <span className="absolute top-[1rem] right-[1rem] text-[2rem] cursor-pointer text-[var(--black)] hover:text-[var(--main-color)]">
              <i className="fas fa-times" />
            </span>
            <Image src={`/images/cart-item-${item}.png`} alt={`Cart Item ${item}`} width={70} height={70} />
            <div className="content">
              <h3 className="text-[2rem] text-[var(--black)] pb-[0.5rem]">cart item 0{item}</h3>
              <div className="text-[1.5rem] text-[var(--main-color)]">$15.99/-</div>
            </div>
          </div>
        ))}
        <Button className="w-full text-center mt-4 bg-[var(--main-color)] hover:opacity-90 text-[1.7rem] py-[0.9rem] hover:tracking-[0.2rem]">
          checkout now
        </Button>
      </div>
    </header>
  );
};

export default Header;
