'use client'


import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { testimonialsData } from '../components/testimonialData';
import Witness from '../../assets/Witness.png';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'; // Importing icons for next/prev

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate the testimonials every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000); // 3 seconds

    return () => {
      clearInterval(interval); // Cleanup the interval on component unmount
    };
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='relative px-32'>
      <div className="relative mb-10 flex items-center justify-center">
        {/* Previous Icon */}
        <button onClick={handlePrev} className=" relative bottom-36 left-0 z-40 p-2">
          <FaChevronLeft size={30} />
        </button>

        {/* Testimonial Content */}
        <div key={testimonialsData[currentIndex].id} className="relative">
          <Image 
            src={Witness}
            alt='' 
          />
          <div className='relative bottom-32 left-8 w-[400px] h-[200px] bg-white rounded-xl z-30'>
            <p className='text-sm text-center p-4 pt-9 text-[#25252B]'>{testimonialsData[currentIndex].quote}</p>
            <h2 className='text-[#25252B] px-4'>{testimonialsData[currentIndex].name}</h2>
          </div>
        </div>

        {/* Next Icon */}
        <button onClick={handleNext} className="relative right-12 bottom-36 z-40 p-2">
          <FaChevronRight size={30} />
        </button>
      </div>
    </div>
  );
}

export default Testimonial;
