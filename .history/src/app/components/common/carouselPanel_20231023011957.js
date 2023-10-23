import Image from "next/image";
import ButtonBase from "./buttonBase";
import CarouselBase from "./carouselBase";
import { BsX } from "react-icons/bs";
import { useState } from "react";


export default function BlogPost({...props}){
    const [fullScreen, setFullScreen] = useState(false)
    return(
        <section id={props.id} className="z-10 w-full items-center justify-between text-sm lg:flex p-5 lg:p-10 bg-slate-800/10 lg:rounded-lg shadow-lg">
            <div className='max-w-7xl flex align-middle h-full flex-col lg:flex-row gap-10'>
                <div className='w-full h-96 md:h-128 lg:w-128 shrink-0 bg-black rounded-xl relative self-center overflow-clip shadow-md'>
                    <CarouselBase slides={props.photos} alt={props.title} onClick={() => setFullScreen(true)} thumbnail={true}/>
                </div>
                <div className='relative self-center w-full'>
                    <div className='flex justify-between gap-5 max-lg:flex-col '>
                    <h1 className='text-2xl font-semibold md:text-3xl mb-4'>{props.title ?? "Title"}</h1>
                        {props.button ?? ""}
                    </div>
                    <h2 className='text-xl font-normal md:text-3xl mb-8 opacity-70'>{props.location ?? "Location"}</h2>
                    <p className='text-lg md:text-xl font-thin leading-9 max-sm:text-lg opacity-80'>{props.desc ?? "Description"}</p>
                </div>
            </div>
            {fullScreen && 
            <div className="fixed top-0 left-0 w-screen h-screen bg-black/30 z-50">
                <BsX className="absolute w-16 h-16 top-16 right-4 cursor-pointer" onClick={() => setFullScreen(false)}/>
                <CarouselBase slides={props.photos} alt={props.title}/>
            </div>}
        </section>
    )
}