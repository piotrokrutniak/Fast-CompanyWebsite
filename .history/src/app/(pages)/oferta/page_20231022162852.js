import Image from "next/image"
import img1 from "../../media/img/air-conditioning.jpg"
import img2 from "../../media/img/heat-pump-2.jpg"
import img3 from "../../media/img/heating.jpg"
import SimplePanel from "@/app/components/common/simplePanel"
import Link from "next/link"
import ButtonBase from "@/app/components/common/buttonBase"
import { BsArrowUpShort } from "react-icons/bs"

export default function Oferta(){
    return(
        <main className="min-h-screen">
            <section id="oferty" className="m-auto">
                <div className="sm:p-16 max-w-7xl m-auto p-5">
                    <h1 className="mb-5 pb-5 text-4xl font-semibold border-b-2 border-slate-600/30"> Nasza oferta </h1>
                    <p className="text-lg sm:text-xl opacity-80 font-normal leading-relaxed"> Jeśli szukasz profesjonalnej i rzetelnej firmy zajmującej się montażem klimatyzacji, pomp ciepła i ogrzewania centralnego, to dobrze trafiłeś. Nasza firma oferuje kompleksowe usługi w zakresie projektowania, instalacji i serwisu systemów chłodniczych i grzewczych dla domów, biur i obiektów przemysłowych. Zaufaj naszemu doświadczeniu i wiedzy, a zapewnimy Ci komfort i oszczędność energii przez cały rok.</p>
                    <p className="text-lg sm:text-xl opacity-80 font-normal leading-relaxed"> Nasza firma ma swoją siedzibę w województwie małopolskim, ale świadczymy usługi na terenie całego kraju. Niezależnie od tego, gdzie się znajdujesz, możesz liczyć na naszą szybką i sprawną realizację zlecenia. Jesteśmy mobilni i elastyczni, a nasze doświadczenie pozwala nam sprostać każdemu wyzwaniu. </p>
                </div>

                <div className="bg-slate-600/10 lg:py-28 p-2 py-10">
                    <div className="w-fit grid lg:grid-cols-2 2xl:grid-cols-3 max-w-7xl m-auto gap-10 lg:gap-10 items-stretch">
                        <Card scrollTo="#klimatyzacja" image={img1} title="Klimatyzacje" desc="Zapewniają optymalną temperaturę i wilgotność powietrza, poprawiają jakość powietrza i komfort termiczny. Oferujemy klimatyzatory typu split, multi-split, ścienne, podłogowe i sufitowe."/>
                        <Card scrollTo="#pompy" image={img2} title="Pompy Ciepła" desc="Wykorzystują odnawialne źródła energii do ogrzewania i chłodzenia pomieszczeń oraz podgrzewania wody użytkowej. Pozwalają na znaczne obniżenie kosztów eksploatacji i emisji CO2."/>
                        <Card scrollTo="#ogrzewanie" image={img3} title="Instalacje grzewcze" desc="Zapewniają odpowiednie ogrzewanie pomieszczeń i wody użytkowej. Instalacje grzewcze są bezpieczne, wydajne i komfortowe."/>
                    </div>
                </div>
            </section>
            <section id="informacje" className="max-w-7xl m-auto sm:p-16">
                <SimplePanel button={<ScrollTopButton/>} id="klimatyzacja" title="Klimatyzacje" desc="Nasza firma specjalizuje się w kompleksowym montażu klimatyzacji zarówno w domach, jak i biurach. Oferujemy pełen zakres usług, począwszy od zakupu jednostki, poprzez przygotowanie, aż do podpięcia i oddania do użytku. Nasze usługi nie ograniczają się jedynie do montażu - oferujemy również przegląd, serwis oraz wymianę jednostek klimatyzacyjnych." img={img1}/>
                <SimplePanel button={<ScrollTopButton/>} id="pompy" title="Pompy Ciepła" desc="Jesteśmy ekspertami w montażu pomp ciepła zarówno w domach, jak i biurach. Oferujemy pełen zakres usług - doradztwo przy wyborze odpowiedniego modelu, przygotowanie instalacji oraz podłączenie i uruchomienie. Nasze doświadczenie obejmuje nie tylko montaż, ale także przegląd, serwis i wymianę jednostek. Dzięki naszym usługom możesz cieszyć się efektywnym i ekologicznym systemem ogrzewania i chłodzenia." img={img2}/>
                <SimplePanel button={<ScrollTopButton/>} id="ogrzewanie" title="Ogrzewanie Centralne" desc="Posiadamy wieloletnie doświadczenie w montażu systemów ogrzewania centralnego, zarówno w domach, jak i budynkach komercyjnych. Nasza firma jest doskonale zaznajomiona z branżą i oferuje pełen zakres usług - doradztwo przy wyborze odpowiedniego systemu, projektowanie instalacji, montaż oraz uruchomienie. Nie ograniczamy się tylko do instalacji - zapewniamy również przegląd, serwis oraz modernizację istniejących systemów. Dzięki naszym usługom możesz mieć pewność, że Twój system ogrzewania centralnego będzie efektywny i zapewni Ci komfort przez wiele lat." img={img3}/>
            </section>
        </main>
    )
}

function Card({...props}){
    return(

        <div className="lg:w-96 bg-slate-600/30 hover:bg-slate-600/50 rounded-xl min-w-fit flex flex-col overflow-hidden shadow-md lg:hover:-translate-y-4 shadow-black/20 transition-all">
            <Link href={props.scrollTo}>
                <div className="lg:h-64 h-screen-1/2 w-full bg-black/20 relative cursor-pointer">
                    <Image src={props.image} layout='fill' objectFit='cover' className='z-0 opacity-80'/>
                </div>
            </Link>
            <div className="px-5 py-3 text-2xl font-semibold">{props.title ?? "Title" }</div>
            <div className="px-5 pb-5 text-lg opacity-80">{props.desc ?? "Description" }</div>
        </div>
    )
}

function ScrollTopButton(){
    return(
        <Link href="#">
            <ButtonBase text="Powrót do góry" color="black" icon={<BsArrowUpShort className="w-6 h-6"/>} className="px-2 h-12 border-solid border-2 border-white/25 hover:border-white w-fit"/>
        </Link>
    )
}