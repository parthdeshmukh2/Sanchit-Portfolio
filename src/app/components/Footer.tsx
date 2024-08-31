import React from 'react';
import { colors } from "../utils/colors";
import { FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';

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

        <div className="flex flex-wrap justify-center items-center space-x-6 mb-8">
          <a href="#" className="text-sm text-white hover:text-gray-400">About</a>
          {/* <a href="#" className="text-sm text-white hover:text-gray-400">Food as Medicine</a> */}
          <a href="#" className="text-sm text-white hover:text-gray-400">Privacy Policy</a>
        </div>

        <div className="flex justify-center items-center space-x-6 mb-8">
        <a href="https://instagram.com" className="text-white hover:text-gray-400">
        <FaInstagram className="h-6 w-6" />
  {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7.75 2h8.5c3.037 0 5.25 2.213 5.25 5.25v8.5c0 3.037-2.213 5.25-5.25 5.25h-8.5c-3.037 0-5.25-2.213-5.25-5.25v-8.5c0-3.037 2.213-5.25 5.25-5.25zm5.25 12c2.071 0 3.75-1.679 3.75-3.75s-1.679-3.75-3.75-3.75-3.75 1.679-3.75 3.75 1.679 3.75 3.75 3.75zm0-9.25c3.038 0 5.25 2.212 5.25 5.25s-2.212 5.25-5.25 5.25-5.25-2.212-5.25-5.25 2.212-5.25 5.25-5.25zm6.25-1.5c.414 0 .75.336.75.75s-.336.75-.75.75-.75-.336-.75-.75.336-.75.75-.75z" /> */}
{/* </svg> */} 
</a>

<a href="https://whatsapp.com" className="text-white hover:text-gray-400">
  {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.011 2c5.493 0 9.951 4.457 9.951 9.951 0 5.494-4.458 9.951-9.951 9.951a9.933 9.933 0 0 1-5.391-1.586l-4.14 1.08 1.104-4.024a9.958 9.958 0 0 1-1.543-5.421C2.06 6.458 6.518 2 12.011 2zm0 17.713c4.284 0 7.761-3.477 7.761-7.761s-3.477-7.761-7.761-7.761-7.761 3.477-7.761 7.761c0 1.633.49 3.156 1.331 4.445l-.887 3.234 3.261-.851a7.724 7.724 0 0 0 4.057 1.126zm4.465-5.578c-.225-.113-1.339-.66-1.547-.736-.208-.075-.36-.113-.514.112-.153.226-.59.736-.722.888-.132.151-.266.17-.491.057-.225-.113-.95-.349-1.808-1.11-.668-.596-1.118-1.334-1.248-1.558-.132-.226-.014-.347.099-.46.103-.102.226-.264.34-.396.113-.131.151-.226.226-.377.075-.151.038-.283-.019-.396-.056-.113-.513-1.238-.701-1.692-.184-.444-.371-.382-.514-.382l-.43-.008c-.151 0-.396.056-.604.283s-.793.775-.793 1.889c0 1.113.811 2.188.924 2.335.113.151 1.595 2.44 3.865 3.42.54.231.96.37 1.288.474.541.173 1.034.149 1.426.09.435-.064 1.339-.546 1.527-1.073.188-.528.188-.982.132-1.073-.057-.094-.207-.15-.433-.264z" />
  </svg> */}
  
  <FaWhatsapp className="h-6 w-6" />

</a>

<a href="https://youtube.com" className="text-white hover:text-gray-400">
  {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M10 15l5.5-3.001L10 9v6zm-10-2.071v-1.858c0-1.108.893-2.001 2-2.001h20c1.105 0 2 .893 2 2.001v1.858c0 1.105-.895 2-2 2H2c-1.107 0-2-.895-2-2zm2-11.071C.895 1.857 0 2.751 0 3.857v16.286C0 21.251.895 22.144 2 22.144h20c1.105 0 2-.893 2-2.001V3.857c0-1.106-.895-2-2-2H2z" />
  </svg> */}
   <FaYoutube className="h-6 w-6" />
</a>

        </div>

        <div className="mt-6">
          <p className="text-xs md:text-sm">&copy; {new Date().getFullYear()} Sanchit Chopra | Designed with ❤️ by SP</p>
        </div>
      </div>
      <div className="fixed bottom-4 right-4 bg-white border-2 border-gray-500 rounded-full p-6 shadow-lg flex items-center justify-center w-36 h-36">
  <a href="#appointment" className="text-center text-lg text-black font-semibold">
    Need an Appointment? 
    <span className="block text-blue-500 font-normal">Click Here</span>
  </a>
</div>

      {/* <div className="fixed bottom-4 right-4 bg-white border-50 border-white-500 rounded-full p-4 shadow-lg flex items-center space-x-2">
        <p className="text-sm text-black font-semibold">Need an Appointment?</p>
        <a href="#appointment" className="text-500 font-bold">Click Here</a>
      </div> */}
    </footer>
  );
};

export default Footer;
