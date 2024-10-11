import React from 'react'
import Link from 'next/link'

function Hero() {
  return (
    <div className='pt-20 px-9'>
      <div>
        <h1 className='text-[30px]'>Explore and Learn <br />
        More About our Solar System</h1>

        <p className='w-[45%] pt-9 text-sm text-[#696984]'>
        Through using solarCrafts you are able to learn more things about solar systems through getting many information about it and also through the use of our virtual reality feature where you are able to view how it is in space.
        </p>
        <div className='flex flex-row gap-14 pt-9'>
          <button className='w-[150px] h-[40px] bg-[#294680] rounded-sm'>
            Get Started Now
          </button>
          <p className='pt-1'>Or</p>
          <Link href={'/'} className='text-[#294680] pt-1'>Download our mobile app</Link>
        </div>
      </div>
    </div>
  )
}

export default Hero