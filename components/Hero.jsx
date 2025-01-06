"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";


const heroData = [
  {
    img: "/Hero/1.jpg",
    heading: "Discover Your Dream Home",
    paragraph: "Explore a wide range of properties tailored to fit your lifestyle and budget.",
  },
  {
    img: "/Hero/2.jpg",
    heading: "Luxury Living at Its Best",
    paragraph: "Find luxurious properties with state-of-the-art amenities and breathtaking views.",
  },
  {
    img: "/Hero/3.jpg",
    heading: "Seamless Real Estate Experience",
    paragraph: "Our experts guide you through every step to make property buying effortless.",
  },
  
]


const Hero = () => {
  return (
    <div className="w-full  mx-auto -mt-24">
      <Swiper
        modules={[Navigation]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="rounded-lg shadow-lg"
      >
        {heroData.map((slide, index) => (
          <SwiperSlide key={index} >
          <div className="relative w-full h-screen">
            <Image
              src={slide.img}
              layout="fill"
              objectFit="cover"
              alt="Property Image"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {slide.heading}
              </h1>
              <p className="mb-6 text-sm md:text-lg">
                {slide.paragraph}
              </p>
              <div className="flex space-x-4">
                <Button className="bg-primary  px-4 py-2 rounded-lg font-semibold ">
                  <Link href="/properties">Browse Properties</Link>
                </Button>
                <Button className="bg-transparent border border-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-black">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        ))}
        
      </Swiper>
    </div>
  );
};

export default Hero;
