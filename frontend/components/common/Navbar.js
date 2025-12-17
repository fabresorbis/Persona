"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { kaiseiTokumin } from "../../lib/fonts"



export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full sticky top-0 z-50">
      <div className="w-full bg-lime-400 text-black text-xs text-center py-1">
        Christmas offer is now available 🎁
      </div>

      <div className="w-full bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <Link href="/" className="hover:text-black">Home</Link>
            <Link href="/trending" className="hover:text-black">Trending</Link>
            <Link href="/about" className="hover:text-black">About</Link>
          </nav>

          <Link
            href="/"
           className={`${kaiseiTokumin.className} text-2xl font-semibold tracking-wide text-orange-500`}


          >
            PERSONA
          </Link>

          <div className="flex items-center gap-4">
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder="Search"
                className="w-72 h-10 rounded-md border border-gray-300 pl-10 pr-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                ⌕
              </span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer">
              <span className="hidden sm:block text-sm text-gray-700">Ezra</span>
              <Image
                src="https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg"
                alt="User Avatar"
                width={36}
                height={36}
                className="rounded-full object-cover"
              />
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded border"
            >
              ☰
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t bg-white px-6 py-4 space-y-4 text-sm">
            <Link href="/" className="block">Home</Link>
            <Link href="/trending" className="block">Trending</Link>
            <Link href="/about" className="block">About</Link>
            <input
              type="text"
              placeholder="Search"
              className="w-full h-10 rounded-md border border-gray-300 px-3 text-sm"
            />
          </div>
        )}
      </div>
    </header>
  )
}
