import React from 'react'
import {colors} from "../utils/colors"

const Footer = () => {
  return (
    <footer className={`bg-primaryBackground text-white py-8`}>
    <div style={{border:'1px solid red'}} className="container mx-auto px-4 text-center">
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2">Contact Us</h3>
          <p className="text-sm md:text-base">Phone:+91 8600181102</p>
          <p className="text-sm md:text-base">Email: sanchit@gmail.com</p>
      
    <div className='mx-auto text-center flex flex-row justify-center my-4'>

  
          <a href="https://facebook.com" className="text-white hover:text-gray-400" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12.07c0-5.522-4.478-10-10-10s-10 4.478-10 10c0 4.991 3.657 9.128 8.438 9.877v-6.988h-2.54v-2.726h2.54v-2.083c0-2.506 1.492-3.89 3.775-3.89 1.094 0 2.238.195 2.238.195v2.463h-1.26c-1.242 0-1.629.772-1.629 1.562v1.854h2.773l-.443 2.726h-2.33v6.988c4.781-.749 8.438-4.886 8.438-9.877z" />
            </svg>
          </a>
          <a href="https://twitter.com" className="text-white hover:text-gray-400" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6.003c-.77.34-1.597.571-2.462.674.886-.532 1.566-1.375 1.887-2.378-.829.49-1.749.85-2.727 1.045-.784-.835-1.899-1.357-3.137-1.357-2.373 0-4.295 1.921-4.295 4.295 0 .336.038.664.111.978-3.568-.179-6.737-1.888-8.853-4.488-.369.632-.58 1.369-.58 2.154 0 1.485.756 2.794 1.908 3.562-.703-.022-1.365-.215-1.945-.537v.054c0 2.073 1.474 3.801 3.428 4.192-.359.098-.737.15-1.127.15-.275 0-.544-.027-.805-.077.544 1.702 2.125 2.94 3.997 2.973-1.465 1.148-3.31 1.833-5.317 1.833-.345 0-.684-.02-1.019-.059 1.895 1.215 4.148 1.923 6.567 1.923 7.883 0 12.197-6.532 12.197-12.197 0-.186-.004-.372-.013-.557.836-.605 1.564-1.362 2.14-2.225z" />
            </svg>
          </a>
          <a href="https://instagram.com" className="text-white hover:text-gray-400" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5c3.037 0 5.25 2.213 5.25 5.25v8.5c0 3.037-2.213 5.25-5.25 5.25h-8.5c-3.037 0-5.25-2.213-5.25-5.25v-8.5c0-3.037 2.213-5.25 5.25-5.25zm5.25 12c2.071 0 3.75-1.679 3.75-3.75s-1.679-3.75-3.75-3.75-3.75 1.679-3.75 3.75 1.679 3.75 3.75 3.75zm0-9.25c3.038 0 5.25 2.212 5.25 5.25s-2.212 5.25-5.25 5.25-5.25-2.212-5.25-5.25 2.212-5.25 5.25-5.25zm6.25-1.5c.414 0 .75.336.75.75s-.336.75-.75.75-.75-.336-.75-.75.336-.75.75-.75z" />
            </svg>
          </a>
          </div>

          <h3 className="text-lg md:text-xl font-bold mb-2">Visit Us</h3>
          <p className="text-sm md:text-base">Bhilai</p>
          <p className="text-sm md:text-base">Chattisgarh</p>
          <p className="text-sm md:text-base">Wardha</p>

    </div>
      <div className="text-center mt-6">
        <p className="text-white text-xs md:text-sm">&copy; {new Date().getFullYear()} Your Clinic Name. All rights reserved.</p>
      </div>
  </footer>
  )
}

export default Footer
