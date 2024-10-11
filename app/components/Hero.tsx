import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HeroImage from '../assets/Hero.png'

function Hero() {
  return (
    <div className='pt-20 px-9 flex flex-col md:flex-row'>
      <div className='md:w-1/2'>
        <h1 className='text-[24px] md:text-[30px]'>
          Explore and Learn <br />
          More About our Solar System
        </h1>

        <p className='w-full md:w-[65%] pt-6 md:pt-9 text-sm text-[#696984]'>
          Through using solarCrafts you are able to learn more things about solar systems through getting many information about it and also through the use of our virtual reality feature where you are able to view how it is in space.
        </p>

        {/* Responsive button and link section */}
        <div className='flex flex-col items-center md:flex-row md:items-start gap-4 md:gap-14 pt-6 md:pt-9'>
          <button className='w-[200px] h-[45px] bg-[#294680] text-white rounded-md'>
            Get Started Now
          </button>
          <p className='pt-2 md:pt-1 text-sm text-center md:text-left'>Or</p>
          <Link href={'/'} className='text-[#294680] pt-2 md:pt-1 text-sm text-center md:text-left'>
            Download our mobile app
          </Link>
        </div>
      </div>

      <div className='flex justify-center md:justify-end mt-8 md:mt-0 md:w-1/2'>
        <Image src={HeroImage} alt='' className='w-[300px] h-[240px] md:w-[450px] md:h-[480px]'></Image>
      </div>
    </div>
  )
}

export default Hero
