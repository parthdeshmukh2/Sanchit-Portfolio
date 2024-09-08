import React from 'react';
import { FaInstagram, FaWhatsapp, FaYoutube, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primaryBackground text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Health?</h3>
          <a
            href="#contact"
            className="inline-block bg-[#84e4a8] text-black py-3 px-6 rounded-full text-lg font-semibold"
          >
            Contact Us
          </a>
        </div>

        <div className="flex justify-center items-center space-x-6 mb-4">
          <a href="https://instagram.com" className="text-white hover:text-gray-400">
            <FaInstagram className="h-6 w-6" />
          </a>

          <a href="https://whatsapp.com" className="text-white hover:text-gray-400">
            <FaWhatsapp className="h-6 w-6" />
          </a>

          <a href="https://youtube.com" className="text-white hover:text-gray-400">
            <FaYoutube className="h-6 w-6" />
          </a>
        </div>

        {/* Contact Information Section */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-4">
          <div className="flex items-center space-x-2">
            <FaPhone className="h-5 w-5 text-[#84e4a8]" />
            <a href="tel:+919407602173" className="text-lg">
            +91 9407602173
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <FaEnvelope className="h-5 w-5 text-[#84e4a8]" />
            <a href="mailto:dr.sanchitchopra@gmail.com" className="text-lg">
            dr.sanchitchopra@gmail.com
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center space-x-2">
          <h6 className="text-xl font-bold mb-4">Address:</h6>
          <p className="text-xl mb-4 ">
            Beside Panchmukhi Hanuman Mandir, Smriti Nagar, Bhilai, Chhattisgarh 490020
          </p>
        </div>

        <div className="mt-6">
          <p className="text-xs md:text-sm">&copy; {new Date().getFullYear()} Sanchit Chopra | Designed with ❤️ by SP</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
