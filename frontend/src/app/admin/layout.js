"use client"

import { useState } from "react"
import Link from "next/link"
import {
  LayoutDashboard,
  BarChart3,
  ShoppingBag,
  Package,
  Ticket,
  Image,
  Megaphone,
  Mail,
  Search,
  Users,
  Shield,
  Settings,
  LogOut,
  Menu,
  X
} from "lucide-react"

export default function AdminLayout({ children }) {
  const [open, setOpen] = useState(false)

  const NavItem = ({ href, icon: Icon, label, onClick }) => (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100"
    >
      <Icon size={18} className="text-gray-600" />
      <span>{label}</span>
    </Link>
  )

  return (
    <div className="h-screen bg-white overflow-hidden">

      {/* Mobile Top Bar */}
      <div className="lg:hidden border-b bg-white px-4 h-14 flex items-center justify-between">
        <span className="font-bold text-lg">Persona Admin</span>
        <button
          onClick={() => setOpen(true)}
          className="w-9 h-9 flex items-center justify-center"
        >
          <Menu />
        </button>
      </div>

      {/* Layout */}
      <div className="flex h-[calc(100vh-3.5rem)] lg:h-screen">

        {/* Desktop Sidebar */}
        <aside className="hidden lg:flex w-64 bg-white border-r h-full flex-col shrink-0">
          <div className="p-6 text-xl font-bold">Persona Admin</div>

          <nav className="px-4 text-sm flex-1 space-y-6 overflow-y-auto">

            <div>
              <p className="px-3 mb-2 text-xs font-semibold text-gray-400 uppercase">
                Overview
              </p>
              <NavItem href="/admin/dashboard" icon={LayoutDashboard} label="Dashboard" />
              <NavItem href="/admin/reports" icon={BarChart3} label="Analytics & Reports" />
            </div>

            <div>
              <p className="px-3 mb-2 text-xs font-semibold text-gray-400 uppercase">
                Commerce
              </p>
              <NavItem href="/admin/orders" icon={ShoppingBag} label="Orders" />
              <NavItem href="/admin/products" icon={Package} label="Products" />
              <NavItem href="/admin/coupons" icon={Ticket} label="Coupons & Discounts" />
            </div>

            <div>
              <p className="px-3 mb-2 text-xs font-semibold text-gray-400 uppercase">
                Content Management
              </p>
              <NavItem href="/admin/banners" icon={Image} label="Homepage Banners" />
              <NavItem href="/admin/offers" icon={Megaphone} label="Promotional Offers" />
            </div>

            <div>
              <p className="px-3 mb-2 text-xs font-semibold text-gray-400 uppercase">
                Marketing
              </p>
              <NavItem href="/admin/email-campaigns" icon={Mail} label="Email Campaigns" />
              <NavItem href="/admin/seo" icon={Search} label="SEO Settings" />
            </div>

            <div>
              <p className="px-3 mb-2 text-xs font-semibold text-gray-400 uppercase">
                Administration
              </p>
              <NavItem href="/admin/users" icon={Users} label="Customers" />
              <NavItem href="/admin/admin-access" icon={Shield} label="Admin Access" />
              <NavItem href="/admin/settings" icon={Settings} label="Platform Settings" />
            </div>

          </nav>

          <div className="border-t p-4">
            <button className="w-full flex items-center gap-3 px-4 py-2 text-sm font-medium text-red-600 border border-red-200 rounded hover:bg-red-50">
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </aside>

        {/* Main Content (ONLY scrollable area) */}
        <main className="flex-1 py-6 overflow-y-auto">
          {children}
        </main>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/40 z-40"
          />

          <aside className="fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-xl flex flex-col">
            <div className="p-6 flex items-center justify-between border-b">
              <span className="font-bold text-lg">Persona Admin</span>
              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>

            <nav className="px-4 py-4 text-sm overflow-y-auto flex-1 space-y-2">
              <NavItem href="/admin/dashboard" icon={LayoutDashboard} label="Dashboard" onClick={() => setOpen(false)} />
              <NavItem href="/admin/orders" icon={ShoppingBag} label="Orders" onClick={() => setOpen(false)} />
              <NavItem href="/admin/products" icon={Package} label="Products" onClick={() => setOpen(false)} />
              <NavItem href="/admin/banners" icon={Image} label="Homepage Banners" onClick={() => setOpen(false)} />
              <NavItem href="/admin/offers" icon={Megaphone} label="Promotional Offers" onClick={() => setOpen(false)} />
              <NavItem href="/admin/admin-access" icon={Shield} label="Admin Access" onClick={() => setOpen(false)} />
            </nav>

            <div className="border-t p-4">
              <button className="w-full flex items-center gap-3 px-4 py-2 text-sm font-medium text-red-600 border border-red-200 rounded hover:bg-red-50">
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </aside>
        </>
      )}
    </div>
  )
}
