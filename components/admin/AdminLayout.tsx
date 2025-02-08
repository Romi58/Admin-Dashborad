import type React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter()

  const navItems = [
    { href: "/admin", label: "Dashboard" },
    { href: "/admin/orders", label: "Orders" },
    { href: "/admin/products", label: "Products" },
    { href: "/admin/customers", label: "Customers" },
    { href: "/admin/analytics", label: "Analytics" },
    { href: "/admin/settings", label: "Settings" },
  ]

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <nav className="bg-gray-800 text-white p-4 md:w-64">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <ul>
          {navItems.map((item) => (
            <li key={item.href} className="mb-2">
              <Link href={item.href} className={router.pathname === item.href ? "text-blue-400" : ""}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main className="flex-grow p-4">{children}</main>
    </div>
  )
}

export default AdminLayout

