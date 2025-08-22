import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineUser,HiBars3BottomRight, HiShoppingBag} from "react-icons/hi2"
import Searchbar from './Searchbar'
const Navbar = () => {
  return (
    <>
        <nav className='container mx-auto flex items-center justify-between px-4 py-4'>
            {/* logo */}
            <div>
                <Link to="/" className='font-medium text-2xl'>Rabbit</Link>
            </div>

            <div className='hidden md:flex space-x-6'>
                <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Men</Link>
                <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Woman</Link>
                <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Top Wear</Link>
                <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Bottom Wear</Link>
            </div>

            {/* right side */}
            <div className='flex items-center space-x-4'>
                <Link to="/profile" className='hover:text-black'><HiOutlineUser className='w-6 h-6 text-gray-700'/></Link>
                <button className='relative hover:text-black'>
                    <HiShoppingBag className='h-6 w-6 text-gray-700'/> <span className='absolute top-0.5 bg-rabit-red text-white text-xs rounded-full px-2 py-0.5'>4</span>
                </button>
                
                {/* searchbar */}
                <Searchbar/>
                <button className='md:hidden'><HiBars3BottomRight className='h-6 w-6 text-gray-700'/></button>
            </div>
        </nav>
    </>
  )
}

export default Navbar
