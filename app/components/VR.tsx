import React from "react";
import Image from "next/image";
import Link from "next/link";
import Virtual from "../../assets/VR.png";

function VR() {
  return (
    <section
      id="vr"
      className="py-16 lg:py-24 px-6 lg:px-12 bg-gradient-to-tr from-[#294680]/5 via-transparent to-[#1E59CC]/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Content Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#294680]/10 to-[#1E59CC]/10 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-[#294680] to-[#1E59CC] rounded-full animate-pulse"></div>
              <span className="text-[#294680] font-semibold text-sm uppercase tracking-wide">
                VR Technology
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#294680] leading-tight mb-6">
              Experience the
              <span className="bg-gradient-to-r from-[#294680] to-[#1E59CC] bg-clip-text text-transparent">
                {" "}
                Planets{" "}
              </span>
              in Virtual Reality
            </h2>

            {/* Description */}
            <p className="text-lg text-[#696984] leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Step into the cosmos with our cutting-edge virtual reality
              technology. Experience breathtaking planetary landscapes, walk on
              alien surfaces, and witness cosmic phenomena up close. Our VR
              feature transforms learning into an unforgettable adventure
              that&apos;s accessible to everyone.
            </p>

            {/* Key VR Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[#294680] to-[#1E59CC] rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <span className="text-[#294680] font-medium">
                  360° Exploration
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[#294680] to-[#1E59CC] rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <span className="text-[#294680] font-medium">
                  Safe & Accessible
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[#294680] to-[#1E59CC] rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
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
                </div>
                <span className="text-[#294680] font-medium">
                  High Performance
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[#294680] to-[#1E59CC] rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-[#294680] font-medium">Mobile Ready</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8 p-6 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#294680] mb-1">8+</div>
                <div className="text-xs text-[#696984]">Planets</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#294680] mb-1">
                  20+
                </div>
                <div className="text-xs text-[#696984]">Environments</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#294680] mb-1">4K</div>
                <div className="text-xs text-[#696984]">Quality</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-[#294680] to-[#1E59CC] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl min-w-[200px]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1E59CC] to-[#294680] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Launch VR Experience
                </span>
              </button>
              <Link
                href="https://github.com/NyLaurent/solar-craft-mobile"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-[#294680] hover:text-[#1E59CC] font-semibold transition-all duration-300"
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
                Download VR App
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

          {/* VR Image Section */}
          <div className="lg:w-1/2 relative">
            <div className="relative group">
              {/* Background decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#294680]/20 to-[#1E59CC]/20 rounded-3xl transform rotate-2 opacity-60 group-hover:rotate-3 transition-transform duration-500"></div>
              <div className="absolute -inset-2 bg-gradient-to-tl from-[#1E59CC]/30 to-[#294680]/30 rounded-3xl transform -rotate-1 opacity-40 group-hover:-rotate-2 transition-transform duration-500"></div>

              {/* Main VR image */}
              <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-500">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-2xl">
                  <Image
                    src={Virtual}
                    alt="Virtual Reality space exploration interface showing planets and cosmic environments"
                    className="w-full max-w-lg mx-auto rounded-xl shadow-lg"
                  />
                </div>
              </div>

              {/* Floating VR elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-[#294680] to-[#1E59CC] rounded-full opacity-30 animate-pulse flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <div
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-tr from-[#1E59CC] to-[#294680] rounded-full opacity-20 animate-pulse"
                style={{ animationDelay: "1.5s" }}
              ></div>

              {/* Floating tech indicators */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                <span className="text-xs font-semibold text-[#294680]">
                  VR Ready
                </span>
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                <span className="text-xs font-semibold text-[#1E59CC]">
                  4K Quality
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VR;
