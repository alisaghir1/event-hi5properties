'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'; // Ensure Image is imported from Next.js
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './swiper.css'

import { EffectCoverflow, Pagination } from 'swiper/modules';
import reef from '../assets/algedra.avif'

const Swipper: React.FC = () => {
  return (
    <div className='py-20 bg-customText2'>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination]} // Ensure modules are imported correctly
        className="mySwiper"
      >
        {/* Example Slide with Next.js Image */}
        <SwiperSlide>
          <Image
            src={reef} // Ensure this path is correct
            alt="1 slide"
            width={700} // You need to specify width and height for the image
            height={700}
          />
        </SwiperSlide>

        {/* Example Slide */}
        <SwiperSlide>
          <Image
            src={reef} // Ensure this path is correct
            alt="1 slide"
            width={700} // You need to specify width and height for the image
            height={700}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={reef} // Ensure this path is correct
            alt="1 slide"
            width={700} // You need to specify width and height for the image
            height={700}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={reef} // Ensure this path is correct
            alt="1 slide"
            width={700} // You need to specify width and height for the image
            height={700}
          />
        </SwiperSlide>

        {/* Add more slides as needed */}
      </Swiper>
    </div>
  );
};

export default Swipper;
