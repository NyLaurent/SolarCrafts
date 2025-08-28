import React from "react";
import Image from "next/image";
import Link from "next/link";
import testimonial from "../../assets/testimonial.png";
import Testimonial from "./Testimonial";

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 lg:py-24 px-6 lg:px-12 bg-gradient-to-bl from-[#1E59CC]/5 via-transparent to-[#294680]/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1E59CC]/10 to-[#294680]/10 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-[#1E59CC] to-[#294680] rounded-full animate-pulse"></div>
            <span className="text-[#1E59CC] font-semibold text-sm uppercase tracking-wide">
              User Reviews
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#294680] leading-tight mb-6">
            What Our
            <span className="bg-gradient-to-r from-[#1E59CC] to-[#294680] bg-clip-text text-transparent">
              {" "}
              Community{" "}
            </span>
            Says
          </h2>

          {/* Description */}
          <p className="text-lg text-[#696984] leading-relaxed max-w-3xl mx-auto mb-8">
            Join over 100,000 satisfied learners worldwide who have transformed
            their understanding of space through SolarCrafts
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#294680] mb-2">
                100K+
              </div>
              <div className="text-sm text-[#696984]">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#294680] mb-2">
                4.9/5
              </div>
              <div className="text-sm text-[#696984]">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#294680] mb-2">50+</div>
              <div className="text-sm text-[#696984]">Countries</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center gap-12 lg:gap-20">
          {/* Content and Image Section */}
          <div className="xl:w-1/2">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              {/* Enhanced Image */}
              <div className="relative group flex-shrink-0">
                <div className="absolute -inset-2 bg-gradient-to-br from-[#1E59CC]/20 to-[#294680]/20 rounded-3xl transform rotate-2 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src={testimonial}
                    alt="Happy students using SolarCrafts educational platform"
                    className="w-full max-w-sm rounded-2xl shadow-lg"
                  />
                </div>
                {/* Floating decoration */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#1E59CC] to-[#294680] rounded-full opacity-20 animate-pulse"></div>
              </div>

              {/* Content */}
              <div className="flex flex-col text-center lg:text-left">
                <div className="mb-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#294680] mb-4">
                    Trusted by Educators & Students
                  </h3>
                  <p className="text-lg text-[#696984] leading-relaxed mb-6">
                    SolarCrafts has revolutionized space education with our
                    interactive platform, helping students and teachers explore
                    the cosmos like never before.
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 justify-center lg:justify-start">
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
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-[#294680] font-medium">
                      Engaging Interactive Content
                    </span>
                  </div>
                  <div className="flex items-center gap-3 justify-center lg:justify-start">
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
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-[#294680] font-medium">
                      Expert-Approved Curriculum
                    </span>
                  </div>
                  <div className="flex items-center gap-3 justify-center lg:justify-start">
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
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-[#294680] font-medium">
                      Accessible Learning Tools
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <button className="px-6 py-3 border-2 border-[#1E59CC] text-[#1E59CC] font-semibold rounded-lg hover:bg-[#1E59CC] hover:text-white transition-all duration-300 transform hover:-translate-y-0.5">
                    Leave a Review
                  </button>
                  <Link
                    href="https://github.com/NyLaurent/solar-craft-mobile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#294680] hover:text-[#1E59CC] font-medium transition-colors duration-300"
                  >
                    Join Our Community →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Carousel Section */}
          <div className="xl:w-1/2 relative">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-8 bg-gradient-to-tr from-[#294680]/5 to-[#1E59CC]/5 rounded-3xl"></div>

              {/* Testimonial Component */}
              <div className="relative z-10">
                <Testimonial />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-[#1E59CC] to-[#294680] rounded-full opacity-10 animate-pulse"></div>
              <div
                className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-tl from-[#294680] to-[#1E59CC] rounded-full opacity-15 animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>

              {/* Rating indicators */}
              <div className="absolute -top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                  <span className="text-xs font-semibold text-[#294680]">
                    4.9/5
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#1E59CC]/5 to-[#294680]/5 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-[#294680] mb-4">
              Ready to Join Our Learning Community?
            </h3>
            <p className="text-lg text-[#696984] mb-8 max-w-2xl mx-auto">
              Experience the future of space education and discover why
              thousands of students and educators choose SolarCrafts
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-[#1E59CC] to-[#294680] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                Start Learning Today
              </button>
              <Link
                href="https://github.com/NyLaurent/solar-craft-mobile"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-[#294680] text-[#294680] font-semibold rounded-lg hover:bg-[#294680] hover:text-white transition-all duration-300"
              >
                Download Mobile App
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
