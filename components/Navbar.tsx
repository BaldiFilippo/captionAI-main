import Image from "next/image"
import Link from "next/link"
import { UserButton } from "@clerk/nextjs"

export default function Navbar() {
    return (
        <div className="fixed backdrop-blur-sm bg-white/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 shadow-sm flex items-center justify-between">
            <div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
                <Link
                    href="/"
                    className="h-10 py-2 px-4 underline-offset-4 hover:underline text-primary inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
                >
                    Api Project 2.0
                </Link>

                <div className="flex">
                    <UserButton />
                </div>
            </div>
        </div>
    )
}
