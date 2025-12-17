"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { kaiseiTokuminBold } from "../../lib/fonts"

const messages = [
  {
    id: 1,
    content: "Christmas offer is now available 🎁",
    link: null,
  },
  {
    id: 2,
    content: "Shop Now →",
    link: "/products",
  },
  {
    id: 3,
    content: "Limited-time festive discounts 🎄",
    link: null,
  },
]

function OfferBanner() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full bg-[#d01f1f] text-black text-xs py-1 overflow-hidden">
      <div className="relative h-5 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={messages[index].id}
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-120%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute whitespace-nowrap font-medium text-white"
          >
            {messages[index].link ? (
              <Link
                href={messages[index].link}
                className="font-semibold underline"
              >
                {messages[index].content}
              </Link>
            ) : (
              messages[index].content
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full sticky top-0 z-50">
      <OfferBanner />

      <div className="w-full bg-white ">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <Link href="/" className="hover:text-black">Home</Link>
            <Link href="/trending" className="hover:text-black">Trending</Link>
            <Link href="/about" className="hover:text-black">About</Link>
             <Link href="/about" className="hover:text-black">About</Link>
              <Link href="/about" className="hover:text-black">About</Link>
          </nav>

          <Link
            href="/"
            className={`${kaiseiTokuminBold.className} text-3xl font-extrabold tracking-wide text-orange-500 select-none`}
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
              <span className="hidden sm:block text-sm text-gray-700">
                Ezra
              </span>
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
