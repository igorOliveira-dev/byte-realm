"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY < lastScrollY - 10) {
      setIsVisible(true);
    }
    if (currentScrollY > lastScrollY + 10) {
      setIsVisible(false);
    }
    lastScrollY = currentScrollY;
    setIsMenuOpen(false);
  };

  const handleClickOutside = (event: any) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      hamburgerRef.current &&
      !hamburgerRef.current.contains(event.target)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header
        className={`w-full blured-background p-2 px-4 flex justify-between fixed top-0 left-0 right-0 transition-transform duration-300 header ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Link href="/">
          <Image src="/logo.webp" height={80} width={78} alt="Logo" priority />
        </Link>
        <div className="flex items-center">
          <Link href="/pesquisa" className="p-4 mr-6 hover-bg rounded-xl">
            <FontAwesomeIcon icon={faSearch} className="mr-2 h-4" />
            Pesquisa
          </Link>
          <button ref={hamburgerRef} onClick={toggleMenu} className="relative h-20 w-8">
            <span
              className={`block w-full h-1 bg-secondary mb-1 transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-full h-1 bg-secondary mb-1 transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-full h-1 bg-secondary transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </header>
      <div ref={menuRef} className={`menu blured-background ${isMenuOpen ? "menu" : "menu-off"} flex flex-col`}>
        <a href="/" className="p-4 hover-bg rounded-xl border-b custom-border-color menu-link m-2">
          Home
        </a>
        <a href="/pesquisa" className="p-4 hover-bg rounded-xl border-b custom-border-color menu-link m-2">
          Pesquisa
        </a>
        <a href="/newsletter" className="p-4 hover-bg rounded-xl border-b custom-border-color menu-link m-2">
          Newsletter
        </a>
        <a href="/contato" className="p-4 hover-bg rounded-xl border-b custom-border-color menu-link m-2">
          Contato
        </a>
        <a href="/politica-privacidade" className="p-4 hover-bg rounded-xl border-b custom-border-color menu-link m-2">
          Política de privacidade
        </a>
      </div>
    </>
  );
}
