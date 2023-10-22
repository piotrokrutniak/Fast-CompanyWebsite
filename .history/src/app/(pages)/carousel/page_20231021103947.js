import Image from "next/image"
import p1 from "../../../../public/img/air-conditioning-2.jpg"
import p2 from "../../../../public/img/heat-pump-2.jpg"
import p3 from "../../../../public/img/heating-2.jpg"
// import ac1 from "./media/img/air-conditioning-2.jpg"
// import ac2 from "./media/img/heat-pump-2.jpg"
// import ac3 from "./media/img/heating-2.jpg"

export default function CarouselPage(){
    return(
        <div className="w-full max-w-7xl relative mx-auto overflow-x-auto">

        <div className="relative w-full max-w-7xl h-128 flex overflow-visible -translate-x-[0%]">
            <div className="w-full h-full absolute">
                <Image src={p1} layout='fill' objectFit='cover' className="h-full"/>
            </div>
            <div className="w-full h-full absolute">
                <Image src={p2} layout='fill' objectFit='cover'/>
            </div>
            <div className="w-full h-full absolute">
                <Image src={p3} layout='fill' objectFit='cover'/>
            </div>
        </div>
        </div>
    )
}