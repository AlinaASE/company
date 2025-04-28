"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HeaderLink } from "@/utils";
import SmartButton from "@/components/SmartButton";
import MyDrawer from "./Drawer";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 w-full z-[999] flex justify-between items-center py-5 transition-all duration-300 px-[4%]  ${
        scrolled
          ? " bg-gradient-to-t from-[#4A4B4F] to-[#000000]"
          : "bg-transparent"
      }`}
    >
      <Link href="/" className="text-[1.5rem] flex items-center">
        <span className="text-[1.5rem] text-orange">♔</span>
        Check<span>mate</span>
      </Link>
      <div className="items-center space-x-4 hidden sm:flex">
        {HeaderLink.map((link, index) => (
          <Link
            href={link.url}
            key={link.name}
            className={`text-[18px]  ${
              index === HeaderLink.length - 1 ? "hidden" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
        <div className="hidden md:block">
          <SmartButton as="button" href="/contact" className="ml-4">
            Contact Us
          </SmartButton>
        </div>
      </div>
      <div className="block md:hidden">
        <MyDrawer />
      </div>
    </header>
  );
};

export default Header;
