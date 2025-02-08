"use client"

import type React from "react"
import { useRouter } from "next/router"
import AdminLayout from "../../../components/admin/AdminLayout"

const OrderDetailPage: React.FC = () => {
  const router = useRouter()
  const { id } = router.query

  // Mock order data (in a real app, you'd fetch this from an API)
  const order = {
    id: id,
    customer: "John Doe",
    email: "john@example.com",
    total: 59.99,
    status: "Pending",
    date: "2023-05-01",
    items: [
      { id: 1, name: "Product A", quantity: 2, price: 19.99 },
      { id: 2, name: "Product B", quantity: 1, price: 20.01 },
    ],
    shippingAddress: "123 Main St, Anytown, AN 12345",
    paymentMethod: "Credit Card",
  }

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-4">Order Details</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-2">Order #{order.id}</h2>
        <p>
          <strong>Customer:</strong> {order.customer}
        </p>
        <p>
          <strong>Email:</strong> {order.email}
        </p>
        <p>
          <strong>Date:</strong> {order.date}
        </p>
        <p>
          <strong>Status:</strong> {order.status}
        </p>
        <p>
          <strong>Total:</strong> ${order.total.toFixed(2)}
        </p>
        <p>
          <strong>Shipping Address:</strong> {order.shippingAddress}
        </p>
        <p>
          <strong>Payment Method:</strong> {order.paymentMethod}
        </p>

        <h3 className="text-lg font-semibold mt-4 mb-2">Items</h3>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 text-left">Product</th>
              <th className="p-2 text-left">Quantity</th>
              <th className="p-2 text-left">Price</th>
              <th className="p-2 text-left">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-2">{item.name}</td>
                <td className="p-2">{item.quantity}</td>
                <td className="p-2">${item.price.toFixed(2)}</td>
                <td className="p-2">${(item.quantity * item.price).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  )
}

export default OrderDetailPage

