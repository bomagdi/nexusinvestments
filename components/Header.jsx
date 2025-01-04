"use client";

import React, { useState, useEffect } from "react";

import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header>
      <div className="pContainer">
        <div className="flex justify-between items-center ">
          <Logo />
          <div className="flex items-center gap-x-6">
            {/* Nav */}
            <Nav
              containerStyle="hidden xl:flex gap-x-8 items-center"
              linkStyle="relative hover:text-primary transition-all"
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
