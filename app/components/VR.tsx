import React from 'react'
import Image from 'next/image'
import Virtual from '../../assets/VR.png'

function VR() {
  return (
    <div className='flex flex-col  lg:flex-row justify-between px-6 lg:px-9 pt-9'>
        <div className='lg:w-1/2'>
            <h1 className='text-lg font-bold text-[#294680]'>The Planets Virtual Reality</h1>
            <br /><br />
            <p className='text-sm w-full lg:w-[80%]'>
              Get a stunning experience of using our virtual reality feature in our mobile apps which is easily accessible for everyone.
            </p>
        </div>
        
        <div className='lg:w-1/2 flex justify-center mt-4 lg:mt-0'>
            <Image src={Virtual} alt='' className=''></Image>
        </div>
    </div>
  )
}

export default VR
