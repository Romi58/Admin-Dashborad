import Link from "next/link"

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="font-bold text-xl">Total Orders</h2>
          <p className="text-3xl font-bold">120</p>
          <Link href="/admin/orders" className="text-blue-500 hover:underline">
            View all orders
          </Link>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="font-bold text-xl">Total Revenue</h2>
          <p className="text-3xl font-bold">$15,000</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="font-bold text-xl">Total Customers</h2>
          <p className="text-3xl font-bold">500</p>
          <Link href="/admin/customers" className="text-blue-500 hover:underline">
            View all customers
          </Link>
        </div>
      </div>
    </div>
  )
}

