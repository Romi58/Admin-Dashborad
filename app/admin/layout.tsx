import Link from "next/link"
import type React from "react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <nav className="mt-5">
          <Link href="/admin" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            Dashboard
          </Link>
          <Link href="/admin/orders" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            Orders
          </Link>
          <Link href="/admin/products" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            Products
          </Link>
          <Link href="/admin/customers" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            Customers
          </Link>
          <Link href="/admin/analytics" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            Analytics
          </Link>
          <Link href="/admin/settings" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            Settings
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-10">{children}</main>
    </div>
  )
}

