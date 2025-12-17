"use client"

import { useState } from "react"

export default function AdminOrdersPage() {
  const [orders] = useState([
    {
      id: "ORD-1001",
      user: "John Doe",
      product: "Custom Printed T-Shirt",
      address: "221B Baker Street, London, UK",
      amount: 29.99,
    },
    {
      id: "ORD-1002",
      user: "Emma Watson",
      product: "Photo Mug",
      address: "12 Oxford Road, Manchester, UK",
      amount: 14.5,
    },
  ])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Manage Orders</h1>
        <p className="text-gray-600">View and manage customer orders</p>
      </div>

      <div className="bg-white border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="px-4 py-3">Order ID</th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Address</th>
              <th className="px-4 py-3">Paid Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id} className="border-t">
                <td className="px-4 py-3 font-mono">{order.id}</td>
                <td className="px-4 py-3">{order.user}</td>
                <td className="px-4 py-3">{order.product}</td>
                <td className="px-4 py-3 max-w-xs truncate">{order.address}</td>
                <td className="px-4 py-3 font-medium">£{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
