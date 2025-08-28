"use client";
import React, { useState, useEffect } from "react";
import Ellipse from "../../assets/Ellipse.png";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-[#696984]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-[#1E59CC] to-[#294680] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold">
                  <span className="text-[#1E59CC]">Solar</span>
                  <span className="text-[#294680]">Crafts</span>
                </h1>
              </div>
            </Link>
          </div>

          {/* Decorative Element */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block pointer-events-none">
            <Image src={Ellipse} alt="" className="w-64 opacity-30" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-[#696984] hover:text-[#1E59CC] font-medium transition-all duration-300 group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1E59CC] to-[#294680] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="px-6 py-2 border-2 border-[#1E59CC] text-[#1E59CC] font-semibold rounded-full hover:bg-[#1E59CC] hover:text-white transition-all duration-300 transform hover:-translate-y-0.5">
              Sign Up
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-[#1E59CC] to-[#294680] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
              Login
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-[#1E59CC] hover:bg-[#1E59CC]/10 transition-colors duration-300"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-xl border-b border-[#696984]/10">
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Navigation Links */}
              <div className="space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-[#696984] hover:text-[#1E59CC] font-medium transition-colors duration-300 py-2"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA Buttons */}
              <div className="space-y-4 pt-6 border-t border-[#696984]/20">
                <button className="w-full px-6 py-3 border-2 border-[#1E59CC] text-[#1E59CC] font-semibold rounded-full hover:bg-[#1E59CC] hover:text-white transition-all duration-300">
                  Sign Up
                </button>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-[#1E59CC] to-[#294680] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300">
                  Login
                </button>
              </div>

              {/* Mobile App Link */}
              <div className="pt-4">
                <Link
                  href="https://github.com/NyLaurent/solar-craft-mobile"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 text-[#1E59CC] hover:text-[#294680] font-medium transition-colors duration-300"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Download Mobile App
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
