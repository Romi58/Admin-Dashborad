import type React from "react"
import AdminLayout from "../../components/admin/AdminLayout"

const CustomersPage: React.FC = () => {
  const customers = [
    { id: 1, name: "John Doe", email: "john@example.com", orders: 5 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", orders: 3 },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", orders: 2 },
    { id: 4, name: "Alice Brown", email: "alice@example.com", orders: 1 },
    { id: 5, name: "Charlie Davis", email: "charlie@example.com", orders: 4 },
  ]

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-4">Customers</h1>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">Customer ID</th>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Total Orders</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id} className="border-b">
              <td className="p-2">{customer.id}</td>
              <td className="p-2">{customer.name}</td>
              <td className="p-2">{customer.email}</td>
              <td className="p-2">{customer.orders}</td>
              <td className="p-2">
                <button className="text-blue-500 hover:underline mr-2">View Details</button>
                <button className="text-red-500 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  )
}

export default CustomersPage

