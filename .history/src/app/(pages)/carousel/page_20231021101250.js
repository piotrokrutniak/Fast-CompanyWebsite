import Image from "next/image"
import p1 from "../../../../public/img/air-conditioning-2.jpg"
import p2 from "../../../../public/img/heat-pump-2.jpg"
import p3 from "../../../../public/img/heating-2.jpg"
// import ac1 from "./media/img/air-conditioning-2.jpg"
// import ac2 from "./media/img/heat-pump-2.jpg"
// import ac3 from "./media/img/heating-2.jpg"

export default function CarouselPage(){
    return(
        <div className="max-w-7xl w-full relative">

        <div className="relative w-full h-128 flex overflow-visible mx-auto">
            <div className="w-screen h-full absolute left-full">
                <Image src={p1} layout='fill' objectFit='cover'/>
            </div>
            <div className="w-screen h-full absolute">
                <Image src={p2} layout='fill' objectFit='cover'/>
            </div>
            <div className="w-screen h-full absolute left-full">
                <Image src={p3} layout='fill' objectFit='cover'/>
            </div>
        </div>
        </div>
    )
}