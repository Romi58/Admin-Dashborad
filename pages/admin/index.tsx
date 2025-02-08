import type React from "react"
import Link from "next/link"
import AdminLayout from "../../components/admin/AdminLayout"

const AdminDashboard: React.FC = () => {
  const recentOrders = [
    { id: 1, customer: "John Doe", total: 59.99, status: "Pending" },
    { id: 2, customer: "Jane Smith", total: 129.99, status: "Shipped" },
    { id: 3, customer: "Bob Johnson", total: 89.99, status: "Delivered" },
  ]

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-blue-100 p-4 rounded">
          <h2 className="font-bold">Total Orders</h2>
          <p className="text-2xl">152</p>
          <Link href="/admin/orders" className="text-blue-500 hover:underline">
            View All Orders
          </Link>
        </div>
        <div className="bg-green-100 p-4 rounded">
          <h2 className="font-bold">Total Revenue</h2>
          <p className="text-2xl">$15,234.56</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded">
          <h2 className="font-bold">Pending Orders</h2>
          <p className="text-2xl">7</p>
          <Link href="/admin/orders" className="text-blue-500 hover:underline">
            View Pending Orders
          </Link>
        </div>
      </div>
      <h2 className="text-xl font-bold mb-2">Recent Orders</h2>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">Order ID</th>
            <th className="p-2 text-left">Customer</th>
            <th className="p-2 text-left">Total</th>
            <th className="p-2 text-left">Status</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {recentOrders.map((order) => (
            <tr key={order.id} className="border-b">
              <td className="p-2">{order.id}</td>
              <td className="p-2">{order.customer}</td>
              <td className="p-2">${order.total.toFixed(2)}</td>
              <td className="p-2">{order.status}</td>
              <td className="p-2">
                <Link href={`/admin/orders/${order.id}`} className="text-blue-500 hover:underline">
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  )
}

export default AdminDashboard

