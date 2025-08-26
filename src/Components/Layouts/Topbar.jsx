import React from 'react'
import {TbBrandMeta} from "react-icons/tb";
import {IoLogoInstagram} from "react-icons/io";
import {RiTwitterXLine} from "react-icons/ri";

const Topbar = () => {
  return (
    <div className='bg-rabit-red text-white'>
      <div className='container mx-auto flex justify-between items-center px-3 py-3'>
        <div className='hidden md:flex items-center space-x-4'>
            <a href="#" className='hover:bg-gray-300'><TbBrandMeta className='h-5 w-5'/></a>
            <a href="#" className='hover:bg-gray-300'><IoLogoInstagram className='h-5 w-5'/></a>
            <a href="#" className='hover:bg-gray-300'><RiTwitterXLine className='h-5 w-5'/></a>
        </div>
        <div className='text-center text-sm flex-grow'>
            <span>we ship worldwide fast and relibel shipping</span>
        </div>
        <div className='text-sm hidden md:block'>
            <a href="#1234567890">+(1234) 5678 12</a>
        </div>
      </div>
    </div>
  )
}

export default Topbar
