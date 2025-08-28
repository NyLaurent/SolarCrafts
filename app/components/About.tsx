import React from "react";
import Image from "next/image";
import Meteor from "../../assets/Meteor.png";
import SolarP from "../../assets/solarP.png";

function About() {
  return (
    <section
      id="about"
      className="py-16 lg:py-24 px-6 lg:px-12 bg-gradient-to-br from-[#1E59CC]/5 via-transparent to-[#294680]/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Images Section */}
          <div className="lg:w-1/2 relative">
            <div className="flex flex-col sm:flex-row gap-8 lg:gap-12 items-center justify-center">
              {/* Meteor Image */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E59CC]/20 to-[#294680]/20 rounded-3xl transform rotate-6 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src={Meteor}
                    alt="Meteor visualization"
                    className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-2xl shadow-lg"
                  />
                </div>
                {/* Floating decoration */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#1E59CC] to-[#294680] rounded-full opacity-20 animate-pulse"></div>
              </div>

              {/* Solar System Image */}
              <div className="relative mt-8 sm:mt-16 lg:mt-24 group">
                <div className="absolute inset-0 bg-gradient-to-tl from-[#294680]/20 to-[#1E59CC]/20 rounded-3xl transform -rotate-6 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src={SolarP}
                    alt="Solar system interface preview"
                    className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-2xl shadow-xl"
                  />
                </div>
                {/* Floating decoration */}
                <div
                  className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-tr from-[#294680] to-[#1E59CC] rounded-full opacity-15 animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1E59CC]/10 to-[#294680]/10 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-[#1E59CC] to-[#294680] rounded-full animate-pulse"></div>
              <span className="text-[#1E59CC] font-semibold text-sm">
                Virtual Reality Experience
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#294680] leading-tight mb-6">
              Discover the
              <span className="bg-gradient-to-r from-[#1E59CC] to-[#294680] bg-clip-text text-transparent">
                {" "}
                Solar System{" "}
              </span>
              Like Never Before
            </h2>

            {/* Description */}
            <p className="text-lg text-[#696984] leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Experience the cosmos through our revolutionary virtual reality
              feature. Explore planets, stars, and celestial bodies as if
              you&apos;re floating through space. Our immersive technology makes
              complex astronomical concepts accessible and engaging for learners
              of all ages.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[#1E59CC] to-[#294680] rounded-lg flex items-center justify-center">
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
                <span className="text-[#294680] font-medium">
                  Immersive VR Experience
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[#1E59CC] to-[#294680] rounded-lg flex items-center justify-center">
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
                  Real-time Exploration
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[#1E59CC] to-[#294680] rounded-lg flex items-center justify-center">
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <span className="text-[#294680] font-medium">
                  Educational Content
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[#1E59CC] to-[#294680] rounded-lg flex items-center justify-center">
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
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <span className="text-[#294680] font-medium">
                  Interactive Learning
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
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
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Try VR Experience
                </span>
              </button>
              <span className="text-[#696984] text-sm">
                Free • No signup required
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
