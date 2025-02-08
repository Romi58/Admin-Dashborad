import Link from "next/link"

export default function Orders() {
  const orders = [
    { id: 1, customer: "John Doe", total: 100, status: "Completed" },
    { id: 2, customer: "Jane Smith", total: 200, status: "Pending" },
    { id: 3, customer: "Bob Johnson", total: 150, status: "Shipped" },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Order ID</th>
            <th className="py-2 px-4 border-b">Customer</th>
            <th className="py-2 px-4 border-b">Total</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="py-2 px-4 border-b">{order.id}</td>
              <td className="py-2 px-4 border-b">{order.customer}</td>
              <td className="py-2 px-4 border-b">${order.total}</td>
              <td className="py-2 px-4 border-b">{order.status}</td>
              <td className="py-2 px-4 border-b">
                <Link href={`/admin/orders/${order.id}`} className="text-blue-500 hover:underline">
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

