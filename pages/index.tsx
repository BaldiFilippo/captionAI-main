import Head from "next/head"
import { NextPage } from "next"

import Navbar from "../components/Navbar"
import Link from "next/link"

const Home: NextPage = () => {
    return (
        <>
            <div className="relative isolate overflow-hidden bg-white h-screen">
                <Navbar />
                <svg
                    className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M.5 200V.5H200" fill="none" />
                        </pattern>
                    </defs>
                    <rect
                        width="100%"
                        height="100%"
                        strokeWidth={0}
                        fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
                    />
                </svg>
                <div className="flex justify-center content-center">
                    <div className="mx-auto text-center px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
                            {/* <h1 className="mt-10 text-4xl text-center font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Deploy to the cloud with confidence
                        </h1> */}
                            <h1 className="text-5xl md:text-6xl lg:text-7xl mt-10 text-gray-900 text-center font-extrabold leading-tight tracking-tighter ">
                                Lascia descrivere le tue immagini all'AI
                            </h1>
                            <p className="text-base sm:text-lg mt-8 max-w-prose text-slate-600 leading-8 mb-5 text-center">
                                {" "}
                                Carica la tua immagine in qualsiasi formato e
                                otterrai la descrizione perfetta per ogni
                                esigienza{" "}
                            </p>
                            <Link
                                href="/caption"
                                className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                                Crea la tua descrizione
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
