"use client"
import Image from "next/image"
import p1 from "../../../../public/img/air-conditioning-2.jpg"
import p2 from "../../../../public/img/heat-pump-2.jpg"
import p3 from "../../../../public/img/heating-2.jpg"
import { useEffect, useRef, useState } from "react"
// import ac1 from "./media/img/air-conditioning-2.jpg"
// import ac2 from "./media/img/heat-pump-2.jpg"
// import ac3 from "./media/img/heating-2.jpg"

export default function CarouselPage(){
    const slides = [p1, p2, p3]

    //const [activeIndex, setActiveIndex] = useState(0)

    const [activeIndex, setActiveIndex] = useState(0)
  
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
        <div className="w-full max-w-7xl relative mx-auto overflow-hidden">
        <div className={`relative w-full max-w-7xl h-128 flex overflow-visible -translate-x-[${activeIndex * 100}%] transition-all`}>
            {slides.map((image, index) => <CarouselPanel image={image} key={index} index={index} />)}
        </div>
        </div>
        <div className='flex justify-center relative gap-2 -top-10 transition-all'>
            {slides.map((slide, index) => {
                    return <div key={index} onClick={() => GoToSlide(index)}
                        className={`${index === activeIndex ? "bg-white scale-75" : ""} cursor-pointer w-5 h-5 border-solid border-2 border-white/80 
                        rounded-full hover:scale-110`}/>
                }) }
            </div>
        <div className="mx-auto w-fit p-6 bg-green-400" onClick={() => setActiveIndex(x => x+1)}>click</div>
        </>
    )
}

function CarouselPanel({image, index}){
    return (
        <div className={`w-full h-full absolute left-[${index * 100}%]`}>
            <Image src={image} layout='fill' objectFit='cover' className="h-full"/>
        </div>
        ) 
}