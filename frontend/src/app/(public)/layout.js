import Navbar from "../../../components/common/Navbar"

export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-10">
        {children}
      </main>

      <footer className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <span>© {new Date().getFullYear()} Persona. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="/products" className="hover:text-black">Products</a>
            <a href="/cart" className="hover:text-black">Cart</a>
            <a href="/checkout" className="hover:text-black">Checkout</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
