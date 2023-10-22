"use client"
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

    


      const data = {
        "posts": [
            {
              "id": "clap8tyto3l1c0auq1qnvf0ig",
              "title": "Ogrzewanie centralne",
              "location": "Ciechocinek",
              "description": "Realizacja projektu ogrzewania centralnego w Ciechocinku.",
              "photos": [
                {
                  "id": "clc4no5ot2kat0bw6ujnezqly",
                  "url": "https://media.graphassets.com/X4UQNOFRr5YGLHNv6qbw"
                },
                {
                  "id": "clc4no5o32lbx0auuyzfvvren",
                  "url": "https://media.graphassets.com/RVmYDvJQPGIYokZuLn3J"
                },
                {
                  "id": "clc4no5ok2kal0bw6nkcun04b",
                  "url": "https://media.graphassets.com/rkcCWrzMTxO14HxNCKnW"
                },
                {
                  "id": "clc4no5op2ld20cw6p3sa9bb0",
                  "url": "https://media.graphassets.com/hieUsliJQLye2lxmUf8v"
                }
              ]
            },
            {
              "id": "clape66ua3pni0auqsrj0wxip",
              "title": "Ogrzewanie Centralne",
              "location": "Kraków, Klimeckiego",
              "description": "Montaż jednostki zewnętrznej oraz trzech jednostek wewnętrznych.",
              "photos": [
                {
                  "id": "clc4no5op2ld20cw6p3sa9bb0",
                  "url": "https://media.graphassets.com/hieUsliJQLye2lxmUf8v"
                },
                {
                  "id": "clc4no5ot2kat0bw6ujnezqly",
                  "url": "https://media.graphassets.com/X4UQNOFRr5YGLHNv6qbw"
                },
                {
                  "id": "clc4no5ok2kal0bw6nkcun04b",
                  "url": "https://media.graphassets.com/rkcCWrzMTxO14HxNCKnW"
                },
                {
                  "id": "clc4no5o32lbx0auuyzfvvren",
                  "url": "https://media.graphassets.com/RVmYDvJQPGIYokZuLn3J"
                }
              ]
            }
          ]
        }

    return(
        <main className="min-h-screen scroll-smooth">
            <section id="Realizacje" className="max-w-7xl m-auto xl:px-16 flex flex-col gap-5">
                <div>
                    <h1 className="text-5xl font-semibold p-5 pb-8 border-b-2 border-slate-600/30">Realizacje</h1>
                </div>
                {data.posts.map((x) => <CarouselPanel key={x.id} title={x.title} location={x.location} desc={x.description} photos={x.photos}/>)}
            </section>


        </main>
    )
}
