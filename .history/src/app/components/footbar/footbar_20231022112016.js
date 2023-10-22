import Link from "next/link";

export default function FootBar(){
    return(
        <footer className="bg-slate-500/5 mt-20">
            <div className="max-w-7xl w-full max-sm:px-5 p-10 flex gap-8 sm:gap-20 m-auto">
                <div className="flex flex-col gap-3">
                    <h1 className="font-bold text-2xl md:text-3xl">Jacek Stawowy</h1>
                    <h2 className="font-semibold text-xl">Kraków</h2>
                    <h2 className="font-thin text-xl">NIP: 6791924300</h2>
                </div>

                <div className="flex flex-col gap-3">
                    <h1 className="font-bold text-2xl md:text-3xl">Kontakt</h1>
                    <h2 className="font-thin text-xl">Telefon: 
                    <Link href={"tel:+48 509 012 407"} className="cursor-pointer hover:text-emerald-200">
                        <p className="whitespace-nowrap">
                            +48 509 012 407
                        </p>
                    </Link>
                    </h2>
                    <h2 className="font-thin text-xl">Email: 
                    <Link href={"email:fast@firma.pl"} className="cursor-pointer hover:text-emerald-200">
                        <p className="whitespace-nowrap">
                            fast@firma.pl
                        </p>
                    </Link>
                    </h2>
                    <h2 className="font-thin text-xl">Pon-Pt 8.00-19.00</h2>
                </div>
            </div>
            <div className="bg-black flex p-10 ">
                <div className="xs:m-auto w-fit">
                    © Piotr Okrutniak 2022
                </div>
            </div>
        </footer>
    )
}