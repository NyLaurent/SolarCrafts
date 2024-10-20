import React from 'react'
import Image from 'next/image'
import testimonial from '../assets/testimonial.png'

function Testimonials() {
  return (
    <div>
<div>
<div className='flex flex-row gap-4'>
            <div>
            <Image src={testimonial} alt="" />
            </div>

            <h1 className='font-bold text-lg relative bottom-3'>Testimonials</h1>
        </div>
        <div className=' flex flex-col gap-3'>
            <h1 className='text-2xl text-[#294680] font-bold'>What They Say?</h1>
            <p className='w-[40%] text-sm text-[#696984]'>Solarcraft has got more than 100k positive ratings from our users around the world. </p>
            <p className='w-[40%] text-sm text-[#696984]'>Some of the students and teachers were greatly helped by the Solarcraft</p>
            <p className='w-[40%] text-sm text-[#696984]'>Are you too? Please give your assessment</p>
        </div>
</div>
      
    </div>
  )
}

export default Testimonials