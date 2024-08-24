'use client'

import react, { useState } from 'react';
import Link from 'next/link';
import logo from '../utils/images/logo2.png'
import logo2 from '../utils/images/homeoLogo.png'

import logo3 from '../utils/images/homeoLogo2.png'
import logo4 from '../utils/images/logo3.png'
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
              <Image src={logo4}
                width={75}
                height={20}
                style={{backgroundColor:'#FAF9F6', borderRadius:'50%',padding:5}}
                alt="Picture of the author" />
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
          <Link href="/">
            <span className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white-900">Home</span>
          </Link>
          <Link href="/about">
            <span className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white-900">About</span>
          </Link>
          <Link href="/services">
            <span className="block px-3 py-2 rounded-md text-base font-medium text-white  hover:text-white-900">Services</span>
          </Link>
          <Link href="/contact">
            <span className="block px-3 py-2 rounded-md text-base font-medium text-white  hover:text-white-900">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
