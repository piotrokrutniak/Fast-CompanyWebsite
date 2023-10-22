import Image from "next/image";
import ButtonBase from "./buttonBase";
import CarouselBase from "./carouselBase";


export default function BlogPost({...props}){
    return(
        <section id={props.id} className="z-10 w-full items-center justify-between text-sm lg:flex p-2 sm:p-5 lg:p-10">
            <div className='max-w-7xl flex align-middle h-full flex-col lg:flex-row gap-10'>
                <div className='w-full h-96 md:h-128 lg:w-128 shrink-0 bg-slate-500/30 rounded-xl relative self-center overflow-clip shadow-md'>
                    <CarouselBase slides={props.photos}/>
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
        </section>
    )
}