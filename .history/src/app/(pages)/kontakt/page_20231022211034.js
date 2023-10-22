import Image from "next/image"
import img1 from "../../media/img/air-conditioning.jpg"
import img2 from "../../media/img/heat-pump-2.jpg"
import img3 from "../../media/img/heating.jpg"
import SimplePanel from "@/app/components/common/simplePanel"
import Link from "next/link"
import ButtonBase from "@/app/components/common/buttonBase"
import { BsClockFill, BsTelephoneFill, BsEnvelopeAtFill} from "react-icons/bs"

export default function Kontakt(){
    return(
        <main className="min-h-screen scroll-smooth">
            <section id="kontakt" className="max-w-7xl m-auto h-screen flex place-items-center">
            <div className="z-10 w-full items-center justify-between text-sm lg:flex p-10 max-xs:p-5">
            <div className='max-w-7xl flex gap-20 h-full mx-auto max-lg:flex-col-reverse max-lg:gap-10 re'>
            <div className='w-full h-96 sm:h-128 lg:w-128 shrink-0 bg-white rounded-xl relative self-center max-md:w-full overflow-clip'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1305949.1722355785!2d20.4761196!3d50.2605237!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716473159106e4d%3A0xfb9a19f47824a47e!2sFast%20Jacek%20Stawowy!5e0!3m2!1sen!2spl!4v1690041278824!5m2!1sen!2spl"
                        className="w-full h-full" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            <div className='relative self-center w-full'>
                <div className='flex justify-between gap-5 max-lg:flex-col mb-5'>
                <h1 className='sm:text-5xl font-semibold text-3xl mb-4'>Kontakt z nami </h1>
                    
                </div>
                <ul>
                    <li className="p-4">
                        <h2 className='text-xl font-semibold max-sm:text-lg flex pb-1'> <BsTelephoneFill className="relative top-1 mr-2 h-5"/> Telefon  </h2>
                        <h3 className='text-xl font-thin leading-9 max-sm:text-lg w-fit'>
                            <Link href={"tel:+48 509 012 407"} className="cursor-pointer hover:text-emerald-200">
                                <p className="whitespace-nowrap w-fit">
                                    +48 509 012 407
                                </p>
                            </Link> 
                        </h3>
                    </li>
                    <li className="p-4">
                        <h2 className='text-xl font-semibold leading-9 max-sm:text-lg flex pb-1'> <BsEnvelopeAtFill className="relative top-2 mr-2 h-5"/> Email </h2>
                        <h3 className='text-xl font-thin leading-9 max-sm:text-lg w-fit'> 
                            <a href={"mailto:fast@firma.pl"} className="cursor-pointer hover:text-emerald-200">
                                <p className="whitespace-nowrap w-fit">
                                    fast@firma.pl
                                </p>
                            </a> 
                        </h3>
                    </li>
                    <li className="p-4">
                        <h2 className='text-xl font-semibold leading-9 max-sm:text-lg flex pb-1'> <BsClockFill className="relative top-2 mr-2 h-5"/> Dostępność </h2>
                        <h3 className='text-xl font-thin leading-9 max-sm:text-lg whitespace-nowrap'> 
                            Pon-Pt 8.00-19.00
                        </h3>
                    </li>
                </ul>
            </div>
            </div>
            </div>
            </section>
        </main>
    )
}
