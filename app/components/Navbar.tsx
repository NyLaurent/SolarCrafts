'use client'
import React, { useState } from 'react';
import Ellipse from '../assets/Ellipse.png';
import Image from 'next/image';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative px-3 ${isOpen ? 'pb-1' : ''} md:pb-0`}>
      <div className="flex flex-row justify-between px-11">
        <div className="pt-2">
          <p className="text-3xl font-semibold z-50">
            <span className="text-[#1E59CC]">Solar</span> Crafts
          </p>
        </div>

        <div className="absolute left-44 hidden md:block">
          <Image src={Ellipse} alt="" className="w-80" />
        </div>

        <div className="hidden md:flex flex-row gap-12 pt-4">
          <ul className="cursor-pointer flex flex-row gap-12">
            <li className="hover:text-[#1E59CC]">Home</li>
            <li className="hover:text-[#1E59CC]">Features</li>
            <li className="hover:text-[#1E59CC]">Testimonials</li>
          </ul>
        </div>

        <div className="hidden md:flex flex-row gap-9 pt-2">
          <button className="w-[120px] h-[40px] border-2 border-[#1E59CC] rounded-[30px]">
            Sign Up
          </button>
          <button className="w-[120px] h-[42px] bg-gradient rounded-[30px]">
            Login
          </button>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden pt-4">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <svg
                className="h-6 w-6 text-[#1E59CC]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-[#1E59CC]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <div className="md:hidden w-full bg-blue-500 shadow-lg z-50">
          <ul className="cursor-pointer flex flex-col items-center gap-6 py-4">
            <li className="hover:text-[#1E59CC]">Home</li>
            <li className="hover:text-[#1E59CC]">Features</li>
            <li className="hover:text-[#1E59CC]">Pricing</li>
            <button className="w-[120px] h-[40px] border-2 border-[#1E59CC] rounded-[30px]">
              Sign Up
            </button>
            <button className="w-[120px] h-[42px] bg-gradient rounded-[30px]">
              Login
            </button>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;


