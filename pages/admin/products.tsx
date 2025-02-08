import type React from "react"
import AdminLayout from "../../components/admin/AdminLayout"

const ProductsPage: React.FC = () => {
  const products = [
    { id: 1, name: "Product A", price: 19.99, stock: 50 },
    { id: 2, name: "Product B", price: 29.99, stock: 30 },
    { id: 3, name: "Product C", price: 39.99, stock: 20 },
    { id: 4, name: "Product D", price: 49.99, stock: 15 },
    { id: 5, name: "Product E", price: 59.99, stock: 10 },
  ]

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">Product ID</th>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Price</th>
            <th className="p-2 text-left">Stock</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b">
              <td className="p-2">{product.id}</td>
              <td className="p-2">{product.name}</td>
              <td className="p-2">${product.price.toFixed(2)}</td>
              <td className="p-2">{product.stock}</td>
              <td className="p-2">
                <button className="text-blue-500 hover:underline mr-2">Edit</button>
                <button className="text-red-500 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  )
}

export default ProductsPage

