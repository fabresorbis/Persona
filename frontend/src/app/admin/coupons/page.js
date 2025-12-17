"use client"

import { useState } from "react"
import { Trash2, X } from "lucide-react"

export default function AdminCouponsPage() {
  const [coupons, setCoupons] = useState([
    { id: 1, name: "New Year Offer", code: "NEWYEAR20", discount: 20 },
    { id: 2, name: "Welcome", code: "WELCOME10", discount: 10 },
  ])

  const [showModal, setShowModal] = useState(false)
  const [deleteTarget, setDeleteTarget] = useState(null)

  const [name, setName] = useState("")
  const [code, setCode] = useState("")
  const [discount, setDiscount] = useState("")

  function resetForm() {
    setName("")
    setCode("")
    setDiscount("")
  }

  function createCoupon() {
    if (!name || !code || !discount) return

    setCoupons([
      ...coupons,
      {
        id: Date.now(),
        name,
        code,
        discount,
      },
    ])

    resetForm()
    setShowModal(false)
  }

  function confirmDelete(coupon) {
    setDeleteTarget(coupon)
  }

  function deleteCoupon() {
    setCoupons(coupons.filter(c => c.id !== deleteTarget.id))
    setDeleteTarget(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Manage Coupons</h1>
          <p className="text-gray-600">Create and manage discount coupons</p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Create Coupon
        </button>
      </div>

      <div className="bg-white border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Code</th>
              <th className="px-4 py-3">Discount</th>
              <th className="px-4 py-3 w-16"></th>
            </tr>
          </thead>
          <tbody>
            {coupons.map(coupon => (
              <tr key={coupon.id} className="border-t">
                <td className="px-4 py-3">{coupon.name}</td>
                <td className="px-4 py-3 font-mono">{coupon.code}</td>
                <td className="px-4 py-3">{coupon.discount}%</td>
                <td className="px-4 py-3 text-right">
                  <button
                    onClick={() => confirmDelete(coupon)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500"
            >
              <X size={18} />
            </button>

            <h2 className="text-lg font-semibold mb-4">Create New Coupon</h2>

            <div className="space-y-4">
              <input
                className="w-full border rounded px-3 py-2"
                placeholder="Coupon Name"
                value={name}
                onChange={e => setName(e.target.value)}
              />

              <input
                className="w-full border rounded px-3 py-2 uppercase"
                placeholder="Coupon Code"
                value={code}
                onChange={e => setCode(e.target.value.toUpperCase())}
              />

              <input
                type="number"
                className="w-full border rounded px-3 py-2"
                placeholder="Discount Percentage"
                value={discount}
                onChange={e => setDiscount(e.target.value)}
              />

              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded hover:bg-gray-100"
                >
                  Cancel
                </button>

                <button
                  onClick={createCoupon}
                  className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {deleteTarget && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm">
            <h2 className="text-lg font-semibold mb-2">Delete Coupon</h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete <strong>{deleteTarget.code}</strong>?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setDeleteTarget(null)}
                className="px-4 py-2 border rounded hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={deleteCoupon}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
