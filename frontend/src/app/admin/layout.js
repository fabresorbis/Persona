"use client"

import { useState } from "react"
import Link from "next/link"

export default function AdminLayout({ children }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">

      {/* Mobile Top Bar */}
      <div className="lg:hidden border-b bg-white px-4 h-14 flex items-center justify-between">
        <span className="font-bold text-lg">Persona Admin</span>
        <button onClick={() => setOpen(true)} className="w-9 h-9 flex items-center justify-center">
          ☰
        </button>
      </div>

      <div className="flex">

        {/* DESKTOP SIDEBAR */}
        <aside className="hidden lg:flex w-64 bg-white border-r min-h-screen flex-col">
          <div className="p-6 text-xl font-bold">Persona Admin</div>

          <nav className="px-4 text-sm flex-1 space-y-6">

            {/* OVERVIEW */}
            <div>
              <p className="px-3 mb-2 text-xs font-semibold text-gray-400 uppercase">
                Overview
              </p>
              <Link href="/admin/dashboard" className="block px-3 py-2 rounded hover:bg-gray-100">
                Dashboard
              </Link>
              <Link href="/admin/reports" className="block px-3 py-2 rounded hover:bg-gray-100">
                Analytics & Reports
              </Link>
            </div>

            {/* COMMERCE */}
            <div>
              <p className="px-3 mb-2 text-xs font-semibold text-gray-400 uppercase">
                Commerce
              </p>
              <Link href="/admin/orders" className="block px-3 py-2 rounded hover:bg-gray-100">
                Orders
              </Link>
              <Link href="/admin/products" className="block px-3 py-2 rounded hover:bg-gray-100">
                Products
              </Link>
              <Link href="/admin/coupons" className="block px-3 py-2 rounded hover:bg-gray-100">
                Coupons & Discounts
              </Link>
            </div>

            {/* CONTENT MANAGEMENT */}
            <div>
              <p className="px-3 mb-2 text-xs font-semibold text-gray-400 uppercase">
                Content Management
              </p>
              <Link href="/admin/banners" className="block px-3 py-2 rounded hover:bg-gray-100">
                Homepage Banners
              </Link>
              <Link href="/admin/offers" className="block px-3 py-2 rounded hover:bg-gray-100">
                Promotional Offers
              </Link>
           
            </div>

            {/* MARKETING */}
            <div>
              <p className="px-3 mb-2 text-xs font-semibold text-gray-400 uppercase">
                Marketing
              </p>
              <Link href="/admin/email-campaigns" className="block px-3 py-2 rounded hover:bg-gray-100">
                Email Campaigns
              </Link>
              <Link href="/admin/seo" className="block px-3 py-2 rounded hover:bg-gray-100">
                SEO Settings
              </Link>
            </div>

            {/* ADMINISTRATION */}
            <div>
              <p className="px-3 mb-2 text-xs font-semibold text-gray-400 uppercase">
                Administration
              </p>
              <Link href="/admin/users" className="block px-3 py-2 rounded hover:bg-gray-100">
                Customers
              </Link>
              <Link href="/admin/admin-access" className="block px-3 py-2 rounded hover:bg-gray-100 font-medium">
                Admin Access
              </Link>
              <Link href="/admin/settings" className="block px-3 py-2 rounded hover:bg-gray-100">
                Platform Settings
              </Link>
            </div>

          </nav>

          {/* Desktop Logout */}
          <div className="border-t p-4">
            <button className="w-full px-4 py-2 text-sm font-medium text-red-600 border border-red-200 rounded hover:bg-red-50">
              Logout
            </button>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1  py-6">
          {children}
        </main>
      </div>

      {/* MOBILE DRAWER */}
      {open && (
        <>
          <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/40 z-40" />

          <aside className="fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-xl flex flex-col">
            <div className="p-6 flex items-center justify-between border-b">
              <span className="font-bold text-lg">Persona Admin</span>
              <button onClick={() => setOpen(false)}>✕</button>
            </div>

            <nav className="px-4 py-4 text-sm overflow-y-auto flex-1 space-y-4">

              <Link onClick={() => setOpen(false)} href="/admin/dashboard" className="block px-3 py-2 rounded hover:bg-gray-100">
                Dashboard
              </Link>
              <Link onClick={() => setOpen(false)} href="/admin/orders" className="block px-3 py-2 rounded hover:bg-gray-100">
                Orders
              </Link>
              <Link onClick={() => setOpen(false)} href="/admin/products" className="block px-3 py-2 rounded hover:bg-gray-100">
                Products
              </Link>
              <Link onClick={() => setOpen(false)} href="/admin/banners" className="block px-3 py-2 rounded hover:bg-gray-100">
                Homepage Banners
              </Link>
              <Link onClick={() => setOpen(false)} href="/admin/offers" className="block px-3 py-2 rounded hover:bg-gray-100">
                Promotional Offers
              </Link>
              <Link onClick={() => setOpen(false)} href="/admin/admin-access" className="block px-3 py-2 rounded hover:bg-gray-100 font-medium">
                Admin Access
              </Link>

            </nav>

            <div className="border-t p-4 sticky bottom-0 bg-white">
              <button className="w-full px-4 py-2 text-sm font-medium text-red-600 border border-red-200 rounded hover:bg-red-50">
                Logout
              </button>
            </div>
          </aside>
        </>
      )}
    </div>
  )
}
