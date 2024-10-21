import React from 'react'
import Image from 'next/image'
import {testimonialsData} from '../components/testimonialData'
import Witness from '../assets/Witness.png'

function Testimonial() {
  return (
    <div className='px-32'>
      {testimonialsData.map((testimonial) => (
        <div key={testimonial.id} className="relative mb-10">
          <Image src={testimonial.image} alt={testimonial.name} width={700} height={300} />
          <div className='absolute bottom-32 left-8 w-[400px] h-[200px] bg-white rounded-xl z-30'>
            <p className='text-sm text-center p-4 pt-9 text-[#25252B]'>{testimonial.quote}</p>
            <h2 className='text-[#25252B] px-4'>{testimonial.name}</h2>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Testimonial