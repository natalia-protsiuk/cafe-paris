"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

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
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center space-x-2">
          <Link href="/">
            Café Paris
            {/* <img
              src="/images/Café Paris-logo.png"
              alt="Café Paris Logo"
              className="h-8"
            /> */}
          </Link>
          <span className="italic text-sm text-white">fine dining</span>
        </div>

        <nav className="hidden md:flex space-x-8">
          <Link href="/">
            <span className="hover:text-gray-400 cursor-pointer text-white">
              Home
            </span>
          </Link>
          <Link href="/menu">
            <span className="hover:text-gray-400 cursor-pointer text-white">
              Menu
            </span>
          </Link>
          <Link href="/pages">
            <span className="hover:text-gray-400 cursor-pointer text-white">
              Pages
            </span>
          </Link>
          <Link href="/reservation">
            <span className="hover:text-gray-400 cursor-pointer text-white">
              Reservation
            </span>
          </Link>
          <Link href="/blog">
            <span className="hover:text-gray-400 cursor-pointer text-white">
              Blog
            </span>
          </Link>
          <Link href="/team">
            <span className="hover:text-gray-400 cursor-pointer text-white">
              Team
            </span>
          </Link>
          <Link href="/gallery">
            <span className="hover:text-gray-400 cursor-pointer text-white">
              Gallery
            </span>
          </Link>
          <Link href="/contact">
            <span className="hover:text-gray-400 cursor-pointer text-white">
              Contact
            </span>
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="#">
            <span className="hover:text-gray-400 cursor-pointer text-white">
              <i className="fab fa-facebook-f"></i>
            </span>
          </Link>
          <Link href="#">
            <span className="hover:text-gray-400 cursor-pointer text-white">
              <i className="fab fa-twitter"></i>
            </span>
          </Link>
          <Link href="#">
            <span className="hover:text-gray-400 cursor-pointer text-white">
              <i className="fab fa-tripadvisor"></i>
            </span>
          </Link>
          <Link href="#">
            <span className="hover:text-gray-400 cursor-pointer text-white">
              <i className="fab fa-instagram"></i>
            </span>
          </Link>

          <Link href="/reservation">
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
