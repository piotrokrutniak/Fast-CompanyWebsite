"use client";
import { useState } from "react";
import ButtonBase from "../common/buttonBase";
import AcLogo from "../icons/ac";
import {BsList, BsXLg} from "react-icons/bs";
import Link from "next/link";

export default function Navbar(){
    const [mobileOpen, setMobileOpen] = useState(false)
    
    return(
        <nav className="sticky bg-black top-0 w-full py-3 px-5 sm:px-3 z-50" id="navbar">
            <div className="flex justify-between place-items-center mx-auto max-w-7xl h-auto align-middle">
                <Link href="/">
                    <div className="text-white text-4xl font-bold hover:cursor-pointer flex gap-2 align-middle
                        hover:text-emerald-200 hover:fill-emerald-200 fill-white active:opacity-90 transition-all">
                        <AcLogo className="h-10 w-10 top-px relative"/>
                        FAST
                    </div>
                </Link>
                <div className="align-middle gap-5 text-black transition-all ease-in hidden sm:flex">
                    <Link href="/oferta">
                        <ButtonBase text="Oferta" color="bg-transparent" className="hover:bg-slate-400/25 text-white"  onClick={() => setMobileOpen(false)}/>
                    </Link>
                    <Link href="/kontakt">
                        <ButtonBase text="Kontakt" color="bg-transparent" className="hover:bg-slate-400/25 text-white"  onClick={() => setMobileOpen(false)}/>
                    </Link>
                    <Link href="/realizacje">
                        <ButtonBase text="Realizacje" color="bg-transparent" className="hover:bg-slate-400/25 text-white"  onClick={() => setMobileOpen(false)}/>
                    </Link>
                </div>
                <div className=" sm:hidden flex">
                    <BsList className="h-12 w-12 cursor-pointer hover:fill-emerald-200 active:opacity-90" onClick={() => setMobileOpen(true)}/>
                </div>
            </div>

            <div className={`${mobileOpen ? "" : "translate-x-full"} absolute w-screen h-screen bg-black left-0 top-0 sm:hidden transition-all`}>
                <div id="mobile-header" className="flex p-3 cursor-pointer" onClick={() => setMobileOpen(false)}>
                    <BsXLg className="w-14 h-14 p-2 hover:fill-emerald-200 active:opacity-70 absolute right-4"/>
                </div>
                <div id="mobile-list" className="flex flex-col w-full gap-8 justify-center text-xl px-5 py-32">
                    <Link href="/kontakt" onClick={() => setMobileOpen(false)}>
                        <ButtonBase text="Kontakt" className="w-full py-6 px-10 bg-gradient-to-br hover:from-sky-500 hover:to-emerald-200 self-center" color="bg-slate-500/25"/>
                    </Link>
                    <Link href="/oferta" onClick={() => setMobileOpen(false)}>
                        <ButtonBase text="Oferta" className="w-full py-6 px-10 bg-gradient-to-br hover:from-sky-500 hover:to-emerald-200 self-center" color="bg-slate-500/25"/>
                    </Link>
                    <Link href="/realizacje" onClick={() => setMobileOpen(false)}>
                        <ButtonBase text="Realizacje" className="w-full py-6 px-10 bg-gradient-to-br hover:from-sky-500 hover:to-emerald-200 self-center" color="bg-slate-500/25"/>
                    </Link>
                    <Link href="/" onClick={() => setMobileOpen(false)}>
                        <ButtonBase text="Strona Główna" className="w-full py-6 px-10 bg-gradient-to-br hover:from-sky-500 hover:to-emerald-200 self-center" color="bg-slate-500/25"/>
                    </Link>
                </div>
                <div className="p-10 justify-self-center w-full text-center bottom-0 absolute">
                    © Piotr Okrutniak 2022
                </div>
            </div>
        </nav>
    )
}