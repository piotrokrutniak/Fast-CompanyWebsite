import Image from "next/image";
import ButtonBase from "./buttonBase";
import CarouselBase from "./carouselBase";


export default function CarouselPanel({...props}){
    return(
        <section id={props.id} className="z-10 w-full items-center justify-between text-sm lg:flex p-10 max-xs:p-5">
            <div className='max-w-7xl  flex gap-20 py-10 sm:py-32 align-middle h-full max-md:flex-col max-lg:gap-10'>
                <div className='w-full h-96 md:h-128 md:w-128 shrink-0 bg-black rounded-xl relative self-center max-md:w-full overflow-clip'>
                    <CarouselBase slides={props.photos}/>
                </div>
                <div className='relative self-center w-full'>
                    <div className='flex justify-between gap-5 max-lg:flex-col '>
                    <h1 className='text-4xl font-semibold max-sm:text-3xl mb-4'>{props.title ?? "Title"}</h1>
                        {props.button ?? ""}
                    </div>
                    <h2 className='text-2xl font-normal max-sm:text-3xl mb-8 opacity-70'>{props.location ?? "Location"}</h2>
                    <p className='text-xl font-thin leading-9 max-sm:text-lg opacity-80'>{props.desc ?? "Description"}</p>
                </div>
            </div>
        </section>
    )
}