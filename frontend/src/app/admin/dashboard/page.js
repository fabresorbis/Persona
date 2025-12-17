"use client"

import { Users, ShoppingCart, Package, Percent } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-600">Overview of platform activity</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white border rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Users</p>
              <p className="text-2xl font-semibold mt-1">1,248</p>
            </div>
            <Users className="text-gray-400" />
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Orders</p>
              <p className="text-2xl font-semibold mt-1">342</p>
            </div>
            <ShoppingCart className="text-gray-400" />
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Products</p>
              <p className="text-2xl font-semibold mt-1">58</p>
            </div>
            <Package className="text-gray-400" />
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Active Coupons</p>
              <p className="text-2xl font-semibold mt-1">12</p>
            </div>
            <Percent className="text-gray-400" />
          </div>
        </div>
      </div>

      <div className="bg-white border rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between border-b pb-2">
            <span>John Doe ordered Custom T-Shirt</span>
            <span className="text-gray-500">£29.99</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span>Emma Watson ordered Photo Mug</span>
            <span className="text-gray-500">£14.50</span>
          </div>
          <div className="flex justify-between">
            <span>Alex Smith ordered Hoodie</span>
            <span className="text-gray-500">£49.00</span>
          </div>
        </div>
      </div>
    </div>
  )
}
