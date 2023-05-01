import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'

import { HiOutlineClipboardDocument } from 'react-icons/hi2'

export default function HeroSection() {
  const [buttonText, setButtonText] = useState('Copy')

  const copyToClipboard = (caption: string) => {
    navigator.clipboard.writeText(caption!)

    setButtonText('Copied!') // set the button text to "Copied!" when text is copied
    setTimeout(() => {
      setButtonText('Copy') // set the button text back to "Copy" after 2 seconds
    }, 2000)
  }

  return (
    <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-28 mt-20">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-7xl text-white">
        Easily add captions to your images
        <span className="relative whitespace-nowrap text-[#757fdf]">
          <span className="relative"> using AI.</span>
        </span>
      </h1>
      <p className="mx-auto mt-4 md:mt-12 max-w-xl text-lg text-stone-400 leading-7">
        Take your images to the next level with custom captions.
      </p>
      <div className="flex justify-center space-x-4">
        <a
          className="bg-white rounded-xl text-black font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-gray-100 border"
          href="https://youtu.be/9TZsh_-y9DA"
          target="_blank"
          rel="noreferrer"
        >
          Learn how it's built
        </a>
        <Link
          className="bg-[#4b4cb7] rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-4 hover:bg-[#4b4cb7]/80"
          href="/caption"
        >
          Create a caption
        </Link>
      </div>
    </main>
  )
}
