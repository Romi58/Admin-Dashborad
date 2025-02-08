"use client"

import type React from "react"
import AdminLayout from "../../components/admin/AdminLayout"

const PaymentsPage: React.FC = () => {
  const payments = [
    { id: 1, orderId: 1, amount: 59.99, method: "Credit Card", status: "Completed", date: "2023-05-01" },
    { id: 2, orderId: 2, amount: 129.99, method: "PayPal", status: "Completed", date: "2023-04-30" },
    { id: 3, orderId: 3, amount: 89.99, method: "Credit Card", status: "Pending", date: "2023-04-29" },
    { id: 4, orderId: 4, amount: 149.99, method: "Bank Transfer", status: "Completed", date: "2023-04-28" },
    { id: 5, orderId: 5, amount: 79.99, method: "Credit Card", status: "Failed", date: "2023-04-27" },
  ]

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-4">Payments</h1>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">Payment ID</th>
            <th className="p-2 text-left">Order ID</th>
            <th className="p-2 text-left">Amount</th>
            <th className="p-2 text-left">Method</th>
            <th className="p-2 text-left">Status</th>
            <th className="p-2 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id} className="border-b">
              <td className="p-2">{payment.id}</td>
              <td className="p-2">{payment.orderId}</td>
              <td className="p-2">${payment.amount.toFixed(2)}</td>
              <td className="p-2">{payment.method}</td>
              <td className="p-2">{payment.status}</td>
              <td className="p-2">{payment.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  )
}

export default PaymentsPage

