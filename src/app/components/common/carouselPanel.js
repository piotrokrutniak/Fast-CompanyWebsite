import Image from "next/image";
import ButtonBase from "./buttonBase";
import CarouselBase from "./carouselBase";


export default function CarouselPanel({...props}){
    return(
        <section id={props.id} className="z-10 w-full items-center justify-between text-sm lg:flex p-10 max-xs:p-5">
            <div className='max-w-7xl  flex gap-20 py-10 sm:py-32 align-middle h-full max-md:flex-col-reverse max-lg:gap-10'>
            <div className='w-96 h-64 sm:h-96 shrink-0 bg-black rounded-xl relative self-center max-md:w-full overflow-clip'>
                <CarouselBase slides={props.slides}/>
            </div>
            <div className='relative self-center w-full'>
                <div className='flex justify-between gap-5 max-lg:flex-col '>
                <h1 className='text-5xl font-semibold max-sm:text-3xl'>{props.title ?? "Title"}</h1>
                    {props.button ?? ""}
                </div>
                <h2 className='text-2xl font-normal max-sm:text-3xl mb-5'>{props.title ?? "Location"}</h2>
                <p className='text-xl font-thin leading-9 max-sm:text-lg'>{props.desc ?? "Description"}</p>
            </div>
            </div>
        </section>
    )
}