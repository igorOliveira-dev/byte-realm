"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    // Show header if user scrolls up by more than 10px
    if (currentScrollY < lastScrollY - 10) {
      setIsVisible(true);
    }
    // Hide header if user scrolls down by more than 10px
    if (currentScrollY > lastScrollY + 10) {
      setIsVisible(false);
    }
    lastScrollY = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full blured-background p-2 px-4 flex justify-between fixed top-0 left-0 right-0 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <Image src="/logo.webp" height={80} width={78} alt="Logo" />
      <button onClick={toggleMenu} className="relative h-20 w-8">
        <span
          className={`block w-full h-1 bg-secondary mb-1 transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
        ></span>
        <span className={`block w-full h-1 bg-secondary mb-1 transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
        <span
          className={`block w-full h-1 bg-secondary transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
        ></span>
      </button>
    </header>
  );
}
