import type React from "react"
import AdminLayout from "../../components/admin/AdminLayout"

const AnalyticsPage: React.FC = () => {
  const monthlyRevenue = [
    { month: "Jan", revenue: 5000 },
    { month: "Feb", revenue: 6200 },
    { month: "Mar", revenue: 7800 },
    { month: "Apr", revenue: 8500 },
    { month: "May", revenue: 9100 },
  ]

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-4">Analytics</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Monthly Revenue</h2>
        <div className="bg-white p-4 rounded shadow">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 text-left">Month</th>
                <th className="p-2 text-left">Revenue</th>
              </tr>
            </thead>
            <tbody>
              {monthlyRevenue.map((item) => (
                <tr key={item.month} className="border-b">
                  <td className="p-2">{item.month}</td>
                  <td className="p-2">${item.revenue.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Top Selling Products</h2>
        <p className="text-gray-600">Chart or table with top selling products would go here.</p>
      </div>
    </AdminLayout>
  )
}

export default AnalyticsPage

