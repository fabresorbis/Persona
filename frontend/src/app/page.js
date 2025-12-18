"use client"

import Image from "next/image"
import Navbar from "../../components/common/Navbar"
import CardBlockSection from "../../components/sections/CardBlockSection"
import Footer from "../../components/common/Footer"
import Link from "next/link"
import { Gift } from "lucide-react"

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#d01f1f]">
      <Navbar />

      <main className="w-full relative h-[30vh] lg:h-[45vh]">
        <Image
          src="/images/banner1.jpg"
          alt="Persona Banner"
          fill
          priority
          className="object-cover"
        />

       
      </main>

      <CardBlockSection
        heading="Featured Collections"
        items={[
          {
            title: "T-Shirts",
            image: "https://thebridgestore.in/cdn/shop/files/JColeFront.jpg",
          },
          {
            title: "Mugs",
            image:
              "https://static-assets-prod.fnp.com/images/pr/m/v300/personalised-couple-magic-mug.jpg",
          },
          {
            title: "Phone Cases",
            image: "https://m.media-amazon.com/images/I/71z8bQorkML.jpg",
          },
          {
            title: "Gifts",
            image:
              "https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg",
          },
        ]}
      />

      <Footer/>
        <Link
        href="/products"
        className="fixed bottom-6 right-6  flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-400 shadow-xl "
      >
       
        <Gift className="h-8 w-8 text-black" strokeWidth={2.5} />
      </Link>
      

    </div>
  )
}
