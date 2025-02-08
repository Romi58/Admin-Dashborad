export default function Customers() {
  const customers = [
    { id: 1, name: "John Doe", email: "john@example.com", orders: 5 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", orders: 3 },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", orders: 7 },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Customers</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Customer ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Total Orders</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td className="py-2 px-4 border-b">{customer.id}</td>
              <td className="py-2 px-4 border-b">{customer.name}</td>
              <td className="py-2 px-4 border-b">{customer.email}</td>
              <td className="py-2 px-4 border-b">{customer.orders}</td>
              <td className="py-2 px-4 border-b">
                <button className="text-blue-500 hover:underline">View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

