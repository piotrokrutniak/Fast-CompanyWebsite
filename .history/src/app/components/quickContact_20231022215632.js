"use client";

import Link from "next/link";
import { useState } from "react"
import {BsChevronDoubleRight, BsPhone} from "react-icons/bs"

export default function QuickContact(){
    const [folded, setFolded] = useState(true)

    function Transition(){
        setFolded((old) => !old)
    }

    return(
        <div className="bg-gradient-to-br from-sky-500 to-emerald-200 rounded-xl w-fit sm:p-5 p-3 text-base z-20
            font-normal shadow-md shadow-black/50 fixed right-5 bottom-5 flex items-center gap-4 transition-all ease-in-out whitespace-nowrap">
            <BsChevronDoubleRight className={`${folded ? "rotate-180" : "rotate-0"} transition-all ease-in h-8 w-8 cursor-pointer active:opacity-60 select-none`}
                onClick={() => Transition()}/> 
            <div className="flex gap-2">
                <div className={`${folded ? "w-0" : "w-72 max-sm:w-44"} overflow-hidden transition-all ease-in flex max-sm:flex-col`}><p>Skontaktuj się z nami:</p> <Link href={"tel:+48 509 012 407"} className="cursor-pointer">+48 509 012 407</Link></div>
                <BsPhone className="h-7 w-7 animate-bounce self-center"/>
            </div>
        </div>
    )
}