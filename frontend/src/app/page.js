"use client"

import Image from "next/image"
import Navbar from "../../components/common/Navbar"
import CardBlockSection from "../../components/sections/CardBlockSection"
import Footer from "../../components/common/Footer"

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-linear-to-br from-zinc-100 to-zinc-300">
      <Navbar />

      <main className="w-full relative h-[50vh]">
        <Image
          src="/images/banner.jpg"
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

    </div>
  )
}
