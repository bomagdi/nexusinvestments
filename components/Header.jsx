"use client";

import React, { useState, useEffect } from "react";

import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";







const Header = () => {

  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    // Remove Event
    return () => window.removeEventListener("scroll", scrollYPos);
  });


  return (
    <header
      className={` ${
        header
          ? "py-4 bg-white text-black shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-transparent'}`}
    >
      <div className="pContainer">
        <div className="flex justify-between items-center ">
          <Logo />
          <div className="flex items-center gap-x-3">
            {/* Nav */}
            <Nav
              containerStyle="hidden xl:flex gap-x-8 items-center"
              linkStyle={`${header ? "relative dark:text-white hover:text-primary transition-all" : "relative text-white hover:text-primary transition-all"}`}
              underlineStyle='absolute left-0 top-full h-[2px] bg-primary w-full'
            />
            <ThemeToggler />
            {/* Mobile Nav */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
