'use client'

import react, { useState } from 'react';
import Link from 'next/link';
import logo from '../utils/images/logo4.png'
import Image from 'next/image'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div>
       <nav className="bg-primaryBackground shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <Image src={logo}
                width={65}
                height={100}
                style={{backgroundColor:'#FAF9F6',padding:5, borderRadius:'100%'}}
                alt="Logo" />
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex">
             
              <Link  href="#about">
                <span className="px-3 py-2 rounded-md text-sm  text-xl text-white hover:text-green-300">About</span>
              </Link>
              <Link href="#testimonials">
                <span className="px-3 py-2 rounded-md text-sm text-xl text-white hover:text-green-300">Testimonials</span>
              </Link>
              <Link  href="#blogs">
                <span className="px-3 py-2 rounded-md text-sm text-xl text-white hover:text-green-300">Blogs</span>
              </Link>
              <Link  href="#contact">
                <span className="px-3 py-2 rounded-md text-sm text-xl text-white hover:text-green-300">Contact us</span>
              </Link>
            </div>
            <div className="flex md:hidden">
              <button onClick={toggleMenu} className="text-white  focus:outline-none">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <Link  href="#about">
                <span className="px-3 py-2 rounded-md text-sm  text-xl text-white hover:text-green-300">About</span>
              </Link>
              <Link href="#testimonials">
                <span className="px-3 py-2 rounded-md text-sm text-xl text-white hover:text-green-300">Testimonials</span>
              </Link>
              <Link  href="#blogs">
                <span className="px-3 py-2 rounded-md text-sm text-xl text-white hover:text-green-300">Blogs</span>
              </Link>
              <Link  href="#contact"> 
                <span className="px-3 py-2 rounded-md text-sm text-xl text-white hover:text-green-300">Contact us</span>
              </Link>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
