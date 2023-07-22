import Image from "next/image"
import img1 from "../../media/img/air-conditioning.jpg"
import img2 from "../../media/img/heat-pump-2.jpg"
import img3 from "../../media/img/heating.jpg"
import SimplePanel from "@/app/components/common/simplePanel"
import Link from "next/link"
import ButtonBase from "@/app/components/common/buttonBase"
import { BsClockFill, BsTelephoneFill, BsEnvelopeAtFill} from "react-icons/bs"
import CarouselPanel from "@/app/components/common/carouselPanel"

import ac1 from "../../media/img/air-conditioning-2.jpg"
import ac2 from "../../media/img/heat-pump-2.jpg"
import ac3 from "../../media/img/heating-2.jpg"

export default function Realizacje(){
    const slides = [
        {url: ac1, desc:"Klimatyzacje"},
        {url: ac2, desc:"Pompy ciepła"},
        {url: ac3, desc:"Instalacje grzewcze"},
      ]

    return(
        <main className="min-h-screen scroll-smooth">
            <section id="Realizacje" className="max-w-7xl m-auto lg:p-16">
                <div>
                    <h1 className="text-5xl font-semibold pb-8 border-b-2 border-slate-600/30">Realizacje</h1>
                </div>
                <CarouselPanel slides={slides}/>
            </section>


        </main>
    )
}
