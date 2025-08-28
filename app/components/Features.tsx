import React from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "../../assets/Icon.png";
import feature from "../../assets/feature.png";
import solarP from "../../assets/solarP.png";

function Features() {
  return (
    <div id="features" className="pt-16 pb-16">
      {/* Header Section */}
      <div className="px-6 lg:px-11 pb-16 text-center">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#294680] mb-4">
          Our Features
        </h1>
        <p className="text-[#696984] text-base lg:text-lg max-w-3xl mx-auto">
          Discover the best online solar system learning platform with diverse
          educational resources and cutting-edge mobile technology
        </p>
      </div>

      {/* Web Platform Features */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 px-6 lg:px-12 mb-20">
        <div className="lg:w-1/2">
          <Image
            src={feature}
            alt="Solar System Learning Platform"
            className="w-full lg:w-[1000px] rounded-lg shadow-lg"
          ></Image>
        </div>

        <div className="lg:w-1/2">
          <div className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#294680] mb-4">
              Advanced Solar System Courses
            </h2>
            <p className="text-[#696984] text-base mb-6">
              Comprehensive learning experience designed for students of all
              levels
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex flex-row items-start gap-4">
              <Image src={Icon} alt="Feature icon" className="mt-2"></Image>
              <div>
                <h3 className="font-semibold text-[#294680] mb-2">
                  Interactive Learning Resources
                </h3>
                <p className="text-[#696984] text-sm">
                  Access diverse information about the solar system through
                  engaging, interactive content and comprehensive learning
                  materials.
                </p>
              </div>
            </div>

            <div className="flex flex-row items-start gap-4">
              <Image src={Icon} alt="Feature icon" className="mt-2"></Image>
              <div>
                <h3 className="font-semibold text-[#294680] mb-2">
                  Comprehensive Course Library
                </h3>
                <p className="text-[#696984] text-sm">
                  Explore detailed courses covering planets, stars, and space
                  phenomena with expert-curated educational content.
                </p>
              </div>
            </div>

            <div className="flex flex-row items-start gap-4">
              <Image src={Icon} alt="Feature icon" className="mt-2"></Image>
              <div>
                <h3 className="font-semibold text-[#294680] mb-2">
                  Virtual Reality Integration
                </h3>
                <p className="text-[#696984] text-sm">
                  Experience space like never before with our immersive VR
                  feature that lets you explore the cosmos firsthand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile App Section */}
      <div className="bg-gradient-to-br from-[#1E59CC]/5 to-[#294680]/5 py-16">
        <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-24 px-6 lg:px-12 items-center">
          <div className="lg:w-1/2">
            <Image
              src={solarP}
              alt="SolarCrafts Mobile App"
              className="w-full max-w-md mx-auto lg:max-w-lg rounded-2xl shadow-2xl"
            ></Image>
          </div>

          <div className="lg:w-1/2">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-[#1E59CC] to-[#294680] rounded-full"></div>
                <span className="text-[#1E59CC] font-semibold text-sm uppercase tracking-wide">
                  Mobile App
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#294680] mb-6">
                SolarCrafts Mobile App
              </h2>
              <p className="text-[#696984] text-base lg:text-lg leading-relaxed mb-8">
                SolarCrafts is a cross-platform educational mobile app that
                teaches users about planets, stars, and deep-space objects
                through an engaging, interactive interface. Featuring
                onboarding, tab-based navigation, searchable celestial catalogs,
                and detailed information pages, it delivers rich scientific data
                with a sleek dark-themed design.
              </p>
              <p className="text-[#696984] text-base mb-8">
                Designed to make astronomy fun and accessible, SolarCrafts
                provides a strong foundation for future features such as VR/AR,
                quizzes, and personalized experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#1E59CC] rounded-full"></div>
                <span className="text-[#294680] font-medium text-sm">
                  Cross-platform
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#1E59CC] rounded-full"></div>
                <span className="text-[#294680] font-medium text-sm">
                  Interactive Interface
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#1E59CC] rounded-full"></div>
                <span className="text-[#294680] font-medium text-sm">
                  Searchable Catalogs
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#1E59CC] rounded-full"></div>
                <span className="text-[#294680] font-medium text-sm">
                  Dark Theme
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://github.com/NyLaurent/solar-craft-mobile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#294680] hover:bg-[#1E59CC] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Visit on GitHub
              </Link>
              <button className="px-8 py-4 border-2 border-[#294680] text-[#294680] font-semibold rounded-lg hover:bg-[#294680] hover:text-white transition-all duration-300">
                Download App
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
