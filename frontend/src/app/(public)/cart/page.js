"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Trash2, Minus, Plus } from "lucide-react"

export default function CartPage() {
  const [items, setItems] = useState([])

  /* -----------------------------
     LOAD CART
  ------------------------------*/
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    setItems(cart)
  }, [])

  /* -----------------------------
     UPDATE CART
  ------------------------------*/
  const updateCart = (updated) => {
    setItems(updated)
    localStorage.setItem("cart", JSON.stringify(updated))
  }

  const increaseQty = (id) => {
    updateCart(
      items.map(i =>
        i.productId === id
          ? { ...i, quantity: i.quantity + 1 }
          : i
      )
    )
  }

  const decreaseQty = (id) => {
    updateCart(
      items
        .map(i =>
          i.productId === id
            ? { ...i, quantity: i.quantity - 1 }
            : i
        )
        .filter(i => i.quantity > 0)
    )
  }

  const removeItem = (id) => {
    updateCart(items.filter(i => i.productId !== id))
  }

  /* -----------------------------
     PRICE CALCULATION
  ------------------------------*/
  const subtotal = useMemo(() => {
    return items.reduce(
      (sum, i) => sum + i.price * i.quantity,
      0
    )
  }, [items])

  /* -----------------------------
     EMPTY CART
  ------------------------------*/
  if (!items.length) {
    return (
      <div className="max-w-4xl mx-auto p-12 text-center">
        <h2 className="text-2xl font-semibold">Your cart is empty</h2>
        <p className="text-gray-500 mt-2">
          Looks like you haven’t added anything yet
        </p>
        <Link
          href="/products"
          className="inline-block mt-6 bg-black text-white px-6 py-3 rounded"
        >
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-10">
      
      {/* CART ITEMS */}
      <div className="md:col-span-2 bg-white border rounded-xl p-6 space-y-6">
        <h1 className="text-2xl font-semibold">Shopping Cart</h1>

        {items.map(item => (
          <div
            key={item.productId}
            className="flex gap-4 items-center border-b pb-4"
          >
            <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-zinc-100">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-500">
                ₹{item.price}
              </p>

              {/* Quantity */}
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => decreaseQty(item.productId)}
                  className="border rounded p-1"
                >
                  <Minus size={14} />
                </button>
                <span className="w-8 text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => increaseQty(item.productId)}
                  className="border rounded p-1"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <div className="text-right space-y-2">
              <p className="font-medium">
                ₹{item.price * item.quantity}
              </p>
              <button
                onClick={() => removeItem(item.productId)}
                className="text-red-600 hover:text-red-800"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* SUMMARY */}
      <div className="bg-white border rounded-xl p-6 space-y-4 h-fit">
        <h2 className="text-xl font-semibold">Order Summary</h2>

        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="border-t pt-4 flex justify-between font-semibold">
          <span>Total</span>
          <span>₹{subtotal}</span>
        </div>

        <Link
          href="/checkout?mode=cart"
          className="block text-center bg-black text-white py-3 rounded mt-4"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  )
}
