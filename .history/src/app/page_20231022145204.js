import Image from 'next/image'
import ButtonBase from './components/common/buttonBase';
import {BsSend} from "react-icons/bs"
import award2015 from "./media/img/2015.png"
import award2016 from "./media/img/2016.png"
import award2017 from "./media/img/2017gold.png"
import award2016orzel from "./media/img/pob.jpg"
import ac1 from "./media/img/air-conditioning-2.jpg"
import ac2 from "./media/img/heat-pump-2.jpg"
import ac3 from "./media/img/heating-2.jpg"
import Link from 'next/link';
import { CarouselSlider } from './components/common/carouselSlider';

export default function Home() {

  const slides = [
    {img: ac1, desc:"Klimatyzacje"},
    {img: ac2, desc:"Pompy ciepła"},
    {img: ac3, desc:"Instalacje grzewcze"}
  ]

  return (
    <>
    <CarouselSlider slides={slides}/>
    <main className="min-h-screen">
      <div className="z-10 w-full items-center justify-between text-sm lg:flex p-10 max-xs:p-5">
        <div className='max-w-7xl m-auto flex gap-20 py-10 sm:py-32 align-middle h-full max-md:flex-col-reverse flex-row-reverse max-lg:gap-10'>
          <div className='w-96 h-96 shrink-0 bg-slate-500 rounded-xl relative self-center max-md:w-full overflow-clip'>
            <Image src={ac3} layout='fill' objectFit='cover'/>
          </div>
          <div className='relative self-center'>
            <div className='flex justify-between gap-5 max-lg:flex-col mb-5'>
              <h1 className='text-5xl font-semibold max-sm:text-3xl'>F.U.H FAST</h1>
              <Link href={"/kontakt"}>
                <ButtonBase text="Skontaktuj się" color="black" icon={<BsSend/>} className="px-2 h-12 border-solid border-2 border-white/25 hover:border-white w-fit"/>
              </Link>
            </div>
            <h2 className='text-xl font-thin leading-9 max-sm:text-lg'>Jeśli szukasz firmy, która zapewni Ci wysokiej jakości usługi z zakresu hydrauliki, instalacji sanitarnych, klimatyzacji i wentylacji, to dobrze trafiłeś. Nasza firma jest liderem w tej branży od 2006 roku i posiada certyfikat Rzetelna Firma. Zajmujemy się montażem, naprawą i konserwacją systemów hydraulicznych i sanitarnych, a także instalacją i serwisem urządzeń klimatyzacyjnych i wentylacyjnych, w tym rekuperatorów. Zapewniamy fachową obsługę, atrakcyjne ceny i gwarancję satysfakcji. Skontaktuj się z nami i przekonaj się sam.</h2>
          </div>
        </div>
      </div>
      <div className="z-10 w-full items-center justify-between text-sm lg:flex p-10 max-xs:p-5">
        <div className='max-w-7xl m-auto flex gap-20 py-10 sm:py-32 align-middle h-full max-md:flex-col-reverse max-lg:gap-10'>
          <div className='w-96 h-96 shrink-0 bg-slate-500 rounded-xl relative self-center max-md:w-full overflow-clip'>
            <Image src={ac3} layout='fill' objectFit='cover'/>
          </div>
          <div className='relative self-center'>
            <div className='flex justify-between gap-5 max-lg:flex-col mb-5'>
              <h1 className='text-5xl font-semibold max-sm:text-3xl'>Lokalizacja</h1>
              <Link href={"/kontakt"}>
                <ButtonBase text="Skontaktuj się" color="black" icon={<BsSend/>} className="px-2 h-12 border-solid border-2 border-white/25 hover:border-white w-fit"/>
              </Link>
            </div>
            <h2 className='text-xl font-thin leading-9 max-sm:text-lg'>Jeśli szukasz firmy, która zapewni Ci wysokiej jakości usługi z zakresu hydrauliki, instalacji sanitarnych, klimatyzacji i wentylacji, to dobrze trafiłeś. Nasza firma jest liderem w tej branży od 2006 roku i posiada certyfikat Rzetelna Firma. Zajmujemy się montażem, naprawą i konserwacją systemów hydraulicznych i sanitarnych, a także instalacją i serwisem urządzeń klimatyzacyjnych i wentylacyjnych, w tym rekuperatorów. Zapewniamy fachową obsługę, atrakcyjne ceny i gwarancję satysfakcji. Skontaktuj się z nami i przekonaj się sam.</h2>
          </div>
        </div>
      </div>
      <div className="z-10 w-full items-center justify-between text-sm lg:flex p-10 max-xs:p-5">
        <div className='max-w-7xl m-auto flex gap-20 py-10 sm:py-32 align-middle h-full max-md:flex-col max-lg:gap-10'>
          <div className='relative self-center'>
            <div className='flex justify-between max-lg:flex-col gap-5 mb-5'>
              <h1 className='text-5xl font-semibold max-sm:text-3xl'>Zdobyliśmy wasze zaufanie!</h1>
            </div>
            <h2 className='text-xl font-thin leading-9 max-sm:text-lg'>Dzięki nieustannej etyce pracy i dbałości o jakość usług, firma została uhonorowana wieloma prestiżowymi nagrodami i wyróżnieniami. Wysiłki firmy w podnoszeniu standardów jakości oraz utrzymywaniu doskonałej etyki pracy zostały docenione przez renomowane organizacje, takie jak Firma Godna Zaufania czy Polski Orzeł Biznesu.</h2>
          </div>
          <div className='flex self-center shrink-0 h-full max-md:pt-10 max-sm:pt-5'>
            <div className='grid grid-cols-2 gap-5 self-center'>
              <Link href="https://www.firmagodnazaufania.pl/about" target="_blank">
                <div className='w-48 h-48 shrink-0 bg-white rounded-xl relative items-center justify-center flex cursor-pointer max-sm:w-36 max-sm:h-36 p-4'>
                  <Image src={award2015} alt="Firma Godna Zaufania 2015" className='text-black' width={120} height={120}/>
                </div>
              </Link>
              <Link href="https://www.firmagodnazaufania.pl/about" target="_blank">
                <div className='w-48 h-48 shrink-0 bg-white rounded-xl relative items-center justify-center flex cursor-pointer max-sm:w-36 max-sm:h-36 p-4'>
                  <Image src={award2016} alt="Firma Godna Zaufania 2015" className='text-black' width={120} height={120}/>
                </div>
              </Link>
              <Link href="https://www.firmagodnazaufania.pl/about" target="_blank">
                <div className='w-48 h-48 shrink-0 bg-white rounded-xl relative items-center justify-center flex cursor-pointer max-sm:w-36 max-sm:h-36 p-4'>
                  <Image src={award2017} alt="Firma Godna Zaufania 2015" className='text-black' width={120} height={120}/>
                </div>
              </Link>
              <Link href="http://www.polskiorzelbiznesu.pl/" target="_blank">
                <div className='w-48 h-48 shrink-0 bg-white rounded-xl relative items-center justify-center flex cursor-pointer max-sm:w-36 max-sm:h-36 p-4'>
                  <Image src={award2016orzel} alt="Firma Godna Zaufania 2015" className='text-black' width={170} height={120}/>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}


