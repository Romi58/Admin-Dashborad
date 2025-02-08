export default function Analytics() {
  const monthlyRevenue = [
    { month: "Jan", revenue: 5000 },
    { month: "Feb", revenue: 6000 },
    { month: "Mar", revenue: 7500 },
    { month: "Apr", revenue: 8000 },
    { month: "May", revenue: 9000 },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Analytics</h1>
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-2">Monthly Revenue</h2>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Month</th>
              <th className="py-2 px-4 border-b">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {monthlyRevenue.map((item) => (
              <tr key={item.month}>
                <td className="py-2 px-4 border-b">{item.month}</td>
                <td className="py-2 px-4 border-b">${item.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

