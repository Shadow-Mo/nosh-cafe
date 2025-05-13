"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { DialogTitle } from "@radix-ui/react-dialog";

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
    <header className="bg-[rgba(1,1,3,0.9)] backdrop-blur-sm flex items-center justify-between px-[5%] sm:px-[7%] py-[1rem] sm:py-[1.5rem] border-b border-[var(--border)] fixed top-0 left-0 right-0 z-50 shadow-md">
      <Link href="/" className="logo transition-transform hover:scale-105">
        <Image src="/images/logo.png" alt="Nosh Cafe" width={35} height={35} className="drop-shadow-lg" />
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
        <Sheet>
          <SheetTrigger asChild>
            <DialogTitle>
            <div className="text-white cursor-pointer text-[2rem] sm:text-[2.5rem] ml-[1rem] sm:ml-[2rem] hover:text-[var(--main-color)] md:hidden flex items-center justify-center w-[40px] h-[40px]">
              <i className="fas fa-bars" />
            </div>
            </DialogTitle>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#13131a] p-0 w-[80%] max-w-[30rem]">
            <div className="flex flex-col h-full pt-[2rem]">
              {["home", "about", "menu", "products", "review", "contact", "blogs"].map((item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  className="text-white block mx-[1.5rem] p-[0.5rem] text-[1.8rem] hover:text-[var(--main-color)] capitalize border-b border-[#ffffff1a] py-[1rem]"
                >
                  {item}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
