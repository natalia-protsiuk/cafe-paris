"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isScrolled ? "bg-black fixed shadow-lg" : "bg-transparent absolute"
      } top-0 left-0 w-full z-20 transition-all duration-500 ease-in-out`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 sm:px-6">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src="/images/logo-cafe-paris.png"
              width={93}
              height={45}
              alt="Café Paris Logo"
            />
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8">
          <Link href="#home">
            <span className="hover:text-gray-400 cursor-pointer text-white">
              Home
            </span>
          </Link>
          <Link href="#menu">
            <span className="hover:text-gray-400 cursor-pointer text-white">
              Головне меню
            </span>
          </Link>
          <Link href="#menu">
            <span className="hover:text-gray-400 cursor-pointer text-white">
              Банкетне меню
            </span>
          </Link>
          <Link href="#menu">
            <span className="hover:text-gray-400 cursor-pointer text-white">
              Напої
            </span>
          </Link>
          <Link href="#gallery">
            <span className="hover:text-gray-400 cursor-pointer text-white">
              Gallery
            </span>
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
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
            <span className="ml-4 px-4 py-2 border-2 border-white hover:border-gray-400 text-white hover:text-gray-400 transition cursor-pointer">
              Book a Table
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
