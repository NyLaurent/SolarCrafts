import React from 'react'
import Ellipse from '../assets/Ellipse 6.png'
import Image from 'next/image'
function Navbar() {
  return (
    <div>
       
    <div className='flex flex-row justify-around'>
        <div>
            <p className='text-3xl font-semibold'> <span className='text-[#1E59CC]'>Solar</span> Crafts</p>
            <div className='right-4'>
            <Image src={Ellipse} alt='' className='w-96'></Image>
        </div>
        </div>
        
       
        <div>
        <ul className='cursor-pointer flex flex-row gap-16 pt-4'>
    <li className='hover:text-[#1E59CC]'>Home</li>
    <li className='hover:text-[#1E59CC]'>Features</li>
    <li className='hover:text-[#1E59CC]'>Pricing</li>
    
</ul>

        </div>
        <div className='flex flex-row gap-9 pt-2'>
            <button className='w-[120px] h-[40px] border-2 border-[#1E59CC] rounded-[30px]'>
                Sign Up
            </button>
            <button className='w-[120px] h-[40px] bg-gradient rounded-[30px]'>
                Login
            </button>
        </div>
        
    </div>
    </div>
  )
}

export default Navbar