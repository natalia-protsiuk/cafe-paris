"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", href: "/#home", label: "Головна" },
    { id: "main", href: "/#menu", label: "Меню" },
    { id: "banquet", href: "/#menu", label: "Банкетне меню" },
    { id: "drinks", href: "/#menu", label: "Напої" },
    { id: "reviews", href: "/#reviews", label: "Відгуки" },
    { id: "gallery", href: "/#gallery", label: "Фотогалерея" },
    //{ id: "wedding", href: "/wedding", label: "Весілля" },
  ];

  return (
    <header
      className={`${isScrolled
          ? "md:bg-black md:fixed md:shadow-lg"
          : "md:bg-transparent md:absolute"
        } bg-black top-0 left-0 w-full z-20 transition-all duration-500 ease-in-out`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/logo-cafe-paris.png"
              width={93}
              height={45}
              alt="Café Paris Logo"
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <Link key={link.id} href={link.href}>
              <span className="text-sm lg:text-base text-white hover:text-gray-400 cursor-pointer">
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Right icons */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <Link
            href="https://www.facebook.com/CafeParisNikolaev"
            className="text-gray-400 hover:text-white"
          >
            <FaFacebookF />
          </Link>
          <Link
            href="https://www.instagram.com/cafe_paris_niko"
            className="text-gray-400 hover:text-white"
          >
            <FaInstagram />
          </Link>
          <Link href="#contact">
            <span className="ml-4 px-4 py-2 border-2 border-white hover:border-gray-400 text-white hover:text-gray-400 transition cursor-pointer text-sm lg:text-base">
              Забронювати
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black px-6 pb-6 pt-2 space-y-4 text-white shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base hover:text-gray-300"
            >
              {link.label}
            </Link>
          ))}

          <div className="flex items-center gap-4 mt-4">
            <Link
              href="https://www.facebook.com/CafeParisNikolaev"
              className="text-gray-400 hover:text-white text-xl"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="https://www.instagram.com/cafe_paris_niko"
              className="text-gray-400 hover:text-white text-xl"
            >
              <FaInstagram />
            </Link>
          </div>

          <Link href="#contact">
            <span className="inline-block mt-4 px-4 py-2 border-2 border-white hover:border-gray-400 text-white hover:text-gray-400 transition cursor-pointer text-sm">
              Забронювати
            </span>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
