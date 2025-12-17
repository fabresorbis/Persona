import Navbar from "../../../components/common/Navbar"

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <aside className="w-64 bg-white border-r">
        <div className="p-6 text-xl font-bold">Persona Admin</div>

        <nav className="px-4 space-y-2 text-sm">
          <a href="/admin/dashboard" className="block px-3 py-2 rounded hover:bg-gray-100">Dashboard</a>
          <a href="/admin/users" className="block px-3 py-2 rounded hover:bg-gray-100">Users</a>
          <a href="/admin/products" className="block px-3 py-2 rounded hover:bg-gray-100">Products</a>
          <a href="/admin/orders" className="block px-3 py-2 rounded hover:bg-gray-100">Orders</a>
          <a href="/admin/coupons" className="block px-3 py-2 rounded hover:bg-gray-100">Coupons</a>
          <a href="/admin/reports" className="block px-3 py-2 rounded hover:bg-gray-100">Reports</a>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
      

        <main className="flex-1 px-3 py-8">
          {children}
        </main>
      </div>
    </div>
  )
}
