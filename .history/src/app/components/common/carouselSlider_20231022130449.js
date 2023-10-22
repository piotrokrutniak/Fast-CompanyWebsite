"use client"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"


export function CarouselSlider({slides}){
    const [activeIndex, setActiveIndex] = useState(0)
    const [offsets, setOffsets] = useState([])
    
    useEffect(() => {
      slides.map((slide, x) => {
        offsets.push(`-translate-x-[${x*100}%]`);
        console.log(offsets)
      })
    }, [])
    
  
    function PrevSlide() {
      setActiveIndex(prevIndex => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
    }
  
    function NextSlide() {
      setActiveIndex(prevIndex => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
    }
  
    function GoToSlide(index) {
      setActiveIndex(index)
    }
  
    function useAutoSlide(intervalTime) {
      const intervalRef = useRef(null);
  
      function resetTimer() {
        clearInterval(intervalRef.current)
        startTimer()
      }
  
      function startTimer() {
        intervalRef.current = setInterval(() => {
          NextSlide();
        }, intervalTime)
      }
  
      useEffect(() => {
        startTimer()
  
        return () => {
          clearInterval(intervalRef.current)
        };
      }, []);
  
      useEffect(() => {
        resetTimer()
      }, [activeIndex])
  
      return resetTimer
    }
  
    const resetTimer = useAutoSlide(5000)

    return(
        <>
        <div className="w-full max-w-7xl relative mx-auto overflow-clip group">
        <div className={`relative w-full max-w-7xl h-128 flex overflow-visible transition-all ${offsets[activeIndex]}`}>
            {slides.map((image, index) => <CarouselPanel image={image} key={index} index={index} />)}
        </div>
        <div className='flex w-full justify-between center top-0 h-full place-items-center absolute p-2'>
            <div className='bg-black/10 p-2 rounded-2xl sm:hidden group-hover:block hover:bg-black/20 active:scale-95'>
                <BsChevronCompactLeft color='white' className='w-10 z-10 h-10 cursor-pointer opacity-60 hover:opacity-100 
                    transition-all active:scale-95' onClick={() => PrevSlide()}/>
            </div>
            <div className='bg-black/10 p-2 z-10 rounded-2xl sm:hidden group-hover:block hover:bg-black/20 active:scale-95'>
                <BsChevronCompactRight color='white' className='w-10 h-10 cursor-pointer opacity-60 hover:opacity-100 
                       transition-all active:scale-95' onClick={() => NextSlide()}/>
            </div>
        </div>
        <div className='absolute bottom-12 px-8 z-20 max-sm:px-5'> 
            <div className='font-bold text-5xl relative max-sm:text-4xl'>F.U.H. FAST</div>
            <div className='font-semibold text-2xl pt-2 relative max-sm:text-xl'>Jacek Stawowy</div>
            <div className='font-thin text-2xl relative max-sm:text-lg'>{slides[activeIndex].desc}</div>
        </div>
        </div>
        <div className='flex justify-center relative gap-2 -top-10 transition-all'>
            {slides.map((slide, index) => {
                return <div key={index} onClick={() => GoToSlide(index)}
                    className={`${index === activeIndex ? "bg-white scale-75" : ""} cursor-pointer w-5 h-5 border-solid border-2 border-white/80 
                    rounded-full hover:scale-110`}/>
            })}
        </div>
        </>
    )
}

function CarouselPanel({image, index}){
    const offset = `left-[${index * 100}%]`
    return (
        <div className={`w-full h-full absolute ${offset}`}>
            <Image src={image.img} alt={image.desc} layout='fill' objectFit='cover' className="h-full opacity-60"/>
        </div>
        ) 
}