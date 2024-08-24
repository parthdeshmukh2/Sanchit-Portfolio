'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import homeo from  '../utils/images/homeo1.jpg'
import homeo2 from  '../utils/images/homeo2.jpg'
import homeo3 from  '../utils/images/homeo3.jpg'



const slides = [
  {
    image: homeo,
    title: 'Homeopathic Medicines',
    subtitle: 'Are Natural, Safe With No Side Effects',
    // buttonText: 'Learn More',
    // buttonLink: '/link1',
  },
  {
    image: homeo2,
    title: 'Healing the Whole Person',
    subtitle: 'Not Just the Symptoms',
    // buttonText: 'Learn More',
    // buttonLink: '/link1',
  },
  {
    image: homeo3,
    title: 'Personalized Care',
    subtitle: 'Tailored to Your Unique Needs',
    // buttonText: 'Learn More',
    // buttonLink: '/link1',
  },
  // Add more slides as needed
];

const FullScreenCarousel = () => {
  return (
    <div className="relative h-[75vh] w-full max-w-[100%] mx-auto">

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <Image
                src={slide.image}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
                quality={80}
                priority={index === 0} // Preload the first image for better performance
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4">
                <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl text-white mb-6">
                  {slide.subtitle}
                </p>
                {/* {slide.buttonText && slide.buttonLink && (
                  <a
                    href={slide.buttonLink}
                    className="px-6 py-3 bg-teal-500 text-white text-lg rounded-full hover:bg-teal-600 transition duration-300"
                  >
                    {slide.buttonText}
                  </a>
                )} */}
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <div className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-white text-3xl">
          <FaChevronLeft />
        </div>
        <div className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-white text-3xl">
          <FaChevronRight />
        </div>
      </Swiper>
    </div>
  );
};

export default FullScreenCarousel;
