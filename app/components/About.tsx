import React from 'react'
import Image from 'next/image'
import Meteor from '../../assets/Meteor.png'
import SolarP from '../../assets/SolarP.png'

function About() {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-9 py-12 md:py-20'>
      <div className='flex flex-col md:flex-row gap-6 md:gap-16'>
        <Image src={Meteor} alt='' className=' md:w-auto' />
        <Image src={SolarP} alt='' className='relative top-12 md:top-24 md:w-auto' />
      </div>
      <div className='w-full md:w-[40%] mt-8 md:mt-0 pt-6'>
        <h1 className='font-bold text-center md:text-left'>
          Curiosity about the Solar System Working
        </h1>
        <p className='text-[#696984] text-sm pt-4 text-center md:text-left'>
          You will try to know and understand briefly how our solar system is and how it works 
          through using our virtual reality feature where you can view the solar system like you are 
          there instantly and in an easy and appropriate way.
        </p>
        <div className='flex justify-center md:justify-start'>
          <button className='w-[170px] h-[45px] bg-[#294680] text-white rounded-md mt-4'>
            Try It Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
