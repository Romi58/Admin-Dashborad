import type React from "react"
import Link from "next/link"
import AdminLayout from "../../components/admin/AdminLayout"

const OrdersPage: React.FC = () => {
  const orders = [
    { id: 1, customer: "John Doe", total: 59.99, status: "Pending", date: "2023-05-01" },
    { id: 2, customer: "Jane Smith", total: 129.99, status: "Shipped", date: "2023-04-30" },
    { id: 3, customer: "Bob Johnson", total: 89.99, status: "Delivered", date: "2023-04-29" },
    { id: 4, customer: "Alice Brown", total: 149.99, status: "Pending", date: "2023-04-28" },
    { id: 5, customer: "Charlie Davis", total: 79.99, status: "Shipped", date: "2023-04-27" },
  ]

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">Order ID</th>
            <th className="p-2 text-left">Customer</th>
            <th className="p-2 text-left">Total</th>
            <th className="p-2 text-left">Status</th>
            <th className="p-2 text-left">Date</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b">
              <td className="p-2">{order.id}</td>
              <td className="p-2">{order.customer}</td>
              <td className="p-2">${order.total.toFixed(2)}</td>
              <td className="p-2">{order.status}</td>
              <td className="p-2">{order.date}</td>
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

export default OrdersPage

