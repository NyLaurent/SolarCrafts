import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeroImage from "../../assets/Hero.png";

function Hero() {
  return (
    <div id="home" className="pt-32 lg:pt-36 pb-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1E59CC]/10 to-[#294680]/10 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-[#1E59CC] to-[#294680] rounded-full animate-pulse"></div>
              <span className="text-[#1E59CC] font-semibold text-sm">
                Educational Platform
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#294680] leading-tight mb-6">
              Explore and Learn
              <br />
              <span className="bg-gradient-to-r from-[#1E59CC] to-[#294680] bg-clip-text text-transparent">
                Our Solar System
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-[#696984] leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Discover the wonders of space through SolarCrafts&apos;
              comprehensive learning platform. Access rich educational content,
              interactive experiences, and cutting-edge virtual reality features
              to explore the cosmos like never before.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-[#1E59CC] to-[#294680] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl min-w-[200px]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#294680] to-[#1E59CC] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  Get Started Now
                </span>
              </button>

              <div className="flex items-center gap-4">
                <span className="text-[#696984] font-medium">or</span>
                <Link
                  href="https://github.com/NyLaurent/solar-craft-mobile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-[#1E59CC] hover:text-[#294680] font-semibold transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5 transition-transform group-hover:scale-110"
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
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
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

            {/* Stats/Features Preview */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-[#696984]/20">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-[#294680] mb-1">
                  50+
                </div>
                <div className="text-sm text-[#696984]">
                  Interactive Lessons
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-[#294680] mb-1">VR</div>
                <div className="text-sm text-[#696984]">Experience</div>
              </div>
              <div className="text-center lg:text-left col-span-2 md:col-span-1">
                <div className="text-2xl font-bold text-[#294680] mb-1">
                  24/7
                </div>
                <div className="text-sm text-[#696984]">Access</div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E59CC]/10 to-[#294680]/10 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-[#294680]/5 to-[#1E59CC]/5 rounded-3xl transform -rotate-3"></div>

              {/* Main image */}
              <div className="relative z-10">
                <Image
                  src={HeroImage}
                  alt="Solar System Learning Platform Interface"
                  className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#1E59CC] to-[#294680] rounded-full opacity-20 animate-pulse"></div>
              <div
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-[#294680] to-[#1E59CC] rounded-full opacity-10 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
