"use client";

import { Carousel } from 'flowbite';
import { useState, useEffect, useRef } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

import pic from "../../../../public/static/img/air-conditioning-2.jpg"
import Image from 'next/image';

export default function CarouselBase({ slides, alt, className = "", onClick = () => undefined }) {
    const [slideIndex, setSlideIndex] = useState(0)
  
    function PrevSlide() {
      setSlideIndex(prevIndex => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
    }
  
    function NextSlide() {
      setSlideIndex(prevIndex => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
    }
  
    function GoToSlide(index) {
      setSlideIndex(index)
    }

    //pass in image object instead other things style={{backgroundImage: `url(${slides[slideIndex].url})`}}

    return(
        <>
        <div className={`${className} w-full m-auto h-full max-w-7xl`}> 
            <div className='w-full m-auto h-full max-w-7xl items-center flex group transition-all bg-black/30 relative' >
                <div className='absolute w-full h-full select-none'>
                    <Image src={slides[slideIndex].url} alt={alt || "Placeholder Text"} layout='fill' objectFit='cover' className='z-10 cursor-zoom-in' onClick={() => onClick()}/>
                </div>
                <div className='flex w-full justify-between relative p-2'>
                <div className='bg-black/10 p-2 rounded-2xl sm:hidden group-hover:block hover:bg-black/20 active:scale-95 z-20'>
                    <BsChevronCompactLeft color='white' className='w-10 h-10 cursor-pointer opacity-60 hover:opacity-100 
                        transition-all active:scale-95' onClick={() => PrevSlide()}/>
                </div>
                <div className='bg-black/10 p-2 rounded-2xl sm:hidden group-hover:block hover:bg-black/20 active:scale-95 z-20'>
                    <BsChevronCompactRight color='white' className='w-10 h-10 cursor-pointer opacity-60 hover:opacity-100 
                        transition-all active:scale-95' onClick={() => NextSlide()}/>
                </div>
                </div>
            </div>

            <div className='flex justify-center relative gap-2 -top-10 transition-all'>
            {slides.map((slide, index) => {
                return <div key={index} onClick={() => GoToSlide(index)}
                        className={`${index === slideIndex ? "bg-white scale-75" : ""} cursor-pointer w-5 h-5 border-solid border-2 border-white/80 
                        rounded-full hover:scale-110`}/>
                    }) }
            </div>
        </div>
        </>
    )
}