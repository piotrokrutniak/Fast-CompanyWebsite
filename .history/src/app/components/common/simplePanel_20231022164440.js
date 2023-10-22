import Image from "next/image";
import ButtonBase from "./buttonBase";


export default function SimplePanel({...props}){
    return(
        <section id={props.id} className="z-10 w-full items-center justify-between text-sm lg:flex p-5 max-xs:p-5">
            <div className='max-w-7xl m-auto flex gap-20 py-10 align-middle h-full max-lg:flex-col-reverse max-lg:gap-10'>
            <div className='w-96 h-64 sm:h-96 shrink-0 bg-slate-500 rounded-xl relative self-center max-md:w-full overflow-clip'>
                <Image src={props.img} layout='fill' objectFit='cover'/>
            </div>
            <div className='relative self-center w-full'>
                <div className='flex justify-between gap-5 max-lg:flex-col mb-5'>
                <h1 className='text-5xl font-semibold max-sm:text-3xl'>{props.title ?? "Title"}</h1>
                    {props.button ?? ""}
                </div>
                <h2 className='text-xl font-thin leading-9 max-sm:text-lg'>{props.desc ?? "Description"}</h2>
            </div>
            </div>
        </section>
    )
}