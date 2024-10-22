import React from 'react'
import Image from 'next/image'
import testimonial from '../../assets/testimonial.png'
import Testimonial from './Testimonial'

function Testimonials() {
  return (
    <div className='flex flex-col md:flex-row justify-between px-7 pt-9'>
      <div className="flex flex-col md:flex-row gap-4 md:w-2/3">
        <div className="flex-shrink-0">
          <Image src={testimonial} alt="" className="w-full h-auto" />
        </div>

        <div className="flex flex-col">
          <h1 className="font-bold text-lg relative bottom-3 pb-3">Testimonials</h1>
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl text-[#294680] font-bold">What They Say?</h1>
            <p className="w-full md:w-[80%] text-[#696984]">
              Solarcraft has got more than 100k positive ratings from our users around the world.
            </p>
            <p className="w-full md:w-[80%] text-md text-[#696984]">
              Some of the students and teachers were greatly helped by Solarcraft.
            </p>
            <p className="w-full md:w-[80%] text-md text-[#696984]">
              Are you too? Please give your assessment.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 md:mt-0 md:ml-6 md:w-1/3">
        <Testimonial />
      </div>
    </div>
  )
}

export default Testimonials
