import { Suspense } from "react"
import CartClient from "./CartClient.jsx"

export default function CartPage() {
  return (
    <Suspense fallback={<CartSkeleton />}>
      <CartClient />
    </Suspense>
  )
}

function CartSkeleton() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-4 animate-pulse">
      <div className="h-6 w-1/3 bg-gray-200 rounded" />
      <div className="h-32 bg-gray-200 rounded" />
      <div className="h-32 bg-gray-200 rounded" />
    </div>
  )
}
