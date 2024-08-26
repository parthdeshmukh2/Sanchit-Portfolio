'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
  'https://media.istockphoto.com/id/1292015214/photo/portrait-female-doctor-stock-photo.webp?b=1&s=612x612&w=0&k=20&c=V04CGZ3T6Zs4UXuw8XmDSs_whtC8VPtdszOZULeRdK0=',
  'https://media.istockphoto.com/id/1418999473/photo/doctors-comforting-disabled-elderly-patient.webp?b=1&s=612x612&w=0&k=20&c=pUEEkCssZKxtB-xn2YtkrKwFyR6OToucQyBK9e0ZnVc=',
  'https://media.istockphoto.com/id/1292015214/photo/portrait-female-doctor-stock-photo.webp?b=1&s=612x612&w=0&k=20&c=V04CGZ3T6Zs4UXuw8XmDSs_whtC8VPtdszOZULeRdK0=',
  'https://media.istockphoto.com/id/1418999473/photo/doctors-comforting-disabled-elderly-patient.webp?b=1&s=612x612&w=0&k=20&c=pUEEkCssZKxtB-xn2YtkrKwFyR6OToucQyBK9e0ZnVc=',
  'https://media.istockphoto.com/id/1292015214/photo/portrait-female-doctor-stock-photo.webp?b=1&s=612x612&w=0&k=20&c=V04CGZ3T6Zs4UXuw8XmDSs_whtC8VPtdszOZULeRdK0=',
  'https://media.istockphoto.com/id/1418999473/photo/doctors-comforting-disabled-elderly-patient.webp?b=1&s=612x612&w=0&k=20&c=pUEEkCssZKxtB-xn2YtkrKwFyR6OToucQyBK9e0ZnVc=',
  'https://media.istockphoto.com/id/1200980392/photo/medical-concept-of-asian-beautiful-female-doctor-in-white-coat-with-stethoscope-waist-up.webp?b=1&s=612x612&w=0&k=20&c=XO54ySpDSrs35CPXsvuXw05j1e0aCNv9Hl33q1TwNN4=',
  'https://media.istockphoto.com/id/1418999473/photo/doctors-comforting-disabled-elderly-patient.webp?b=1&s=612x612&w=0&k=20&c=pUEEkCssZKxtB-xn2YtkrKwFyR6OToucQyBK9e0ZnVc=',
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerSlide(4);
      } else if (window.innerWidth >= 768) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(1);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerSlide >= images.length ? 0 : prevIndex + itemsPerSlide
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerSlide < 0 ? images.length - itemsPerSlide : prevIndex - itemsPerSlide
    );
  };

  const indicators = Math.ceil(images.length / itemsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex, itemsPerSlide]);

  return (
    <div className = 'bg-gray-100'>
      <h2 className=" text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">Testimonials</h2>
      <div className="relative w-full max-w-6xl mx-auto mt-8">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${(currentIndex / itemsPerSlide) * 100}%)` }}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className={`flex-shrink-0 p-2 ${itemsPerSlide === 4 ? 'w-1/4' : itemsPerSlide === 2 ? 'w-1/2' : 'w-full'}`}
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <Image
                    src={src}
                    alt={`Image ${index + 1}`}
                    width={300}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
          onClick={handlePrev}
        >
          <FaChevronLeft />
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
          onClick={handleNext}
        >
          <FaChevronRight />
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {Array.from({ length: indicators }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                Math.floor(currentIndex / itemsPerSlide) === index ? 'bg-gray-800' : 'bg-gray-400'
              }`}
              onClick={() => setCurrentIndex(index * itemsPerSlide)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;