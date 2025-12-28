"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState, useMemo } from "react"
import Image from "next/image"
import api from "@/services/axios"
import { applyCoupon } from "@/services/checkout.service"

export default function CheckoutClient() {
  const searchParams = useSearchParams()
  const mode = searchParams.get("mode")

  const [items, setItems] = useState([])
  const [coupon, setCoupon] = useState("")
  const [discount, setDiscount] = useState(0)
  const [applied, setApplied] = useState(false)
  const [error, setError] = useState("")

  /* -------------------------------
     LOAD PRODUCTS
  --------------------------------*/

  useEffect(() => {
    if (mode === "direct") {
      const productId = searchParams.get("productId")
      const qty = Number(searchParams.get("qty") || 1)
      loadSingleProduct(productId, qty)
    }

    if (mode === "cart") {
      loadCartProducts()
    }
  }, [mode])

  const loadSingleProduct = async (productId, qty) => {
    const product = await api.get(`/products/${productId}`)

    setItems([
      {
        id: product._id,
        name: product.name,
        price: product.basePrice,
        image: product.images?.[0],
        quantity: qty
      }
    ])
  }

  const loadCartProducts = async () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    if (!cart.length) return

    const productIds = cart.map(i => i.productId)
    const products = await api.post("/products/bulk", { productIds })

    const mapped = products.map(p => {
      const cartItem = cart.find(c => c.productId === p._id)
      return {
        id: p._id,
        name: p.name,
        price: p.basePrice,
        image: p.images?.[0],
        quantity: cartItem.quantity
      }
    })

    setItems(mapped)
  }

  /* -------------------------------
     PRICE CALCULATION
  --------------------------------*/

  const subtotal = useMemo(() => {
    return items.reduce(
      (sum, i) => sum + i.price * i.quantity,
      0
    )
  }, [items])

  const DELIVERY_THRESHOLD = 10
  const DELIVERY_CHARGE = 2

  const deliveryCharge =
    subtotal > 0 && subtotal < DELIVERY_THRESHOLD
      ? DELIVERY_CHARGE
      : 0

  const discountAmount = (subtotal * discount) / 100
  const total = subtotal - discountAmount + deliveryCharge

  /* -------------------------------
     COUPON APPLY
  --------------------------------*/

  const handleApplyCoupon = async () => {
    try {
      const res = await applyCoupon(coupon)

      if (!res.valid) {
        setError(res.message || "Invalid coupon")
        setDiscount(0)
        setApplied(false)
      } else {
        setDiscount(res.discount)
        setApplied(true)
        setError("")
      }
    } catch {
      setError("Coupon validation failed")
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10">

      {/* ORDER SUMMARY */}
      <div className="bg-white border rounded-xl p-6 space-y-4">
        <h2 className="text-xl font-semibold">Order Summary</h2>

        {items.map(item => (
          <div key={item.id} className="flex gap-4">
            <div className="relative w-20 h-20 bg-zinc-100 rounded overflow-hidden">
              <Image src={item.image} alt={item.name} fill />
            </div>
            <div className="flex-1">
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-zinc-500">
                ₹{item.price} × {item.quantity}
              </p>
            </div>
            <p className="font-medium">
              ₹{item.price * item.quantity}
            </p>
          </div>
        ))}

        <div className="border-t pt-4 space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          {applied && (
            <div className="flex justify-between text-green-600">
              <span>Coupon Discount</span>
              <span>-₹{discountAmount}</span>
            </div>
          )}

          {deliveryCharge > 0 && (
            <div className="flex justify-between text-gray-600">
              <span>Delivery Charge</span>
              <span>₹{deliveryCharge}</span>
            </div>
          )}

          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
        </div>
      </div>

      {/* CHECKOUT */}
      <div className="bg-white border rounded-xl p-6 space-y-6">
        <h2 className="text-xl font-semibold">Checkout</h2>

        <div>
          <label className="text-sm font-medium">Apply Coupon</label>
          <div className="flex gap-2">
            <input
              value={coupon}
              onChange={e => setCoupon(e.target.value.toUpperCase())}
              className="flex-1 border rounded px-3 py-2"
            />
            <button
              onClick={handleApplyCoupon}
              className="bg-black text-white px-4 rounded"
            >
              Apply
            </button>
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
        </div>

        <button className="w-full bg-black text-white py-3 rounded">
          Place Order
        </button>
      </div>
    </div>
  )
}
