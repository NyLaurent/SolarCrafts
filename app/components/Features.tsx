import React from 'react'
import Placeholder from '../assets/placeholder.png'
import Image from 'next/image'
import Icon from '../assets/Icon.png'

function Features() {
  return (
    <div className='pt-9'>
        <div className='px-11 pb-9'>
            <h1 className='font-bold'>Our Features</h1><br />
            <p className='text-[#696984] text-sm '>This is the best online solar system courses source with diverse information about the solar system</p>
        </div>
        
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-24 px-6 lg:px-12'>
            <div className='lg:w-1/2'>
                <Image src={Placeholder} alt='' className='w-full lg:w-[1000px]'></Image>
            </div>

            <div className='lg:w-1/2'>
                <div>
                    <h1 className='text-lg font-bold text-[#294680] relative left-3'>Advanced Solar System Courses for Students</h1>
                </div>
                
                <div>
                    <div className='flex flex-row items-start gap-4 mt-4'>
                        <Image src={Icon} alt='' className=''></Image>
                        <p className='text-[#696984] text-sm w-full lg:w-[70%] relative top-7'>Get easy access to diverse information about the solar system through learning how it works in various resources.</p>
                    </div>
                    
                    <div className='flex flex-row  items-start gap-4 mt-4'>
                        <Image src={Icon} alt='' className=''></Image>
                        <p className='text-[#696984] relative top-7 text-sm w-full lg:w-[70%]'>Get easy access to diverse information about the solar system through learning how it works in various resources.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features
