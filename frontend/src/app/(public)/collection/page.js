"use client"

import Image from "next/image"

const items = [
  {
    title: "T-Shirts",
    image: "https://thebridgestore.in/cdn/shop/files/JColeFront.jpg"
  },
  {
    title: "Mugs",
    image:
      "https://static-assets-prod.fnp.com/images/pr/m/v300/personalised-couple-magic-mug.jpg"
  },
  {
    title: "Phone Cases",
    image: "https://m.media-amazon.com/images/I/71z8bQorkML.jpg"
  },
  {
    title: "Gifts",
    image:
      "https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg"
  }
]

const trendingProducts = [
  {
    title: "Custom Photo Mug",
    price: "₹499",
    image:
      "https://static-assets-prod.fnp.com/images/pr/m/v300/personalised-couple-magic-mug.jpg"
  },
  {
    title: "Printed T-Shirt",
    price: "₹799",
    image: "https://thebridgestore.in/cdn/shop/files/JColeFront.jpg"
  },
  {
    title: "Phone Case",
    price: "₹399",
    image: "https://m.media-amazon.com/images/I/71z8bQorkML.jpg"
  },
  {
    title: "Gift Hamper",
    price: "₹1,299",
    image:
      "https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg"
  },
  {
    title: "Photo Frame",
    price: "₹699",
    image:
      "https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg"
  },
  {
    title: "Keyring Print",
    price: "₹199",
    image:
      "https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg"
  }
]

export default function CollectionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-20">
      <section className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          PERSONA GIFTS & PRINTS
        </h1>
        <p className="text-lg text-gray-600">
          Your Moments, Perfectly Personalised
        </p>
        <p className="text-sm text-gray-500">
          Personalised Gifts for Every Occasion
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="group cursor-pointer rounded-xl overflow-hidden border bg-white shadow-sm hover:shadow-lg transition"
          >
            <div className="relative h-64 w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-4 text-center font-semibold">
              {item.title}
            </div>
          </div>
        ))}
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-center">
          Trending Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {trendingProducts.map((product) => (
            <div
              key={product.title}
              className="group rounded-xl overflow-hidden border bg-white shadow-sm hover:shadow-lg transition cursor-pointer"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4 text-center space-y-1">
                <div className="font-medium">{product.title}</div>
                <div className="text-sm text-gray-600">
                  {product.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-10 text-sm text-gray-700">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Our Services</h2>
          <ul className="space-y-1">
            <li>Personalised mugs</li>
            <li>Custom T-shirts & hoodies</li>
            <li>Photo frames & canvases</li>
            <li>Photo magnets</li>
            <li>Crystal 3D photo prints</li>
            <li>Pen printing</li>
            <li>Engraving on glass & plates</li>
            <li>Keyrings & phone cases</li>
            <li>Balloons & event decorations</li>
            <li>Greeting cards & gift hampers</li>
            <li>Corporate & promotional gifts</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Perfect For</h2>
          <ul className="space-y-1">
            <li>Birthdays</li>
            <li>Weddings & engagements</li>
            <li>Baby showers</li>
            <li>Graduations</li>
            <li>Festivals & special occasions</li>
            <li>Corporate events & staff gifting</li>
          </ul>
          <p className="pt-4 text-gray-600">
            High-quality printing | Fast turnaround | Affordable prices
          </p>
          <p className="pt-2 font-medium">
            Because every gift should tell a story
          </p>
        </div>
      </section>
    </div>
  )
}
